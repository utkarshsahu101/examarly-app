import React, { useEffect } from "react";
import "../Modal/Modal.css";
import ReactDOM from "react-dom";

const ModalComponent = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-content">
            <p className="modal-header-title">{props.title}</p>
            <p className="modal-header-description">{props.description}</p>
          </div>
          <button onClick={props.onClose} className="crossButton">
            +
          </button>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Finish
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ModalComponent;
