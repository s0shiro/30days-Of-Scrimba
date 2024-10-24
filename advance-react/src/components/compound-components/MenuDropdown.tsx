import { useContext } from "react";
import { ChildrenPropsType } from "../../utils/types";
import MenuContext, { MenuContextType } from "./MenuContex";

const MenuDropdown = ({ children }: ChildrenPropsType) => {
  const context = useContext<MenuContextType | undefined>(MenuContext);

  if (!context) {
    throw new Error("MenuContext must be used within a MenuProvider");
  }

  const { isOpen, menuId } = context;

  return isOpen ? (
    <div className="menu-dropdown" id={menuId}>
      {children}
    </div>
  ) : null;
};

export default MenuDropdown;
