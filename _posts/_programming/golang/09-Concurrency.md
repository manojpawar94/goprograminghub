---
title: "Concurrency in Go"
excerpt: "Master Go's powerful concurrency features with goroutines, channels, and synchronization patterns. Learn to build efficient concurrent programs with practical examples and best practices."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Building Robust Concurrent Applications with Go

Welcome to our comprehensive guide on Go concurrency! Go's approach to concurrent programming is revolutionary, offering powerful primitives like goroutines and channels that make it easier to write efficient, concurrent programs. In this tutorial, we'll explore these concepts with practical examples and best practices.

#### Understanding Goroutines: Lightweight Concurrent Execution

Goroutines are Go's lightweight threads that allow concurrent execution. They're incredibly efficient, with minimal startup costs and minimal memory footprint (starting at just 2KB of stack space).

**Example 1: Goroutines with WaitGroup Synchronization**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "sync"
    "time"
)

func printNumbers(wg *sync.WaitGroup) {
    defer wg.Done() // Notify WaitGroup when the function completes
    
    for i := 1; i <= 5; i++ {
        fmt.Printf("Number: %d (Time: %s)\n", i, time.Now().Format("15:04:05.000"))
        time.Sleep(time.Millisecond * 500)
    }
}

func printLetters(wg *sync.WaitGroup) {
    defer wg.Done() // Notify WaitGroup when the function completes
    
    for char := 'a'; char <= 'e'; char++ {
        fmt.Printf("Letter: %c (Time: %s)\n", char, time.Now().Format("15:04:05.000"))
        time.Sleep(time.Millisecond * 300)
    }
}

func main() {
    var wg sync.WaitGroup // Create a WaitGroup to synchronize goroutines
    
    // Add two tasks to the WaitGroup
    wg.Add(2)
    
    fmt.Println("Starting concurrent execution...")
    go printNumbers(&wg) // Launch first goroutine
    go printLetters(&wg) // Launch second goroutine
    
    // Wait for both goroutines to complete
    wg.Wait()
    fmt.Println("All goroutines completed!")
}
```

This enhanced example demonstrates several important concepts:
1. **WaitGroup Synchronization**: Instead of using `time.Sleep()`, we properly synchronize goroutines using `sync.WaitGroup`
2. **Timestamp Output**: Added timestamps to visualize concurrent execution
3. **Deferred Cleanup**: Using `defer` to ensure `WaitGroup` is properly updated
4. **Structured Output**: Better formatting for clearer understanding of execution flow

#### Channel Types and Patterns in Go

Channels are Go's built-in communication mechanism for goroutines. Let's explore different types of channels and common patterns.

**Example 2: Buffered vs Unbuffered Channels**

```go[class="line-numbers"]
package main

import (
    "fmt"
    "time"
)

func processMessages(done chan bool) {
    // Buffered channel with capacity 2
    bufferedChan := make(chan string, 2)
    
    // Unbuffered channel
    unbufferedChan := make(chan string)
    
    // Demonstrate buffered channel behavior
    go func() {
        fmt.Println("Sending to buffered channel...")
        bufferedChan <- "First"  // Won't block
        bufferedChan <- "Second" // Won't block
        fmt.Println("Buffered channel sends completed!")
        
        // Reading from buffered channel
        fmt.Printf("Received from buffered: %s\n", <-bufferedChan)
        fmt.Printf("Received from buffered: %s\n", <-bufferedChan)
    }()
    
    // Demonstrate unbuffered channel behavior
    go func() {
        fmt.Println("Sending to unbuffered channel...")
        unbufferedChan <- "Message" // Will block until received
        fmt.Println("Unbuffered send completed!")
    }()
    
    time.Sleep(time.Millisecond * 100) // Give time for goroutine to start
    fmt.Printf("Received from unbuffered: %s\n", <-unbufferedChan)
    
    done <- true
}

