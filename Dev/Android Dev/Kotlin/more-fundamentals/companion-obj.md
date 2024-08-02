# Companion object
In Kotlin, a `companion object` is a special kind of object that is tied to a class rather than to an instance of that class. It allows you to define methods and properties that are associated with the class itself rather than with instances of the class. The `companion object` is declared using the `companion` keyword.

Here's an example of using a `companion object`:

```kotlin
class MyClass {
    companion object {
        var counter = 0

        fun incrementCounter() {
            counter++
        }
    }
}

fun main() {
    // Accessing the companion object
    MyClass.incrementCounter()
    println("Counter: ${MyClass.counter}")

    // You can also access the companion object using the class instance
    val myInstance = MyClass()
    myInstance.incrementCounter()
    println("Counter from instance: ${MyClass.counter}")
}
```

In this example:

- The `MyClass` class has a `companion object` that contains a property `counter` and a method `incrementCounter`.
- You can access the `companion object` directly using the class name (`MyClass`) or using an instance of the class.
- The `companion object` is tied to the class, and there is only one instance of it, similar to a singleton.

Companion objects are often used to define static methods and properties associated with a class in a clean and organized way. They serve a similar purpose to static members in other programming languages.