import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Modal = ({ modal }) => {
    let navigate = useNavigate;
    const cancelInvitation = (e) => {
        e.preventDefault();
        navigate("/home");
    } 

  return (
    <div id="modalBackground">
      <div id="modalContainer">
        <div id="modalTitle">
          <h2>Do you want to cancel your invitation?</h2>
        </div>
        <div id="modalBody">
          <p>
            Are you sure you want to cancel your invitation and keep being
            lonely?
          </p>
        </div>
        <hr />
        <div id="modalButtons">
            {/*this button still needs work, it does not navigate to home because of the onSubmit (required) in createInvitation*/}
          <button id="yesBtn" onClick={() => navigate("/home")}>
            Yes
          </button>
          <button id="noBtn" onClick={() => modal(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;