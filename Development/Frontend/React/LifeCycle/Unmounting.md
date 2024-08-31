# 3. Unmounting

The unmounting phase occurs when a component is being removed from the DOM. This phase involves cleanup operations to ensure that resources are properly released and there are no memory leaks or unwanted side effects.

## 3.1 `componentWillUnmount()`

- **Purpose**: This method is called immediately before a component is unmounted and destroyed. It is used to perform cleanup tasks and release any resources that the component was using.
- **Usage**:
  - **Cleanup**: This is where you should clean up timers, cancel network requests, or remove any subscriptions or event listeners that were set up in `componentDidMount()` or other lifecycle methods.
  - **No Return Value**: Unlike other lifecycle methods, `componentWillUnmount()` does not return any value. Its purpose is purely to perform cleanup tasks.
- **Example**:
  ```javascript
  class MyComponent extends React.Component {
    componentDidMount() {
      this.timer = setInterval(() => this.tick(), 1000);
      this.subscription = someApi.subscribe(this.handleUpdate);
    }
    
    componentWillUnmount() {
      clearInterval(this.timer);
      this.subscription.unsubscribe();
    }
    
    tick() {
      // Update state or perform some action
    }
    
    handleUpdate(data) {
      // Handle updates from the subscription
    }
    
    render() {
      return <div>Content</div>;
    }
  }
  ```

### Summary

- **componentWillUnmount ()**: Invoked immediately before a component is unmounted. It is used for cleanup tasks such as invalidating timers, canceling network requests, or cleaning up subscriptions.