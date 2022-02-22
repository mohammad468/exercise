import React from "react";
import { Button } from "react-bootstrap";

// ?context
import { useIncrease } from "../context/IncreaseContext";

const Increaser = () => {
  const { increase, setIncrease } = useIncrease();

  const clgHandler = () => {
    setIncrease(increase + 1);
    console.log(increase);
  };

  return <Button onClick={clgHandler}>Increase</Button>;
};

export default Increaser;
