import { useId, useState } from "react";
import { ChildrenPropsType } from "../../utils/types";
import MenuContext from "./MenuContex";

const Menu = ({ children }: ChildrenPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  function handleOpen() {
    setIsOpen((prev: boolean) => !prev);
  }

  return (
    <MenuContext.Provider value={{ isOpen, handleOpen, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
