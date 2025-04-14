---
title: "Object-Oriented Programming"
excerpt: "Exploring object-oriented programming concepts in Scala, including classes, objects, inheritance, and traits."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Classes and Objects

In Scala, classes are blueprints for creating objects.

```scala
class Dog(val name: String, var breed: String) {
  def bark(): Unit = {
    println("Woof!")
  }
}

val myDog = new Dog("Buddy", "Golden Retriever")
myDog.bark() // Woof!
```

## Constructors and Parameters

Classes can have constructors with parameters.

```scala
class Person(val name: String, val age: Int) {
  println(s"Creating a new person named $name who is $age years old.")
}

val person = new Person("Alice", 30)
```

## Methods and Fields

Classes can have methods and fields.

```scala
class Circle(val radius: Double) {
  val pi = 3.14159
  def area(): Double = {
    pi * radius * radius
  }
}

val circle = new Circle(5.0)
println(circle.area())
```

## Inheritance and Traits

Scala supports inheritance and traits.

```scala
class Animal(val name: String) {
  def makeSound(): Unit = {
    println("Generic animal sound")
  }
}

trait Swimmable {
  def swim(): Unit = {
    println("Swimming")
  }
}

class Fish(name: String) extends Animal(name) with Swimmable {
  override def makeSound(): Unit = {
    println("Blub")
  }
}

val nemo = new Fish("Nemo")
nemo.makeSound() // Blub
nemo.swim() // Swimming
```

## Case Classes

Case classes are a special type of class that are immutable and comparable by value.

```scala
case class Point(x: Int, y: Int)

val p1 = Point(1, 2)
val p2 = Point(1, 2)
println(p1 == p2) // true
```

## Companion Objects

Companion objects have the same name as a class and can access its private members.

```scala
class Logger {
  private val logFile = "app.log"
  def log(message: String): Unit = {
    Logger.writeLog(logFile, message)
  }
}

object Logger {
  private def writeLog(file: String, message: String): Unit = {
    println(s"Writing '$message' to $file")
  }
}

val logger = new Logger()
logger.log("Application started")
```

## Singleton Objects

Singleton objects are objects that have only one instance.

```scala
object Configuration {
  val