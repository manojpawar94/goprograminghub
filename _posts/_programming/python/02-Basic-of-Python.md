---
title: "Basic of Python"
excerpt: "Python is an interpreted programming language. We can run the Python code in the interactive mode or using the source code file."
createdAt: "2021-05-03"
author: manoj-pawar
---

### Variables, Data Types, and Type Conversion:

#### Variables:

In Python, variables act like containers to hold different types of information. They're like labeled boxes where you can store and retrieve data easily. To create a variable, give it a name and assign a value to it.

For instance:

```python[class="line-numbers"]
age = 25
name = "Alice"
```

Here, `age` and `name` are variables. `age` holds the value `25`, and `name` holds the text `Alice`.

#### Data Types:

Python has various data types that help us work with different kinds of information. Here are some of them:

-   **Integer (int):** Whole numbers without decimals.
-   **Float:** Numbers with decimals.
-   **String (str):** Textual data enclosed in quotes.
-   **List:** A collection of items, like a shopping list.
-   **Tuple:** Similar to a list but immutable (cannot be changed).
-   **Set:** A collection of unique items, like a set of playing cards.
-   **Dictionary (dict):** Stores data in key-value pairs.

For example:

```python[class="line-numbers"]
age = 25  # Integer
height = 5.9  # Float
name = "John"  # String
fruits = ["apple", "banana", "cherry"]  # List
coordinates = (3, 4)  # Tuple
grades = {"Math": 90, "Science": 85}  # Dictionary
```

#### Type Conversion:

Sometimes, we need to convert one type of data into another. For instance, changing a number stored as text into an actual number. Python provides functions to do this:

```python[class="line-numbers"]
num_str = "42"
num_int = int(num_str)  # Converts text to integer
float_num = float(num_int)  # Converts integer to float
str_float = str(float_num)  # Converts float to text
```

### Basic Input and Output (Print, Input):

#### Print Statement:

The `print()` function lets us display messages or values on the screen. It's like talking to the computer through text.

For example:

```python[class="line-numbers"]
print("Hello, World!")  # Outputs: Hello, World!
```

You can also display variables:

```python[class="line-numbers"]
name = "Alice"
age = 30
print("My name is " + name + " and I am " + str(age) + " years old.")
```

#### Input Statement:

The `input()` function allows us to interact with the user. It displays a message and waits for the user to type something.

For instance:

```python[class="line-numbers"]
name = input("Enter your name: ")
print("Hello, " + name + "!")
```

### Operators (Arithmetic, Comparison, Logical):

#### Arithmetic Operators:

Arithmetic operators help us perform mathematical calculations:

```python[class="line-numbers"]
x = 10
y = 3
sum = x + y  # Addition
difference = x - y  # Subtraction
product = x * y  # Multiplication
quotient = x / y  # Division
remainder = x % y  # Remainder (Modulus)
power = x ** y  # Exponentiation
```

#### Comparison Operators:

Comparison operators let us compare values:

```python[class="line-numbers"]
a = 5
b = 8
greater_than = a > b  # Is a greater than b?
less_than = a < b  # Is a less than b?
equal_to = a == b  # Is a equal to b?
not_equal = a != b  # Is a not equal to b?
```

#### Logical Operators:

Logical operators help us combine conditions:

```python[class="line-numbers"]
p = True
q = False
and_result = p and q  # Is both p and q True?
or_result = p or q  # Is either p or q True?
not_result = not p  # Is p False?
```

### Explanation:

-   **Variables, Data Types, and Type Conversion:** Variables store data, like age and name. Data types categorize the kind of data they hold, like numbers, text, lists, etc. Type conversion changes data from one type to another, like changing text to a number.

-   **Basic Input and Output:** `print()` shows messages on the screen, and `input()` lets us have conversations with the computer.

-   **Operators:** Arithmetic operators do math, comparison operators compare things, and logical operators combine conditions.

These basics are your foundation for programming in Python. They're like building blocks you'll use to create more complex and exciting programs!
