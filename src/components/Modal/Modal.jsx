import ReactModal from "react-modal";
import PropTypes from "prop-types";
import "./modal.scss";

ReactModal.setAppElement("#root");

const Modal = ({
  isModalOpen,
  closeModal,
  children,
  label,
  className,
  overlayClassName,
}) => (
  <ReactModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel={label}
    className={`modal ${className}`}
    overlayClassName={`modal__overlay ${overlayClassName}`}
  >
    {children}
  </ReactModal>
);

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
};

Modal.defaultProps = {
  className: "",
  overlayClassName: "",
};

export default Modal;
