import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupFormPage from "./SignUpForm";

function SignupFormModal({startedButton}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span
        className='signUp'
        onClick={() => setShowModal(true)}
      >
        Create Account
      </span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <SignupFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
