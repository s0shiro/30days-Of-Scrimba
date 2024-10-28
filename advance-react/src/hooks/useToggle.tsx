import { useState } from "react";

const useToggle = () => {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return [on, toggle] as const;
};

export default useToggle;
