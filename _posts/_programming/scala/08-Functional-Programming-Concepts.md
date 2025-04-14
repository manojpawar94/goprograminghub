---
title: "Functional Programming Concepts"
excerpt: "Exploring functional programming concepts in Scala, including immutability, pure functions, recursion, and the Option, Either, and Try types."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Immutability

Immutability is a key concept in functional programming. Immutable data cannot be changed after it is created.

```scala
val numbers = List(1, 2, 3)
// numbers(0) = 10 // This will cause an error
val newNumbers = numbers :+ 4 // Creates a new list with 4 appended: List(1, 2, 3, 4)
```

## Pure Functions

Pure functions are functions that have no side effects and always return the same output for the same input.

```scala
def add(x: Int, y: Int): Int = {
  x + y // This is a pure function
}
```

## First-Class Functions

In Scala, functions are first-class citizens, meaning they can be passed as arguments to other functions and returned as values.

## Recursion and Tail Recursion

Recursion is a technique for defining a function in terms of itself. Tail recursion is a special form of recursion that can be optimized by the compiler.

```scala
def factorial(n: Int): Int = {
  if (n == 0) {
    1
  } else {
    n * factorial(n - 1)
  }
}

// Tail-recursive version
import scala.annotation.tailrec

def factorialTailRecursive(n: Int): Int = {
  @tailrec
  def loop(acc: Int, n: Int): Int = {
    if (n == 0) {
      acc
    } else {
      loop(acc * n, n - 1)
    }
  }
  loop(1, n)
}
```

## Option, Either, and Try Types

Scala provides the `Option`, `Either`, and `Try` types for handling errors and missing values.

### Option

The `Option` type represents an optional value. It can be either `Some(value)` or `None`.

```scala
val name: Option[String] = Some("Alice")
val age: Option[Int] = None

val greeting = name match {
  case Some(n) => s"Hello, $n!"
  case None => "Hello, stranger!"
}
```

### Either

The `Either` type represents a value that can be either a `Left(error)` or a `Right(value)`.

```scala
def divide(x: Int, y: Int): Either[String, Int] = {
  if (y == 0) {
    Left("Cannot divide by zero")
  } else {
    Right(x / y)
  }
}

divide(10, 2) match {
  case Right(result) => println(s"Result: $result")
  case Left(error) => println(s"Error: $error")
}
```

### Try

The `Try` type represents the result of a computation that may throw an exception. It can be either `Success(value)` or `Failure(exception)`.

```scala
import scala.util.{Try, Success, Failure}

def parseInt(s: String): Try[Int] = {
  Try(s.toInt)
}

parseInt("123") match {
  case Success(n) => println(s"Parsed: $n")
  case Failure(e) => println(s"Failed: ${e.getMessage}")
}
```

## Working with Maybe and Either for error handling

`Option` (Maybe) and `Either` are commonly used for error handling in functional programming.

### Using Option

```scala
def getAge(name: String): Option[Int] = {
  if (name == "Alice") {
    Some(30)
  } else {
    None
  }
}

getAge("Alice").foreach(age => println(s"Alice is $age years old"))

getAge("Bob").foreach(age => println(s"Bob is $age years old")) // This won't print anything
```

### Using Either

```scala
def validateAge(age: Int): Either[String, Int] = {
  if (age >= 0 && age <= 120) {
    Right(age)
  } else {
    Left("Invalid age")
  }
}

validateAge(30) match {
  case Right(age) => println(s"Age is valid: $age")
  case Left(error) => println(s"Error: $error")
}

validateAge(-5) match {
  case Right