---
tags:
  - "#java"
---
# Java Run time Environment

JRE executes Java programs, containing [[JVM]], libraries, essential for running Java applications.


1. **Execution Environment**: JRE provides an environment to run Java applications and execute Java bytecode.

2. **No Development Tools**: Unlike JDK, JRE does not include development tools such as compilers or debuggers.

3. **Required for Java Applications**: Needed to run any Java-based software or applications on a computer system.

4. **Contains JVM**: JRE includes the Java Virtual Machine (JVM), responsible for executing Java bytecode.

5. **Libraries and APIs**: It contains libraries and APIs necessary for running Java applications, enabling interaction with the underlying system.

6. **Platform Independence**: Similar to JDK, JRE is designed to be cross-platform, allowing Java programs to run on different operating systems with a compatible JRE installed.

After we get the `.class` file the next things happen at runtime:
1. Class loader loads all classes needed to execute the program
2. JVM sends code to Byte code verifier to check the format of code 

> JRE = [[JVM]] + Library classes
