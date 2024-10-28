import ToggleContext from "./ToggleContext";
import { ChildrenPropsType } from "../../utils/types";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import useToggle from "../../hooks/useToggle";

interface ToggleProps extends ChildrenPropsType {
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ children, onToggle = () => {} }) => {
  const [on, toggle] = useToggle();

  useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
