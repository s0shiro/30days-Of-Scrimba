import { ChildrenPropsType } from "../../utils/types";
import Button from "../Button";
import Toggle from "../Toggle";

const MenuButton = ({ children }: ChildrenPropsType) => {
  return (
    <Toggle.Button>
      <Button>{children}</Button>
    </Toggle.Button>
  );
};

export default MenuButton;
