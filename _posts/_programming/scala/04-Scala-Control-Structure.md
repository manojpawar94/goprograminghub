---
title: "Scala Control Structure"
excerpt: "These are the levers and switches that let you steer the course of your code, making decisions, traversing data, and repeating actions. In this section, we'll break down Scala's control structures into bite-sized pieces, so you can confidently wield them to craft dynamic and responsive programs."
createdAt: "2021-05-03"
author: "manoj-pawar"
---

Welcome to the next frontier in Scala programming—control structures. These are the levers and switches that let you steer the course of your code, making decisions, traversing data, and repeating actions. In this section, we'll break down Scala's control structures into bite-sized pieces, so you can confidently wield them to craft dynamic and responsive programs.

### Navigating Choices with `if` and `else`:

In the programming universe, decisions are omnipresent. Scala's `if` and `else` structures give you the power to take different paths in your code.

#### 1. **Basic `if` Statement:**

- Executes code based on a condition.

```scala
val age = 20

if (age >= 18) {
    println("You are an adult.")
} else {
    println("You are a minor.")
}
```

#### 2. **`if`-`else if`-`else` Chain:**

- Allows for multiple branches in decision-making.

```scala
val score = 85

if (score >= 90) {
    println("Excellent!")
} else if (score >= 70) {
    println("Good job!")
} else {
    println("Keep improving.")
}
```

### Looping Through Scenarios with `for`:

The `for` loop in Scala is a versatile tool for traversing ranges and collections.

#### 1. **Iterating Through a Range:**

- Executes code for each value in a specified range.

```scala
for (i <- 1 to 5) {
    println(s"Value of i: $i")
}
```

#### 2. **Iterating Through a Collection:**

- Simplifies iteration over elements in a collection.

```scala
val fruits = List("Apple", "Banana", "Orange")

for (fruit <- fruits) {
    println(s"Current fruit: $fruit")
}
```

### Repetition Mastery with `while`:

The `while` loop is your trusty companion when you need to repeat a task as long as a certain condition holds true.

```scala
var count = 0

while (count < 5) {
    println(s"Count is: $count")
    count += 1
}
```

### Harmonizing Control Structures:

Scala truly shines when you seamlessly combine control structures to tackle diverse programming challenges.

```scala
val numbers = List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

for (num <- numbers) {
    if (num % 2 == 0) {
        println(s"$num is even.")
    } else {
        println(s"$num is odd.")
    }
}
```

### In a Nutshell:

Control structures are your programming compass, guiding your code's journey. By mastering `if`, `else`, `for`, and `while`, you have the tools to navigate and orchestrate the flow of your Scala programs. In the next section, we'll dive into the art of functions, where the real magic of modularity and abstraction unfolds. Prepare to elevate your Scala programming skills!
