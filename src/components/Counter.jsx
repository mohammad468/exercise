import React from "react";
import { Button } from "react-bootstrap";

// ?redux
import { increase } from "../redux/counter/counterAction";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>counter {counter}</h1>
      <Button onClick={() => dispatch(increase())}>Increase</Button>
    </div>
  );
};

export default Counter;
