import ReactModal from "react-modal";
import PropTypes from "prop-types";
import "./modal.scss";

ReactModal.setAppElement("#root");

const Modal = ({ modalIsOpen, closeModal, children }) => (
  <ReactModal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Create Customer Modal"
    className="modal"
    overlayClassName="modal__overlay"
  >
    {children}
  </ReactModal>
);

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
