---
tags:
  - "#java"
---
# Just-in-time Compilation
JIT, part of Java, makes code faster by turning commonly used parts into quick-to-execute machine language while running programs.

JIT compilation in Java dynamically translates bytecode into native machine code at runtime, optimizing performance by focusing on frequently executed portions of the code.

1. **Dynamic Compilation**: JIT is part of the Java Virtual Machine (JVM) that dynamically compiles bytecode into native machine code during runtime.
    
2. **Optimization**: It optimizes parts of the bytecode that are frequently executed, converting them into native machine code for faster execution.
    
3. **Adaptive Approach**: JIT identifies and optimizes hotspots in the code, such as loops or frequently used methods, to improve overall performance.
    
4. **Trade-off**: While JIT compilation can significantly boost performance, the initial compilation process might introduce a slight delay during program startup.
    
5. **Platform-specific**: JIT generates machine code tailored to the specific hardware and operating system, improving execution speed on that particular system.