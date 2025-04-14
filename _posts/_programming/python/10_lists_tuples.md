---
title: "Lists and Tuples"
excerpt: "Learn how to work with Python lists and tuples, two fundamental sequence types."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Lists and Tuples

## Lists
```python
# Creating a list
fruits = ["apple", "banana", "cherry"]
print(fruits)

# Accessing elements
print(fruits[0])  # First item
print(fruits[-1]) # Last item

# Modifying lists
fruits[1] = "blueberry"  # Change item
fruits.append("orange")  # Add item
fruits.remove("apple")   # Remove item
```

## List Operations
```python
# Slicing
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])  # [1, 2, 3]
print(numbers[:3])   # [0, 1, 2]
print(numbers[3:])   # [3, 4, 5]

# List methods
numbers.sort()
numbers.reverse()
numbers.count(2)
```

## Tuples
```python
# Creating a tuple
colors = ("red", "green", "blue")
print(colors)

# Accessing elements
print(colors[1])  # Second item

# Tuples are immutable
# colors[1] = "yellow"  # This would raise an error
```

## When to Use Each
- Use lists for collections that need to change
- Use tuples for collections that shouldn't change