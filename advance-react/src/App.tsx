import "./App.css";
import Menu from "./components/Menu/index";
import Star from "./components/Star";

function App() {
  return (
    <>
      <Star onChange={() => console.log("Star was clicked")} />
      {/*  */}

      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Services</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
