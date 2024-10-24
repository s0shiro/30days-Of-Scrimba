import { useContext } from "react";
import { ChildrenPropsType } from "../../utils/types";
import Button from "../Button";
import MenuContext, { MenuContextType } from "./MenuContex";

const MenuButton = ({ children }: ChildrenPropsType) => {
  const context = useContext<MenuContextType | undefined>(MenuContext);

  if (!context) {
    throw new Error("MenuContext must be used within a MenuProvider");
  }

  const { handleOpen, isOpen, menuId } = context;

  return (
    <Button
      onClick={handleOpen}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls={menuId}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
