import { ChildrenPropsType } from "../../utils/types";
import Button from "../Button";

const MenuButton = ({ children }: ChildrenPropsType) => {
  return <Button>{children}</Button>;
};

export default MenuButton;
