import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.scss";

// ? components
import Increaser from "./components/increase/Increaser";
import ShowNumber from "./components/increase/ShowNumber";

const App = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center flex-column">
        <ShowNumber />
        <Increaser />
      </Col>
      <Col className="d-flex justify-content-center align-items-center flex-column">
        <ShowNumber />
        <Increaser />
      </Col>
    </Row>
  );
};

export default App;
