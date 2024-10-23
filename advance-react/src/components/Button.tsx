type ButtonProps = {
  children: React.ReactNode;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onclick }: ButtonProps) => {
  return <button onClick={onclick}>{children}</button>;
};

export default Button;
