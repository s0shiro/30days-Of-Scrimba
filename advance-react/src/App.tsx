import "./App.css";
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import { CiShoppingCart } from "react-icons/ci";
import Menu from "./components/compound-components/index";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  //   const handleClick = () => console.log("Buying...");

  return (
    <>
      {/* <Button
        size="lg"
        variant="success"
        className="green"
        onClick={handleClick}
      >
        <CiShoppingCart /> Buy now!
      </Button>

      <Avatar
        src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/451418027_2164615280578350_86385005731237855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-CtnuZXTvRgJPaXROMny9R7XuKmkIKixHte4qaQgqLLMYMoa7pEnEBF61JXu3vHm9CmogSQjiSI8GLGRDkwEY&_nc_ohc=gnWFk5l16KIQ7kNvgFp8KBd&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=AaOxdb-6vtBRF_cC7pVNGIk&oh=00_AYBVmPGPc3hES66tRHrbYAUW3iWafhSgCcjKhu-YiGW1lA&oe=671F8224"
        alt="Bob Ziroll"
      />
      <br />
      <Avatar>NM</Avatar>
      <br />
      <Avatar /> */}

      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport, index) => (
            <Menu.Item key={index}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
