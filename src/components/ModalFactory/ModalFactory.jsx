import { ModalContext, modalType } from "contexts/Modal";
import CustomerModal from "components/Modals/CustomerModal";
import EmployeeModal from "components/Modals/EmployeeModal";
import ServicesModal from "components/Modals/ServicesModal";
import ConfirmModal from "components/Modals/ConfirmModal";

const ModalFactory = () => {
  const { modal, openModal } = ModalContext();

  const closeModal = () => {
    openModal({ type: modalType.NONE });
  };

  switch (modal?.type) {
    case modalType.CONFIRM:
      return (
        <ConfirmModal
          isModalOpen
          closeModal={() => closeModal()}
          selectedCustomer={modal?.props?.customer}
          {...modal?.props}
        />
      );
    case modalType.CUSTOMER:
      return (
        <CustomerModal
          isModalOpen
          closeModal={() => closeModal()}
          selectedCustomer={modal?.props?.customer}
        />
      );
    case modalType.EMPLOYEE:
      return (
        <EmployeeModal
          isModalOpen
          closeModal={() => closeModal()}
          selectedEmployee={modal?.props?.employee}
        />
      );
    case modalType.SERVICE:
      return (
        <ServicesModal
          isModalOpen
          closeModal={() => closeModal()}
          selectedService={modal?.props?.service}
        />
      );
    case modalType.NONE:
    default:
      return null;
  }
};

export default ModalFactory;
