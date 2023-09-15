import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onShake }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onShake}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Modal Content</h2>
        <p>This is the modal content.</p>
      </div>
    </div>
  );
};

export default Modal;
