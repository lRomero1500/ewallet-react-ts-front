import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";
import { Form } from "react-bootstrap";
export type InputAtomSelectOptions = {
  value: string | number;
  label: string;
};
export type InputAtomProps = {
  id?: string;
  name?: string;
  type: HTMLInputTypeAttribute | "select" | "textarea";
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  ariaDescribedby?: string;
  onChange?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  error?: React.ReactNode;
  options?: InputAtomSelectOptions[];
  showErrorsLocal?: boolean;
};
const getControlType = ({
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
  options,
}: InputAtomProps): ReactElement => {
  switch (type) {
    case "select":
      return (
        <Form.Select
          id={id}
          name={name ?? ""}
          onChange={onChange}
          value={value ?? ""}
          disabled={disabled ?? false}
          className={className ?? ""}
          aria-describedby={ariaDescribedby}
          isInvalid={!!error}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      );
    case "textarea":
      return (
        <Form.Control
          as="textarea"
          id={id}
          name={name ?? ""}
          onChange={onChange}
          value={value ?? ""}
          disabled={disabled ?? false}
          className={className ?? ""}
          readOnly={readonly}
          aria-describedby={ariaDescribedby}
          isInvalid={!!error}
          placeholder={placeholder}
        />
      );
    default:
      return (
        <Form.Control
          type={type}
          id={id}
          name={name ?? ""}
          onChange={onChange}
          value={value ?? ""}
          readOnly={readonly}
          disabled={disabled ?? false}
          className={className ?? ""}
          aria-describedby={ariaDescribedby}
          isInvalid={!!error}
          placeholder={placeholder}
        />
      );
  }
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
  options,
  showErrorsLocal,
}: InputAtomProps): ReactElement => {
  return (
    <>
      <Form.Label label={placeholder ?? ""} className="mb-3"></Form.Label>
      {getControlType({
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
        options,
        showErrorsLocal,
      })}
      {showErrorsLocal ? (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      ) : (
        <></>
      )}
    </>
  );
};

export default InputAtom;
