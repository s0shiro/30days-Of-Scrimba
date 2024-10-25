import { useContext } from "react";
import ToggleContext from "./ToggleContext";
import { ChildrenPropsType } from "../../utils/types";

export default function ToggleOff({ children }: ChildrenPropsType) {
  const { on } = useContext(ToggleContext);

  return on ? null : children;
}
