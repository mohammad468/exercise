import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import Counter from "./components/Counter";

export const increaseContext = React.createContext();

function App() {
  const [increase, setIncrease] = useState(0);

  return (
    <increaseContext.Provider value={increase}>
      <Container>
        <Counter />
      </Container>
    </increaseContext.Provider>
  );
}

export default App;
