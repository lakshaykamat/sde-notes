# Spring
Spring Boot is a framework that simplifies the development of Java applications by providing defaults and auto-configuration, allowing developers to create standalone, production-ready applications quickly. The difference between Spring and Spring Boot is that Spring is a comprehensive framework for enterprise Java, whereas Spring Boot is a subset that simplifies configuration and deployment.

In simple terms:

- **IOC (Inversion of Control)**: It's a principle where the control of creating and managing objects is given to a container or framework, rather than being handled directly by the code.

- **DI (Dependency Injection)**: It's a design pattern used in IOC where dependencies (objects that a class needs) are provided to the class, typically through constructor or setter methods, rather than the class creating them itself. This makes the code more modular and easier to test.

### Auto
Autowiring in Spring is a feature that allows the Spring container to automatically resolve and inject dependencies into a bean. This means that you don't have to explicitly specify the dependencies; Spring will handle it for you. There are several modes of autowiring:

1. **byName**: Spring injects the dependency based on the bean name. The property name should match the bean name.
2. **byType**: Spring injects the dependency based on the type of the bean.
3. **constructor**: Similar to byType, but it uses the constructor to inject the dependencies.
4. **autodetect**: Spring first tries to use constructor injection, and if it fails, it falls back to byType.

By using autowiring, you can reduce the amount of XML configuration or annotations required to wire up your beans, making the code cleaner and more maintainable.