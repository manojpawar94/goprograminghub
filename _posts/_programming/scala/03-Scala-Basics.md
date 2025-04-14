---
title: "Scala Basics"
excerpt: "An introduction to the fundamental concepts of Scala programming, including values, variables, data types, and basic operations."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Values, Variables, and Types

In Scala, you can declare values and variables. Values are immutable (cannot be changed), while variables are mutable (can be changed).

```scala
// Declaring a value
val x: Int = 10

// Declaring a variable
var y: String = "Hello"

// Type inference
val z = 3.14 // Scala infers that z is a Double
```

## Basic Data Types

Scala has several built-in data types, including:

- `Int`: For integers (e.g., 1, -5, 1000)
- `Double`: For floating-point numbers (e.g., 3.14, -2.5)
- `Boolean`: For true/false values
- `String`: For text

## Basic Operations and Expressions

Scala supports standard arithmetic and logical operations.

```scala
val sum = 5 + 3
val product = 4 * 2.5
val isEqual = (5 == 5)
```

## String Interpolation

String interpolation allows you to embed variables directly into strings.

```scala
val name = "Alice"
val greeting = s"Hello, $name!"
```

## Console Input/Output

You can print to the console using `println` and read input using `scala.io.StdIn.readLine`.

```scala
println("Enter your name:")
val input = scala.io.