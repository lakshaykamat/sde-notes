# 1. Mounting
> (Component is being created and inserted into the DOM)

The mounting phase in React is when a component is being created and inserted into the DOM for the first time. Here’s a detailed explanation of each method in this phase:

## 1.1 `constructor ()`

- **Purpose**: The `constructor()` method is a special method that is called before the component is mounted. It is used for initializing state and binding event handler methods.
- **Usage**:
  - **Initialization**: You can initialize the component’s state here by setting `this.state`.
  - **Binding Methods**: It’s common to bind event handler methods to the component instance here, ensuring that `this` refers to the correct context.
- **Example**:
  ```javascript
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState({ count: this.state.count + 1 });
    }
    
    render() {
      return <button onClick={this.handleClick}>Click me</button>;
    }
  }
  ```
  - **Note**: `super(props)` is required to access `this.props` in the constructor.

## 1.2 static `getDerivedStateFromProps (props, state)`

- **Purpose**: This static method is called right before rendering when new props are received. It allows you to update the component’s state based on the incoming props.
- **Usage**:
  - **Derived State**: Use this method to derive state from props, especially when the state needs to be synchronized with changes in props.
  - **Returns**: It returns an object to update the state or `null` if no state update is needed.
- **Example**:
  ```javascript
  class MyComponent extends React.Component {
    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.someValue !== prevState.someValue) {
        return {
          someValue: nextProps.someValue
        };
      }
      return null;
    }
    
    render() {
      return <div>{this.state.someValue}</div>;
    }
  }
  ```

## 1.3 `render () `

- **Purpose**: The `render()` method is required in all class components. It returns the JSX that represents the component's UI.
- **Usage**:
  - **UI Representation**: The `render()` method must return a single React element (or `null`). It is responsible for describing what the UI should look like.
  - **JSX**: You use JSX syntax to describe the structure and content of the UI.
- **Example**:
  ```javascript
  class MyComponent extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, World!</h1>
          <p>{this.props.message}</p>
        </div>
      );
    }
  }
  ```

## 1.4 `componentDidMount ()`

- **Purpose**: The `componentDidMount()` method is invoked immediately after a component is mounted (inserted into the DOM). It’s a good place to perform side effects like data fetching or subscriptions.
- **Usage**:
  - **AJAX Requests**: Initiate AJAX requests to fetch data required for the component.
  - **Subscriptions**: Set up any subscriptions or event listeners.
  - **Initial Setup**: Perform any additional setup or configuration that requires interaction with the DOM or external APIs.
- **Example**:
  ```javascript
  class MyComponent extends React.Component {
    componentDidMount() {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }
    
    render() {
      return (
        <div>
          {this.state.data ? <p>{this.state.data.someValue}</p> : <p>Loading...</p>}
        </div>
      );
    }
  }
  ```

### Summary

- **constructor ()**: Initializes state and binds methods.
- **getDerivedStateFromProps ()**: Updates state based on new props before rendering.
- **render ()**: Returns the JSX to be rendered.
- **componentDidMount ()**: Performs setup tasks immediately after the component is added to the DOM.