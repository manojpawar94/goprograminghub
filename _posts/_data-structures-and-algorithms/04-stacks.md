---
title: "Stacks - Data Structure"
excerpt: "Explore Stack data structure, its LIFO principle, operations, and practical implementations in Go, Java, and Python."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

#### Introduction to Stacks

A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements can be inserted and removed only from one end, called the top of the stack.

#### Basic Operations

1. **Push**: Add an element to the top
2. **Pop**: Remove the top element
3. **Peek/Top**: View the top element
4. **isEmpty**: Check if stack is empty
5. **isFull**: Check if stack is full (for array implementation)

#### Time Complexity

| Operation | Time Complexity |
|-----------|----------------|
| Push      | O(1)           |
| Pop       | O(1)           |
| Peek      | O(1)           |
| Search    | O(n)           |

#### Implementation Examples

1. **Go Implementation**
```go
package main

import "fmt"

// Stack structure
type Stack struct {
    items []int
}

// Push operation
func (s *Stack) Push(item int) {
    s.items = append(s.items, item)
}

// Pop operation
func (s *Stack) Pop() (int, error) {
    if len(s.items) == 0 {
        return 0, fmt.Errorf("stack is empty")
    }
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return item, nil
}

// Peek operation
func (s *Stack) Peek() (int, error) {
    if len(s.items) == 0 {
        return 0, fmt.Errorf("stack is empty")
    }
    return s.items[len(s.items)-1], nil
}

// IsEmpty operation
func (s *Stack) IsEmpty() bool {
    return len(s.items) == 0
}

func main() {
    stack := &Stack{}
    
    // Push elements
    stack.Push(1)
    stack.Push(2)
    stack.Push(3)
    
    // Pop and print elements
    fmt.Println("Stack operations:")
    for !stack.IsEmpty() {
        item, _ := stack.Pop()
        fmt.Printf("%d ", item)
    }
}
```

2. **Java Implementation**
```java
public class Stack {
    private int maxSize;
    private int[] stackArray;
    private int top;
    
    // Constructor
    public Stack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1;
    }
    
    // Push operation
    public void push(int value) {
        if (top < maxSize - 1) {
            stackArray[++top] = value;
        } else {
            System.out.println("Stack is full");
        }
    }
    
    // Pop operation
    public int pop() {
        if (top >= 0) {
            return stackArray[top--];
        } else {
            System.out.println("Stack is empty");
            return -1;
        }
    }
    
    // Peek operation
    public int peek() {
        if (top >= 0) {
            return stackArray[top];
        } else {
            System.out.println("Stack is empty");
            return -1;
        }
    }
    
    // IsEmpty operation
    public boolean isEmpty() {
        return (top == -1);
    }
    
    public static void main(String[] args) {
        Stack stack = new Stack(3);
        
        // Push elements
        stack.push(1);
        stack.push(2);
        stack.push(3);
        
        // Pop and print elements
        System.out.println("Stack operations:");
        while (!stack.isEmpty()) {
            System.out.print(stack.pop() + " ");
        }
    }
}
```

3. **Python Implementation**
```python
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Example usage
if __name__ == "__main__":
    stack = Stack()
    
    # Push elements
    stack.push(1)
    stack.push(2)
    stack.push(3)
    
    # Pop and print elements
    print("Stack operations:")
    while not stack.is_empty():
        print(stack.pop(), end=" ")
```

#### Applications of Stacks

1. **Function Call Management**
   - Call stack for function calls
   - Recursion implementation

2. **Expression Evaluation**
   - Infix to postfix conversion
   - Parentheses matching
   - Calculator implementation

3. **Undo Operations**
   - Browser history
   - Text editor undo feature
   - Command pattern implementation

4. **Memory Management**
   - Program stack
   - Local variable allocation

#### Implementation Types

1. **Array-based Implementation**
   - Fixed size
   - Memory efficient
   - Cache friendly

2. **Linked List Implementation**
   - Dynamic size
   - Memory overhead
   - Not cache friendly

#### Best Practices

1. **When to Use Stacks**
   - LIFO operations required
   - Function call tracking
   - Expression parsing
   - Backtracking algorithms

2. **Implementation Considerations**
   - Choose array implementation for fixed size
   - Use linked list for dynamic size
   - Handle stack overflow/underflow
   - Consider thread safety for concurrent access

#### Common Problems and Solutions

1. **Stack Overflow**
   - Implement size checking
   - Use dynamic resizing

2. **Stack Underflow**
   - Check empty condition
   - Handle error cases

3. **Memory Leaks**
   - Proper cleanup in pop operations
   - Reference management

Stacks are fundamental data structures used in many algorithms and system implementations. Understanding stack operations and their applications is crucial for solving various programming problems efficiently.