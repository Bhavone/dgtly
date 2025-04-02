import { useEffect } from "react";
import "./modal.scss";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen = false, handleClose = () => {}, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Prevent scrolling when modal is open

    const handleOutsideClick = (e) => {
      const modalElement = document.querySelector(".modalContainer");
      if (modalElement && !modalElement.contains(e.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;
  return (
    <div
      className="modal"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
