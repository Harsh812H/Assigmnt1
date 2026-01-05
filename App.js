import React, { Component, useState } from "react";
import "./App.css";

/* ---------- Class Component ---------- */
class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <p className="count">{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

/* ---------- Functional Component ---------- */
function FunctionCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <p className="count">{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
    </div>
  );
}

/* ---------- Main App ---------- */
function App() {
  return (
    <div className="app">
      <h1>Assignment-2 Counter Application</h1>

      <div className="row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
