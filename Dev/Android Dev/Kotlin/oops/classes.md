# Classes in Kotlin
- A class is a blueprint for creating objects. 
- It defines a template that specifies the properties and behavior of objects created from it.

1. **Class Declaration:**
   - Declare a class using the `class` keyword.

    ```kotlin
    class Car {
        // Class properties and methods go here
    }
    ```

2. **Properties:**
   - Define properties (attributes or fields) using `val` (read-only) or `var` (mutable).

    ```kotlin
    class Car {
        val brand: String = "Toyota"
        var model: String = "Camry"
    }
    ```

3. [[constructor|Constructor:]]
   - Define a primary constructor directly in the class header. It can have parameters.

    ```kotlin
    class Car(val brand: String, var model: String) {
        // Class body
    }
    ```

   - Secondary constructors can be defined using the `constructor` keyword.

    ```kotlin
    class Car {
        var brand: String
        var model: String

        constructor(brand: String, model: String) {
            this.brand = brand
            this.model = model
        }
    }
    ```

4. **Initialization Blocks:**
   - Use `init` blocks to execute code during object initialization.
   - Runs after creation of object

    ```kotlin
    class Car(val brand: String, var model: String) {
        init {
            println("Car initialized with brand: $brand, model: $model")
        }
    }
    ```

5. **Methods:**
   - Define methods (functions) inside the class.

    ```kotlin
    class Car(val brand: String, var model: String) {
        fun startEngine() {
            println("Engine started!")
        }

        fun stopEngine() {
            println("Engine stopped!")
        }
    }
    ```

6. **Inheritance:**
   - Use the `: SuperClass()` syntax for inheritance.

    ```kotlin
    open class Vehicle(val brand: String)

    class Car(brand: String, var model: String) : Vehicle(brand)
    ```

   - `open` keyword allows the class to be extended.

7. **[[visibility-modifiers|Visibility Modifiers]]:**
   - Control the visibility of properties and methods using visibility modifiers: `public` (default), `private`, `protected`, `internal`.

    ```kotlin
    class Car {
        private var fuelLevel: Int = 100

        private fun refuel(amount: Int) {
            fuelLevel += amount
        }
    }
    ```

8. **[[data-classes|Data Classes:]]**
   - Use data classes for creating classes that are primarily used for holding data.

    ```kotlin
    data class Person(val name: String, val age: Int)
    ```

   - The `data` keyword automatically generates `toString()`, `equals()`, `hashCode()`, and `copy()` methods.

9. **[[singletons-object|Singletons]]**
   - Create a singleton object using the `object` keyword.

    ```kotlin
    object Logger {
        fun log(message: String) {
            println(message)
        }
    }
    ```

   - Singleton objects are used to create a single instance of a class.