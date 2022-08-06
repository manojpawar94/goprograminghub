---
title: "How to run the hello world program in the python?"
excerpt: "Python is an interpreted programming language. We can run the Python code in the interactive mode or using the source code file."
createdAt: "2021-05-03"
author: manoj-pawar
---

Python is an interpreted programming language. We can run the Python code in the interactive mode or using the source code file.

#### Interactive Mode
In the interactive mode, the python commands run from tty. It is used to test small of code quickly. We can invoke the Python interpreter in the interactive mode using `Python` command. 

In this mode it prompts for the next command with the primary prompt, usually three greater-than signs `(>>>)`.

```shell
$ python3
Python 3.10 (default, June 4 2019, 09:25:04)
[GCC 4.8.2] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello World")
Hello World
```

For continuation lines it prompts with the secondary prompt, by default three dots `(...)`. Continuation lines are needed when entering a multi-line construct. As an example, take a look at this if statement:
```shell
>>> the_world_is_flat = True
>>> if the_world_is_flat:
...     print("Be careful not to fall off!")
...
Be careful not to fall off!
```


