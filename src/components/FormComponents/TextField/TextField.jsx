import PropTypes from "prop-types";
import Label from "components/FormComponents/Label";
import "./text-field.scss";

const TextField = ({ register, name, label, error, isRequired, ...rest }) => {
  const config = register(name, {
    ...(isRequired && { required: { value: true, message: "Requerido" } }),
  });

  return (
    <div className={`text-field ${error ? "has-error" : ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <input id={name} className="text-field__input" {...config} {...rest} />
      {error && <span className="text-field__error">{error}</span>}
    </div>
  );
};

TextField.propTypes = {
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
};

TextField.defaultProps = {
  error: "",
  isRequired: false,
};

export default TextField;
