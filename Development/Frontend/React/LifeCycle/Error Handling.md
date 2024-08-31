# 4. Error Handling

Error handling in React is important for managing and gracefully handling errors that occur during rendering or in lifecycle methods. React provides special lifecycle methods to handle these errors and display fallback UIs.

## 4.1 static `getDerivedStateFromError(error)`
- **Purpose**: This static method is called when an error is thrown during rendering, in a lifecycle method, or in the constructor of any child component. It allows you to update the component’s state to render a fallback UI.
- **Usage**:
  - **Error State**: Use this method to update the state of the component when an error occurs, so that you can render an error boundary UI or fallback content.
  - **Returns**: It returns an object to update the state or `null` if no state update is needed.
- **Example**:
  ```javascript
  class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
      // Update state to display fallback UI
      return { hasError: true };
    }
    
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      
      return this.props.children;
    }
  }
  ```

## 4.2 `componentDidCatch(error, info)`
- **Purpose**: This method is called after an error has been thrown by a child component. It allows you to perform additional operations such as logging error information or reporting the error to an error tracking service.
- **Usage**:
  - **Logging**: Use this method to log error details, including error messages and stack traces, which can be useful for debugging and monitoring.
  - **Error Reporting**: You can send the error details to an external error monitoring service for tracking and analysis.
- **Parameters**:
  - `error`: The error that was thrown.
  - `info`: An object with a `componentStack` property containing the stack trace of the component tree at the time of the error.
- **Example**:
  ```javascript
  class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    
    componentDidCatch(error, info) {
      // Log the error and component stack trace
      console.error("Error:", error);
      console.error("Component stack:", info.componentStack);
    }
    
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      
      return this.props.children;
    }
  }
  ```

### Summary

- **getDerivedStateFromError ()**: Called when an error occurs in the component tree, allowing the component to update its state to render a fallback UI.
- **componentDidCatch ()**: Invoked after an error is thrown by a child component, used for logging error details and performing error reporting.