import React from "react";
import { Button } from "react-bootstrap";
import "./App.scss";

// ?context
import { useIncrease } from "./context/IncreaseContext";

const App = () => {
  const { increase, setIncrease } = useIncrease();

  const clgHandler = () => {
    console.log(increase);
  };

  return (
    <div>
      <h1>hello World</h1>
      <Button onClick={clgHandler}>clg</Button>
    </div>
  );
};

export default App;
