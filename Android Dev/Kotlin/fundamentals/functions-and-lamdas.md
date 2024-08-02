# Functions and Lamdas in Kotlin
### Functions in Kotlin:

#### 1. Function Declaration:
- Define functions using the `fun` keyword.

```kotlin
fun greet() {
	println("Hello, Kotlin!")
}
```

#### 2. Function with Parameters:
- Declare function parameters and specify their types.

```kotlin
   fun greet(name: String) {
       println("Hello, $name!")
   }
```

#### 3. Function with Return Type:
- Specify the return type after the colon `:`.

   ```kotlin
   fun add(a: Int, b: Int): Int {
       return a + b
   }
   ```

   - **Expression Body:**
     - For concise functions with a single expression.

   ```kotlin
   fun add(a: Int, b: Int): Int = a + b
   ```

#### 4. Default Parameter Values
- Assign default values to function parameters.

   ```kotlin
   fun greet(name: String = "Kotlin") {
       println("Hello, $name!")
   }
   ```

#### 5. Named Parameters:
- Specify parameter names when calling a function.

   ```kotlin
   greet(name = "John")
   ```

#### 6. Variable Number of Arguments
- Use the `vararg` modifier for variable-length arguments.

   ```kotlin
   fun printNumbers(vararg numbers: Int) {
       for (number in numbers) {
           println(number)
       }
   }
   ```

![[lambdas]]