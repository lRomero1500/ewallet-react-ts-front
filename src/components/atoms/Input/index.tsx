import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";
import { Form } from "react-bootstrap";
export type InputAtomSelectOptions = {
  value: string | number;
  label: string;
};
export type InputAtomProps = {
  id?: string;
  name?: string;
  type: HTMLInputTypeAttribute | "dropdown" | "textarea";
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
}: InputAtomProps): ReactElement => {
  const isSelect = type === "select";
  const isTextarea = type === "textarea";

  const controlProps = {
    id,
    name: name ?? "",
    onChange,
    value: value ?? "",
    disabled: disabled ?? false,
    readOnly: readonly ?? false,
    className: className ?? "",
    placeholder: placeholder ?? "",
    isInvalid: !!error,
    "aria-describedby": ariaDescribedby,
  };
  const selectOptions = options?.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <>
      <Form.Label label={placeholder ?? ""} className="mb-3"></Form.Label>
      {isSelect ? (
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
          {selectOptions}
        </Form.Select>
      ) : isTextarea ? (
        <Form.Control as="textarea" {...controlProps} />
      ) : (
        <Form.Control type={type} {...controlProps} />
      )}
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </>
  );
};

export default InputAtom;
