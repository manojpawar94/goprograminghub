---
title: "Error Handling"
excerpt: "Explore techniques for handling errors and exceptional scenarios in GoLang. Learn how to design robust code that gracefully manages unexpected situations."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Mastering Error Handling in Go Programming

Welcome to Error Handling tutorial! In this chapter, we'll dive deep into the world of error handling in Go programming. Errors are like roadblocks on your coding journey, and knowing how to handle them gracefully is essential for creating robust and reliable software. By the end of this chapter, you'll not only understand the importance of error handling but also learn various techniques and best practices for managing exceptions and errors effectively.

#### Embracing the Nature of Errors

Imagine you're on a road trip, and encountering a detour is like encountering an error in programming. Errors are part of the journey, and handling them effectively is crucial for reaching your destination.

**Example 1: Basic Error Handling**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "errors"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10.0, 2.0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

In this example, the `divide` function returns an error when the divisor is zero. The error message is created using the `errors.New()` function. In the `main()` function, we check if `err` is not `nil`, indicating an error, and print the error message.

#### Leveraging Custom Errors

Custom errors provide more context and information about the error conditions.

**Example 2: Custom Error Types**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "errors"
)

type DivideByZeroError struct {
    message string
}

func (e *DivideByZeroError) Error() string {
    return e.message
}

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, &DivideByZeroError{"cannot divide by zero"}
    }
    return a / b, nil
}

func main() {
    result, err := divide(10.0, 0.0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

In this example, a custom error type `DivideByZeroError` is defined with an `Error()` method that provides a custom error message. The `divide` function returns an instance of this error type when division by zero occurs.

#### Using Panic and Recover

In exceptional cases, you can use `panic` to stop the normal flow of execution and `recover` to regain control and handle the situation gracefully.

**Example 3: Panic and Recover**

```go[class="line-numbers"]
package main

import "fmt"

func exampleFunction() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered:", r)
        }
    }()

    fmt.Println("Start of function")
    panic("Something went wrong!")
    fmt.Println("End of function") // This line won't be executed
}

func main() {
    exampleFunction()
    fmt.Println("Program continues after panic")
}
```

In this example, the `exampleFunction` function uses `panic` to indicate something went wrong and then uses a deferred function with `recover` to catch the panic and print a message. The program continues executing after the panic is recovered.

By mastering error handling techniques, you'll be able to design robust and reliable code that gracefully handles unexpected situations and provides meaningful feedback to users. Effective error handling is essential for building software that can handle various scenarios and provide a smooth user experience.
