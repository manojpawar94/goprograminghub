---
title: "Control Structures"
excerpt: "Dive into control structures like loops and conditional statements. Learn how to manipulate program flow to achieve desired outcomes."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Mastering Control Structures: Loops and Conditional Magic

Welcome to Control Structures tutorial! Here, we're going to explore the magical world of control structures - tools that allow you to guide your program's journey. Think of these as road signs and detours that help you steer your code exactly where you want it to go. We'll cover loops, which are like repeating patterns, and conditional statements, which help your program make decisions.

#### Understanding Loops in Go

Go simplifies looping with a single versatile `for` loop that can be used in multiple ways. Let's explore each variation:

##### 1. Traditional C-style For Loop

This is the classic three-component loop with initialization, condition, and increment:

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // Print multiplication table of 5
    for i := 1; i <= 10; i++ {
        result := 5 * i
        fmt.Printf("5 x %d = %d\n", i, result)
    }
}
```

Key components:
- Initialization: `i := 1`
- Condition: `i <= 10`
- Increment: `i++`

##### 2. While-style Loop

Go doesn't have a `while` keyword, but you can create while-style loops using `for` with a condition:

```go[class="line-numbers"]
package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // Guess the number game
    rand.Seed(time.Now().UnixNano())
    target := rand.Intn(10) + 1
    attempts := 0
    
    for attempts < 3 {
        guess := rand.Intn(10) + 1
        attempts++
        
        fmt.Printf("Attempt %d: Guessed %d\n", attempts, guess)
        
        if guess == target {
            fmt.Println("Found the number!")
            break
        }
    }
    fmt.Printf("Game over. The number was: %d\n", target)
}
```

This example demonstrates:
- Single condition loop
- Using `break` to exit early
- Random number generation

##### 3. For-Range Loop

The `for range` loop is perfect for iterating over collections. Let's explore different use cases:

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // 1. Iterating over a slice
    fruits := []string{"apple", "banana", "cherry"}
    fmt.Println("Fruits:")
    for i, fruit := range fruits {
        fmt.Printf("%d: %s\n", i+1, fruit)
    }

    // 2. Iterating over a map
    scores := map[string]int{
        "Alice": 95,
        "Bob":   87,
        "Carol": 92,
    }
    fmt.Println("\nExam Scores:")
    for name, score := range scores {
        fmt.Printf("%s scored %d\n", name, score)
    }

    // 3. Iterating over a string (by rune)
    word := "Hello!"
    fmt.Println("\nCharacters in 'Hello!':")
    for i, char := range word {
        fmt.Printf("Position %d: %c\n", i, char)
    }
}
```

##### 4. Infinite Loop with Control Statements

Infinite loops can be controlled using `break`, `continue`, and labels:

```go[class="line-numbers"]
package main

import (
    "fmt"
    "time"
)

func main() {
    start := time.Now()
    count := 0

OuterLoop:
    for {
        count++
        
        switch count {
        case 2:
            fmt.Println("Skipping iteration 2")
            continue // Skip to next iteration
        case 5:
            fmt.Println("Breaking the loop")
            break OuterLoop // Exit the labeled loop
        }

        fmt.Printf("Iteration %d\n", count)
        time.Sleep(time.Millisecond * 500)
    }

    elapsed := time.Since(start)
    fmt.Printf("\nLoop ran for %.2f seconds\n", elapsed.Seconds())
}
```

Key concepts demonstrated:
- Using `range` with different data structures
- Map iteration (unordered by design)
- String iteration by Unicode characters
- Loop labels for controlled breaks
- `continue` for skipping iterations
- Time tracking in loops

These examples showcase Go's powerful and flexible looping mechanisms. Whether you're working with collections, strings, or need precise control flow, Go's loops provide the tools you need.

#### Making Decisions with Conditional Statements

Conditional statements are the decision-makers in your code. Let's explore different ways to make decisions in Go:

##### 1. Basic If Statement with Initialization

Go allows you to initialize a variable as part of the if statement:

```go[class="line-numbers"]
package main

import (
    "fmt"
    "time"
)

func main() {
    // Initialize and check in one line
    if hour := time.Now().Hour(); hour < 12 {
        fmt.Println("Good morning!")
    } else if hour < 17 {
        fmt.Println("Good afternoon!")
    } else {
        fmt.Println("Good evening!")
    }
    // Note: 'hour' is not accessible here
}
```

Key features:
- Variable initialization in if statement
- Multiple conditions with else-if
- Scoped variables (hour is only available within the if-else blocks)

