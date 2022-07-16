import PropTypes from "prop-types";
import "./checkbox.scss";

const Checkbox = ({ register, name, label, isRequired }) => {
  const config = register(name, {
    ...(isRequired && { required: { value: true, message: "Requerido" } }),
  });
  return (
    <div className="checkbox">
      <input id={name} type="checkbox" className="checkbox__input" {...config} />
      <label htmlFor={name} className="checkbox__label">
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  register: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
};

Checkbox.defaultProps = {
  error: "",
  isRequired: false,
};

export default Checkbox;
