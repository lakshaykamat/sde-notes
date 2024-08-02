# Introduction to Kotlin

### 1. Kotlin Syntax:
   - **Semicolons:** Unlike Java, Kotlin does not require semicolons at the end of statements.
   - **Comments:** Single-line comments start with `//`, and multiline comments are enclosed in `/* */`.
   - **Main Function:** Entry point of a Kotlin program is the `main` function.

   ```kotlin
   fun main() {
       // Your code here
   }
   ```

### 2. Variables:
   - **Variable Declaration:**
     - `val` for read-only (immutable) variables.
     - `var` for mutable variables.

   ```kotlin
   val pi = 3.14
   var count = 0
   ```

   - **Type Inference:** Kotlin can infer variable types, but you can also explicitly specify them.

   ```kotlin
   val message: String = "Hello, Kotlin!"
   ```

   - **Lazy Initialization:**
     - Use `by lazy` for lazy initialization of variables.

   ```kotlin
   val lazyValue: String by lazy {
       // Initialization code
       "Lazy Initialized Value"
   }
   ```
   
### 3. Data Types:
   - **Primitive Types:** Similar to Java.
     - `Int`, `Long`, `Short`, `Byte`, `Float`, `Double`, `Char`, `Boolean`.

   ```kotlin
   val age: Int = 25
   val price: Double = 29.99
   val isStudent: Boolean = true
   ```

   - **Strings:**
     - Use double-quoted strings.
     - String interpolation using `$` or `${}`.

   ```kotlin
   val name = "John"
   val greeting = "Hello, $name!"
   ```

   - **Arrays:**
     - Use `Array` class or specialized types like `IntArray`.

   ```kotlin
   val numbers = arrayOf(1, 2, 3)
   val ages = intArrayOf(25, 30, 35)
   ```