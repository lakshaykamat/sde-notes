# Data Class
A `data class` is a concise way to declare a class that is primarily used for holding data. 

Data classes automatically generate several useful methods, such as `toString()`, `equals()`, `hashCode()`, and `copy()`, based on the properties declared in the primary constructor. Here's a breakdown of key points about data classes:

1. **Declaration:**
   - Declare a data class using the `data class` keyword followed by the class name and a list of properties in the primary constructor.

   ```kotlin
   data class Person(val name: String, val age: Int)
   ```

2. **Automatic Methods:**
   - Data classes automatically generate methods like `toString()`, `equals()`, `hashCode()`, and `copy()` based on the properties declared in the constructor.

   ```kotlin
   val person1 = Person("Alice", 25)
   val person2 = Person("Alice", 25)

   println(person1 == person2) // true (equals comparison)
   ```

3. **Immutability:**
   - By default, properties in a data class are `val` (read-only), promoting immutability.

   ```kotlin
   val person = Person("Bob", 30)
   // person.age = 31 // Compilation error, age is a read-only property
   ```

4. **Copy Method:**
   - The `copy` method allows you to create a new instance of the data class with some properties changed.

   ```kotlin
   val updatedPerson = person.copy(age = 31)
   ```

5. **Destructuring Declarations:**
   - Data classes can be used with destructuring declarations.

   ```kotlin
   val (name, age) = person
   ```

6. **Component Functions:**
   - Data classes automatically provide component functions `component1()`, `component2()`, etc., for destructuring.

   ```kotlin
   val name = person.component1()
   val age = person.component2()
   ```

Data classes are particularly useful for modeling simple data-holding classes, reducing boilerplate code and promoting clarity in code dealing with immutable data.