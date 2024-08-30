# Nested Class

### 1. Static Nested Class:

A static nested class in Java is a class declared inside another class but marked as `static`. Here are some key points:

- **Access to Outer Class Members:**
  - A static nested class cannot directly access the instance variables or methods of the outer class. It behaves more like a top-level class in terms of access.
  
- **Instantiation:**
  - You can instantiate a static nested class without creating an instance of the outer class. This is because it is associated with the class itself, not with instances of the class.

- **Example:**
  ```java
  public class OuterClass {
      // Outer class members

      static class StaticNestedClass {
          // Static nested class members
      }
  }
  ```

  ```java
  public class Main {
      public static void main(String[] args) {
          OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass();
      }
  }
  ```

### 2. Inner Class:

An inner class (non-static nested class) is declared without the `static` keyword. It has a more intimate relationship with the outer class. Here are some key points:

- **Access to Outer Class Members:**
  - An inner class can access both static and instance members of the outer class directly.
  - It can reference `this` to get the instance of the outer class it is associated with.

- **Instantiation:**
  - To instantiate an inner class, you need an instance of the outer class. This is because an inner class is tied to the instance of the outer class.

- **Example:**
  ```java
  public class OuterClass {
      // Outer class members

      class InnerClass {
          // Inner class members
      }
  }
  ```

  ```java
  public class Main {
      public static void main(String[] args) {
          OuterClass outerObject = new OuterClass();
          OuterClass.InnerClass innerObject = outerObject.new InnerClass();
      }
  }
  ```

### 3. Use Cases:

- **Static Nested Class:**
  - Useful when the nested class has no direct dependence on the instance of the outer class.
  - Often used for grouping related classes together.

- **Inner Class:**
  - Suitable when the nested class is closely tied to the outer class and needs access to its instance members.
  - Often used in scenarios where you need to represent a relationship, such as a container class for an outer class.

In summary, understanding the differences between static nested classes and inner classes in Java helps in choosing the appropriate type based on the requirements of your program.