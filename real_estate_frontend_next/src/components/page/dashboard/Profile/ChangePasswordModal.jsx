import Modal from "@/components/utils/Modal";
import React from "react";
import * as Yup from "yup";
import ChangePasswordForm from "./ChangePasswordForm";
const ChangePasswordModal = ({ toggleModal }) => {
  return (
    <Modal
      toggleModal={toggleModal}
      form={<ChangePasswordForm toggleModal={toggleModal} />}
    />

    // </Modal>
  );
};

export default ChangePasswordModal;
