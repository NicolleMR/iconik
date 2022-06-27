/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, type, onClick, className }) => (
  <button className={`button ${className}`} type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  className: "",
  onClick: () => {},
};

export default Button;
