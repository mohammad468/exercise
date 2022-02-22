import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { IncreaseContextProvider } from "./context/IncreaseContext";

ReactDOM.render(
  <React.StrictMode>
    <IncreaseContextProvider>
      <App />
    </IncreaseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