func main() {
    done := make(chan bool)
    go processMessages(done)
    <-done // Wait for processing to complete
}
```

**Example 3: Select Statement for Channel Operations**

```go[class="line-numbers"]
func handleMultipleChannels(done chan bool) {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    // Sender goroutines
    go func() {
        time.Sleep(time.Millisecond * 100)
        ch1 <- "Message from channel 1"
    }()
    
    go func() {
        time.Sleep(time.Millisecond * 50)
        ch2 <- "Message from channel 2"
    }()
    
    // Use select to handle multiple channels
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("Received:", msg1)
        case msg2 := <-ch2:
            fmt.Println("Received:", msg2)
        case <-time.After(time.Second):
            fmt.Println("Timeout waiting for messages")
            return
        }
    }
    
    done <- true
}
```

Key concepts demonstrated:
1. **Buffered Channels**: Pre-allocated space for messages, non-blocking until full
2. **Unbuffered Channels**: Synchronous communication, blocks until message is received
3. **Select Statement**: Non-blocking operations on multiple channels
4. **Timeout Pattern**: Using `time.After()` to prevent indefinite blocking

#### Advanced Concurrency Patterns

Let's explore a real-world example that combines multiple concurrency patterns for efficient and controlled parallel execution.

**Example 4: Concurrent URL Fetcher with Rate Limiting**

```go[class="line-numbers"]
package main

import (
    "context"
    "fmt"
    "net/http"
    "sync"
    "time"
)

// Result structure to hold both data and error
type Result struct {
    URL      string
    Response string
    Error    error
}

func fetchURL(ctx context.Context, url string) Result {
    // Create HTTP request with context
    req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
    if err != nil {
        return Result{URL: url, Error: err}
    }

    // Perform the request
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return Result{URL: url, Error: err}
    }
    defer resp.Body.Close()

    return Result{
        URL:      url,
        Response: fmt.Sprintf("Fetched %s: %d bytes (Status: %s)", url, resp.ContentLength, resp.Status),
    }
}

func main() {
    urls := []string{
        "https://www.goprogramminghub.com",
        "https://www.github.com",
        "https://www.google.com",
        "https://www.golang.org",
        "https://www.example.com",
    }

    // Create a buffered channel to limit concurrent requests
    const maxConcurrent = 2
    semaphore := make(chan struct{}, maxConcurrent)
    results := make(chan Result, len(urls))

    // Create a context with timeout
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    // WaitGroup to track completion
    var wg sync.WaitGroup
    wg.Add(len(urls))

    fmt.Printf("Fetching %d URLs with max %d concurrent requests...\n", len(urls), maxConcurrent)

    // Launch goroutines for each URL
    for _, url := range urls {
        go func(url string) {
            defer wg.Done()

            // Acquire semaphore slot
            semaphore <- struct{}{}
            defer func() { <-semaphore }()

            // Perform the fetch with context
            result := fetchURL(ctx, url)
            results <- result
        }(url)
    }

    // Close results channel when all fetches are done
    go func() {
        wg.Wait()
        close(results)
    }()

    // Process results as they arrive
    for result := range results {
        if result.Error != nil {
            fmt.Printf("Error: %s - %v\n", result.URL, result.Error)
        } else {
            fmt.Println(result.Response)
        }
    }
}
```

This advanced example demonstrates several important concurrency patterns and best practices:

1. **Rate Limiting**: Using a semaphore channel to limit concurrent requests
2. **Context Usage**: Proper timeout handling with context
3. **Structured Error Handling**: Using a Result struct to handle both success and failure cases
4. **Resource Cleanup**: Proper closing of HTTP responses and channels
5. **Graceful Shutdown**: Using WaitGroup to ensure all goroutines complete

By mastering these patterns, you'll be equipped to build robust, efficient, and scalable concurrent applications in Go. Remember that concurrency is a powerful tool, but it should be used judiciously and with proper error handling and resource management.

In this example, multiple URLs are fetched concurrently using goroutines. The fetched information or error messages are sent to the `resultChannel` and then printed sequentially as they are received.

By mastering concurrency with goroutines and channels, you'll be equipped to create highly efficient and responsive programs that can fully utilize the power of modern hardware. Concurrency is a cornerstone of scalable software development and is vital for building applications that can handle a high level of parallelism.
