# Visibility Modifiers
- Visibility modifiers control the visibility or accessibility of classes, functions, properties, and other elements within your code. 

- They help in enforcing encapsulation, defining clear API boundaries, and managing code complexity.

There are four visibility modifiers:

1. **Public (`public`):**
   - The default visibility modifier.
   - Public elements are accessible from anywhere in the code.
   - Example:

    ```kotlin
    class MyClass {
        public val myProperty: Int = 42
    }
    ```

2. **Private (`private`):**
   - Limits the visibility to the enclosing class or file.
   - Useful for encapsulation and hiding implementation details.
   - Example:

    ```kotlin
    class MyClass {
        private val mySecret: String = "Hidden"
    }
    ```

3. **Protected (`protected`):**
   - Allows visibility within the declaring class and its subclasses.
   - Not applicable at the top level (i.e., outside of classes).
   - Example:

    ```kotlin
    open class MyBaseClass {
        protected val myProtectedProperty: Int = 42
    }

    class MyDerivedClass : MyBaseClass() {
        fun accessProtectedProperty() {
            println(myProtectedProperty)
        }
    }
    ```

4. **Internal (`internal`):**
   - Visible within the same module.
   - A module is a set of Kotlin files compiled together (e.g., a project or a library).
   - Example:

    ```kotlin
    internal class InternalClass {
        internal val internalProperty: Double = 3.14
    }
    ```