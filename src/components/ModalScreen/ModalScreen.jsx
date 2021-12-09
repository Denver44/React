import React, { useState } from "react";
import Modal from "components/Modal/Modal.jsx";

const ModalScreen = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    if (open) {
      return (
        <Modal
          open={open}
          onDismiss={() => setOpen(false)}
          title="Modal Title"
          content="Modal Body"
          actions={<div className="ui button">Button</div>}
        />
      );
    }
  };

  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>Open Modal</button>
      {showModal()}
      <div id="modal" />
    </div>
  );
};

export default ModalScreen;

document.body.append(document.createElement("section"));
