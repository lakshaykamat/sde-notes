# Data classes in Kotlin
1. **Purpose:**
   - Data classes in Kotlin are designed for efficient data representation.

2. **Automatic Methods:**
   - Auto-generates `toString()`, `equals()`, `hashCode()`, and `copy()` methods.

3. **Boilerplate Reduction:**
   - Reduces boilerplate code for cleaner and more readable code.

4. **Derived Implementations:**
   - Methods are derived from primary constructor properties.

5. **Constructor Parameter:**
   - Requires at least one primary constructor parameter.

6. **Versatile Data Management:**
   - Ideal for classes handling data storage and processing.

7. **Clean Code Practices:**
   - Promotes clean code by eliminating manual method implementations.

8. **Efficient Property Management:**
   - Supports default immutability for properties.

9. **Immutable Data Structures:**
   - `copy()` method aids in creating shallow copies for immutability.

10. **Destructuring Support:**
    - Supports destructuring declarations for easy property extraction.

11. **Debugging Aid:**
    - `toString()` method aids in debugging with a readable string representation.

## Examples

```kotlin
data class Person(val name: String, val age: Int)
```

In this example, the `Person` class is a data class with two properties: `name` and `age`. The `data` keyword indicates that this class is intended for data storage.

Now, let's explore the generated methods:

1. **`toString()`:**
   - The `toString()` method returns a string representation of the object.

    ```kotlin
    val person = Person("John", 25)
    println(person) // Output: Person(name=John, age=25)
    ```

2. **`equals()`:**
   - The `equals()` method compares two objects for equality based on their property values.

    ```kotlin
    val person1 = Person("John", 25)
    val person2 = Person("John", 25)
    println(person1 == person2) // Output: true
    ```

3. **`hashCode()`:**
   - The `hashCode()` method generates a hash code for the object.

    ```kotlin
    val person = Person("John", 25)
    println(person.hashCode())
    ```

4. **`copy()`:**
   - The `copy()` method creates a shallow copy of the object, allowing you to modify specific properties while keeping the others unchanged.

    ```kotlin
    val person = Person("John", 25)
    val updatedPerson = person.copy(age = 26)
    println(updatedPerson) // Output: Person(name=John, age=26)
    ```

5. **Destructuring Declarations:**
   - Data classes support destructuring declarations, allowing you to easily extract individual properties.

    ```kotlin
    val person = Person("John", 25)
    val (name, age) = person
    println("Name: $name, Age: $age") // Output: Name: John, Age: 25
    ```
