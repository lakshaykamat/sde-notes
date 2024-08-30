# Inheritance
In Kotlin, inheritance is achieved using and subclass. Here's ang the `class` keyword and the concept of a superclas example:

```kotlin
// Superclass or Parent class
open class Animal(val name: String) {
    open fun makeSound() {
        println("Some generic animal sound")
    }
}

// Subclass or Child class
class Cat(name: String) : Animal(name) {
    override fun makeSound() {
        println("Meow!")
    }
}
```

In this example:

- `Animal` is the superclass, and it's marked as `open` to allow it to be inherited.
- `Cat` is the subclass, and it inherits from `Animal` using `: Animal(name)`.
- The `makeSound` function in `Animal` is marked as `open` to allow it to be overridden.
- The `makeSound` function in `Cat` overrides the one in `Animal`.

Usage:

```kotlin
fun main() {
    val genericAnimal = Animal("Generic Animal")
    val cat = Cat("Whiskers")

    genericAnimal.makeSound()  // Output: Some generic animal sound
    cat.makeSound()            // Output: Meow!
    println("Cat's name: ${cat.name}")  // Output: Cat's name: Whiskers
}
```

Key points:

- Use `open` to mark a class or function as inheritable or overrideable.
- Use `: Superclass()` to inherit from a superclass.
- Use `override` to indicate that a function is intended to override a function in the superclass.

Kotlin supports single inheritance, meaning a class can inherit from only one superclass. If you need multiple inheritance-like behavior, you can use interfaces.