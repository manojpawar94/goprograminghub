---
title: "Control Statement"
excerpt: "Python is an interpreted programming language. We can run the Python code in the interactive mode or using the source code file."
createdAt: "2021-05-03"
author: manoj-pawar
---

### Conditional Statements (if, else, elif):

Conditional statements allow your program to make decisions based on certain conditions. Here's how you can use them:

#### The `if` Statement:

The `if` statement checks a condition. If the condition is true, the indented code block under it is executed. Otherwise, it's skipped.

```python[class="line-numbers"]
age = 18
if age >= 18:
    print("You are an adult.")
```

#### The `else` Statement:

The `else` statement comes after an `if` statement. If the condition of the `if` statement is false, the code block under the `else` statement is executed.

```python[class="line-numbers"]
age = 15
if age >= 18:
    print("You are an adult.")
else:
    print("You are not yet an adult.")
```

#### The `elif` Statement:

`elif` stands for "else if." It lets you check multiple conditions. If the condition of the `if` statement is false, the code block under the `elif` statement is checked.

```python[class="line-numbers"]
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("Fail")
```

### Loops (for, while):

Loops help you perform repetitive tasks without writing the same code over and over. There are two main types of loops in Python: `for` and `while`.

#### The `for` Loop:

A `for` loop iterates over a sequence (like a list, tuple, or string) and executes a block of code for each item in the sequence.

```python[class="line-numbers"]
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

#### The `while` Loop:

A `while` loop repeatedly executes a block of code as long as a condition is true.

```python[class="line-numbers"]
count = 0
while count < 5:
    print(count)
    count += 1
```

### Break and Continue Statements:

#### The `break` Statement:

The `break` statement is used to exit a loop prematurely when a certain condition is met.

```python[class="line-numbers"]
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    if number == 3:
        break
    print(number)
```

#### The `continue` Statement:

The `continue` statement skips the rest of the current iteration and moves to the next one in the loop.

```python[class="line-numbers"]
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    if number == 3:
        continue
    print(number)
```

### Explanation:

-   **Conditional Statements:** Conditional statements, like `if`, `else`, and `elif`, allow your program to make decisions. You can use these to execute different code based on certain conditions.

-   **Loops:** Loops, like `for` and `while`, help you repeat actions. `for` loops go through a sequence, and `while` loops execute as long as a condition remains true.

-   **Break and Continue Statements:** `break` allows you to exit a loop prematurely if a condition is met. `continue` lets you skip the rest of the current iteration and move to the next one.

These control structures give your programs the power to make choices, repeat tasks, and control the flow of execution. They are essential tools for building dynamic and responsive applications.
