import React from "react";
import { Button } from "react-bootstrap";

// ?context
import { useIncrease } from "../../context/IncreaseContext";

const Increaser = () => {
  const { increase, setIncrease } = useIncrease();

  const increaseHandler = () => {
    setIncrease(increase + 1);
  };

  return (
    <Button className="my-1 mx-1" onClick={increaseHandler}>
      Increase
    </Button>
  );
};

export default Increaser;
