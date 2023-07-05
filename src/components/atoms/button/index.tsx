import { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";
import { Button } from "react-bootstrap";

export type ButtonAtomProps = {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  className?: string;
  variant?: string;
};

const ButtonAtom = ({
  type,
  variant,
  children,
  onClick,
  disabled,
  className,
}: ButtonAtomProps): ReactElement => {
  return (
    <Button
      variant={variant}
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled ?? false}
      className={className ?? ""}
    >
      {children}
    </Button>
  );
};
export default ButtonAtom;
