# Records in java
Records in Java are a feature introduced in Java 16 to simplify the creation of classes that are primarily used for data storage. They provide a concise syntax for defining immutable classes with a set of automatically generated methods, such as `equals()`, `hashCode()`, and `toString()`. Records are a form of a class, but they are specifically designed to model immutable data.

Here's a basic example of a record:

```java
public record Person(String name, int age) {
    // No need for explicit constructor, getters, equals, hashCode, or toString
}
```

In this example:

- The `record` keyword is used to declare a record class named `Person`.
- The record has two components: `name` and `age`.
- The compiler automatically generates a constructor, accessors (getters) for each component, an `equals()` method, a `hashCode()` method, and a `toString()` method.

With this record, you can create instances, access the components, and benefit from the automatically generated methods:

```java
Person person1 = new Person("John", 25);
Person person2 = new Person("John", 25);

System.out.println(person1); // Automatically calls toString()
System.out.println(person1.equals(person2)); // Automatically compares components using equals()
System.out.println(person1.hashCode() == person2.hashCode()); // Automatically generated hashCode()
```

Records are particularly useful when you want to create simple, immutable data-holding classes without writing boilerplate code for common methods. They are especially handy in scenarios where the primary purpose is to model data, and you don't need to add extensive behavior to the class.

It's important to note that records enforce immutability, and the components are implicitly `final`. If you need to provide additional behavior or modify the behavior of the automatically generated methods, you might consider using a regular class instead of a record.

Records are a significant addition to Java, promoting readability, conciseness, and reducing boilerplate code in certain scenarios.