##### 2. Error Handling Pattern

Go's if statements are commonly used for error handling:

```go[class="line-numbers"]
package main

import (
    "fmt"
    "strconv"
)

func main() {
    userInput := "42"
    
    // Convert string to integer and handle errors
    if num, err := strconv.Atoi(userInput); err == nil {
        fmt.Printf("Successfully converted '%s' to %d\n", userInput, num)
        
        if num%2 == 0 {
            fmt.Println("It's an even number")
        } else {
            fmt.Println("It's an odd number")
        }
    } else {
        fmt.Printf("Error converting '%s': %v\n", userInput, err)
    }
}
```

##### 3. Complex Conditions and Logical Operators

Go supports combining multiple conditions using logical operators:

```go[class="line-numbers"]
package main

import (
    "fmt"
    "time"
)

func main() {
    // Complex condition example: Online Store Discount
    isPremiumMember := true
    purchaseAmount := 120.0
    isWeekend := time.Now().Weekday() == time.Saturday || time.Now().Weekday() == time.Sunday
    
    if isPremiumMember && purchaseAmount >= 100 {
        fmt.Println("Premium member discount: 20% off")
        fmt.Printf("Final amount: $%.2f\n", purchaseAmount * 0.8)
    } else if !isWeekend && purchaseAmount >= 50 {
        fmt.Println("Weekday special: 10% off")
        fmt.Printf("Final amount: $%.2f\n", purchaseAmount * 0.9)
    } else if purchaseAmount >= 30 {
        fmt.Println("Standard discount: 5% off")
        fmt.Printf("Final amount: $%.2f\n", purchaseAmount * 0.95)
    } else {
        fmt.Println("No discount applicable")
        fmt.Printf("Final amount: $%.2f\n", purchaseAmount)
    }
}
```

This example demonstrates:
- Logical AND (&&) and OR (||) operators
- Multiple conditions in if statements
- Real-world business logic implementation
- Formatted number output

Conditional statements are powerful tools for implementing business logic and creating dynamic, responsive programs. They help your code make smart decisions based on various factors and conditions.

#### Switch Statements: Elegant Decision Making

Switch statements provide a clean and efficient way to handle multiple conditions. Let's explore different ways to use switch in Go:

##### 1. Basic Switch Statement

The classic switch statement evaluates an expression against multiple cases:

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // HTTP Status Code Handler
    statusCode := 404
    
    switch statusCode {
    case 200:
        fmt.Println("OK - Request successful")
    case 404:
        fmt.Println("Not Found - Resource unavailable")
    case 500:
        fmt.Println("Internal Server Error - Something went wrong")
    default:
        fmt.Printf("Unknown status code: %d\n", statusCode)
    }
}
```

##### 2. Switch with Multiple Cases

You can group multiple cases and use special keywords like `fallthrough`:

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // File type checker
    filename := "document.pdf"
    
    switch ext := filename[len(filename)-4:]; ext {
    case ".jpg", ".png", ".gif":
        fmt.Println("Image file")
    case ".doc", ".pdf":
        fmt.Println("Document file")
        fallthrough // Demonstrates fallthrough
    case ".txt":
        fmt.Println("Can be opened in text editor")
    default:
        fmt.Println("Unknown file type")
    }
}
```

Key features:
- Multiple values per case
- Initialization in switch statement
- Fallthrough behavior
- String manipulation

##### 3. Switch without Expression

A switch without an expression can replace complex if-else chains:

```go[class="line-numbers"]
package main

import (
    "fmt"
    "time"
)

func main() {
    // Time-based greeting with activity suggestion
    hour := time.Now().Hour()
    
    switch {
    case hour < 6:
        fmt.Println("Good night! Time for some rest.")
    case hour < 12:
        fmt.Println("Good morning! Perfect time for exercise.")
    case hour < 14:
        fmt.Println("Good day! Time for lunch.")
    case hour < 17:
        fmt.Println("Good afternoon! Stay productive.")
    case hour < 22:
        fmt.Println("Good evening! Time to relax.")
    default:
        fmt.Println("Time to prepare for bed!")
    }
}
```

Key features of Go's switch statements:
- No need for break statements (automatic break)
- Cases can be expressions
- Type switches for type checking
- Fallthrough for exceptional cases
- Clean and readable alternative to if-else chains

By mastering control structures, you can create dynamic and efficient programs that respond intelligently to different conditions and requirements. Whether you're using loops for repetition or conditionals for decision-making, Go provides the tools you need to write clean and effective code. Keep practicing and exploring these concepts! 🚀
