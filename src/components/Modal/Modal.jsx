import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Icon from "../Icon";
import "./modal.scss";

ReactModal.setAppElement("#root");

const Modal = ({
  isModalOpen,
  closeModal,
  children,
  label,
  className,
  overlayClassName,
  title,
}) => (
  <ReactModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    contentLabel={label}
    className={`modal ${className}`}
    overlayClassName={`modal__overlay ${overlayClassName}`}
  >
    <button type="button" className="modal__close-btn" onClick={() => closeModal()}>
      <Icon name="clear" />
    </button>
    <h2>{title}</h2>
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
  title: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  className: "",
  overlayClassName: "",
};

export default Modal;
