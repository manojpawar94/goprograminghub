---
title: "Collections"
excerpt: "Working with collections in Scala, including lists, arrays, sets, maps, and common collection operations."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Lists

Lists are ordered, immutable collections of elements.

```scala
val numbers = List(1, 2, 3, 4, 5)
val names = List("Alice", "Bob", "Charlie")
```

## Arrays

Arrays are ordered, mutable collections of elements.

```scala
val numbers = Array(1, 2, 3, 4, 5)
numbers(0) = 10 // Modifying an element
```

## Sets

Sets are unordered collections of unique elements.

```scala
val uniqueNumbers = Set(1, 2, 3, 4, 5, 1, 2) // Set(5, 1, 2, 3, 4)
```

## Maps

Maps are collections of key-value pairs.

```scala
val ages = Map("Alice" -> 30, "Bob" -> 25, "Charlie" -> 35)
```

## Collection Operations

Scala provides a rich set of operations for working with collections.

### Map

The `map` operation applies a function to each element in a collection and returns a new collection with the results.

```scala
val numbers = List(1, 2, 3)
val squaredNumbers = numbers.map(x => x * x) // List(1, 4, 9)
```

### Filter

The `filter` operation selects elements from a collection that satisfy a given condition.

```scala
val numbers = List(1, 2, 3, 4, 5)
val evenNumbers = numbers.filter(x => x % 2 == 0) // List(2, 4)
```

### Fold

The `fold` operation combines the elements of a collection into a single value.

```scala
val numbers = List(1, 2, 3, 4, 5)
val sum = numbers.fold(0)((x, y) => x + y) // 15
```

### Reduce

The `reduce` operation is similar to `fold`, but it does not require an initial value.

```scala
val numbers = List(1, 2, 3, 4, 5)
val product = numbers.reduce((x, y) => x * y) // 120
```

## Immutable vs. Mutable Collections

Scala distinguishes between immutable and mutable collections. Immutable collections cannot be modified after they are created, while mutable collections can.

## Working with Sequences

Sequences are ordered