import { ChildrenPropsType } from "../../utils/types";
import Toggle from "../Toggle";

export interface MenuProps extends ChildrenPropsType {
  onOpen?: () => void;
}

const Menu: React.FC<MenuProps> = ({ children, onOpen }) => {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
};

export default Menu;
