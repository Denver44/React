import React, { useState } from 'react';
import Modal from 'components/Modal/Modal.jsx';

const ModalScreenStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  backgroundColor: 'rgba(0,0,0,0.7)',
  zIndex: 1000,
};

const Loader = () => {
  return (
    <div class="ui segment ui  button">
      <p></p>
      <div class="ui active dimmer">
        <div class="ui mini loader"></div>
      </div>
    </div>
  );
};

const ModalScreen = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    if (open) {
      return (
        <Modal
          open={open}
          onDismiss={() => setOpen(false)}
          title="Modal Title"
          content="Modal Body"
          actions={
            <>
              {!isLoading ? (
                <div
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setOpen(false);
                      setIsLoading(false);
                    }, 2000);
                  }}
                  className="ui primary button"
                >
                  Save
                </div>
              ) : (
                <Loader />
              )}
              <div
                onClick={() => setOpen(false)}
                className="ui secondary button"
              >
                Cancel
              </div>
            </>
          }
        />
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div>
        <button onClick={() => setOpen((prev) => !prev)}>Open Modal</button>
        <div
          id="modal"
          style={open ? ModalScreenStyles : null}
          onClick={() => setOpen(false)}
        >
          {showModal()}
        </div>
      </div>
      <div style={{ backgroundColor: 'red', zIndex: '2' }}>Other Content</div>
    </>
  );
};

export default ModalScreen;

document.body.append(document.createElement('section'));
