import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

const CurrencyText = ({ value, component }) => {
  const RenderText = component;
  return (
    <NumberFormat
      value={value}
      displayType="text"
      prefix="$"
      thousandSeparator
      {...(!!component && {
        renderText: (renderValue, props) => (
          <RenderText {...props}>{renderValue}</RenderText>
        ),
      })}
    />
  );
};

CurrencyText.propTypes = {
  value: PropTypes.number.isRequired,
  component: PropTypes.elementType,
};

CurrencyText.defaultProps = {
  component: null,
};

export default CurrencyText;
