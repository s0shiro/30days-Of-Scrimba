import { createContext } from "react";

interface MenuContextType {
  menuId: string;
  isOpen: boolean;
  handleOpen: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export default MenuContext;

export type { MenuContextType };
