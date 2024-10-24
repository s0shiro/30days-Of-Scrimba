import { ChildrenPropsType } from "../../utils/types";

const MenuDropdown = ({ children }: ChildrenPropsType) => {
  return <div className="menu-dropdown">{children}</div>;
};

export default MenuDropdown;
