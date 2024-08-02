# Singleton Object
In Kotlin, a singleton object is a way to define a class that has only one instance. 

It is often used for creating a single point of control or for managing global state. The `object` keyword is used to declare a singleton object.

Here's an example of a simple singleton object:

```kotlin
object SingletonExample {
    var counter = 0

    fun incrementCounter() {
        counter++
    }
}

fun main() {
    // Accessing the singleton object
    SingletonExample.incrementCounter()
    println("Counter: ${SingletonExample.counter}")

    // The following won't work because you can't create instances of a singleton object
    // val instance = SingletonExample() // Compilation error
}
```

In this example:

- `SingletonExample` is a singleton object with a property `counter` and a method `incrementCounter`.
- You can access the singleton object directly without creating an instance.
- Attempts to create instances of a singleton object result in a compilation error.

Singleton objects are useful when you want a single instance of a class to coordinate actions or store shared state. They are thread-safe by default in Kotlin, making them suitable for scenarios where you need a global and thread-safe singleton instance.