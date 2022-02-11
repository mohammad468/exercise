import React from "react";
import { Button } from "react-bootstrap";

// !redux
import { useSelector, useDispatch } from "react-redux";
import { showMohammad } from "../redux/user/userAction";
import { showAli } from "../redux/user/userAction";

const Users = () => {
  const state = useSelector((state) => state.userState.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>name = {state.name}</h1>
      <h1>family = {state.family}</h1>
      <h1>age = {state.age}</h1>
      <h1>score = {state.score}</h1>
      <Button
        className="mx-2"
        onClick={() => {
          dispatch(showMohammad());
          console.log(state);
        }}
      >
        Show Mohammad
      </Button>
      <Button
        className="mx-2"
        onClick={() => {
          dispatch(showAli());
          console.log(state);
        }}
      >
        Show Ali
      </Button>
    </div>
  );
};

export default Users;
