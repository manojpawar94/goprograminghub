---
title: "String Manipulation"
excerpt: "Learn how to work with strings in Python, including formatting, methods, and operations."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# String Manipulation

## Creating Strings
```python
single = 'Single quoted string'
double = "Double quoted string"
multi = """Multi-line
string"""
```

## String Operations
```python
# Concatenation
greeting = "Hello" + " " + "World"

# Repetition
stars = "*" * 10

# Indexing
word = "Python"
print(word[0])  # 'P'
print(word[-1]) # 'n'
```

## String Methods
```python
text = " Hello, World! "
print(text.strip())      # Remove whitespace
print(text.lower())      # Convert to lowercase
print(text.upper())      # Convert to uppercase
print(text.replace("H", "J"))  # Replace characters
print(text.split(","))   # Split into list
```

## String Formatting
```python
# f-strings (Python 3.6+)
name = "Alice"
age = 25
print(f"{name} is {age} years old")

# format() method
print("{} is {} years old".format(name, age))

# %-formatting
print("%s is %d years old" % (name, age))
```

## String Slicing
```python
word = "Python"
print(word[1:4])  # 'yth'
print(word[:4])   # 'Pyth'
print(word[4:])   # 'on'
print(word[::-1]) # 'nohtyP' (reverse)
```