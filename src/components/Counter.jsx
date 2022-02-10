import React from "react";
import { Button } from "react-bootstrap";

// ?redux
import { increase } from "../redux/counter/counterAction";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <div>
      <h1>counter {props.counter}</h1>
      <Button onClick={props.increase}>Increase</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increase()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
