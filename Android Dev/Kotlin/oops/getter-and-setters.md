# Getters and Setters
In Kotlin, getters and setters are automatically generated for properties. However, you can customize them if needed.

### Default Getters and Setters:

By default, properties in Kotlin have automatically generated getters and setters. Here's an example:

```kotlin
class Person {
    var name: String = ""
        // Automatically generated getter
        get() {
            println("Getting name")
            return field
        }
        // Automatically generated setter
        set(value) {
            println("Setting name")
            field = value
        }
}
```

In this example, the `name` property has a default getter and setter. The `field` keyword refers to the backing field generated automatically.

### Custom Getters and Setters:

You can also provide custom getters and setters if you need additional logic:

```kotlin
class Person {
    var age: Int = 0
        // Custom getter
        get() {
            println("Getting age")
            return field
        }
        // Custom setter
        set(value) {
            println("Setting age")
            field = if (value >= 0) value else 0
        }
}
```

In this example, the `age` property has a custom getter and setter. The setter ensures that the age is never set to a negative value.

### Usage:

```kotlin
fun main() {
    val person = Person()

    // Using default getter and setter
    person.name = "Alice"
    println("Name: ${person.name}")

    // Using custom getter and setter
    person.age = -5
    println("Age: ${person.age}")
}
```

These examples demonstrate how to use default and custom getters and setters in Kotlin properties. The `field` keyword is used to refer to the automatically generated backing field.