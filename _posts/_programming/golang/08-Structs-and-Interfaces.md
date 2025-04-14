---
title: "Structs and Interfaces"
excerpt: "Master Go's type system with comprehensive coverage of structs and interfaces. Learn how to organize data and create flexible, reusable code through practical examples."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Understanding Structs and Interfaces in Go

Welcome to our guide on structs and interfaces! These powerful features form the backbone of Go's type system, enabling you to write clean, organized, and flexible code. Let's explore them through practical examples.

### Structs: Building Custom Data Types

A struct is like a custom blueprint that lets you combine different types of data into a single, organized unit. Think of it as creating your own data type that perfectly fits your needs.

#### Basic Struct Usage

```go[class="line-numbers"]
package main

import "fmt"

// Define a Book struct
type Book struct {
    Title  string
    Author string
    Pages  int
    Price  float64
}

func main() {
    // Create a new book
    myBook := Book{
        Title:  "The Go Programming Language",
        Author: "Alan A. A. Donovan",
        Pages:  380,
        Price:  49.99,
    }

    // Access fields directly
    fmt.Printf("Book: %s by %s\n", myBook.Title, myBook.Author)
    fmt.Printf("Pages: %d, Price: $%.2f\n", myBook.Pages, myBook.Price)
}
```

#### Methods with Struct Receivers

Methods help you add behavior to your structs:

```go[class="line-numbers"]
type Book struct {
    Title  string
    Price  float64
    inStock bool
}

// Method with pointer receiver to modify the struct
func (b *Book) ApplyDiscount(percentage float64) {
    b.Price = b.Price * (1 - percentage/100)
}

// Method with value receiver for reading
func (b Book) GetInfo() string {
    status := "out of stock"
    if b.inStock {
        status = "in stock"
    }
    return fmt.Sprintf("%s - $%.2f (%s)", b.Title, b.Price, status)
}
```

### Interfaces: Defining Behavior

Interfaces define a contract of behavior that types can implement. They're the key to writing flexible, reusable code in Go.

#### Basic Interface Example

```go[class="line-numbers"]
package main

import "fmt"

// Define an interface
type Printable interface {
    GetDetails() string
}

// Book implements Printable
type Book struct {
    Title string
    Author string
}

func (b Book) GetDetails() string {
    return fmt.Sprintf("%s by %s", b.Title, b.Author)
}

// Magazine implements Printable
type Magazine struct {
    Name string
    Issue int
}

func (m Magazine) GetDetails() string {
    return fmt.Sprintf("%s - Issue %d", m.Name, m.Issue)
}

// PrintDetails works with any Printable type
func PrintDetails(p Printable) {
    fmt.Println(p.GetDetails())
}

func main() {
    book := Book{Title: "Go Programming", Author: "John Doe"}
    magazine := Magazine{Name: "Go Weekly", Issue: 123}

    // Both types can be used with PrintDetails
    PrintDetails(book)     // Output: Go Programming by John Doe
    PrintDetails(magazine) // Output: Go Weekly - Issue 123
}
```

### Advanced Patterns

#### Embedding for Composition

```go[class="line-numbers"]
type Address struct {
    Street  string
    City    string
    Country string
}

type Employee struct {
    Name    string
    Address // Embedding Address
    Role    string
}

func main() {
    emp := Employee{
        Name: "Alice Smith",
        Address: Address{
            Street:  "123 Work Lane",
            City:    "Tech City",
            Country: "Goland",
        },
        Role: "Developer",
    }

    // Access embedded fields directly
    fmt.Printf("%s works in %s, %s\n", emp.Name, emp.City, emp.Country)
}
```

#### Interface Composition

```go[class="line-numbers"]
type Reader interface {
    Read() string
}

type Writer interface {
    Write(string)
}

// Combine interfaces
type ReadWriter interface {
    Reader
    Writer
}

// Implement the combined interface
type Document struct {
    content string
}

func (d *Document) Read() string {
    return d.content
}

func (d *Document) Write(text string) {
    d.content = text
}
```

### Best Practices

1. **Use Structs When**:
   - You need to group related data
   - You want to add methods to your data type
   - You need to maintain state

2. **Use Interfaces When**:
   - You want to define behavior without implementation
   - You need to make your code more flexible and testable
   - You're working with multiple types that share behavior

3. **Design Tips**:
   - Keep interfaces small and focused
   - Use embedding for composition over inheritance
   - Use pointer receivers when methods modify the struct
   - Use value receivers for read-only methods

By mastering structs and interfaces, you'll be able to write more organized, maintainable, and flexible Go code. These concepts are fundamental to Go's approach to object-oriented programming and type system design.
