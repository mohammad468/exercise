import React from "react";
import { Button } from "react-bootstrap";
import ShowNumber from "./ShowNumber";


const Counter = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <ShowNumber />
        <Button>Increase</Button>
      </div>
    </div>
  );
};

export default Counter;
