import { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";

export type ButtonAtomProps = {
  text: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  className?: string;
};

const ButtonAtom = ({
  type,
  children,
  onClick,
  disabled,
  className,
}: ButtonAtomProps): ReactElement => {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled ?? false}
      className={className ?? ""}
    >
      {children}
    </button>
  );
};
export default ButtonAtom;
