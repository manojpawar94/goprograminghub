---
title: "Scala Concurrency and Parallelism"
excerpt: "Learn about Scala's concurrency features including Futures, Promises, and Akka actors for building concurrent applications."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Scala Concurrency and Parallelism

## Futures
Futures represent values that may not yet exist but will be computed at some point.

```scala
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Success, Failure}

// Creating a Future
def calculateFactorial(n: Int): Future[BigInt] = Future {
  if (n < 0) throw new IllegalArgumentException("n must be non-negative")
  (1 to n).foldLeft(BigInt(1))(_ * _)
}

// Working with Futures
val future = calculateFactorial(5)

// Callback style
future.onComplete {
  case Success(result) => println(s"Factorial is $result")
  case Failure(e) => println(s"Calculation failed: ${e.getMessage}")
}

// Map and flatMap
val doubled = future.map(_ * 2)
val stringResult = future.map(_.toString)
```

## Composing Futures
Futures can be composed together for complex operations.

```scala
// Sequential composition
def getUserData(id: Int): Future[String] = Future { s"User $id data" }
def processUserData(data: String): Future[String] = Future { s"Processed $data" }

val result = getUserData(123).flatMap(processUserData)

// Parallel composition
val future1 = Future { Thread.sleep(100); 1 }
val future2 = Future { Thread.sleep(200); 2 }

// Combine futures
val combined = for {
  r1 <- future1
  r2 <- future2
} yield r1 + r2

// Wait for all futures
import scala.concurrent.Await
import scala.concurrent.duration._

val results = Await.result(combined, 5.seconds)
println(s"Combined result: $results")
```

## Promises
Promises are writable, single-assignment containers that can be completed with a value.

```scala
import scala.concurrent.Promise

// Creating a Promise
val promise = Promise[String]()
val future = promise.future

// Complete the Promise
future.onComplete {
  case Success(value) => println(s"Got the value: $value")
  case Failure(e) => println(s"Failed: ${e.getMessage}")
}

// Complete with success
promise.success("Hello, World!")

// Or complete with failure
// promise.failure(new Exception("Something went wrong"))
```

## Parallel Collections
Scala provides parallel collections for easy parallel processing.

```scala
// Convert to parallel collection
val numbers = (1 to 1000000).toArray
val parNumbers = numbers.par

// Parallel operations
val squares = parNumbers.map(x => x * x)
val sum = parNumbers.sum
val filtered = parNumbers.filter(_ % 2 == 0)

// Parallel fold operation
val result = parNumbers.fold(0)((x, y) => x + y)

// Custom parallel operation
def heavyComputation(n: Int): Int = {
  Thread.sleep(10)  // Simulate heavy computation
  n * n
}

val results = parNumbers.map(heavyComputation)
```

## Akka Actors
Akka provides an actor-based concurrency model.

```scala
import akka.actor.{Actor, ActorSystem, Props}

// Define messages
case class Message(content: String)
case object Ping
case object Pong

// Define an actor
class SimpleActor extends Actor {
  def receive = {
    case Message(content) =>
      println(s"Received message: $content")
    case Ping =>
      println("Received Ping")
      sender() ! Pong
    case _ => println("Received unknown message")
  }
}

// Create actor system and actor
val system = ActorSystem("MySystem")
val actor = system.actorOf(Props[SimpleActor], "simpleActor")

// Send messages to actor
actor ! Message("Hello, Actor!")
actor ! Ping

// Shutdown actor system
system.terminate()
```

## Async/Await Pattern
Scala provides async/await syntax for working with Futures.

```scala
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.async.Async.{async, await}

// Async computation
def asyncComputation(): Future[Int] = async {
  val f1 = Future { Thread.sleep(100); 1 }
  val f2 = Future { Thread.sleep(200); 2 }
  
  val r1 = await(f1)
  val r2 = await(f2)
  
  r1 + r2
}

// Error handling in async/await
def asyncWithErrorHandling(): Future[Int] = async {
  try {
    val result = await(asyncComputation())
    result * 2
  } catch {
    case e: Exception => -1
  }
}
```

## Best Practices

```scala
// 1. Always provide an ExecutionContext
import scala.concurrent.ExecutionContext

class MyService(implicit ec: ExecutionContext) {
  def asyncOperation(): Future[String] = Future {
    // Computation
    "result"
  }
}

// 2. Handle timeouts
import scala.concurrent.duration._

val futureWithTimeout = Future {
  // Long running operation
}.map(Some(_))
  .recover { case _ => None }
  .timeout(5.seconds)
  .recover { case _ => None }

// 3. Use appropriate thread pools
import java.util.concurrent.Executors

val customExecutionContext = ExecutionContext.fromExecutor(
  Executors.newFixedThreadPool(10)
)

// 4. Clean up resources
def withResource[T](resource: => T)(f: T => Future[Unit]): Future[Unit] = {
  val future = f(resource)
  future.onComplete(_ => cleanup(resource))
  future
}
```