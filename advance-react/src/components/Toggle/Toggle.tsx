import React, { useEffect, useState, useRef } from "react";
import ToggleContext from "./ToggleContext";
import { ChildrenPropsType } from "../../utils/types";

interface ToggleProps extends ChildrenPropsType {
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ children, onToggle = () => {} }) => {
  const [on, setOn] = useState(false);
  const firstRender = useRef(true);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      onToggle();
    }
  });

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
