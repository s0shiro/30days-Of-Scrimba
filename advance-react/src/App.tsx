import "./App.css";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Toggle from "./components/Toggle/index";

function App() {
  return (
    <>
      <Star />
      {/*  */}
      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Menu.Item>Services</Menu.Item>
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </>
  );
}

export default App;
