import { useEffect, useState } from "react";
import { ChildrenPropsType } from "../../utils/types";
import ToggleContext from "./ToggleContext";

interface ToggleProps extends ChildrenPropsType {
  onToggle: (on: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ children, onToggle }: ToggleProps) => {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffect(() => {
    if (onToggle) {
      onToggle(on);
    }
  }, [on, onToggle]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
