import ToggleContext from "./ToggleContext";
import { ChildrenPropsType } from "../../utils/types";
import { useContext } from "react";

export default function ToggleButton({ children }: ChildrenPropsType) {
  const { toggle } = useContext(ToggleContext);

  return <div onClick={toggle}>{children}</div>;
}
