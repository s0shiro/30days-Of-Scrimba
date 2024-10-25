import { ChildrenPropsType } from "../../utils/types";
import Toggle from "../Toggle";

const Menu = ({ children }: ChildrenPropsType) => {
  return (
    <Toggle>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
};

export default Menu;
