import ReactSelect from "react-select";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import Label from "components/FormComponents/Label";
import "./select.scss";

const Select = ({ control, name, label, error, isRequired, options, ...rest }) => (
  <div className={`select__container${error ? " has-error" : ""}`}>
    <Label htmlFor={name}>{label}</Label>
    <Controller
      name={name}
      control={control}
      rules={{ required: { value: isRequired, message: "Requerido" } }}
      render={({ field: { value, onChange, onBlur, ...field } }) => (
        <ReactSelect
          className="select"
          classNamePrefix="select"
          options={options}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          {...field}
          {...rest}
        />
      )}
    />
    {error && <span className="select__error">{error}</span>}
  </div>
);

Select.propTypes = {
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
};

Select.defaultProps = {
  error: "",
  isRequired: false,
};

export default Select;
