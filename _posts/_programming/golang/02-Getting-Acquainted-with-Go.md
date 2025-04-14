---
title: "Getting Acquainted with Go"
excerpt: "Explore the basic syntax and structure of Go programs.
Learn how to write your first \"Hello, World!\" program."
createdAt: "2021-05-03"
author: manoj-pawar
---

### Understanding Go Program Structure

Every Go program follows a clear and consistent structure with these main components:

1. **Package Declaration**: Every Go file starts with a package declaration
2. **Import Statements**: Required packages are imported
3. **Global Variables/Constants** (optional): Declarations accessible throughout the package
4. **Functions**: Including the mandatory `main()` function for executable programs

### Your First Go Program

Let's write the classic "Hello, World!" program to understand these components:

```go
// File: main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### Code Breakdown

1. **Package Declaration** (`package main`)
   - Every Go file must start with a package declaration
   - The `main` package is special - it tells Go this is an executable program
   - All files in the same directory must belong to the same package

2. **Import Statement** (`import "fmt"`)
   - Imports the formatting package from Go's standard library
   - `fmt` provides functions for formatted I/O operations
   - Go's standard library is rich with useful packages

3. **Main Function** (`func main()`)
   - Entry point of the program
   - Must be in the `main` package
   - Takes no arguments and returns no values
   - Program starts executing from here

### Key Go Syntax Features

1. **No Semicolons**
   - Go automatically inserts semicolons at the end of statements
   - Don't use semicolons in your code (except in `for` loops)

2. **Code Formatting**
   - Go enforces a standard code format
   - Use `go fmt` to automatically format your code

### Running Your Program

1. **Save the Code**
   - Create a new file named `main.go`
   - Copy the code above into the file

2. **Run the Program**
   ```shell
   # Run directly
   $ go run main.go
   Hello, World!

   # Or build and run
   $ go build main.go
   $ ./main
   Hello, World!
   ```

3. **Understanding Build Commands**
   - `go run`: Compiles and runs in one step (good for development)
   - `go build`: Creates an executable (good for deployment)

### Common Beginner Tips

1. **File Organization**
   - Keep one package per directory
   - Use meaningful file names
   - Main package should be in the project root

2. **Code Style**
   - Use `go fmt` before committing code
   - Follow Go's official style guide
   - Keep functions small and focused
