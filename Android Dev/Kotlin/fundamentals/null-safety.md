# Null Safety
### Null Safety in Kotlin:

#### 1. Nullable Types:
- **Declaration:**
     - Use `?` to denote a nullable type.

```kotlin
var name: String? = "John"
```

- **Nullable and Non-Nullable Types:**
	- Non-nullable types must be explicitly declared.

```kotlin
   var name: String? = "John"  // Nullable
   var age: Int = 25           // Non-nullable
```

#### 2. Safe Calls:
- **Elvis Operator (`?:`):**
     - Provides a default value if the expression is null.

```kotlin
val length: Int = name?.length ?: 0
```

- **Safe Calls (`?.`):**
     - Executes the following statement only if the expression is non-null.

```kotlin
val upperCaseName: String? = name?.toUpperCase()
```

#### 3. Assertion Operator (`!!`):
- **Use with Caution:**
	- Asserts that the expression is non-null.

```kotlin
val length: Int = name!!.length
```

- **May Cause NPE:**
     - Should be used carefully, as it may lead to a `NullPointerException` if the expression is null.

#### 4. Safe Casts (`as?`):
- **Nullable Type Casting:**
	- Casts to a type, returning null if the cast is not possible.

   ```kotlin
   val intValue: Int? = value as? Int
   ```

#### 5. Let Function:
- **Perform Operation on Non-Null Value:**
	- Execute a block of code only if the value is non-null.

```kotlin
   name?.let {
       // Code block executed if name is non-null
       println(it.length)
   }
```

#### 6. Default Values with `?:` Operator:
   - **Provide Default Value:**
     - Use the `?:` operator to provide a default value for nullable variables.
```kotlin
val length: Int = name?.length ?: -1
```


#### 7. Collections and Nulls:
- **Filtering Nulls from Collections:**
	- Use the `filterNotNull()` function.
```kotlin
val nonNullValues: List<String> = list.filterNotNull()
```

#### 8. `Lateinit` Modifier:
- **Late Initialization:**
	- Use the `lateinit` modifier for properties that will be initialized later.


```kotlin
lateinit var name: String
```

   - **Use with Caution:**
     - Should only be used when it's guaranteed that the property will be initialized before use.