import React from "react";

// ?context
import { useIncrease } from "../../context/IncreaseContext";

const ShowNumber = () => {
  const { increase } = useIncrease();

  return <h1>{increase}</h1>;
};

export default ShowNumber;
