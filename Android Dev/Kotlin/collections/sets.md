# Sets in Kotlin
>  Sets are collections that store unique elements. 

They do not allow duplicate elements, maintaining the uniqueness of their contents. 

Kotlin offers both immutable (`Set`) and mutable (`MutableSet`) implementations to work with sets.

### Immutable Set (`Set`):

An immutable set cannot be changed after its initialization. Once created, you cannot add or remove elements from it.

#### Initialization:

```kotlin
// Creating an immutable set
val immutableSet: Set<Int> = setOf(1, 2, 3, 4, 5)
```

#### Accessing Elements:

```kotlin
println(immutableSet.contains(3)) // Checking if 3 is in the set
```

#### Iterating through the Set:

```kotlin
for (number in immutableSet) {
    println(number)
}
```

### Mutable Set (`MutableSet`):

A mutable set allows modifications after its initialization. You can add, remove, or update elements in a mutable set.

#### Initialization:

```kotlin
// Creating a mutable set
val mutableSet: MutableSet<Int> = mutableSetOf(1, 2, 3, 4, 5)
```

#### Adding and Removing Elements:

```kotlin
mutableSet.add(6) // Adding an element
mutableSet.remove(3) // Removing an element
```

#### Iterating through the Mutable Set:

```kotlin
for (number in mutableSet) {
    println(number)
}
```

#### Converting Mutable to Immutable Set and Vice Versa:

You can convert a mutable set to an immutable set and vice versa:

```kotlin
val immutableConvertedSet: Set<Int> = mutableSet.toSet() // Convert mutable set to immutable set
val mutableConvertedSet: MutableSet<Int> = immutableSet.toMutableSet() // Convert immutable set to mutable set
```

Sets provide set-specific operations like union, intersection, difference, etc., allowing you to perform set operations such as combining sets, finding common elements, or removing elements from one set that exist in another. These operations can be quite useful when working with sets in Kotlin.