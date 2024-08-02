# Strings in Kotlin
strings are sequences of characters represented using the `String` class. Strings in Kotlin are immutable, meaning their content cannot be changed once they are created. Here are some fundamental aspects of working with strings in Kotlin:

### String Creation:

```kotlin
val str1 = "Hello, Kotlin!" // Using double quotes for string literals
val str2 = """Multiline
            |string
            |using triple quotes""".trimMargin() // Multiline string using triple quotes
```

### String Interpolation:

```kotlin
val name = "Alice"
val greeting = "Hello, $name!"
```

### String Concatenation:

```kotlin
val s1 = "Hello"
val s2 = "Kotlin"
val concatenated = s1 + ", " + s2 // Using concatenation
```

### String Methods:

Kotlin's `String` class provides various methods for string manipulation and retrieval:

- `length`: Returns the length of the string.
- `toUpperCase()` and `toLowerCase()`: Converts the string to upper or lower case.
- `substring(startIndex: Int, endIndex: Int)`: Extracts a substring from the given range.
- `startsWith(prefix: String)`, `endsWith(suffix: String)`: Checks if the string starts or ends with a specific substring.
- `contains(substring: CharSequence)`: Checks if the string contains a specific substring.
- `replace(oldValue: CharSequence, newValue: CharSequence)`: Replaces occurrences of a substring with another substring.
- And many more methods for various string operations.

### String Templates:

Kotlin supports string templates, allowing you to embed variables or expressions directly within strings:

```kotlin
val x = 10
val y = 20
val result = "The sum of $x and $y is ${x + y}"
```

### Raw Strings:

Kotlin's raw strings, denoted by triple quotes `"""`, allow strings to contain special characters without escaping:

```kotlin
val rawString = """
    |This is a raw string
    |It preserves formatting
    |And allows special characters like \t, \n without escaping
""".trimMargin()
```

Working with strings in Kotlin involves using the rich set of methods available in the `String` class, as well as leveraging string interpolation and raw strings for more convenient and expressive string manipulation.

Other Concepts
[[string builder and string buffer]]