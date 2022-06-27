import { ModalContext, modalType } from "../../contexts/Modal";
import CreateCustomerModal from "../Modals/CreateCustomerModal";

const ModalFactory = () => {
  const { modal, openModal } = ModalContext();

  const closeModal = () => {
    openModal({ type: modalType.NONE });
  };

  switch (modal?.type) {
    case modalType.CREATE_CUSTOMER:
      return <CreateCustomerModal isModalOpen closeModal={() => closeModal()} />;
    case modalType.NONE:
    default:
      return null;
  }
};

export default ModalFactory;
