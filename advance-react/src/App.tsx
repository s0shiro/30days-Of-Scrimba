import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((count) => count + 1);

  return (
    <>
      <Button onClick={handleClick} text={`count is ${count}`} />
    </>
  );
}

export default App;
