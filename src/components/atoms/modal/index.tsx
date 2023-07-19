import { ReactElement } from "react";
import { Button, Modal } from "react-bootstrap";

export type ModalAtomProps = {
  children?: React.ReactNode;
  onHide: (() => void) | undefined;
  showModal: boolean;
  size?: "sm" | "lg" | "xl";
  centered?: boolean;
  closeButton?: boolean;
  okText: string;
  cancelText?: string;
  handleOk: React.MouseEventHandler<HTMLButtonElement> | undefined;
  handleCancel: React.MouseEventHandler<HTMLButtonElement> | undefined;
  showCancelButton?: boolean;
  heading: string;
};

const ModalAtom = ({
  children,
  onHide,
  showModal,
  size,
  centered,
  closeButton,
  heading,
  handleOk,
  handleCancel,
  showCancelButton,
  okText,
  cancelText,
}: ModalAtomProps): ReactElement => {
  return (
    <Modal
      show={showModal}
      onHide={onHide}
      size={size}
      centered={centered}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton={closeButton}>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {showCancelButton ? (
          <Button variant="secondary" onClick={handleCancel}>
            {cancelText}
          </Button>
        ) : (
          <></>
        )}
        <Button variant="primary" onClick={handleOk}>
          {okText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAtom;
