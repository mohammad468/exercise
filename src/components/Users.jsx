import React from "react";
import { Button } from "react-bootstrap";

// !redux
import { useSelector, useDispatch } from "react-redux";
import { mohammad } from "../redux/counter/counterAction";
import { ali } from "../redux/counter/counterAction";

const Users = () => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>name = {state.name}</h1>
      <h1>name = {state.family}</h1>
      <h1>name = {state.age}</h1>
      <h1>name = {state.score}</h1>
      <Button
        className="mx-2"
        onClick={() => {
          dispatch(mohammad());
          console.log(state);
        }}
      >
        Show Mohammad
      </Button>
      <Button
        className="mx-2"
        onClick={() => {
          dispatch(ali());
          console.log(state);
        }}
      >
        Show Ali
      </Button>
    </div>
  );
};

export default Users;
