---
tags:
  - "#java"
  - "#dev"
---
# How Java Code executes
A programmer writes code in `.java` files, which is then processed by the Java compiler (`javac`). The Java compiler translates the human-readable Java code into an intermediate representation known as [[Byte code]] code, storing this bytecode in `.class` files.

Bytecode isn't directly executable machine code but is a set of instructions understood by the Java Virtual Machine (JVM). 

When a Java program is executed, the JVM takes these `.class` files containing bytecode and dynamically translates this bytecode into machine code that's suitable for the specific underlying hardware and operating system. 

This machine code is executed by the CPU, enabling the Java program to run on different platforms without needing recompilation, thanks to the JVM's ability to interpret and execute bytecode.


![](https://scaler.com/topics/images/how-does-java-programming-language-work.webp)

## Compile time
Compile time in Java checks code errors, creates bytecode before running.
`.java` file -----> `.class` file (`.javac` compilation)

## Run time
Runtime in Java executes bytecode, manages memory, handles exceptions during execution.
### Class Loader
- Class loader loads and links classes into Java programs at runtime.
- An Object of this class is created in [[Heap|heap.]]
- It reads the `.class` file and generate binary data
### Linking
- JVM verifies the `.class` files
- Allocated memory for class variables & default values
- Replace symbolic references from the type with direct references