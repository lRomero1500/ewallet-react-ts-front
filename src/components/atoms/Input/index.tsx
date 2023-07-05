import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";
import { Form } from "react-bootstrap";
export type InputAtomProps = {
  id?: string;
  name?: string;
  type: HTMLInputTypeAttribute;
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  ariaDescribedby?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: React.ReactNode;
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
  error,
  ariaDescribedby,
}: InputAtomProps): ReactElement => {
  return (
    <>
      <Form.Label label={placeholder ?? ""} className="mb-3"></Form.Label>
      <Form.Control
        type={type}
        name={name ?? ""}
        onChange={onChange}
        defaultValue={value ?? ""}
        className={className ?? ""}
        disabled={disabled ?? false}
        readOnly={readonly ?? false}
        placeholder={placeholder ?? ""}
        isValid={!!error}
        aria-describedby={ariaDescribedby}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </>
  );
};

export default InputAtom;
