# Constructor
In Kotlin, constructors are used to initialize the properties and perform any setup when an instance of a class is created. Kotlin supports two types of constructors: primary constructors and secondary constructors.

### Primary Constructor:

The primary constructor is defined in the class header. It is concise and allows you to declare properties directly in the class header.

```kotlin
class Person(val name: String, val age: Int) {
    // Class body
}
```

In this example, `name` and `age` are properties of the `Person` class, and they are also parameters of the primary constructor. The primary constructor initializes these properties automatically.

### Secondary Constructor:

A class can have one or more secondary constructors. They are defined inside the class body using the `constructor` keyword.

```kotlin
class Person {
    var name: String = ""
    var age: Int = 0

    // Secondary constructor
    constructor(name: String, age: Int) {
        this.name = name
        this.age = age
    }
}
```

In this example, `Person` has a secondary constructor that takes `name` and `age` as parameters and initializes the corresponding properties.

### Init Block:

Both primary and secondary constructors can include an `init` block. The `init` block is executed when an instance is created, allowing additional setup logic.

```kotlin
class Person(val name: String, val age: Int) {
    // Init block
    init {
        println("Person instance created with name: $name, age: $age")
    }
}
```

In this example, the `init` block prints a message when a `Person` instance is created.

### Usage:

```kotlin
fun main() {
    // Using primary constructor
    val person1 = Person("Alice", 25)

    // Using secondary constructor
    val person2 = Person("Bob", 30)

    // Accessing properties
    println("Person 1: ${person1.name}, ${person1.age}")
    println("Person 2: ${person2.name}, ${person2.age}")
}
```
