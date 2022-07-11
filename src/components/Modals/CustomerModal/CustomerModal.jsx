import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Modal from "components/Modal";
import Button from "components/Button";
import InputField from "components/FormComponents/InputField";
import Select from "components/FormComponents/Select";
import { capitalize } from "utils/string";
import "./customer-modal.scss";

const CustomerModal = ({ isModalOpen, closeModal, selectedCustomer }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: selectedCustomer
      ? {
          ...selectedCustomer,
          gender: {
            value: selectedCustomer.gender,
            label: capitalize(selectedCustomer.gender),
          },
        }
      : {},
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      className="customer-modal"
      label="Create Customer Modal"
      title="Crear Cliente"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="customer-modal__container">
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
            name="cellphone"
            label="Celular"
            register={register}
            error={errors.cellphone?.message}
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
        </div>
        <Button type="submit" className="customer-modal__button">
          Crear
        </Button>
      </form>
    </Modal>
  );
};

CustomerModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedCustomer: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    cellphone: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string,
    neighborhood: PropTypes.string,
    gender: PropTypes.string,
  }),
};

CustomerModal.defaultProps = {
  selectedCustomer: null,
};

export default CustomerModal;
