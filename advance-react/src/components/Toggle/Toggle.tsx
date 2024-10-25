import { useState } from "react";
import { ChildrenPropsType } from "../../utils/types";
import ToggleContext from "./ToggleContext";

const Toggle = ({ children }: ChildrenPropsType) => {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
