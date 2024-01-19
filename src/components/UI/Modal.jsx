import { useRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, classNames = "" }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} className={`modal ${classNames}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
