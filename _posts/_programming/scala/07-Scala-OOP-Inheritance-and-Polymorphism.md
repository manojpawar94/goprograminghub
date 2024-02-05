---
title: "Scala Inheritance and Polymorphism"
excerpt: "In this tutorial, we'll explore two key concepts that enrich code organization and reuse: Inheritance and Polymorphism. These principles empower you to create flexible and extensible code structures, enhancing the scalability and maintainability of your Scala applications."
createdAt: "2021-05-03"
author: "manoj-pawar"
---

Welcome to the advanced realms of Scala's Object-Oriented Programming (OOP) paradigm. In this tutorial, we'll explore two key concepts that enrich code organization and reuse: Inheritance and Polymorphism. These principles empower you to create flexible and extensible code structures, enhancing the scalability and maintainability of your Scala applications.

### Inheritance in Scala:

#### 1. **Defining a Base Class:**

- Inheritance starts with defining a base class that encapsulates common attributes and behaviors.

```scala
class Animal(name: String, age: Int) {
    def makeSound(): Unit = {
        println("Some generic animal sound.")
    }
}
```

- `Animal` is a base class with parameters `name` and `age` and a method `makeSound`.

#### 2. **Derived Class (Subclass):**

- A derived class (subclass) can extend the functionality of the base class.

```scala
class Dog(name: String, age: Int, breed: String) extends Animal(name, age) {
    override def makeSound(): Unit = {
        println("Woof! Woof!")
    }
}
```

- `Dog` is a derived class that extends `Animal` and provides its own implementation of `makeSound`.

#### 3. **Creating Instances:**

- Instances of the base and derived classes can be created.

```scala
val genericAnimal = new Animal("Generic", 5)
val myDog = new Dog("Buddy", 3, "Labrador")

genericAnimal.makeSound()  // Output: Some generic animal sound.
myDog.makeSound()  // Output: Woof! Woof!
```

### Polymorphism in Scala:

#### 1. **Polymorphic Methods:**

- A method can take different forms depending on the type of the object.

```scala
def printAnimalSound(animal: Animal): Unit = {
    animal.makeSound()
}
```

- `printAnimalSound` is a polymorphic method that can accept any object of type `Animal`.

#### 2. **Polymorphism in Action:**

- The same method can be used with objects of different classes.

```scala
val cat = new Animal("Whiskers", 2)
val myParrot = new Animal("Polly", 1)

printAnimalSound(cat)  // Output: Some generic animal sound.
printAnimalSound(myParrot)  // Output: Some generic animal sound.
```

- The method adapts to the type of the object passed to it.

### Conclusion:

Inheritance and Polymorphism are powerful tools in the Object-Oriented Programming arsenal of Scala. They allow for code reuse, extensibility, and the creation of flexible and adaptable code structures.

In the upcoming sections, we'll explore more advanced topics in Scala, including Traits, abstract classes, and the interplay between functional and object-oriented programming paradigms. Buckle up for a deeper dive into the intricacies of Scala programming!
