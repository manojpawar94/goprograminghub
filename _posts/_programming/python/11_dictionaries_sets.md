---
title: "Dictionaries and Sets"
excerpt: "Learn how to work with Python dictionaries and sets, two powerful data structures."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Dictionaries and Sets

## Dictionaries
```python
# Creating a dictionary
person = {"name": "Alice", "age": 25, "city": "New York"}
print(person)

# Accessing values
print(person["name"])  # Output: Alice
print(person.get("age"))  # Output: 25

# Modifying dictionaries
person["age"] = 26  # Update value
person["job"] = "Engineer"  # Add new key-value pair
del person["city"]  # Remove key-value pair
```

## Dictionary Methods
```python
# Get all keys
print(person.keys())

# Get all values
print(person.values())

# Get all items
print(person.items())
```

## Sets
```python
# Creating a set
fruits = {"apple", "banana", "cherry"}
print(fruits)

# Adding elements
fruits.add("orange")

# Removing elements
fruits.remove("banana")

# Set operations
set1 = {1, 2, 3}
set2 = {2, 3, 4}
print(set1.union(set2))  # {1, 2, 3, 4}
print(set1.intersection(set2))  # {2, 3}
print(set1.difference(set2))  # {1}
```

## When to Use Each
- Use dictionaries for key-value pair data
- Use sets for unique element collections