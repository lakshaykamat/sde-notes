# Singleton Object
- **Singleton Definition:**
  - A singleton is an object instantiated only once in the entire application, ensuring a single point of access to its instance.

- **Creation Approaches:**
  - Various methods exist for creating singletons in Kotlin, with the `object` declaration being a common approach.

- **Usefulness of Singletons:**
  - Singletons are valuable when guaranteeing a single instance of a class throughout the application, addressing needs like managing global settings, handling logging, or offering a centralized point of control.

- **Implementation Choice:**
  - The choice of implementation depends on your specific use case and preferences. Different approaches, such as `object` declaration or companion objects, cater to various scenarios.


### 1. Object Declaration
   - The `object` keyword is used to declare a singleton.

```kotlin
    object MySingleton {
        fun doSomething() {
            println("Singleton action")
        }
    }
```

   - Usage:

    ```kotlin
    MySingleton.doSomething()
    ```

### 2. Companion Object
- The `companion object` is a singleton associated with a class.

```kotlin
    class MyClass {
        companion object {
            fun doSomething() {
                println("Companion object action")
            }
        }
    }
```
- Usage:
```kotlin
MyClass.doSomething()
```

3. **Lazy Initialization:**
   - Lazy initialization ensures the singleton is created only when accessed for the first time.

    ```kotlin
    class LazySingleton private constructor() {
        companion object {
            val instance: LazySingleton by lazy { LazySingleton() }
        }
    }
    ```

   - Usage:

    ```kotlin
    val mySingleton = LazySingleton.instance
    ```

