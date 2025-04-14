---
title: "Error Handling in Go"
excerpt: "Master Go's error handling patterns with practical examples. Learn to write robust code that gracefully handles errors using built-in features and custom implementations."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Writing Robust Go Code with Effective Error Handling

Welcome to our comprehensive guide on error handling in Go! Error handling is a critical aspect of writing reliable software, and Go's approach makes it both explicit and elegant. Let's explore how to handle errors effectively with practical examples and best practices.

#### Understanding Go's Error Philosophy

Go treats errors as values, not exceptions. This approach encourages explicit error checking and handling, making code more reliable and easier to debug.

**Example 1: Basic Error Handling Pattern**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "errors"
)

// UserAge represents a person's age
type UserAge struct {
    age int
}

// ValidateAge checks if the age is valid
func ValidateAge(age int) (*UserAge, error) {
    if age < 0 {
        return nil, errors.New("age cannot be negative")
    }
    if age > 150 {
        return nil, errors.New("age exceeds maximum reasonable value")
    }
    return &UserAge{age: age}, nil
}

func main() {
    // Example with valid age
    user1, err := ValidateAge(25)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Valid age: %d\n", user1.age)

    // Example with invalid age
    user2, err := ValidateAge(-5)
    if err != nil {
        fmt.Println("Error:", err) // This will print the error
        return
    }
}
```

This example demonstrates:
1. **Error as Return Value**: Functions return both a result and an error
2. **Explicit Error Checking**: Using `if err != nil` pattern
3. **Early Return**: Return immediately after encountering an error
4. **Clear Error Messages**: Descriptive error messages help debugging

#### Custom Error Types

Create custom error types to provide more context and enable specific error handling.

**Example 2: Custom Error Implementation**

```go[class="line-numbers"]
package main

import "fmt"

// ValidationError represents a custom error type
type ValidationError struct {
    Field string
    Issue string
}

// Error implements the error interface
func (v *ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", v.Field, v.Issue)
}

// ValidateUser checks user data
func ValidateUser(username string, age int) error {
    if username == "" {
        return &ValidationError{"username", "cannot be empty"}
    }
    if age < 0 || age > 150 {
        return &ValidationError{"age", "must be between 0 and 150"}
    }
    return nil
}

func main() {
    // Test cases
    tests := []struct {
        username string
        age      int
    }{
        {"", 25},        // Invalid username
        {"john", -5},    // Invalid age
        {"alice", 30},   // Valid input
    }

    for _, test := range tests {
        if err := ValidateUser(test.username, test.age); err != nil {
            // Type assertion to check if it's a ValidationError
            if valErr, ok := err.(*ValidationError); ok {
                fmt.Printf("Validation failed: %v\n", valErr)
            } else {
                fmt.Printf("Unknown error: %v\n", err)
            }
        } else {
            fmt.Printf("Valid user: %s, age: %d\n", test.username, test.age)
        }
    }
}
```

#### Error Wrapping and Unwrapping

Go 1.13 introduced error wrapping to add context while preserving the original error.

**Example 3: Error Wrapping Pattern**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "errors"
)

// Database operations simulation
func queryDatabase() error {
    return errors.New("connection refused")
}

func getUser() error {
    err := queryDatabase()
    if err != nil {
        return fmt.Errorf("failed to fetch user: %w", err)
    }
    return nil
}

func main() {
    err := getUser()
    if err != nil {
        // Check if the error contains "connection refused"
        if errors.Is(err, errors.New("connection refused")) {
            fmt.Println("Database connection error detected")
        }
        fmt.Printf("Error: %v\n", err)
    }
}
```

Key concepts demonstrated:
1. **Error Wrapping**: Using `%w` verb with `fmt.Errorf`
2. **Error Unwrapping**: Using `errors.Is` to check specific errors
3. **Error Chain**: Building a chain of related errors
4. **Context Preservation**: Maintaining the original error while adding context

By following these patterns and practices, you'll write more reliable and maintainable Go code that handles errors gracefully and provides clear feedback when things go wrong. Remember that good error handling is about making problems visible and actionable, not just catching them.
