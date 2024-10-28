import "./App.css";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Toggle from "./components/Toggle/index";

function App() {
  return (
    <>
      <Star />
    </>
  );
}

export default App;

{
  /* <Toggle>
<Toggle.Button>
  <Toggle.Display>
    {(on) => <div className={`box ${on ? "filled" : ""}`}></div>}
  </Toggle.Display>
  <Toggle.On>
    <div className="box filled"></div>
  </Toggle.On>
  <Toggle.Off>
    <div className="box"></div>
  </Toggle.Off>
</Toggle.Button>
</Toggle>

<Star />
<Menu onOpen={() => console.log("Menu toggled")}>
<Menu.Button>Menu</Menu.Button>
<Menu.Dropdown>
  <Menu.Item>Home</Menu.Item>
  <Menu.Item>About</Menu.Item>
  <Menu.Item>Contact</Menu.Item>
  <Menu.Item>Services</Menu.Item>
</Menu.Dropdown>
</Menu> */
}
