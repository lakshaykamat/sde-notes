# Introduction
- **JavaScript library** for building UIs
- **Reusable components** for efficient development
- **Dynamic and interactive** web applications
- **Efficient updates** by changing only parts of the page

The React lifecycle consists of several phases that a component goes through from creation to removal. Understanding these phases helps in managing side effects, performance optimizations, and interacting with other parts of your application. Here’s a detailed explanation of each phase:

![React life](https://dotnettrickscloud.blob.core.windows.net/article/react/3720230920232432.webp)

### 1. **Mounting** (Component is being created and inserted into the DOM)

- **` constructor () `**: Called before the component is mounted. It’s used for initializing state and binding methods.
- **`static getDerivedStateFromProps(props, state)`**: Called right before rendering when new props are received. It allows the component to update its state based on props.
- **`render()`**: The only required method in a class component. It returns the JSX to be rendered.
- **`componentDidMount()`**: Invoked immediately after a component is mounted. This is where you typically perform AJAX requests, set up subscriptions, or initialize data.

### 2. **Updating** (Component is being re-rendered as a result of changes in props or state)

- **`static getDerivedStateFromProps props, state)`**: Called before each render, allowing the component to update its state in response to prop changes.
- **`shouldComponentUpdate(nextProps, nextState)`**: Determines if the component should re-render. It helps in optimizing performance by preventing unnecessary renders.
- **`render() `**: Returns the updated JSX to be rendered.
- **`getSnapshotBeforeUpdate(prevProps, prevState)`**: Called right before the DOM is updated. It allows you to capture some information (e.g., scroll position) from the DOM before the update occurs.
- **`componentDidUpdate(prevProps, prevState, snapshot)`**: Invoked immediately after the component is updated. Useful for performing operations that depend on the DOM or updated props/state.

### 3. **Unmounting** (Component is being removed from the DOM)

- **`componentWillUnmount ()`**: Invoked immediately before a component is unmounted and destroyed. It’s used for cleanup tasks such as invalidating timers, canceling network requests, or cleaning up subscriptions.

### 4. **Error Handling** (In case of errors during rendering)

- **`static getDerivedStateFromError(error)`**: Called when an error is thrown during rendering, in a lifecycle method, or in the constructor of any child component. It allows you to update the state to render an error fallback UI.
- **`componentDidCatch(error, info) `**: Called after an error has been thrown by a child component. It can be used for logging error information.

### Hooks (For functional components)

With the introduction of React Hooks, you can manage state and lifecycle events in functional components:

- **`useState()`**: Manages state in functional components.
- **`useEffect() `**: Handles side effects, replacing lifecycle methods like ` componentDidMount `, ` componentDidUpdate `, and ` componentWillUnmount `.
- **`useContext()`**: Allows access to context values in functional components.
- **`useReducer() `**: Manages complex state logic.

Each hook has its own specific use case and allows functional components to handle side effects, context, and state management effectively.