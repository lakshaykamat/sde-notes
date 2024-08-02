# Maps in Kotlin

> `Map` is a collection that holds key-value pairs. 

Each key in a map is unique, and it's used to retrieve the corresponding value. 

Kotlin provides both immutable (`Map`) and mutable (`MutableMap`) implementations to work with maps.

### Immutable Map (`Map`):

An immutable map cannot be changed after its initialization. Once created, you cannot add, remove, or update key-value pairs in it.

#### Initialization:

```kotlin
// Creating an immutable map
val immutableMap: Map<String, Int> = mapOf(
    "one" to 1,
    "two" to 2,
    "three" to 3
)
```

#### Accessing Elements:

```kotlin
println(immutableMap["two"]) // Accessing value by key
println(immutableMap.getOrDefault("four", -1)) // Accessing value by key with default value if key not present
```

#### Iterating through the Map:

```kotlin
for ((key, value) in immutableMap) {
    println("$key -> $value")
}
```

### Mutable Map (`MutableMap`):

A mutable map allows modifications after its initialization. You can add, remove, or update key-value pairs in a mutable map.

#### Initialization:

```kotlin
// Creating a mutable map
val mutableMap: MutableMap<String, Int> = mutableMapOf(
    "one" to 1,
    "two" to 2,
    "three" to 3
)
```

#### Adding and Removing Elements:

```kotlin
mutableMap["four"] = 4 // Adding a key-value pair
mutableMap.remove("two") // Removing a key-value pair by key
```

#### Iterating through the Mutable Map:

```kotlin
for ((key, value) in mutableMap) {
    println("$key -> $value")
}
```

#### Converting Mutable to Immutable Map and Vice Versa:

You can convert a mutable map to an immutable map and vice versa:

```kotlin
val immutableConvertedMap: Map<String, Int> = mutableMap.toMap() // Convert mutable map to immutable map
val mutableConvertedMap: MutableMap<String, Int> = immutableMap.toMutableMap() // Convert immutable map to mutable map
```

Maps offer methods for various operations like `keys`, `values`, `entries`, etc., which allow you to retrieve keys, values, or key-value pairs from the map. 

Additionally, map operations like `filterKeys`, `filterValues`, `mapKeys`, and `mapValues` enable you to perform transformations on maps efficiently. These operations are helpful when dealing with map data structures in Kotlin.