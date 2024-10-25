import { createContext } from "react";

interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

const defaultValue: ToggleContextType = {
  on: false,
  toggle: () => {},
};

const ToggleContext = createContext<ToggleContextType>(defaultValue);

export default ToggleContext;
export type { ToggleContextType };
