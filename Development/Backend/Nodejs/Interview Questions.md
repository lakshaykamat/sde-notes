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