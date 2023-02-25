import React from 'react';
import ReactDOM from 'react-dom';

const ModalStyles = {
  position: 'fixed',
  top: '40%',
  left: '20%',
  transform: 'translate(-50%,-50%)',
  zIndex: 1000,
};

const Modal = ({ onDismiss, title, content, actions }) => {
  return ReactDOM.createPortal(
    <div style={ModalStyles}>
      <div
        onClick={(e) => e.stopPropagation()}
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
    document.querySelector('section')
  );
};

export default Modal;

// So if we want to creatre a modal or tool tip which can render on someoneone then alaways use createPortal it will give the function to click on it render wwill not give this function

// onClick={(e) => e.stopPropagation()} this will helps us that event don't get bubble up and go to correct div
