import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Modal from "components/Modal";
import Button from "components/Button";
import InputField from "components/FormComponents/InputField";
import "./create-customer-modal.scss";

const CreateCustomerModal = ({ isModalOpen, closeModal }) => {
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
      className="create-customer-modal"
      label="Create Customer Modal"
      title="Crear Cliente"
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
            name="mobileNumber"
            label="Celular"
            register={register}
            error={errors.mobileNumber?.message}
            isRequired
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <InputField
            name="dob"
            type="date"
            label="Feche de nacimiento"
            register={register}
            error={errors.neighborhood?.message}
          />
          <InputField
            name="neighborhood"
            label="Barrio"
            register={register}
            error={errors.neighborhood?.message}
          />
          <InputField
            name="gender"
            label="Género"
            register={register}
            error={errors.gender?.message}
          />
        </div>
        <Button type="submit" className="create-customer-modal__button">
          Crear
        </Button>
      </form>
    </Modal>
  );
};

CreateCustomerModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateCustomerModal;
