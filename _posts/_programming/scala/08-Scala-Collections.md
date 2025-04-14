---
title: "Scala Collections"
excerpt: "Learn about Scala's powerful collection types including Lists, Arrays, Sets, and Maps."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Scala Collections

## Lists
Lists in Scala are immutable sequences of elements of the same type.

```scala
// Creating lists
val numbers = List(1, 2, 3, 4, 5)
val fruits = "apple" :: "banana" :: "orange" :: Nil

// Basic operations
println(numbers.head)  // First element: 1
println(numbers.tail)  // Rest of the list: List(2, 3, 4, 5)
println(numbers.isEmpty)  // false

// List manipulation
val moreNumbers = 0 :: numbers  // Prepending: List(0, 1, 2, 3, 4, 5)
val combined = numbers ::: fruits  // Concatenating lists
```

## Arrays
Arrays in Scala are mutable sequences with a fixed size.

```scala
// Creating arrays
val numbers = Array(1, 2, 3, 4, 5)
val fruits = new Array[String](3)  // Array of size 3

// Modifying arrays
fruits(0) = "apple"  // Setting elements
fruits(1) = "banana"
fruits(2) = "orange"

// Array operations
for (fruit <- fruits) println(fruit)
numbers.foreach(println)

// Transforming arrays
val doubled = numbers.map(_ * 2)  // Array(2, 4, 6, 8, 10)
val filtered = numbers.filter(_ > 3)  // Array(4, 5)
```

## Sets
Sets are collections of unique elements.

```scala
// Creating sets
val numbers = Set(1, 2, 2, 3, 3, 4)  // Set(1, 2, 3, 4)
val moreNumbers = Set(4, 5, 6)

// Set operations
println(numbers.contains(2))  // true
println(numbers.size)  // 4

// Set arithmetic
val union = numbers ++ moreNumbers  // Set(1, 2, 3, 4, 5, 6)
val intersection = numbers & moreNumbers  // Set(4)
val difference = numbers -- moreNumbers  // Set(1, 2, 3)
```

## Maps
Maps are collections of key-value pairs.

```scala
// Creating maps
val scores = Map("Alice" -> 95, "Bob" -> 88, "Charlie" -> 92)
val emptyMap = Map.empty[String, Int]

// Accessing values
println(scores("Alice"))  // 95
println(scores.get("David"))  // None
println(scores.getOrElse("David", 0))  // 0

// Adding and removing entries
val newScores = scores + ("David" -> 85)  // Adding
val updatedScores = newScores - "Bob"  // Removing

// Iterating over maps
for ((name, score) <- scores) {
  println(s"$name scored $score")
}
```

## Collection Operations
Common operations that work across different collection types.

```scala
// Mapping and filtering
val numbers = List(1, 2, 3, 4, 5)
val doubled = numbers.map(_ * 2)  // List(2, 4, 6, 8, 10)
val evens = numbers.filter(_ % 2 == 0)  // List(2, 4)

// Folding and reducing
val sum = numbers.fold(0)(_ + _)  // 15
val product = numbers.reduce(_ * _)  // 120

// Finding elements
val hasThree = numbers.exists(_ == 3)  // true
val allPositive = numbers.forall(_ > 0)  // true

// Sorting and ordering
val unsorted = List(3, 1, 4, 1, 5, 9, 2, 6)
val sorted = unsorted.sorted  // List(1, 1, 2, 3, 4, 5, 6, 9)
val descending = unsorted.sortWith(_ > _)  // List(9, 6, 5, 4, 3, 2, 1, 1)
```

## Immutable vs Mutable Collections
Scala provides both immutable and mutable versions of collections.

```scala
import scala.collection.mutable

// Immutable collections (default)
val immutableSet = Set(1, 2, 3)
val newSet = immutableSet + 4  // Creates a new set

// Mutable collections
val mutableSet = mutable.Set(1, 2, 3)
mutableSet += 4  // Modifies the existing set

// Converting between mutable and immutable
val immutableVersion = mutableSet.toSet
val mutableVersion = immutableSet.to(mutable.Set)
```