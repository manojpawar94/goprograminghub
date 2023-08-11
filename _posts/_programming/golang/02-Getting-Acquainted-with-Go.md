---
title: "Getting Acquainted with Go"
excerpt: "Explore the basic syntax and structure of Go programs.
Learn how to write your first \"Hello, World!\" program."
createdAt: "2021-05-03"
author: manoj-pawar
---

Let's discuss the Go Program structure using the hello world program.
Go program has the same structure as other programming languages,

-   define the package name
-   import require packages
-   define global variable/constant (optional)
-   define functions

#### Hello World Program

The `main()` function is the program execution entry point for the Go program.

```go[class="line-numbers"]
package main
import "fmt"
func main(){
    fmt.Println("Hello, World")
}
```

Let's create a new file, copy the below code snippet and save it as `main.go`.

-   The very first line of the program declares the main package. A package is a way to group functions. Unlike Java, a package name must define on the first line of the file. All the files in the same directory belong to the same package.
-   Followed by you need to import the required packages. Here, we have imported the popular `fmt` package, which contains functions for formatting text, including printing on the console. This package is one of the standard library packages you got when you installed Go.
-   Then you have implemented the `main()` function to print a message to the console. The `main()` function executes by default when you run the main package.

**Note:**

-   In the Go program, we don't need to use enclosing semi-comma.

#### Execute Go Program

To execute the above code, you should run the command `go run main.go` on the terminal or CMD. It will run the `main()` function and print the below output on the console.

```shell
$ go run main.go
Hello, World
```
