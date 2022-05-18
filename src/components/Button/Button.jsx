/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, type }) => (
  <button className="button__btn" type={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
