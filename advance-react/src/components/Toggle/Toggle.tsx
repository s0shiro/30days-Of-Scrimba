import React, { useEffect, useState, useRef } from "react";
import ToggleContext from "./ToggleContext";
import { ChildrenPropsType } from "../../utils/types";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";

interface ToggleProps extends ChildrenPropsType {
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ children, onToggle = () => {} }) => {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
