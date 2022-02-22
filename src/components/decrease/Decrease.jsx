import React from "react";
import { Button } from "react-bootstrap";

// ?context
import { useIncrease } from "../../context/IncreaseContext";

const Decrease = () => {
  const { increase, setIncrease } = useIncrease();

  const decreaseHandler = () => {
    setIncrease(increase - 1);
    console.log(increase);
  };

  return <Button onClick={decreaseHandler}>Decrease</Button>;
};

export default Decrease;
