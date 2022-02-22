import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.scss";

// ? components
import Increaser from "./components/increase/Increaser";
import ShowNumberIncreaser from "./components/increase/ShowNumber";

import Decrease from "./components/decrease/Decrease";
import ShowNumberDecrease from "./components/decrease/ShowNumber";

const App = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center flex-column">
        <ShowNumberIncreaser />
        <Increaser />
      </Col>
      <Col className="d-flex justify-content-center align-items-center flex-column">
        <ShowNumberDecrease />
        <Decrease />
      </Col>
    </Row>
  );
};

export default App;
