import PropTypes from "prop-types";
import Button from "components/Button";
import Modal from "components/Modal";
import "./confirm-modal.scss";

const ConfirmModal = ({ title, description, isModalOpen, closeModal, onConfirm }) => (
  <Modal
    isModalOpen={isModalOpen}
    closeModal={closeModal}
    className="confirm-modal"
    label="Create Customer Modal"
    title={title}
  >
    <p className="confirm-modal__description">{description}</p>
    <div className="confirm-modal__footer">
      <Button onClick={onConfirm}>Confirmar</Button>
      <Button onClick={closeModal} variant="outline">
        Cancelar
      </Button>
    </div>
  </Modal>
);

ConfirmModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmModal;
