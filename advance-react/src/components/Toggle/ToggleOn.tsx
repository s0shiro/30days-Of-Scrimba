import { useContext } from "react";
import { ChildrenPropsType } from "../../utils/types";
import ToggleContext from "./ToggleContext";

export default function ToggleOn({ children }: ChildrenPropsType) {
  const { on } = useContext(ToggleContext);

  return on ? children : null;
}
