import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  size?: "sm" | "lg";
  variant?: "success" | "warning" | "danger";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  variant,
  className,
  ...restProps
}) => {
  const sizeClass = size ? `button-${size}` : "";
  const variantClass = variant ? `button-${variant}` : "";

  const buttonClassName = clsx(className, sizeClass, variantClass);

  return (
    <button className={buttonClassName} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
