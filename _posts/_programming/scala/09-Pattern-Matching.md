---
title: "Pattern Matching"
excerpt: "Exploring pattern matching in Scala, including basic patterns, case classes, pattern guards, extractors, and partial functions."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Basic Patterns

Pattern matching is a powerful feature in Scala for deconstructing data structures and matching values.

```scala
val x = 10
val result = x match {
  case 0 => "Zero"
  case 10 => "Ten"
  case _ => "Other"
}
println(result)
```

## Case Classes in Pattern Matching

Case classes are often used in pattern matching.

```scala
case class Point(x: Int, y: Int)

val p = Point(1, 2)
val message = p match {
  case Point(0, 0) => "Origin"
  case Point(1, 2) => "Specific point"
  case Point(x, y) => s"Point at ($x, $y)"
}
println(message)
```

## Pattern Guards

Pattern guards are conditions that can be added to a pattern to make it more specific.

```scala
val x = 10
val result = x match {
  case n if n > 0 => "Positive"
  case n if n < 0 => "Negative"
  case _ => "Zero"
}
println(result)
```

## Extractors

Extractors are objects that have an `unapply` method, which is used to deconstruct values.

```scala
object Email {
  def unapply(str: String): Option[(String, String)] = {
    val parts = str.split("@")
    if (parts.length == 2) {
      Some((parts(0), parts(1)))
    } else {
      None
    }
  }
}

val email = "alice@example.com"
val message = email match {
  case Email(user, domain) => s"User: $user, Domain: $domain"
  case _ => "Invalid email"
}
println(message)
```

## Partial Functions

Partial functions are functions that are defined only for a subset of possible input values.

```scala
val divide: PartialFunction[Int, Int] = {
  case x if x != 0 => 10 / x
}

if (divide.isDefinedAt(5)) {
  println(divide(5))
}
```