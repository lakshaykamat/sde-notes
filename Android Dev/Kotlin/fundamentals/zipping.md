# Zipping in Kotlin
> Zipping is a way to combine elements from two collections into pairs. 

It pairs elements from two collections based on their indices, creating a new collection of pairs where the first element of each pair comes from the first collection and the second element comes from the second collection.

### `zip` function:

The `zip` function in Kotlin is used to perform this operation on collections.

#### Example:

```kotlin
val list1 = listOf("A", "B", "C")
val list2 = listOf(1, 2, 3)

val zippedList: List<Pair<String, Int>> = list1.zip(list2)
// Result: zippedList contains [(A, 1), (B, 2), (C, 3)]
```

In this example, `list1` and `list2` are zipped together using the `zip` function, resulting in a new list of pairs (`Pair<String, Int>`), where each pair contains an element from `list1` and `list2` at the same index.

### `zipWithNext` function:

Another variation is `zipWithNext` function, which pairs each element of a collection with its next adjacent element.

#### Example:

```kotlin
val numbers = listOf(1, 2, 3, 4, 5)

val zippedWithNext: List<Pair<Int, Int>> = numbers.zipWithNext()
// Result: zippedWithNext contains [(1, 2), (2, 3), (3, 4), (4, 5)]
```

Here, `zipWithNext` pairs each element with its adjacent element in the `numbers` list, creating pairs of consecutive elements.

### Unzipping:

To unzip a collection of pairs into two separate lists, you can use the `unzip` function:

#### Example:

```kotlin
val zippedList = listOf("A" to 1, "B" to 2, "C" to 3)

val (list3, list4) = zippedList.unzip()
// Result: list3 contains ["A", "B", "C"] and list4 contains [1, 2, 3]
```

In this case, `unzip` separates the elements of the zipped list of pairs into two lists (`list3` and `list4`), where `list3` contains the first elements of each pair and `list4` contains the second elements.

Zipping and unzipping are handy operations in Kotlin when you need to work with multiple collections and combine or separate their elements based on specific criteria or indices.