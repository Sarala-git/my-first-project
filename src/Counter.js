import React, { Component } from 'react';
class Counter extends Component {
  state = { count: 0 };  // state declared inside the class
  incrementCount = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div>
        <h1>Counter using Class Component</h1>
      <h2>Counter using Class Component using pull </h2>
        <p>Count: {this.state.count}</p>
<button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default Counter;
export default Counter;
