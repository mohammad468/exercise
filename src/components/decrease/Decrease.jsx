import React from "react";
import { Button } from "react-bootstrap";

// ?context
import { useIncrease } from "../../context/IncreaseContext";

const Decrease = () => {
  const { increase, setIncrease } = useIncrease();

  const decreaseHandler = () => {
    if (increase > 0) {
      setIncrease(increase - 1);
    } else {
      setIncrease(0);
    }
  };

  return (
    <Button className="my-1 mx-1" onClick={decreaseHandler}>
      Decrease
    </Button>
  );
};

export default Decrease;
