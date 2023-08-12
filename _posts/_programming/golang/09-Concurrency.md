---
title: "Concurrency"
excerpt: "Understand Go's unique approach to concurrency through goroutines and channels. Learn how to create concurrent programs that leverage the full power of modern hardware.
"
createdAt: "2021-05-03"
author: manoj-pawar
---

> Harnessing Concurrency with Goroutines and Channels in Go

Welcome to Concurrency Tutorial! In this chapter, we're going to delve into the fascinating world of concurrency in Go programming. Go's approach to concurrency is unique and powerful, utilizing goroutines and channels to enable efficient parallelism. By the end of this chapter, you'll not only comprehend the fundamentals of concurrency but also learn how to create highly efficient concurrent programs using goroutines and channels.

#### Unveiling Goroutines - The Building Blocks of Concurrency

Imagine you're multitasking - cooking, answering emails, and reading a book all at once. Goroutines in Go are like these parallel tasks, allowing you to execute multiple functions concurrently.

**Example 1: Creating and Running Goroutines**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "time"
)

func printNumbers() {
    for i := 1; i <= 5; i++ {
        fmt.Println("Number:", i)
        time.Sleep(time.Millisecond * 500) // Introduce a delay
    }
}

func printLetters() {
    for char := 'a'; char <= 'e'; char++ {
        fmt.Println("Letter:", string(char))
        time.Sleep(time.Millisecond * 300) // Introduce a delay
    }
}

func main() {
    go printNumbers() // Start a goroutine for printNumbers
    go printLetters() // Start a goroutine for printLetters

    // Wait for a while to see the output
    time.Sleep(time.Second * 3)
}
```

In this example, the `printNumbers` and `printLetters` functions are executed concurrently using goroutines. The `go` keyword is used to start goroutines. As a result, the numbers and letters are printed interleaved due to the concurrent execution.

#### Synchronizing Goroutines with Channels

Imagine you're coordinating a team of chefs in a restaurant kitchen. Channels in Go are like communication pathways that enable synchronization and data sharing between goroutines.

**Example 2: Using Channels for Communication**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "time"
)

func sendGreetings(channel chan string, message string) {
    channel <- message // Send message to the channel
}

func main() {
    greetingsChannel := make(chan string) // Create a channel

    go sendGreetings(greetingsChannel, "Hello!")
    go sendGreetings(greetingsChannel, "Bonjour!")
    go sendGreetings(greetingsChannel, "Hola!")

    // Receive and print messages from the channel
    fmt.Println(<-greetingsChannel)
    fmt.Println(<-greetingsChannel)
    fmt.Println(<-greetingsChannel)
}
```

In this example, the `sendGreetings` function sends messages to the `greetingsChannel` using the `channel <-` syntax. In the `main()` function, we receive and print messages from the channel using the `<-channel` syntax.

#### Leveraging Concurrency for Efficiency

Concurrency allows you to take advantage of modern hardware and parallelize tasks for improved performance.

**Example 3: Concurrent URL Fetching**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "net/http"
    "time"
)

func fetchURL(url string, channel chan string) {
    response, err := http.Get(url)
    if err == nil {
        channel <- fmt.Sprintf("Fetched %s: %d bytes", url, response.ContentLength)
    } else {
        channel <- fmt.Sprintf("Error fetching %s: %s", url, err)
    }
}

func main() {
    urls := []string{
        "https://www.goprogramminghub.com",
        "https://www.github.com",
        "https://www.google.com",
    }

    resultChannel := make(chan string)

    for _, url := range urls {
        go fetchURL(url, resultChannel)
    }

    for i := 0; i < len(urls); i++ {
        fmt.Println(<-resultChannel)
    }
}
```

In this example, multiple URLs are fetched concurrently using goroutines. The fetched information or error messages are sent to the `resultChannel` and then printed sequentially as they are received.

By mastering concurrency with goroutines and channels, you'll be equipped to create highly efficient and responsive programs that can fully utilize the power of modern hardware. Concurrency is a cornerstone of scalable software development and is vital for building applications that can handle a high level of parallelism.
