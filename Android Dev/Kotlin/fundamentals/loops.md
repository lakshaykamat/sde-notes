# Loops in Kotlin
### 1. `for` loop:

```kotlin
// Iterating over a range
for (i in 1..5) {
    println("Iteration $i")
}

// Iterating over a collection
val items = listOf("Apple", "Banana", "Orange")
for (item in items) {
    println("Fruit: $item")
}
```

### 2. `while` loop:

```kotlin
// Simple while loop
var count = 0
while (count < 5) {
    println("Count: $count")
    count++
}
```

### 3. `do-while` loop:

```kotlin
// Simple do-while loop
var num = 0
do {
    println("Number: $num")
    num++
} while (num < 5)
```

### 4. `forEach` loop (for collections):

```kotlin
val fruits = listOf("Apple", "Banana", "Orange")
fruits.forEach {
    println("Fruit: $it")
}
```

### 5. `repeat` function:

```kotlin
// Repeat a block of code a specific number of times
repeat(3) {
    println("This will be repeated 3 times")
}
```

Choose the loop construct that best fits your use case. 
- The `for` loop is versatile and can handle a variety of scenarios. 
- The `while` and `do-while` loops are useful for situations where you want to repeat a block of code based on a condition. 
- The `forEach` loop is specifically designed for iterating over collections. 
- The `repeat` function is handy when you want to execute a block of code a specified number of times.