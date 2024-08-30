# Abstraction
Abstraction in Kotlin is achieved through abstract classes and interfaces. An abstract class is marked with the `abstract` keyword, and it may contain both abstract (unimplemented) and concrete (implemented) members. An interface, on the other hand, only contains abstract members.

### Abstract Class:

```kotlin
// Abstract class
abstract class Shape(val name: String) {
    // Abstract property (must be implemented in subclasses)
    abstract val area: Double

    // Concrete function
    fun displayInfo() {
        println("Shape: $name")
    }
}

// Concrete subclass
class Circle(radius: Double) : Shape("Circle") {
    override val area: Double
        get() = 3.14 * radius * radius
}
```

In this example, `Shape` is an abstract class with an abstract property `area`. The `Circle` class is a concrete subclass that implements the `area` property.

### Interface:

```kotlin
// Interface
interface Soundable {
    fun makeSound()
}

// Concrete class implementing the interface
class Dog : Soundable {
    override fun makeSound() {
        println("Woof!")
    }
}
```

In this example, `Soundable` is an interface with a single abstract function `makeSound`. The `Dog` class is a concrete class that implements the `Soundable` interface.

Usage:

```kotlin
fun main() {
    // Abstract class example
    val circle = Circle(5.0)
    circle.displayInfo()
    println("Area: ${circle.area}")

    // Interface example
    val dog = Dog()
    dog.makeSound()
}
```

Key points:

- Abstract classes and interfaces are used for abstraction.
- Abstract classes can have both abstract and concrete members.
- Interfaces only contain abstract members.
- Subclasses implement abstract members of abstract classes or interfaces.

Abstraction allows you to define common structures and behaviors that can be shared among multiple classes while providing flexibility in their implementation.