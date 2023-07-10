import { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";
import { Button, Spinner } from "react-bootstrap";

export type ButtonAtomProps = {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  className?: string;
  variant?: string;
  isLoading?: boolean;
};

const ButtonAtom = ({
  type,
  variant,
  children,
  onClick,
  disabled,
  className,
  isLoading,
}: ButtonAtomProps): ReactElement => {
  return (
    <Button
      variant={variant}
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled ?? false}
      className={className ?? ""}
    >
      {isLoading ? (
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          className="me-1"
        />
      ) : (
        ""
      )}
      {children}
    </Button>
  );
};
export default ButtonAtom;
