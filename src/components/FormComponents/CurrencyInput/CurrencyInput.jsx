import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import TextField from "components/FormComponents/TextField";

const CurrencyInput = ({
  control,
  label,
  name,
  error,
  isRequired,
  register,
  ...rest
}) => (
  <Controller
    render={({ field }) => (
      <NumberFormat
        allowEmptyFormatting={false}
        control={control}
        prefix="$"
        thousandSeparator
        {...field}
        customInput={TextField}
        onValueChange={(c) => {
          field.onChange(c.value);
        }}
        label={label}
        name={name}
        error={error}
        isRequired={isRequired}
        register={register}
        {...rest}
      />
    )}
    name={name}
    control={control}
  />
);

CurrencyInput.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
};

CurrencyInput.defaultProps = {
  error: "",
  isRequired: false,
};

export default CurrencyInput;
