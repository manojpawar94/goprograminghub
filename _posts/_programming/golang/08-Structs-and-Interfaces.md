---
title: "Structs and Interfaces"
excerpt: "Learn about struct types and how they facilitate structured data organization. Grasp the concept of interfaces and their role in achieving polymorphism in Go."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Unveiling Structs and Harnessing Interfaces in Go

Welcome to Chapter 8! In this chapter, we're going to delve deep into two powerful concepts in Go programming: structs and interfaces. Structs help you organize related data, while interfaces enable polymorphism and flexible interactions between different types. By the end of this chapter, you'll not only understand the intricacies of structs and interfaces but also learn how to utilize them effectively with hands-on examples.

#### 8.1: Structuring Data with Structs

Imagine you're designing a blueprint for a house. Structs in Go are like these blueprints, allowing you to define your own data types with named fields for structured data organization.

**Example 1: Creating and Using Structs**

```go[class="line-numbers"]
package main

import "fmt"

// Define a struct
type Person struct {
    FirstName string
    LastName  string
    Age       int
}

func main() {
    // Create a new instance of Person
    person := Person{
        FirstName: "John",
        LastName:  "Doe",
        Age:       30,
    }

    // Access struct fields
    fmt.Println("First Name:", person.FirstName)
    fmt.Println("Last Name:", person.LastName)
    fmt.Println("Age:", person.Age)
}
```

In this example, the `Person` struct is defined with fields for `FirstName`, `LastName`, and `Age`. We create an instance of `Person` with the provided values and access its fields using dot notation.

#### Achieving Polymorphism with Interfaces

Interfaces in Go are like contracts that define behavior. They allow different types to fulfill the same contract, enabling polymorphism and flexible code design.

**Example 2: Implementing Interfaces**

```go[class="line-numbers"]
package main

import "fmt"

// Define an interface
type Speaker interface {
    Speak() string
}

// Define types that implement the interface
type Human struct{}

func (h Human) Speak() string {
    return "Hello, I'm a human."
}

type Dog struct{}

func (d Dog) Speak() string {
    return "Woof, I'm a dog."
}

func main() {
    // Create instances of different types
    john := Human{}
    fido := Dog{}

    // Use the same function with different types
    speakAndPrint(john)
    speakAndPrint(fido)
}

func speakAndPrint(speaker Speaker) {
    fmt.Println(speaker.Speak())
}
```

In this example, an `interface` named `Speaker` is defined with a single method `Speak()`. Both `Human` and `Dog` types implement this interface by providing their implementations of the `Speak()` method. The `speakAndPrint` function takes a parameter of type `Speaker` and calls the `Speak()` method on it.

#### Composition with Structs

Structs can be composed of other structs, allowing you to build complex data structures with ease.

**Example 3: Struct Composition**

```go[class="line-numbers"]
package main

import "fmt"

// Define simple structs
type Address struct {
    Street   string
    City     string
    ZipCode  string
}

type Person struct {
    FirstName string
    LastName  string
    Address   Address // Embedding Address struct
}

func main() {
    person := Person{
        FirstName: "Alice",
        LastName:  "Smith",
        Address: Address{
            Street:  "123 Main St",
            City:    "Springfield",
            ZipCode: "12345",
        },
    }

    fmt.Println("Name:", person.FirstName, person.LastName)
    fmt.Println("Address:", person.Address.Street, person.Address.City, person.Address.ZipCode)
}
```

In this example, the `Person` struct is composed of the `Address` struct. By embedding the `Address` struct within `Person`, we create a hierarchical structure that allows us to access address fields through the `person.Address` notation.

By mastering the art of structs and interfaces, you'll have the tools to organize structured data efficiently and enable flexible interactions between different types. These concepts are fundamental to building modular and adaptable Go programs.
