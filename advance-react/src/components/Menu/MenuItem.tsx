import { ChildrenPropsType } from "../../utils/types";
import Toggle from "../Toggle";

const MenuItem = ({ children }: ChildrenPropsType) => {
  return (
    <Toggle.On>
      <div className="menu-item">{children}</div>
    </Toggle.On>
  );
};

export default MenuItem;
