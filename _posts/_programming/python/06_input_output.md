---
title: "Input and Output"
excerpt: "Learn how to handle input and output operations in Python."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Input and Output

## Basic Output
```python
print("Hello, World!")
print("Python", "is", "awesome", sep="-")  # Output: Python-is-awesome
```

## Formatted Output
```python
name = "Alice"
age = 25
print(f"{name} is {age} years old")  # f-strings (Python 3.6+)
print("{} is {} years old".format(name, age))  # format() method
```

## User Input
```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello {name}, you are {age} years old!")
```

## File Operations
```python
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, File!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```