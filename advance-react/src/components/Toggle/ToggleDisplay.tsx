import { useContext } from "react";
import ToggleContext from "./ToggleContext";

type ToggggleDisplayProps = {
  children: (on: boolean) => JSX.Element;
};

const ToggleDisplay = ({ children }: ToggggleDisplayProps) => {
  const { on } = useContext(ToggleContext);
  return children(on);
};

export default ToggleDisplay;
