import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";
export type InputAtomProps = {
  id?: string;
  name?: string;
  type: HTMLInputTypeAttribute;
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const InputAtom = ({
  id,
  type,
  name,
  value,
  disabled,
  readonly,
  onChange,
  className,
  placeholder,
}: InputAtomProps): ReactElement => {
  return (
    <input
      type={type}
      id={id ?? ""}
      name={name ?? ""}
      onChange={onChange}
      defaultValue={value ?? ""}
      className={className ?? ""}
      disabled={disabled ?? false}
      readOnly={readonly ?? false}
      placeholder={placeholder ?? ""}
    />
  );
};

export default InputAtom;
