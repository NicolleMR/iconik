/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, type, onClick }) => (
  <button className="button" type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};

export default Button;
