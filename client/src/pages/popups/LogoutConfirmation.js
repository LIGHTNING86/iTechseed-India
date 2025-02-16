import React from "react";
import './Logout.css';

const LogoutConfirmation = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Logout Confirmation</h2>
        <p>Are you sure you want to log out?</p>
        <div className="modal-actions">
          <button className="confirm-btn" onClick={onConfirm}>CONFIRM</button>
          <button className="cancel-btn" onClick={onClose}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
