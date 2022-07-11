import { ModalContext, modalType } from "contexts/Modal";
import CustomerModal from "components/Modals/CustomerModal";
import EmployeeModal from "components/Modals/EmployeeModal";

const ModalFactory = () => {
  const { modal, openModal } = ModalContext();

  const closeModal = () => {
    openModal({ type: modalType.NONE });
  };

  switch (modal?.type) {
    case modalType.CUSTOMER:
      return (
        <CustomerModal
          isModalOpen
          closeModal={() => closeModal()}
          selectedCustomer={modal?.props?.customer}
        />
      );
    case modalType.EMPLOYEE:
      return <EmployeeModal isModalOpen closeModal={() => closeModal()} />;
    case modalType.NONE:
    default:
      return null;
  }
};

export default ModalFactory;
