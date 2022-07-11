import PropTypes from "prop-types";
import "./label.scss";

const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="label">
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
