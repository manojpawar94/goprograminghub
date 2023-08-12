---
title: "Control Structures"
excerpt: "Dive into control structures like loops and conditional statements. Learn how to manipulate program flow to achieve desired outcomes."
createdAt: "2021-05-03"
author: manoj-pawar
---

> Mastering Control Structures: Loops and Conditional Magic

Welcome to Control Structures tutorial! Here, we're going to explore the magical world of control structures - tools that allow you to guide your program's journey. Think of these as road signs and detours that help you steer your code exactly where you want it to go. We'll cover loops, which are like repeating patterns, and conditional statements, which help your program make decisions.

#### Looping Through Possibilities

Imagine you're drawing a pattern, and you want to repeat it. Loops are just like that – they let you repeat a set of actions over and over.

**Example 1 - The "for" Loop:**

The "for" loop is commonly used to iterate over a range of values.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // Let's count from 1 to 5
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}
```

**Example 2 - The "while" Loop:**

In Go, you can achieve a "while" loop using the "for" loop with a single condition.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    // Keep rolling the dice until you get a 6
    dice := 0
    for dice != 6 {
        dice = rollDice()
        fmt.Println("Rolled:", dice)
    }
}

func rollDice() int {
    // Simulate rolling a 6-sided dice
    return 1 // For simplicity, always return 1 in this example
}
```

**Example 3: The "for range" Loop**

This loop is used to iterate over elements in a collection, like arrays, slices, maps, and strings.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    fruits := []string{"apple", "banana", "cherry", "date"}

    // Print each fruit
    for index, fruit := range fruits {
        fmt.Printf("Fruit at index %d: %s\n", index, fruit)
    }
}
```

**Example 4: Infinite Loop**

An infinite loop continues running until explicitly interrupted or a break statement is used.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    count := 0
    for {
        fmt.Println("This will run forever!")
        count++
        if count >= 5 {
            break // Exit the loop after 5 iterations
        }
    }
}
```

These examples showcase the flexibility and power of loops in GoLang. They allow you to perform repetitive tasks efficiently and control the flow of your program with precision.

#### Making Choices with Conditionals using IF statement

Just like in real life, your program sometimes needs to make decisions. Conditional statements help your program decide what to do based on certain conditions.

**Example 1 - The "if" Statement:**

The if statement is used to execute a block of code if a certain condition is true. If the condition is not true, the code block is skipped.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    age := 18

    if age >= 18 {
        fmt.Println("You are an adult.")
    }
}
```

In this example, if the age variable is 18 or greater, the message "You are an adult." will be printed.

**Example 2 - The "if" and "else" Statement:**

The else statement is used in conjunction with if to provide an alternative block of code that is executed when the condition is false.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    age := 18
    if age >= 18 {
        fmt.Println("You can vote!")
    } else {
        fmt.Println("You can't vote yet.")
    }
}
```

In this example, if the age variable is less than 18, the message "You can't vote yet." will be printed.

**Example 3 - The "if", "else if", and "else" Statements:**

You can also chain multiple conditions together using `else if` statements to handle different cases.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    score := 85

    if score >= 90 {
        fmt.Println("Excellent!")
    } else if score >= 70 {
        fmt.Println("Good job!")
    } else {
        fmt.Println("You can do better.")
    }
}
```

In this example, depending on the score value, different messages will be printed.

Conditional statements are fundamental for controlling the flow of your program based on different situations. They allow you to create responsive and dynamic behavior in your code.

#### Making Choices with Conditionals using SWITCH statement

The switch statement is a powerful way to create a branching mechanism in your code based on the value of an expression. It provides an elegant alternative to long chains of if and else if statements. Here's how it works:

**Example1 - The "switch" Statement:**

The switch statement compares an expression to a set of possible values and executes the code block associated with the matching value.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    day := "Monday"
    switch day {
    case "Monday":
        fmt.Println("It's the start of the week.")
    case "Friday":
        fmt.Println("Weekend is near!")
    default:
        fmt.Println("Just another day.")
    }
}
```

In this example, the value of day is compared with different cases. If it matches the value "Monday", the message "It's the start of the week." will be printed. If it matches "Friday", the message "Weekend is near!" will be printed. If none of the cases match, the default case will be executed.

**Example 2 - Expressions in Cases:**

The cases in a switch statement don't have to be just constants; they can also be expressions.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    score := 85

    switch {
    case score >= 90:
        fmt.Println("Excellent!")
    case score >= 70:
        fmt.Println("Good job!")
    default:
        fmt.Println("You can do better.")
    }
}
```

In this example, the switch statement doesn't have an expression to compare. Instead, it evaluates the conditions in each case and executes the code block associated with the first condition that is true.

**Example 3 - Fallthrough:**

By default, in GoLang, the `switch` statement only executes the code block associated with the first matching case. However, if you use the `fallthrough` keyword at the end of a case, the code execution will fall through to the next case.

```go[class="line-numbers"]
package main

import "fmt"

func main() {
    num := 2

    switch num {
    case 1:
        fmt.Println("It's one.")
        fallthrough
    case 2:
        fmt.Println("It's two.")
    case 3:
        fmt.Println("It's three.")
    }
}
```

In this example, when num is 2, the message "It's one." will be printed, and then the execution will fall through to the next case, printing "It's two."

The switch statement is a versatile tool that allows you to create clean and concise code for handling multiple cases based on the value of an expression.

By the end of this tutorial, you'll have the power to create loops that repeat actions and make your program choose different paths based on conditions. Control structures are your tools for orchestrating the dance of your code, ensuring it follows your lead to achieve remarkable outcomes!
