---
title: "File Handling"
excerpt: "Discover how to work with files and I/O operations in Go. Learn how to read from and write to files, enhancing the functionality of your programs."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Mastering File Handling and I/O Operations in Go Programming

Welcome to File Handling tutorial! In this chapter, we're going to dive deep into the world of file handling and input/output (I/O) operations in Go programming. Files are like containers for data, and knowing how to read from and write to them is crucial for building practical and functional programs. By the end of this chapter, you'll not only understand the fundamentals of file handling but also learn various techniques for performing I/O operations effectively.

#### Reading from Files

Imagine you're reading a novel. Reading from files in Go is like opening the book and extracting information for processing.

**Example 1: Reading from a File**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "os"
    "io/ioutil"
)

func main() {
    fileContent, err := ioutil.ReadFile("sample.txt")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("File Content:")
    fmt.Println(string(fileContent))
}
```

In this example, the `ioutil.ReadFile()` function is used to read the content of the file named `sample.txt`. If an error occurs, it's handled and printed. The content of the file is then printed to the console.

#### Writing to Files

Imagine you're writing a letter. Writing to files in Go is like preparing and saving your content for future use.

**Example 2: Writing to a File**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "os"
)

func main() {
    content := "Hello, Go File Handling!\n"

    file, err := os.Create("output.txt")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer file.Close()

    _, err = file.WriteString(content)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Content written to output.txt")
}
```

In this example, the `os.Create()` function is used to create a new file named `output.txt`. The content is then written to the file using `file.WriteString()`. Errors are handled and printed accordingly.

#### Working with Directories

Directories are like folders that organize your files. In Go, you can manipulate directories using built-in functions.

**Example 3: Creating and Removing Directories**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "os"
)

func main() {
    err := os.Mkdir("mydir", 0755) // Create a directory
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Directory 'mydir' created")

    err = os.Remove("mydir") // Remove the directory
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Directory 'mydir' removed")
}
```

In this example, the `os.Mkdir()` function is used to create a directory named `mydir`, and the `os.Remove()` function is used to remove it.

By mastering file handling and I/O operations, you'll be equipped to work with files effectively, read and write data to them, and manipulate directories as needed. These skills are essential for creating applications that interact with external data sources and provide users with a seamless experience.
