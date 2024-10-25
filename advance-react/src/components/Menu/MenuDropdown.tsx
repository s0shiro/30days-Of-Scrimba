import { ChildrenPropsType } from "../../utils/types";
import Toggle from "../Toggle";

const MenuDropdown = ({ children }: ChildrenPropsType) => {
  return (
    <Toggle.On>
      <div className="menu-dropdown">{children}</div>
    </Toggle.On>
  );
};

export default MenuDropdown;
