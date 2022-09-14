import React from "react";
import ReactDom from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import "./Counter.css"

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
      case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
  
}

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
//
// const container = document.getElementById('root');
// const root = createRoot(container);
//
// root.render(<App tab="home"/>);

ReactDom.render(<App />, document.getElementById("root"));
