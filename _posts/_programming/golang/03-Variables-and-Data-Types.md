---
title: "Variables and Data Types"
excerpt: "Grasp the concept of variables and their role in programming. Discover the various data types available in GoLang and how to use them effectively."
createdAt: "2021-05-03"
author: manoj-pawar
---

> All About Variables and Different Types of Data in GoLang

Welcome to this exciting tutorial where we'll dive into the world of variables and data types in GoLang. These are like building blocks in your coding adventure. Let's make them crystal clear with easy explanations and examples!

#### Meet Variables - Your Data Holders

Imagine variables as containers that can store different types of information. They're like boxes that keep things safe for you. Let's learn how to create these boxes and put stuff in them:

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // Creating a variable
    var age int
    age = 25 // Storing a value in the variable

    // Printing the variable
    fmt.Println("My age is", age)
}
```

#### Types of Data - Let's Sort Them Out

Data types in Go are like different containers designed for specific kinds of data. Let's explore each type with clear examples:

##### Basic Data Types:
-   `int`: For whole numbers (e.g., 42, -17, 1000)
    - Can be explicitly sized: `int8`, `int16`, `int32`, `int64`
-   `uint`: For positive whole numbers only
    - Also has sized variants: `uint8`, `uint16`, `uint32`, `uint64`
-   `float64`: For decimal numbers (e.g., 3.14, -0.001, 2.5)
    - Also available as `float32` for smaller numbers
-   `string`: For text (e.g., "Hello", "Go is fun!")
-   `bool`: For true/false values
-   `byte`: Alias for uint8, used for binary data
-   `rune`: Alias for int32, used for Unicode characters

Let's see these types in action with practical examples:

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // Different ways to declare variables
    var age int = 30                 // Explicit type declaration
    temperature := 98.6              // Type inference with :=
    var name = "Alice"              // Type inference with var
    var isActive = true             // Boolean type
    
    // Using sized number types
    var smallNum int8 = 127         // Max value for int8
    var bigNum int64 = 9223372036854775807  // Max value for int64
    
    // Working with characters
    var letter rune = 'A'           // Unicode character
    var dataByte byte = 255         // Max value for byte

    // Printing all our variables
    fmt.Printf("Age: %d (Type: %T)\n", age, age)
    fmt.Printf("Temperature: %.1f (Type: %T)\n", temperature, temperature)
    fmt.Printf("Name: %s (Type: %T)\n", name, name)
    fmt.Printf("Active: %t (Type: %T)\n", isActive, isActive)
    fmt.Printf("Small number: %d (Type: %T)\n", smallNum, smallNum)
    fmt.Printf("Big number: %d (Type: %T)\n", bigNum, bigNum)
    fmt.Printf("Letter: %c (Type: %T)\n", letter, letter)
    fmt.Printf("Data byte: %d (Type: %T)\n", dataByte, dataByte)
}
```

#### Type Conversion and Type Safety

Go provides safe and explicit type conversions. Let's explore different ways to convert between types:

```go[class="line-numbers"]
package main

import (
    "fmt"
    "strconv"
)

func main() {
    // Numeric conversions
    intNum := 42
    floatNum := float64(intNum)    // int to float64
    uintNum := uint(intNum)        // int to uint
    
    // String conversions
    strNum := strconv.Itoa(intNum)  // int to string
    strFloat := fmt.Sprintf("%.2f", floatNum)  // float to string
    
    // String to number conversions
    numStr := "123"
    parsedInt, err := strconv.Atoi(numStr)  // string to int
    if err != nil {
        fmt.Println("Error:", err)
    }
    
    // Printing conversions
    fmt.Printf("Integer: %d -> Float: %f\n", intNum, floatNum)
    fmt.Printf("Integer: %d -> String: %s\n", intNum, strNum)
    fmt.Printf("Float: %f -> String: %s\n", floatNum, strFloat)
    fmt.Printf("String: %s -> Integer: %d\n", numStr, parsedInt)
}
```

Remember these key points about type conversion in Go:
- Always use explicit conversions
- Check for potential overflow when converting between numeric types
- Handle errors when converting strings to numbers
- Use appropriate formatting verbs with fmt.Printf for clean output

Now you're equipped with the knowledge of variables, data types, and type conversions in Go! These fundamentals will help you write more robust and type-safe code. Keep practicing and exploring! 🚀
