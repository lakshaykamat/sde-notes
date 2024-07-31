# Nested Class
In Kotlin, you can define a class inside another class, creating a nested class. There are two types of nested classes in Kotlin: inner classes and static nested classes. Let's look at each type:

1. **Nested Class (Static):**
   - A nested class that is not marked as `inner` is essentially a static nested class.
   - It does not have access to the outer class instance and behaves like a regular class.
   - It can access members of the outer class only through an instance of the outer class.

   ```kotlin
   class OuterClass {
       // Outer class members

       class NestedClass {
           // Nested class members
       }
   }
   ```

   Example of using a static nested class:

   ```kotlin
   fun main() {
       val nestedObject = OuterClass.NestedClass()
   }
   ```

2. **Inner Class:**
   - An inner class is marked with the `inner` keyword.
   - It has access to the instance variables and functions of the outer class.
   - To reference the outer class instance, you can use `this@OuterClass`.

   ```kotlin
   class OuterClass {
       // Outer class members

       inner class InnerClass {
           // Inner class members

           fun innerMethod() {
               // Accessing outer class members
               println("Accessing outer class member: ${this@OuterClass.outerMethod()}")
           }
       }

       fun outerMethod(): String {
           return "Outer method"
       }
   }
   ```

   Example of using an inner class:

   ```kotlin
   fun main() {
       val outerObject = OuterClass()
       val innerObject = outerObject.InnerClass()

       innerObject.innerMethod()
   }
   ```

In summary, when you declare a nested class in Kotlin, you can choose whether it should be a static nested class or an inner class. The `inner` keyword is used to denote inner classes, and without it, the nested class is static.