/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, variant, type, onClick, className }) => (
  <button
    className={`button button--${variant} ${className}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "outline"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  className: "",
  onClick: () => {},
};

export default Button;
