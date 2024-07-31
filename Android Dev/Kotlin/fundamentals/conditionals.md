# Conditionals in Kotlin
Conditional statements are used to control the flow of a program based on certain conditions. The primary conditional statements are `if`, `else if`, and `else`. Additionally, Kotlin introduces the `when` expression for more flexible and concise branching. Here's an overview:

## 1. If Statement
   - The basic form of the `if` statement:

```kotlin
val x = 10

if (x > 5) {
	println("x is greater than 5")
}
```

## 2. If-Else Statement:
   - Including an `else` block for alternative execution:

```kotlin
val y = 3

if (y > 5) {
    println("y is greater than 5")
} else {
    println("y is not greater than 5")
}
```

## 3. Else-If Ladder
   - Handling multiple conditions using `else if`:

```kotlin
val grade = 75

if (grade >= 90) {
    println("A")
} else if (grade >= 80) {
    println("B")
} else if (grade >= 70) {
    println("C")
} else {
    println("D")
}
```

## 4. When Expression
- A more concise and powerful alternative to `switch` in other languages:

```kotlin
val day = 3

when (day) {
	1 -> println("Monday")
	2 -> println("Tuesday")
	in 3..5 -> println("Weekday")
	else -> println("Weekend")
}
```

- `when` can be used as an expression, allowing it to return a value:

```kotlin
    val result = when (day) {
        1 -> "Monday"
        2 -> "Tuesday"
        in 3..5 -> "Weekday"
        else -> "Weekend"
    }
```

- `when` without an argument can be used as a more powerful replacement for `if-else if`:

```kotlin
    val hourOfDay = 15

    when {
        hourOfDay < 12 -> println("Good morning!")
        hourOfDay < 18 -> println("Good afternoon!")
        else -> println("Good evening!")
    }
```
