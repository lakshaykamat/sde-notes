# Methods
In object-oriented programming (OOP) with Kotlin, methods are functions that are associated with an object or a class. Methods define the behavior of an object or class and are used to perform actions or provide functionality. Here's an overview of methods in Kotlin:

1. **Instance Methods:**
   - Instance methods are associated with an instance of a class (object).
   - They can access and modify the instance's properties.
   - Declared using the `fun` keyword inside the class.

    ```kotlin
    class MyClass {
        var property: Int = 0

        fun myMethod() {
            // Method code
            println("My Method")
        }
    }
    ```

2. **Static (Companion Object) Methods:**
   - Static methods are associated with the class itself rather than an instance.
   - In Kotlin, static methods are often defined inside a companion object.
   - Accessed using the class name.

    ```kotlin
    class MyClass {
        companion object {
            fun staticMethod() {
                // Static method code
                println("Static Method")
            }
        }
    }
    ```

3. **Extension Functions:**
   - Extension functions allow adding new functionality to existing classes without modifying their code.
   - Declared outside the class, using the `fun` keyword.

    ```kotlin
    fun String.myExtensionFunction() {
        // Extension function code
        println("Extension Function")
    }
    ```

4. **Infix Functions:**
   - Infix functions allow a more concise syntax when calling a function with a single parameter.
   - Declared using the `infix` keyword.

    ```kotlin
    infix fun Int.myInfixFunction(other: Int): Int {
        // Infix function code
        return this + other
    }
    ```
