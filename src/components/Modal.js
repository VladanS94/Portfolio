import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <button
          className="fixed top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex justify-center items-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
