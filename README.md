# 📝 Software Developer Notes

Welcome to my curated collection of Software Development notes, resources, and projects. Whether you're just starting out or looking to deepen your expertise, this repository serves as your comprehensive guide. Explore various sections crafted to enhance your skills and knowledge across different domains of software development.

---

## 📚 Table of Contents

1. **[Development](https://github.com/lakshaykamat/sde-notes/tree/main/Development)**
   - ### Backend Development
     - [API and Auth](https://github.com/lakshaykamat/sde-notes/tree/main/Development/Backend/API%20and%20Auth): Learn about RESTful APIs, OAuth, JWT, and more.
     - [Node. Js](https://github.com/lakshaykamat/sde-notes/tree/main/Development/Backend/Nodejs): Dive into Node.js for building scalable server-side applications.
     - [Spring Boot](https://github.com/lakshaykamat/sde-notes/tree/main/Development/Backend/Spring%20Boot): Explore Spring Boot for robust and easy-to-maintain Java applications.
   - ### Frontend Development
     - [React. Js](https://github.com/lakshaykamat/sde-notes/tree/main/Development/Frontend/React): Master React.js for building dynamic and interactive UIs.
   - ### Mobile Development
     - [Android Dev](https://github.com/lakshaykamat/sde-notes/tree/main/Development/Mobile/Android%20Dev): Learn Android development from basics to advanced topics.

2. **[Learning Resources](https://github.com/lakshaykamat/sde-notes/tree/main/Learning%20Resources)**
   - [Databases](https://github.com/lakshaykamat/sde-notes/tree/main/Learning%20Resources/Databases): Comprehensive resources on SQL, NoSQL, and database design principles.
   - [Programming Languages](https://github.com/lakshaykamat/sde-notes/tree/main/Learning%20Resources/Programming%20Languages): Deepen your understanding of languages like Python, JavaScript, Java, and more.
   - [System Design](https://github.com/lakshaykamat/sde-notes/tree/main/Learning%20Resources/System%20Design): Essential concepts and best practices for designing scalable systems.

3. **[Career Preparation](https://github.com/lakshaykamat/sde-notes/tree/main/Career%20Preparation)**
   - [HR Questions](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/HR%20Questions.md): Prepare for behavioral interviews with common HR questions and tips.

4. **[Roadmaps](https://github.com/lakshaykamat/sde-notes/tree/main/Roadmap)**
   - [Databases](https://github.com/lakshaykamat/sde-notes/blob/main/Roadmap/Databases.md): A step-by-step guide to mastering databases, from basics to advanced concepts.
   - [MongoDB](https://github.com/lakshaykamat/sde-notes/blob/main/Roadmap/MongoDB.md): A step-by-step guide to mastering MongoDB
   - [Node. Js](https://github.com/lakshaykamat/sde-notes/blob/main/Roadmap/Node.md): A comprehensive roadmap for becoming a proficient Node. Js developer.
   - [Reactjs](https://github.com/lakshaykamat/sde-notes/blob/main/Roadmap/Reactjs.md)

---
## Javascript Interview Questions
### 1. What is JavaScript?

**Answer:**  
JavaScript is a high-level, interpreted scripting language that is used to create and control dynamic website content, like interactive forms, animations, and other user interactions on web pages. It is a core technology of the web, alongside HTML and CSS.

### 2. What are variables in JavaScript? How do you declare them?

**Answer:**  
Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, and `const`.

```javascript
var name = 'John';  // function-scoped
let age = 30;       // block-scoped
const city = 'New York'; // block-scoped and read-only
```

### 3. What are JavaScript operators?

**Answer:**  
Operators are used to perform operations on variables and values. JavaScript supports various types of operators including:

- Arithmetic (`+`, `-`, `*`, `/`)
- Comparison (`==`, `===`, `!=`, `!==`, `>`, `<`)
- Logical (`&&`, `||`, `!`)
- Assignment (`=`, `+=`, `-=`, etc.)

### 4. What are functions in JavaScript?

**Answer:**  
Functions are blocks of code designed to perform a particular task. They are executed when they are called (invoked).

```javascript
function greet(name) {
  return 'Hello, ' + name;
}
console.log(greet('Alice')); // Hello, Alice
```

### 5. What are arrays in JavaScript?

**Answer:**  
Arrays are used to store multiple values in a single variable. They are a special type of object in JavaScript.

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Apple
```

### 6. What is an object in JavaScript?

**Answer:**  
Objects are collections of properties, where each property is defined as a key-value pair. They are used to store various keyed collections and more complex entities.

```javascript
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
console.log(person.name); // John
```

### 7. What is the purpose of `typeof` operator in JavaScript?

**Answer:**  
The `typeof` operator is used to determine the type of a variable.

```javascript
Console.Log (typeof 42); // number
Console.Log (typeof 'Hello'); // string
Console.Log (typeof true); // boolean
Console.Log (typeof undefined); // undefined
Console.Log (typeof null); // object
Console.Log (typeof {}); // object
Console.Log (typeof []); // object (arrays are objects)
Console.Log (typeof function (){}); // function
```

### 8. What is NaN in JavaScript?

**Answer:**  
`NaN` stands for Not-a-Number. It is a value representing a computational error.

```javascript
Console.Log (0 / 0); // NaN
Console.Log (Number ('abc')); // NaN
```

### 9. What is the use of `isNaN` function?

**Answer:**  
The `isNaN` function determines whether a value is NaN (Not-a-Number).

```javascript
Console.Log (isNaN (NaN)); // true
Console.Log (isNaN ('abc')); // true
Console.Log (isNaN (123)); // false
```

### 10. What are template literals in JavaScript?

**Answer:**  
Template literals are string literals that allow embedded expressions. They are enclosed by backticks (`` ` ``) instead of quotes.

```javascript
Let name = 'John';
Let message = `Hello, ${name}!`;
Console.Log (message); // Hello, John!
```

### 11. What are conditionals in JavaScript?

**Answer:**  
Conditionals are used to perform different actions based on different conditions. JavaScript supports `if`, `else if`, `else`, and `switch` statements.

```javascript
Let age = 20;
If (age >= 18) {
  Console.Log ('Adult');
} else {
  Console.Log ('Minor');
}
```

### 12. What are loops in JavaScript?

**Answer:**  
Loops are used to execute a block of code multiple times. JavaScript supports `for`, `while`, and `do... While` loops.

```javascript
For (let i = 0; i < 5; i++) {
  Console.Log (i);
}
```

### 13. What is the difference between `for` and `for... In` loops?

**Answer:**

- `for` loop is used to iterate over the values in an array or other iterable objects.
- `for... In` loop is used to iterate over the properties of an object.

```javascript
Let array = [10, 20, 30];
For (let i = 0; i < array. Length; i++) {
  Console.Log (array[i]); // 10, 20, 30
}

Let object = { a: 1, b: 2, c: 3 };
For (let key in object) {
  Console.Log (key, object[key]); // a 1, b 2, c 3
}
```

### 14. What is a switch statement in JavaScript?

**Answer:**  
The `switch` statement is used to perform different actions based on different conditions.

```javascript
Let fruit = 'apple';
Switch (fruit) {
  Case 'banana':
    Console.Log ('Banana is yellow');
    Break;
  Case 'apple':
    Console.Log ('Apple is red');
    Break;
  Default:
    Console.Log ('Unknown fruit');
}
```

### 15. What is an immediately invoked function expression (IIFE)?

**Answer:**  
An IIFE is a function that runs as soon as it is defined. It is often used to create a private scope to avoid variable hoisting and conflicts.

```javascript
(function () {
  Console.Log ('IIFE executed');
})();
```

### 16. What is the DOM?

**Answer:**  
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

### 17. What is an event in JavaScript?

**Answer:**  
An event is an action or occurrence detected by the browser, such as a mouse click, a key press, or the loading of a web page. Events are used to trigger JavaScript functions to run.

```javascript
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});
```

### 18. What is the difference between `window.onload` and `document.ready`?

**Answer:**

- `window.onload` is an event that fires when the entire page, including all dependent resources such as stylesheets and images, has loaded.
- `document.ready` (often used with libraries like jQuery) fires when the DOM is fully loaded, without waiting for stylesheets, images, and other resources to finish loading.

```javascript
window.onload = function() {
  console.log('Window loaded');
};

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
});
```

### 19. What are the different types of pop-up boxes available in JavaScript?

**Answer:**  
JavaScript provides three types of pop-up boxes:

- `alert()`: Displays a message with an OK button.
- `confirm()`: Displays a message with OK and Cancel buttons, returning true if OK is pressed and false otherwise.
- `prompt()`: Displays a message with a text input field and OK and Cancel buttons, returning the input value or null if Cancel is pressed.

```javascript
alert('This is an alert box.');
let result = confirm('Do you want to continue?');
let name = prompt('What is your name?');
```

### 20. What are JavaScript data structures?

**Answer:**  
JavaScript provides several built-in data structures:

- **Arrays:** Ordered collections of elements.
- **Objects:** Collections of key-value pairs.
- **Sets:** Collections of unique values.
- **Maps:** Collections of key-value pairs where keys can be any data type.

```javascript
let array = [1, 2, 3];
let object = { name: 'Alice', age: 25 };
let set = new Set([1, 2, 3]);
let map = new Map([['key1', 'value1'], ['key2', 'value2']]);
```

### 21. How do you create an object in JavaScript?

**Answer:**  
Objects can be created using object literals, the `Object` constructor, or the `class` syntax introduced in ES 6.

```javascript
// Object literal
let obj1 = {
  name: 'Alice',
  age: 25
};

// Object constructor
let obj2 = new Object();
obj2.name = 'Bob';
obj2.age = 30;

// ES6 class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let obj3 = new Person('Charlie', 35);
```

### 22. What is JSON and how is it used?

**Answer:**  
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is used to exchange data between a server and a web application.

```javascript
// JSON string
let jsonString = '{"name": "Alice", "age": 25}';

// Parse JSON string to object
let obj = JSON.parse(jsonString);
console.log(obj.name); // Alice

// Convert object to JSON string
let newJsonString = JSON.stringify(obj);
console.log(newJsonString); // {"name":"Alice","age":25}
```

### 23. What are JavaScript events and how are they handled?

**Answer:**  
JavaScript events are actions that occur in the browser, such as clicks, key presses, or form submissions. Events are handled by assigning event listeners to HTML elements.

```javascript
// Add event listener
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});

// Inline event handler
<button onclick="alert('Button clicked!')">Click me</button>
```

### 24. What is the difference between `innerHTML` and `innerText`?

**Answer:**

- `innerHTML` retrieves or sets the HTML content inside an element.
- `innerText` retrieves or sets the text content inside an element, ignoring any HTML tags.

```javascript
let div = document.createElement('div');
div.innerHTML = '<p>Hello, <b>world</b>!</p>';
console.log(div.innerHTML); // <p>Hello, <b>world</b>!</p>
console.log(div.innerText); // Hello, world!
```

### 25. What are callback functions in JavaScript?

**Answer:**  
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action or routine.

```javascript
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!
```

### 26. What is the use of `addEventListener` in JavaScript?

**Answer:**  
`addEventListener` is used to attach an event handler to a specified element. It allows multiple event handlers for the same event and can be removed later with `removeEventListener`.

```javascript
function handleClick() {
  alert('Button clicked!');
}

document.getElementById('myButton').addEventListener('click', handleClick);
```

### 27. What is the `this` keyword in JavaScript?

**Answer:**  
The `this` keyword refers to the object that is executing the current function. Its value can change depending on the context in which the function is called.

```javascript
let person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // Hello, Alice
```

### 28. What are prototypes in JavaScript?

**Answer:**  
Prototypes are objects from which other objects inherit properties. Every JavaScript object has a prototype, which is used for inheritance.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};

let alice = new Person('Alice');
alice.greet(); // Hello, Alice
```

### 29. What is the difference between `call`, `apply`, and `bind`?

**Answer:**

- `call` invokes a function with a given `this` value and arguments provided individually.
- `apply` invokes a function with a given `this` value and arguments provided as an array.
- `bind` returns a new function, where `this` is bound to the provided value, allowing for partial application of function arguments.

```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

let person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Hello, Alice!
greet.apply(person, ['Hi', '!']); // Hi, Alice!
let boundGreet = greet.bind(person, 'Hey');
boundGreet('!'); // Hey, Alice!
```

### 30. What are JavaScript Promises?

**Answer:**  
Promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. Promises have three states: `pending`, `fulfilled`, and `rejected`.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise.then((message) => {
  console.log(message); // 'Success!' after 1 second
});
```

## Javascript Coding Problems
| #   | Question                                                         | Difficulty  |
|-----|------------------------------------------------------------------|-------------|
| 1   | [Write a function in JavaScript to remove duplicate elements from an array.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/removeDuplicates.js) | Easy        |
| 2   | [Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/sortEvenNumbers.js) | Easy        |
| 3   | [Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/palindrome.js) | Easy        |
| 4   | [Write a JavaScript program to find the maximum number in an array.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/maxNumber.js) | Easy        |
| 5   | [Write a JavaScript function to check if a given number is prime.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/isPrimeNumber.js)  | Easy      |
| 6   | [Write a JavaScript function to print the Fibonacci series up to the nth number.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/fibonacci.js) | Easy      |
| 7   | [Write a JavaScript program to calculate the factorial of a given number.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/factorial.js) | Easy      |

## 🌟 Highlights

- **Up-to-Date Content**: Regular updates with the latest best practices, tools, and technologies.
- **Structured Learning**: Organized notes and resources to guide you through different levels of complexity.
- **Project-Based Learning**: Apply your knowledge with hands-on projects and challenges.

---

## 🚀 Getting Started

To get the most out of these notes:

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/lakshaykamat/sde-notes.git
   ```
2. **Explore a Section**:  
   ```bash
   cd sde-notes/Development
   ```
3. **Start Learning**:  
   Dive into the markdown files and expand your expertise!

---

## 🎯 Contributing

Your contributions are valuable! If you find any errors, have suggestions, or want to add new content, feel free to open an issue or submit a pull request. Check out the [contribution guidelines](https://github.com/lakshaykamat/sde-notes/blob/main/CONTRIBUTING.md) for more details.

---

## 📬 Contact

Have questions or feedback? Reach out via [email](mailto:lakshaykamat.dev@gmail.com) or open an issue.

---

Happy Learning! 🚀