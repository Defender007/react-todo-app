import React from "react";
import { connect } from "react-redux";
import {DECREMENT, INCREMENT, RESET} from './actions'

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({type: INCREMENT});
  };

  decrement = () => {
    this.props.dispatch({type: DECREMENT});
  };
  reset = () => {
    this.props.dispatch({type: RESET});
  };


  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <button onClick={this.decrement}>&ndash;</button>
        <span className="count">{this.props.count}</span>
        <button onClick={this.increment}>+</button>
        <br/>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    count: state.count
})
export default connect(mapStateToProps)(Counter);
