import { ChildrenPropsType } from "../../utils/types";

const MenuItem = ({ children }: ChildrenPropsType) => {
  return <div className="menu-item">{children}</div>;
};

export default MenuItem;
