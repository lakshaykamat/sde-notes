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
   - [Reactjs](https://github.com/lakshaykamat/sde-notes/blob/main/Roadmap/Reactjs.md): Learn about react fundamentals and thoery will help you in cracking interviews

---
# Interview Questions
| Title                                         | Full Link                                                                                                                                    |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| [ReactJS](#react-interview-questions)         | [Link](https://github.com/lakshaykamat/sde-notes/blob/main/Development/Frontend/React/React%20Interview%20Questions.md)                      |
| [JavaScript](#javascript-interview-questions) | [Link](https://github.com/lakshaykamat/sde-notes/blob/main/Learning%20Resources/Programming%20Languages/Javascript/Interview%20Questions.md) |
| [NodeJS](#nodejs-interview-questions)         | [Link](https://github.com/lakshaykamat/sde-notes/blob/main/Development/Backend/Nodejs/Interview%20Questions.md)                              |
---

# Practical Problems
| Title                                     | Full Link                                                                                                                                |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| [Javascript](#javascript-coding-problems) | [Link](https://github.com/lakshaykamat/sde-notes/blob/main/Learning%20Resources/Programming%20Languages/Javascript/Coding%20Problems.md) |


## React Interview Questions
### 1. **What is React, and why is it used?**

**Answer:** React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive, and dynamic UI. React allows developers to build web applications that can update and render efficiently in response to data changes. It’s used because of its component-based architecture, virtual DOM, and declarative nature, which makes managing the UI state easier and improves performance.

### 2. **What are the main features of React?**

**Answer:**

- **JSX (JavaScript XML):** A syntax extension for JavaScript that allows you to write HTML directly within JavaScript, making the code easier to understand.
- **Components:** React apps are built using components, which are reusable, independent pieces of UI.
- **Virtual DOM:** React creates a virtual copy of the DOM and updates it in response to changes, which makes updates faster.
- **One-Way Data Binding:** Data flows in a single direction, making it easier to debug and track changes.
- **State Management:** React provides state management through components, allowing you to manage data and UI updates efficiently.

### 3. **What is the difference between a class component and a functional component?**

**Answer:**

- **Class Component:**
  - Uses ES 6 class syntax.
  - Can hold and manage its own state using `this.state`.
  - Uses lifecycle methods like `componentDidMount`, `shouldComponentUpdate`, etc.
- **Functional Component:**
  - A simpler way to write components using plain JavaScript functions.
  - Initially stateless, but with React Hooks, functional components can now manage state (`useState`) and side effects (`useEffect`).
  - Easier to read, write, and test compared to class components.

### 4. **What are React Hooks, and why are they important?**

**Answer:** React Hooks are functions that let you "hook into" React state and lifecycle features in functional components. They are important because they allow developers to use state and other React features without writing a class. Some of the most commonly used hooks include:

- **useState:** Manages state in a functional component.
- **useEffect:** Manages side effects like data fetching, subscriptions, or manual DOM changes.
- **useContext:** Accesses the context API to manage global state.
- **useReducer:** An alternative to `useState` for managing more complex state logic.
- Hooks promote cleaner, more reusable, and more maintainable code.

### 5. **What is the Virtual DOM, and how does it work in React?**

**Answer:** The Virtual DOM is a lightweight, in-memory representation of the real DOM elements generated by React components. When a component's state or props change, React creates a new Virtual DOM tree, compares it with the previous one (a process known as "reconciliation"), and then efficiently updates the real DOM with only the parts that have changed. This makes UI updates faster and more efficient.

### 6. **How does React handle forms and form validation?**

**Answer:** React handles forms using controlled components, where the form data is managed by the component's state. Input elements like `<input>`, `<textarea>`, and `<select>` can have their values controlled by the state, and any changes trigger events (like `onChange`) to update the state. For form validation, developers typically manage validation rules within the component's state and update the UI accordingly when the user input does not meet the criteria. Libraries like Formik and Yup are often used for more complex form handling and validation in React.

### 7. **What is the difference between state and props in React?**

**Answer:**

- **State:**
  - Managed within the component (internal).
  - Mutable, meaning it can be changed within the component.
  - Represents the dynamic data of the component.
- **Props:**
  - Passed down from parent components (external).
  - Immutable, meaning they cannot be changed by the component that receives them.
  - Used to pass data and event handlers to child components.

### 8. **What are keys in React, and why are they important?**

**Answer:** Keys are unique identifiers used by React to track which items have changed, been added, or removed in a list. They help React optimize the rendering process by minimizing re-renders. Without keys, React would re-render all list items unnecessarily. Keys should be stable and unique within the list, often derived from the data being displayed (e.g., an ID).

```jsx
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

### 9. **What is the context API in React, and when should you use it?**

**Answer:** The Context API in React is a way to manage global state across a React application without having to pass props down manually through every level of the component tree. It’s used when you have data or functions that need to be accessible by many components at different nesting levels, such as themes, user authentication, or localization.

**Usage Example:**

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Button</button>;
}
```

### 10. **What are higher-order components (HOCs) in React?**

**Answer:** A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props or behavior. HOCs are used for reusing component logic, like handling data fetching, authentication, or state management.

Example:

```js
function withLogging(WrappedComponent) {
  return function(props) {
    console.log('Rendering component');
    return <WrappedComponent {...props} />;
  };
}

const EnhancedComponent = withLogging(MyComponent);
```

Here, `withLogging` is an HOC that logs a message every time `MyComponent` renders.

### 11. **What is the difference between controlled and uncontrolled components in React?**

**Answer:**

- **Controlled Components:**
  - Form data is handled by the React component's state.
  - Every change in the form input is handled by a state update, giving React full control over the input value.
  - Easier to validate and control form data.
- **Uncontrolled Components:**
  - Form data is handled by the DOM itself, not by the component state.
  - Uses refs to access form values directly from the DOM.
  - Useful for simple forms where you don’t need to track state continuously.

```javascript
   // Controlled component
   function ControlledInput() {
     const [value, setValue] = useState("");

     return (
       <input
         type="text"
         value={value}
         onChange={(e) => setValue(e.target.value)}
       />
     );
   }

   // Uncontrolled component
   function UncontrolledInput() {
     const inputRef = useRef();

     const handleSubmit = () => {
       console.log(inputRef.current.value);
     };

     return <input type="text" ref={inputRef} />;
   }
```

### 12. **What is prop drilling, and how can it be avoided?**

**Answer:**

- **Prop Drilling**: The process of passing props down multiple levels of a component tree to reach a deeply nested component.
- **Problems**: It can make the code harder to maintain and refactor as the number of components grows.
- **Avoiding Prop Drilling**:
  - **Context API**: Use React's Context API to create a context and provide the data at a higher level, making it accessible to deeply nested components.
  - **State Management Libraries**: Use libraries like Redux, Zustand, or Recoil to manage global state.

### 13. **What are Higher-Order Components (HOCs)?**

**Answer:**

- A **Higher-Order Component (HOC)** is a function that takes a component and returns a new component with additional props or functionality.
- HOCs are useful for reusing component logic, like authentication checks, logging, or data fetching.
- Example:

```javascript
function withLogging(WrappedComponent) {
  return function(props) {
    console.log('Component rendered');
    return <WrappedComponent {...props} />;
  };
}

const EnhancedComponent = withLogging(MyComponent);
```

### 14. **What is the difference between `useEffect` and `useLayoutEffect`?**

**Answer:**

- **useEffect**: Runs asynchronously after the DOM has been updated. It’s typically used for side effects like data fetching, subscriptions, or modifying the DOM.
- **useLayoutEffect**: Runs synchronously after all DOM mutations but before the browser paints. It’s used for measuring the DOM or applying immediate changes that should happen before the user sees the update.

```javascript
useEffect(() => {
  console.log('Runs after render');
});

useLayoutEffect(() => {
  console.log('Runs before the paint');
});
```

### 15. **What are React fragments, and why would you use them?**

**Answer:**

- **React Fragments**: A way to group multiple elements without adding extra nodes to the DOM.
- Useful when you need to return multiple elements from a component but don’t want to wrap them in an extra `div` or other HTML element.
- Syntax:

```javascript
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

### 16. **What are keys in React, and why are they important?**

**Answer:**

- **Keys**: Unique identifiers used by React to track which items in a list have changed, been added, or removed.
- Keys help React optimize rendering by only updating the elements that have changed, rather than re-rendering the entire list.
- Keys should be stable, unique, and consistent across renders.

```javascript
const items = ['Apple', 'Banana', 'Cherry'];
return items.map((item, index) => <li key={index}>{item}</li>);
```

### 17. **What is the difference between `React.createElement` and JSX?**

**Answer:**

- **React. CreateElement**: A method that creates a React element, which is an object representing a DOM node or component.
- **JSX**: A syntax extension that allows you to write HTML-like code within JavaScript. JSX is syntactic sugar for `React.createElement`.
- Under the hood, JSX code is transpiled to `React.createElement` calls by tools like Babel.

```javascript
// React.createElement
const element = React.createElement('h1', null, 'Hello, world');

// JSX (which gets compiled to React.createElement)
const element = <h1>Hello, world</h1>;
```

### 18. **What is React’s reconciliation process?**

**Answer:**

- **Reconciliation**: The process React uses to compare the current Virtual DOM with the new Virtual DOM to determine the minimal number of changes needed to update the real DOM.
- **Key Concepts**:
  - **Diffing**: React compares elements by their type and key.
  - **Updates**: If an element’s type or key changes, React will unmount the old element and mount a new one.
  - **Reordering**: Elements can be moved if their position in the list changes but their key remains the same.

### 19. **How does React handle forms?**

**Answer:**

- React handles forms using controlled components, where form data is managed by the component's state.
- Every input field is controlled by a state variable, and changes are reflected by updating the state.
- Validation and submission can be easily managed within the component.

```javascript
function MyForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('A name was submitted: ' + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 20. **How can you optimize a React application?**

**Answer:**

- **Memoization**:
  - Use `React.memo` to prevent unnecessary re-renders.
  - Use `useCallback` and `useMemo` to optimize functions and computed values.
- **Code Splitting**:
  - Split code using `React.lazy` and `Suspense` to load components only when needed.
- **Virtualization**:
  - Use libraries like `react-window` or `react-virtualized` to efficiently render large lists.
- **Optimizing Re-renders**:
  - Avoid inline functions and objects as props.
  - Use immutable data structures to prevent unnecessary updates.
- **Efficient State Management**:
  - Use `useReducer` for complex state logic.
  - Consider using context or global state management libraries for shared state.

These questions and answers cover a wide range of topics in React, from basic to advanced concepts. Preparing with these will give you a strong foundation for React interviews.

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

## Nodejs Interview Questions
### 1. **What is Node. Js?**
   **Answer**: 
   Node. Js is a runtime environment that allows developers to execute JavaScript code on the server-side. It is built on the V 8 JavaScript engine, which is also used by Google Chrome, and uses an event-driven, non-blocking I/O model, making it efficient and scalable for building web applications.

### 2. **What is the difference between `require()` and `import` in Node. Js?**
   **Answer**: 
   - `require()` is the syntax used in CommonJS modules, the default module system in Node. Js. It loads modules synchronously and returns the exports object of the module.
   - `import` is part of ES Modules (ESM), introduced in ECMAScript 2015 (ES 6). It allows for static imports and is asynchronous by default. Node. Js supports both, but CommonJS is more widely used in older codebases.

### 3. **Explain the Event Loop in Node. Js.**
   **Answer**: 
   The event loop is the core of Node. Js's asynchronous behavior. It is a single-threaded loop that handles callbacks, performs non-blocking I/O operations, and processes asynchronous code. The event loop continuously checks the call stack to see if there’s any function that needs to be executed and also checks if there are any pending asynchronous operations in the callback queue.

### 4. **How does Node. Js handle asynchronous operations?**
   **Answer**: 
   Node. Js handles asynchronous operations using the event loop along with callback functions, Promises, or async/await. When an asynchronous operation is initiated, Node. Js offloads it to the system kernel or a thread pool, which then processes it and sends the result back via a callback or resolves/rejects a Promise, allowing the event loop to handle the next task without being blocked.

### 5. **What is middleware in Express. Js?**
   **Answer**: 
   Middleware functions in Express. Js are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. They can execute code, modify the request/response objects, end the request-response cycle, or call the next middleware in the stack.

### 6. **What is the difference between `process.nextTick()` and `setImmediate()`?**
   **Answer**: 
   - `process.nextTick()` schedules a callback function to be invoked in the next iteration of the event loop, before any I/O tasks.
   - `setImmediate()` schedules a callback to be executed on the next iteration of the event loop, after the I/O events have been processed.

   Essentially, `process.nextTick()` executes sooner than `setImmediate()`.

### 7. **What are streams in Node. Js?**
   **Answer**: 
   Streams are abstract interfaces in Node. Js that allow working with streaming data. There are four types of streams:
   - **Readable**: Streams from which data can be read (e.g., `fs.createReadStream`).
   - **Writable**: Streams to which data can be written (e.g., `fs.createWriteStream`).
   - **Duplex**: Streams that are both readable and writable (e.g., TCP sockets).
   - **Transform**: Streams that can modify or transform the data as it is written and read (e.g., `zlib.createGzip`).

   Streams are particularly useful for handling large files or real-time data as they allow processing of data piece by piece rather than all at once.

### 8. **How can you avoid callback hell in Node. Js?**
   **Answer**: 
   Callback hell, also known as "Pyramid of Doom," occurs when callbacks are nested within callbacks, making code difficult to read and maintain. To avoid it:
   - Use **Promises**: Promises allow chaining of asynchronous operations and provide better readability.
   - Use **async/await**: This syntactic sugar over Promises allows writing asynchronous code in a synchronous manner, making it even more readable.
   - Break down code into **smaller functions**: This makes it easier to manage and avoid deep nesting.

### 9. **What is the purpose of the `package.json` file in a Node. Js project?**
   **Answer**: 
   The `package.json` file is the manifest file of a Node. Js project. It contains metadata about the project, including the project name, version, author, dependencies, scripts, license, and other configurations. It is essential for managing project dependencies and scripts, and it allows others to easily install the project and its dependencies using npm or yarn.

### 10. **Explain the concept of clustering in Node. Js.**
   **Answer**: 
   Clustering in Node. Js is a way to scale an application by creating multiple instances (workers) of the Node. Js process that can run on multiple CPU cores. The `cluster` module allows you to spawn child processes that share the same server port, effectively allowing the application to handle more concurrent requests. Each worker is a separate Node. Js process and operates independently, but they all share the same server port.

### 11. **What is the purpose of the `Buffer` class in Node. Js?**
   **Answer**: 
   The `Buffer` class in Node. Js is used to handle binary data directly. Buffers are used when dealing with raw binary data, such as reading from a file or receiving data over a network, which cannot be handled efficiently with standard JavaScript data types like strings or arrays.

### 12. **How do you handle uncaught exceptions in Node. Js?**
   **Answer**: 
   Uncaught exceptions can be handled using the `process.on('uncaughtException', callback)` event. However, it’s generally not recommended to rely on this event for error handling because it could leave your application in an inconsistent state. Instead, you should use proper error handling in your code using `try-catch` blocks, and by using middleware for error handling in frameworks like Express.

### 13. **What is the role of the `module.exports` and `exports` in Node. Js?**
   **Answer**: 
   In Node. Js, `module.exports` and `exports` are used to expose functions, objects, or variables from a module so that they can be imported and used in other modules. `module.exports` is the object that is actually returned as the result of a `require()` call. `exports` is simply a reference to `module.exports`. You can use either to expose functionality, but if you assign a new object or function to `exports`, you should use `module.exports` instead to avoid breaking the reference.

### 14. **Explain the use of the `async` and `await` keywords in Node. Js.**
   **Answer**: 
   The `async` keyword is used to declare an asynchronous function that returns a Promise. The `await` keyword is used to pause the execution of the function until the Promise is resolved or rejected. It allows writing asynchronous code in a more readable, synchronous-looking manner. `await` can only be used inside an `async` function.

### 15. **How do you secure a Node. Js application?**
   **Answer**:
   - **Use HTTPS**: Ensure data in transit is encrypted.
   - **Data Validation and Sanitization**: Prevent SQL Injection and XSS attacks.
   - **Helmet. Js**: Secure your Express. Js apps by setting various HTTP headers.
   - **Rate Limiting**: Prevent DDoS attacks by limiting the number of requests.
   - **Authentication**: Implement secure authentication using JWT, OAuth, etc.
   - **Environment Variables**: Use environment variables to store sensitive information.

## Javascript Coding Problems
| # | Question                                                                                                                                                                                                                                | Difficulty |
|---|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1 | [Write a function in JavaScript to remove duplicate elements from an array.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/removeDuplicates.js)                                    | Easy       |
| 2 | [Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/sortEvenNumbers.js) | Easy       |
| 3 | [Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/palindrome.js)     | Easy       |
| 4 | [Write a JavaScript program to find the maximum number in an array.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/maxNumber.js)                                                   | Easy       |
| 5 | [Write a JavaScript function to check if a given number is prime.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/isPrimeNumber.js)                                                 | Easy       |
| 6 | [Write a JavaScript function to print the Fibonacci series up to the nth number.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/fibonacci.js)                                      | Easy       |
| 7 | [Write a JavaScript program to calculate the factorial of a given number.](https://github.com/lakshaykamat/sde-notes/blob/main/Career%20Preparation/javascript-questions/easy/factorial.js)                                             | Easy       |

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