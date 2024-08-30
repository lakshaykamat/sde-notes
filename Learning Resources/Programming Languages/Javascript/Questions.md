### 1. What are the different data types present in JavaScript?
JavaScript has seven primitive data types: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, and `BigInt`. Additionally, there is the `Object` data type which can include arrays, functions, and other objects.
### 2. What is the difference between `undefined` and `null`?
`undefined` means a variable has been declared but not yet assigned a value. `null` is an assignment value that represents no value.

### 3. What are closures in JavaScript?
A closure is a function that retains access to its outer scope, even after the outer function has finished executing. This allows the function to have private variables.
```javascript
function outerFunction() {
  let outerVariable = 'I am outside!';
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Logs: I am outside!

```
### 4. What is `this` keyword in JavaScript?
`this` refers to the context in which a function is called. In global context, `this` refers to the global object (window in browsers), but its value can change depending on how and where it is used.

### 5. Explain event delegation.
Event delegation is a technique of handling events efficiently by attaching a single event listener to a parent element, instead of attaching multiple listeners to child elements. The event listener can use the event object's properties to determine the target element.
```javascript
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target && event.target.matches('button.classname')) {
    console.log('Button clicked!');
  }
});
```