import React, { useReducer } from "react";
type State = { count: number };
type Action = 
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set" ; payload: number }; 
const initialState: State = { count: 0 };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "set":
      return { count: action.payload };
    default:
      return state;
      break;
  };
};
export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "set", payload: 10})}>Set to 10</button>
    </div>
  );
};