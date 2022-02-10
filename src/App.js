import { Container } from "react-bootstrap";
import "./App.scss";

// !redux


// ?components
import Counter from "./components/Counter";

function App() {
  return (
    <Container className="text-center">
      <Counter />
    </Container>
  );
}

export default App;
