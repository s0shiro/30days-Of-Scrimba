import useToggle from "../hooks/useToggle";
import { BsStar, BsStarFill } from "react-icons/bs";

interface StarProps {
  onChange?: () => void;
}

export default function Star({ onChange }: StarProps) {
  const [on, toggle] = useToggle();
  return on ? (
    <BsStarFill onClick={toggle} className="star filled" />
  ) : (
    <BsStar onClick={toggle} className="star" />
  );
}
