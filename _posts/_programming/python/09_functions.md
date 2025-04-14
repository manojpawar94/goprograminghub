---
title: "Functions"
excerpt: "Learn how to define and use functions in Python to organize and reuse code."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Functions

## Defining Functions
```python
def greet(name):
    """This function greets the person passed in as parameter"""
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
```

## Return Values
```python
def add(a, b):
    """Return the sum of two numbers"""
    return a + b

result = add(3, 5)
print(result)  # Output: 8
```

## Default Arguments
```python
def greet(name, message="Good morning!"):
    print(f"Hello {name}, {message}")

greet("Bob")  # Output: Hello Bob, Good morning!
greet("Charlie", "How are you?")  # Output: Hello Charlie, How are you?
```

## Keyword Arguments
```python
def describe_pet(pet_name, animal_type="dog"):
    print(f"I have a {animal_type} named {pet_name}.")

describe_pet(pet_name="Max")
describe_pet(animal_type="hamster", pet_name="Harry")
```

## Variable-length Arguments
```python
def make_pizza(*toppings):
    print("Making pizza with:")
    for topping in toppings:
        print(f"- {topping}")

make_pizza("pepperoni")
make_pizza("mushrooms", "green peppers", "extra cheese")
```