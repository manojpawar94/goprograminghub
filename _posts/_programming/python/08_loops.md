---
title: "Control Flow: Loops"
excerpt: "Learn how to use loops in Python to repeat code execution."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Control Flow: Loops

## for Loop
```python
# Iterate through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Using range()
for i in range(5):
    print(i)  # Prints 0 to 4
```

## while Loop
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## Loop Control
```python
# break statement
for num in range(10):
    if num == 5:
        break
    print(num)

# continue statement
for num in range(10):
    if num % 2 == 0:
        continue
    print(num)
```

## Nested Loops
```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

## else with Loops
```python
for num in range(5):
    print(num)
else:
    print("Loop completed successfully")