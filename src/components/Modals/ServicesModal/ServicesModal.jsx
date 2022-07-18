import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import Modal from "components/Modal";
import CurrencyInput from "components/FormComponents/CurrencyInput";
import TextField from "components/FormComponents/TextField";
import "./services-modal.scss";

const ServicesModal = ({ isModalOpen, closeModal, selectedService }) => {
  const isEditMode = !!selectedService;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: isEditMode
      ? { name: selectedService.name, value: selectedService.value }
      : {},
  });

  const onSubmit = () => {};

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      className="services-modal"
      label="Services Modal"
      title={isEditMode ? "Editar Servicio" : "Crear Servicio"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="services-modal__form">
        <TextField
          name="name"
          label="Nombre"
          register={register}
          error={errors.name?.message}
          isRequired
        />
        <CurrencyInput
          control={control}
          label="Valor"
          name="value"
          placeholder="$"
          error={errors.value?.message}
          isRequired
          register={register}
        />
        <Button type="submit" className="services-modal__button">
          Crear
        </Button>
      </form>
    </Modal>
  );
};

ServicesModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedService: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
};

ServicesModal.defaultProps = {
  selectedService: null,
};

export default ServicesModal;
