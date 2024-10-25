import React, { ReactNode } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

// Define the types for the Menu component and its subcomponents
interface MenuComponent extends React.FC<{ children: ReactNode }> {
  Button: typeof MenuButton;
  Dropdown: typeof MenuDropdown;
  Item: typeof MenuItem;
}

// Assign the subcomponents to the Menu component with the correct types
const MenuWithSubcomponents: MenuComponent = Menu as MenuComponent;
MenuWithSubcomponents.Button = MenuButton;
MenuWithSubcomponents.Dropdown = MenuDropdown;
MenuWithSubcomponents.Item = MenuItem;

// Export the Menu component with subcomponents
export default MenuWithSubcomponents;
