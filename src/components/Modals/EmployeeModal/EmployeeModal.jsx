import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Modal from "components/Modal";
import Button from "components/Button";
import InputField from "components/FormComponents/InputField";
import Select from "components/FormComponents/Select";
import { capitalize } from "utils/string";
import "./employee-modal.scss";

const EmployeeModal = ({ isModalOpen, closeModal, selectedEmployee }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: selectedEmployee
      ? {
          ...selectedEmployee,
          gender: {
            value: selectedEmployee.gender,
            label: capitalize(selectedEmployee.gender),
          },
        }
      : {},
  });

  const onSubmit = () => {};

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      className="employee-modal"
      label="Create Employee Modal"
      title="Crear Trabajador"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="employee-modal__container">
          <InputField
            name="identificationNumber"
            label="Cedula"
            register={register}
            error={errors.identificationNumber?.message}
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
            name="dob"
            type="date"
            label="Feche de nacimiento"
            register={register}
            error={errors.neighborhood?.message}
          />
          <Select
            name="gender"
            label="Género"
            control={control}
            error={errors.gender?.message}
            placeholder="Selecciona un genero"
            options={[
              { value: "hombre", label: "Hombre" },
              { value: "mujer", label: "Mujer" },
            ]}
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
            name="cellphone"
            label="Celular"
            register={register}
            error={errors.cellphone?.message}
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
  selectedEmployee: PropTypes.shape({
    identificationNumber: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dob: PropTypes.string,
    gender: PropTypes.string,
    address: PropTypes.string,
    cellphone: PropTypes.string,
    paymentMethod: PropTypes.string,
    accountNumber: PropTypes.string,
  }),
};

EmployeeModal.defaultProps = {
  selectedEmployee: null,
};

export default EmployeeModal;
