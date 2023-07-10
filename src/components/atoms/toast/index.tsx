import Toast from "react-bootstrap/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleCheck,
  faCircleXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

export type ToastAtomProps = {
  children: React.ReactNode;
  variant:
    | "Primary"
    | "Secondary"
    | "Success"
    | "Danger"
    | "Warning"
    | "Info"
    | "Light"
    | "Dark";
  title: string;
  showError: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const getIconVariant = (variant: string): ReactElement => {
  switch (variant) {
    case "Danger":
    case "Warning":
    case "Info":
      return (
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="rounded me-2"
        />
      );
    case "Success":
      return <FontAwesomeIcon icon={faCircleCheck} className="rounded me-2" />;
    default:
      return <FontAwesomeIcon icon={faBell} className="rounded me-2" />;
  }
};
const ToastAtom = ({
  children,
  variant,
  title,
  showError,
  setShow,
}: ToastAtomProps) => {
  return (
    <>
      <Toast
        className="position-fixed bottom-0 end-0 p-1 toast hide"
        style={{ zIndex: 11 }}
        onClose={() => setShow(false)}
        show={showError}
        aria-atomic={true}
      >
        <Toast.Header className={`bg-${variant.toLowerCase()} text-white`}>
          {getIconVariant(variant)}
          <strong className="me-auto">{title}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};
export default ToastAtom;
