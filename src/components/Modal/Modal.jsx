import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onDismiss, title, content, actions }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onCLick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <button onClick={() => onDismiss()}>
          <i className="close icon"></i>
        </button>
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("section")
  );
};

export default Modal;
