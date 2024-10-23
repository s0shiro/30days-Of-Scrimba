import "./App.css";
import Button from "./components/Button";
import { CiShoppingCart } from "react-icons/ci";

function App() {
  const handleClick = () => console.log("Buying...");

  return (
    <>
      <Button
        size="lg"
        variant="success"
        className="green"
        onClick={handleClick}
      >
        <CiShoppingCart /> Buy now!
      </Button>
    </>
  );
}

export default App;
