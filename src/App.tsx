import Button from "./components/button/button";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menuItem";
function App() {
  return (
    <>
      <Button type="primary">hhhhhhhh</Button>
      <Button disabled>disabled</Button>
      <Button type="link" className="hhhh" href="sdsd">
        link
      </Button>
      <Menu>
        <MenuItem>fsdfsdaf</MenuItem>
        <MenuItem>fff</MenuItem>
        <MenuItem>fsdfxxxxsdaf</MenuItem>
      </Menu>
    </>
  );
}

export default App;
