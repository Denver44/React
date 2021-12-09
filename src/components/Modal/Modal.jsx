import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onCLick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <i className="close icon" onCLick={(e) => props.onDismiss()}></i>
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("section")
  );
};

export default Modal;
