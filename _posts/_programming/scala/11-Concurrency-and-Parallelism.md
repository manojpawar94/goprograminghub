---
title: "Concurrency and Parallelism"
excerpt: "Exploring concurrency and parallelism in Scala, including Futures, Promises, Async programming, Parallel collections, and Akka actors basics."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Futures and Promises

Futures represent asynchronous computations that may complete at some point in the future. They are read-only views of a value that may not yet exist. Promises are writable, single-assignment containers that complete a Future.

Key characteristics:

- Non-blocking by default
- Composable with map, flatMap, and other combinators
- Support for error handling through onComplete

### Basic Example

```scala
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Success, Failure}

// Creating a Future
val future = Future {
  // Simulate long computation
  Thread.sleep(1000)
  1 + 1
}

// Handling the result
future.onComplete {
  case Success(result) => println(s"Computation result: $result")
  case Failure(e) => println(s"Computation failed: ${e.getMessage}")
}

// Alternative: Using foreach for success cases
future.foreach(result => println(s"Result available: $result"))
```

### Composing Futures

```scala
// Chaining Futures
val combined = future.flatMap { firstResult =>
  Future {
    Thread.sleep(500)
    firstResult * 2
  }
}

// Parallel execution
val future1 = Future { Thread.sleep(300); 10 }
val future2 = Future { Thread.sleep(400); 20 }

val sumFuture = for {
  a <- future1
  b <- future2
} yield a + b

sumFuture.foreach(println)
```

## Async Programming

Async/await syntax can be used for writing asynchronous code in a more readable way (requires Scala 2.12+).

```scala
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.async.Async.{async, await}

async {
  val result1 = await(Future { Thread.sleep(500); 1 + 1 })
  val result2 = await(Future { Thread.sleep(500); 2 + 2 })
  println(s"Result: ${result1 + result2}")
}
```

## Parallel Collections

Parallel collections allow you to perform operations on collections in parallel.

```scala
val numbers = (1 to 1000).toList.par
val squaredNumbers = numbers.map(x => x * x)
println(squaredNumbers.sum)
```

## Akka Actors Basics

Akka is a toolkit for building concurrent and distributed applications.

```scala
import akka.actor.{Actor, ActorSystem, Props}

class MyActor extends Actor {
  def receive: Receive = {
    case message: String =>
      println(s"Received message: $message")
      sender() ! s"Hello, $message!"
  }
}

val system = ActorSystem("MySystem")
val myActor = system.actorOf(Props[MyActor], "myActor")

import akka.pattern.ask
import akka.util.Timeout
import scala.concurrent.duration._
import scala.concurrent.ExecutionContext.Implicits.global

implicit val timeout = Timeout(5 seconds)
val future = (myActor ? "World").mapTo[String]
future.onComplete {
  case Success(result) => println(s"Result: $result")
  case Failure(e) => println(s"Error: ${e.getMessage}")
}
```
