import React from "react";
import "./App.scss";

// ? components
import Increaser from "./components/Increaser";
import ShowNumber from "./components/ShowNumber";

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <ShowNumber />
      <Increaser />
    </div>
  );
};

export default App;
