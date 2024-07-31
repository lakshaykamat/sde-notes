# Generics in Kotlin
Generics in Kotlin allow you to write flexible and reusable functions and classes. They enable you to write code that can work with different types while providing type safety. Here are key concepts related to generics in Kotlin:

1. **Type Parameter Declaration:**
   - Declare a generic type by using angle brackets (`<` and `>`) and a type parameter.

   ```kotlin
   class Box<T>(val content: T)
   ```

2. **Using Generics in Functions:**
   - Apply generics to functions for flexibility with various data types.

   ```kotlin
   fun <T> printItem(item: T) {
       println(item)
   }
   ```

3. **Type Bounds:**
   - Restrict the types that can be used as generic arguments.

   ```kotlin
   fun <T : Number> square(value: T): T = value * value
   ```

4. **Generic Classes:**
   - Create classes that can work with different types.

   ```kotlin
   class Container<T>(val item: T)
   ```

5. **Generic Functions with Multiple Type Parameters:**
   - Specify multiple type parameters for enhanced flexibility.

   ```kotlin
   fun <K, V> printKeyValue(key: K, value: V) {
       println("$key: $value")
   }
   ```

6. **Reified Type Parameters:**
   - Use the `reified` keyword to access type information at runtime in inline functions.

   ```kotlin
   inline fun <reified T> checkType(value: Any) {
       if (value is T) {
           println("It's of type ${T::class.simpleName}")
       } else {
           println("It's not of type ${T::class.simpleName}")
       }
   }
   ```

Generics in Kotlin provide a powerful tool for creating versatile and type-safe code, enabling you to write functions and classes that work seamlessly with various data types while maintaining code clarity and safety.