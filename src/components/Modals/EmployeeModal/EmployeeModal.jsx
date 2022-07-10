import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Modal from "components/Modal";
import Button from "components/Button";
import InputField from "components/FormComponents/InputField";
import "./employee-modal.scss";

const EmployeeModal = ({ isModalOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      className="create-employee-modal"
      label="Create Employee Modal"
      title="Crear Trabajador"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="create-customer-modal__container">
          <InputField
            name="id"
            label="Cedula"
            register={register}
            error={errors.id?.message}
            isRequired
          />
          <InputField
            name="firstName"
            label="Nombre"
            register={register}
            error={errors.firstName?.message}
            isRequired
          />
          <InputField
            name="lastName"
            label="Apellido"
            register={register}
            error={errors.lastName?.message}
            isRequired
          />
          <InputField
            name="address"
            label="Dirección"
            register={register}
            error={errors.address?.message}
            isRequired
          />
          <InputField
            name="mobileNumber"
            label="Celular"
            register={register}
            error={errors.mobileNumber?.message}
            isRequired
          />
          <InputField
            name="gender"
            label="Género"
            register={register}
            error={errors.mobileNumber?.message}
            isRequired
          />
          <InputField
            name="paymentMethod"
            label="Forma de pago"
            register={register}
            error={errors.mobileNumber?.message}
            isRequired
          />
          <InputField
            name="accountNumber"
            label="Número de cuenta"
            register={register}
            error={errors.mobileNumber?.message}
            isRequired
          />
        </div>
        <Button type="submit" className="create-customer-modal__button">
          Crear
        </Button>
      </form>
    </Modal>
  );
};

EmployeeModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EmployeeModal;
