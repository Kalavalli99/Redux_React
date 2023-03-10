import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>counter {counter}</h1>
      <button onClick = {() => dispatch(increment(5))}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
      {isLogged ? <h3> Data Found</h3> : ''}
    </div>
  );
}

export default App;
