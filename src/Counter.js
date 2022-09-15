import React from "react";
import { connect } from "react-redux";
import { increment, decrement, resetCounter } from "./actions";

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };
  reset = () => {
    this.props.resetCounter();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <button onClick={this.decrement}>&ndash;</button>
        <span className="count">{this.props.count}</span>
        <button onClick={this.increment}>+</button>
        <br></br>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = {
  increment,
  decrement,
  resetCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
