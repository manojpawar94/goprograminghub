---
title: "Control Structures"
excerpt: "Exploring control structures in Scala, including conditionals, pattern matching, and loops."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Conditionals (if/else)

Scala's `if/else` statements allow you to execute different code blocks based on a condition.

```scala
val x = 10
if (x > 0) {
  println("x is positive")
} else {
  println("x is non-positive")
}
```

## Pattern Matching

Pattern matching is a powerful feature in Scala for deconstructing data structures and matching values.

```scala
val day = "Monday"
val dayType = day match {
  case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" => "Weekday"
  case "Saturday" | "Sunday" => "Weekend"
  case _ => "Invalid day"
}
println(dayType)
```

## Loops and Iteration

Scala provides several ways to iterate, including `for` comprehensions and `while` loops.

### For Comprehensions

For comprehensions are a concise way to iterate over collections.

```scala
val numbers = List(1, 2, 3, 4, 5)
for (n <- numbers) {
  println(n)
}
```

### While Loops

While loops allow you to execute a block of code as long as a condition is true.

```scala
var i = 0
while (i < 5) {
  println(i)
  i += 1
}
```

## For Comprehensions (Advanced)

For comprehensions can also include filters and multiple generators.

```scala
val numbers = List(1, 2, 3, 4, 5, 6)
val evenNumbers = for {
  n <- numbers
  if n % 2 == 0