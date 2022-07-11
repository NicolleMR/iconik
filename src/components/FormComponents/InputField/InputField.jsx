import PropTypes from "prop-types";
import Label from "components/FormComponents/Label";
import "./input-field.scss";

const Input = ({ register, name, label, error, isRequired, ...rest }) => {
  const config = register(name, {
    ...(isRequired && { required: { value: true, message: "Requerido" } }),
  });
  return (
    <div className={`input-field ${error ? "has-error" : ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <input id={name} className="input-field__input" {...config} {...rest} />
      {error && <span className="input-field__error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  error: "",
  isRequired: false,
};

export default Input;
