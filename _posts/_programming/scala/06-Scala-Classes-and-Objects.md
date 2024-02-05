---
title: "Scala Classes and Objects"
excerpt: "In this tutorial, we'll delve into the foundation of Scala's OOP—Classes and Objects. These constructs form the building blocks for structuring and organizing code in a way that aligns with key OOP principles. Additionally, we'll explore the distinctive feature of Scala—Case Classes, providing concise and powerful tools for immutable data structures."
createdAt: "2021-05-03"
author: "manoj-pawar"
---

Welcome to the heart of Scala's Object-Oriented Programming (OOP) paradigm. In this tutorial, we'll delve into the foundation of Scala's OOP—Classes and Objects. These constructs form the building blocks for structuring and organizing code in a way that aligns with key OOP principles. Additionally, we'll explore the distinctive feature of Scala—Case Classes, providing concise and powerful tools for immutable data structures.

### Classes in Scala:

#### 1. **Class Definition:**

- A class is a blueprint for creating objects. It encapsulates data and behavior.

```scala
class Person(name: String, age: Int) {
    def displayInfo(): Unit = {
        println(s"Name: $name, Age: $age")
    }
}
```

- `Person` is a class with parameters `name` and `age`.
- `displayInfo` is a method within the class.

#### 2. **Creating Objects:**

- Objects are instances of a class, and they encapsulate the specific data for each instance.

```scala
val john = new Person("John", 30)
val alice = new Person("Alice", 25)

john.displayInfo()  // Output: Name: John, Age: 30
alice.displayInfo()  // Output: Name: Alice, Age: 25
```

### Case Classes in Scala:

Scala introduces a powerful and concise construct called Case Classes, tailored for immutable data structures.

#### 1. **Case Class Definition:**

- Declared with the `case` keyword.

```scala
case class Point(x: Int, y: Int)
```

- `Point` is a case class with parameters `x` and `y`.
- Case classes automatically generate methods for equality, toString, and immutable copy.

#### 2. **Creating Case Class Instances:**

- Case class instances can be created without the `new` keyword.

```scala
val origin = Point(0, 0)
val point = Point(1, 2)

println(origin)  // Output: Point(0,0)
```

#### 3. **Pattern Matching with Case Classes:**

- Case classes shine in pattern matching scenarios.

```scala
def processPoint(point: Point): String = {
    point match {
        case Point(0, 0) => "Origin"
        case Point(_, 0) => "On X-axis"
        case Point(0, _) => "On Y-axis"
        case _ => "Somewhere in the plane"
    }
}
```

- The `match` expression makes pattern matching concise and readable.

### Conclusion:

Classes and Objects in Scala provide a robust foundation for organizing code in an Object-Oriented manner. With the addition of Case Classes, Scala enables the creation of immutable data structures with concise syntax and enhanced functionality.

In the upcoming sections, we'll explore more advanced OOP concepts in Scala. Stay tuned for a deep dive into Traits, inheritance, and polymorphism as we continue to unlock the full potential of Scala's Object-Oriented Programming paradigm!
