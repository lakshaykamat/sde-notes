---
tags:
  - "#java"
---
# JVM (Java Virtual Machine)
  
- JVM stands for Java Virtual Machine. 
- It's a crucial component of the [[JRE|Java Runtime Environment (JRE)]] responsible for executing Java bytecode. 
- JVM serves as an abstraction layer between the compiled Java bytecode and the underlying hardware and operating system.
- The Java Virtual Machine (JVM) changes based on the type of computer you're using.
- The JVM converts bytecode into machine code via interpretation, line by line.

> JVM is platform dependent

> JVM contains [[Stack]] and [[Heap]] memory allocation

## Functions of JVM
1. **Bytecode Execution**: Executes Java bytecode by interpreting or compiling it into machine code that the underlying hardware can understand and execute.

2. **Memory Management**: Manages memory allocation, including the creation, usage, and deallocation of memory for Java objects. This includes garbage collection for reclaiming memory occupied by unused objects.

3. **Platform Independence**: Provides a platform-independent execution environment for Java programs, allowing them to run on any device or operating system that has a compatible JVM installed.

4. **Security Enforcement**: Enforces Java's security features by verifying bytecode to ensure it adheres to security rules and preventing unauthorized access or potentially harmful actions.

5. **Class Loading and Dynamic Linking**: Loads classes dynamically as needed during program execution and resolves dependencies, allowing the JVM to link these classes together to form a cohesive application.

6. **Exception Handling**: Manages exceptions and errors that occur during program execution, allowing for proper handling and control flow even in unexpected scenarios.

7. **[[JIT|Just-In-Time (JIT) Compilation:]]** Optimizes performance by using JIT compilation to translate frequently executed parts of bytecode into native machine code at runtime, improving overall execution speed.
