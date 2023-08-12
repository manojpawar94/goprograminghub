---
title: "Data Structure"
excerpt: "Python is an interpreted programming language. We can run the Python code in the interactive mode or using the source code file."
createdAt: "2021-05-03"
author: manoj-pawar
---

### Lists, Tuples, and Sets:

#### Lists:

Lists are versatile and dynamic containers that store a collection of items, which can be of various types. Lists are created using square brackets `[]`.

```python[class="line-numbers"]
fruits = ["apple", "banana", "cherry"]
```

You can access and manipulate individual items in a list by their indices.

```python[class="line-numbers"]
print(fruits[0])  # Outputs: apple

fruits.append("orange")  # Adds "orange" to the end of the list
fruits.remove("banana")  # Removes "banana" from the list
```

#### Tuples:

Tuples are similar to lists but are immutable, meaning their contents cannot be changed after creation. Tuples are created using parentheses `()`.

```python[class="line-numbers"]
coordinates = (3, 4)
```

Tuples are often used to group related information together.

```python[class="line-numbers"]
x, y = coordinates
```

#### Sets:

Sets are unordered collections of unique elements. They are created using curly braces `{}`.

```python[class="line-numbers"]
unique_numbers = {1, 2, 3, 4}
```

Sets are useful for tasks like finding unique values in a list and performing set operations like union and intersection.

```python[class="line-numbers"]
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)  # Combines unique elements from both sets
intersection_set = set1.intersection(set2)  # Finds common elements between sets
```

### Dictionaries (Key-Value Pairs):

Dictionaries are collections of key-value pairs. Each key maps to a specific value. Dictionaries are created using curly braces `{}` and colons `:` to separate keys from values.

```python[class="line-numbers"]
student = {"name": "Alice", "age": 20, "grade": "A"}
```

You can access values in a dictionary using their keys.

```python[class="line-numbers"]
print(student["name"])  # Outputs: Alice

student["age"] = 21  # Updates the age value
student["city"] = "New York"  # Adds a new key-value pair
```

### Basic Operations on Data Structures:

Common operations you can perform on data structures include:

-   **Length:** You can find the number of elements in a data structure using the `len()` function.

```python[class="line-numbers"]
num_fruits = len(fruits)  # Length of the fruits list
```

-   **Membership Check:** You can check if an item exists in a data structure using the `in` keyword.

```python[class="line-numbers"]
if "apple" in fruits:
    print("Apple is in the fruits list.")
```

-   **Iteration:** You can loop through the elements of a data structure using loops.

```python[class="line-numbers"]
for fruit in fruits:
    print(fruit)
```

-   **Sorting:** You can sort elements in a data structure.

```python[class="line-numbers"]
sorted_fruits = sorted(fruits)  # Returns a sorted list of fruits
```

### Explanation:

-   **Lists, Tuples, and Sets:** Lists are mutable collections, tuples are immutable collections, and sets are collections of unique elements. Each has its own use case, depending on whether you need flexibility, immutability, or uniqueness.

-   **Dictionaries:** Dictionaries store data as key-value pairs, enabling efficient lookup and storage of related information.

-   **Basic Operations:** Length, membership checks, iteration, and sorting are some fundamental operations you can perform on data structures to manipulate and manage their contents.

These data structures empower you to organize, store, and manipulate data effectively, forming the building blocks of complex data processing in Python.
