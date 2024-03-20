import { FC } from "react";
import ReactDom from "react-dom";

interface ModalPropType {
  open: boolean;
  children: React.ReactNode;
  close: () => void;
}

export const Modal: FC<ModalPropType> = ({ open, children, close }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style" onClick={close} />
      <div className="modal-style">{children}</div>
    </>,
    document.getElementById("portal-root")!
  );
};
