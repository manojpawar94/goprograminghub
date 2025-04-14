---
title: "Concurrency and Parallelism"
excerpt: "Exploring concurrency and parallelism in Scala, including Futures, Promises, Async programming, Parallel collections, and Akka actors basics."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Futures and Promises

Futures and Promises are used for asynchronous programming in Scala.

```scala
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Success, Failure}

val future = Future {
  // Long-running computation
  Thread.sleep(1000)
  1 + 1
}

future.onComplete {
  case Success(result) => println(s"Result: $result")
  case Failure(e) => println(s"Error: ${e.getMessage}")
}
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
val