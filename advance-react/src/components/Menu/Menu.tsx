import { ChildrenPropsType } from "../../utils/types";

const Menu = ({ children }: ChildrenPropsType) => {
  return (
    <div className="menu" role="menu">
      {children}
    </div>
  );
};

export default Menu;
