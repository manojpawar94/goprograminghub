---
title: "Scala Pattern Matching"
excerpt: "Learn about Scala's powerful pattern matching features including basic patterns, case classes, and extractors."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Pattern Matching in Scala

## Basic Pattern Matching
Pattern matching is a powerful feature in Scala for matching values against patterns.

```scala
// Simple pattern matching
def describe(x: Any) = x match {
  case 0 => "zero"
  case i: Int => s"integer $i"
  case s: String => s"string $s"
  case _ => "unknown"
}

println(describe(0))      // zero
println(describe(42))     // integer 42
println(describe("hello")) // string hello
```

## Pattern Matching with Case Classes
Case classes work particularly well with pattern matching.

```scala
// Define case classes
case class Person(name: String, age: Int)
case class Book(title: String, author: String, year: Int)

// Pattern matching with case classes
def processItem(item: Any) = item match {
  case Person(name, age) if age < 18 =>
    s"$name is a minor"
  case Person(name, age) =>
    s"$name is an adult"
  case Book(title, author, _) =>
    s"$title by $author"
  case _ => "Unknown item"
}

val john = Person("John", 25)
val alice = Person("Alice", 15)
val book = Book("1984", "George Orwell", 1949)

println(processItem(john))  // John is an adult
println(processItem(alice)) // Alice is a minor
println(processItem(book))  // 1984 by George Orwell
```

## Pattern Guards
Pattern guards allow for additional conditions in pattern matching.

```scala
def classifyNumber(x: Int) = x match {
  case n if n < 0 => "negative"
  case n if n == 0 => "zero"
  case n if n % 2 == 0 => "positive even"
  case n => "positive odd"
}

println(classifyNumber(-5))  // negative
println(classifyNumber(0))   // zero
println(classifyNumber(4))   // positive even
println(classifyNumber(3))   // positive odd
```

## Matching Collections
Pattern matching works well with collections.

```scala
// List patterns
def describeList(list: List[Any]) = list match {
  case Nil => "empty list"
  case head :: Nil => s"single element: $head"
  case head :: tail => s"head: $head, tail: $tail"
}

println(describeList(List()))        // empty list
println(describeList(List(1)))       // single element: 1
println(describeList(List(1, 2, 3))) // head: 1, tail: List(2, 3)

// Tuple patterns
def describeTuple(tuple: Any) = tuple match {
  case (x, y) => s"Pair: $x, $y"
  case (x, y, z) => s"Triple: $x, $y, $z"
  case _ => "Not a tuple of size 2 or 3"
}

println(describeTuple((1, "hello")))      // Pair: 1, hello
println(describeTuple((1, 2, true)))      // Triple: 1, 2, true
```

## Extractors
Extractors allow pattern matching on arbitrary types.

```scala
object Email {
  // The extraction method
  def unapply(str: String): Option[(String, String)] = {
    val parts = str.split("@")
    if (parts.length == 2) Some(parts(0), parts(1)) else None
  }
}

// Using the extractor
def processEmail(email: String) = email match {
  case Email(user, domain) => s"User: $user, Domain: $domain"
  case _ => "Invalid email format"
}

println(processEmail("user@example.com"))  // User: user, Domain: example.com
println(processEmail("invalid.email"))     // Invalid email format
```

## Partial Functions
Pattern matching can be used to create partial functions.

```scala
// Define a partial function
val sqrt: PartialFunction[Double, Double] = {
  case x if x >= 0 => Math.sqrt(x)
}

// Using collect with pattern matching
val numbers = List(4, -5, 9, -1, 0)
val sqrtValues = numbers.collect {
  case x if x >= 0 => Math.sqrt(x)
}

println(sqrtValues)  // List(2.0, 3.0, 0.0)

// Chaining partial functions
val absAndSqrt = Math.abs _ andThen sqrt
println(absAndSqrt(-4))  // 2.0
```

## Type Pattern Matching
Pattern matching can be used for type checking and casting.

```scala
def processValue(x: Any): String = x match {
  case i: Int => s"Integer: $i"
  case d: Double => f"Double: $d%.2f"
  case s: String => s"String: $s"
  case l: List[_] => s"List of size ${l.size}"
  case _ => "Unknown type"
}

println(processValue(42))        // Integer: 42
println(processValue(3.14159))   // Double: 3.14
println(processValue("hello"))   // String: hello
println(processValue(List(1,2))) // List of size 2
```