# Enum Class
In Kotlin, an `enum class` is a special type of class that represents a finite set of distinct values, often used to define a collection of constants or named values. Here's a basic overview:

1. **Declaration:**
   - Define an `enum class` using the `enum class` keyword followed by the name and a list of values in parentheses.

   ```kotlin
   enum class Color {
       RED, GREEN, BLUE
   }
   ```

2. **Properties and Methods:**
   - Each enum constant can have properties and methods.

   ```kotlin
   enum class Color(val rgb: Int) {
       RED(0xFF0000),
       GREEN(0x00FF00),
       BLUE(0x0000FF);

       fun containsRed(): Boolean = this == RED || this == PURPLE
   }
   ```

3. **Accessing Enum Constants:**
   - Access enum constants using their names.

   ```kotlin
   val redColor = Color.RED
   ```

4. **Comparison:**
   - Enums can be compared using `==` for equality checks.

   ```kotlin
   val isRed = (color == Color.RED)
   ```

5. **Enum Properties and Methods:**
   - Enum constants can have properties and methods.

   ```kotlin
   enum class Direction(val degrees: Int) {
       NORTH(0), EAST(90), SOUTH(180), WEST(270);

       fun rotate(degrees: Int): Direction {
           val newDegrees = (this.degrees + degrees) % 360
           return values().first { it.degrees == newDegrees }
       }
   }
   ```

6. **Using Enums in When Expression:**
   - Enums are commonly used in `when` expressions for exhaustive checking.

   ```kotlin
   when (direction) {
       Direction.NORTH -> println("Heading north")
       Direction.EAST -> println("Heading east")
    
   }
   ```

Enums provide a concise and expressive way to define a fixed set of values, making code more readable and less error-prone. They are often used for representing options, states, or categories with a clear and predefined set of possibilities.