---
title: "Functions"
excerpt: "Defining and using functions in Scala, including parameters, return types, higher-order functions, and anonymous functions."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Defining and Calling Functions

In Scala, you define functions using the `def` keyword.

```scala
def add(x: Int, y: Int): Int = {
  x + y
}

val sum = add(5, 3) // Calling the function
println(sum)
```

## Function Parameters and Return Types

Scala functions can have parameters and return types. You must specify the type of each parameter.

```scala
def multiply(x: Double, y: Double): Double = {
  x * y
}
```

## Default and Named Parameters

Scala supports default and named parameters.

```scala
def greet(name: String = "World", greeting: String = "Hello") = {
  println(s"$greeting, $name!")
}

greet() // Hello, World!
greet(name = "Alice") // Hello, Alice!
greet(greeting = "Hi", name = "Bob") // Hi, Bob!
```

## Higher-Order Functions

Higher-order functions are functions that take other functions as parameters or return functions.

```scala
def operate(x: Int, y: Int, f: (Int, Int) => Int): Int = {
  f(x, y)
}

def add(x: Int, y: Int): Int = x + y

val result = operate(5, 3, add) // result is 8
```

## Anonymous Functions (Lambdas)

Anonymous functions are functions without a name.

```scala
val multiply = (x: Int, y: Int) => x * y
val product = multiply(4, 2) // product is 8
```

## Partially Applied Functions and Currying

Partially applied functions and currying are techniques for creating new functions from existing ones.

```scala
def add(x: Int, y: Int, z: Int) = x + y + z
val add5 = add(5, _: Int, _: Int) // Partially applied function
val sum =