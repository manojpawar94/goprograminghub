---
title: "Control Flow: Conditionals"
excerpt: "Learn how to use conditional statements in Python to control program flow."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Control Flow: Conditionals

## if Statement
```python
x = 10
if x > 5:
    print("x is greater than 5")
```

## if-else Statement
```python
age = 17
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
```

## if-elif-else Statement
```python
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D")
```

## Nested if Statements
```python
num = 15
if num > 0:
    if num % 2 == 0:
        print("Positive even number")
    else:
        print("Positive odd number")
else:
    print("Number is not positive")
```

## Ternary Operator
```python
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)
```