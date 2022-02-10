import React from "react";

// !redux
import { increase } from "../redux/counter/counterAction";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const Counter = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter = {state}</h1>
      <Button
        className="mx-2"
        onClick={() => {
          console.log(state);
          dispatch(increase());
        }}
      >
        Up
      </Button>
      <Button className="mx-2">Down</Button>
    </div>
  );
};

export default Counter;
