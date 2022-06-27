import PropTypes from "prop-types";
import SVG from "react-inlinesvg";

const Icon = ({ width, height, name, color }) => (
  <SVG
    src={require(`../../assets/icons/${name}.svg`)}
    width={width}
    height={height}
    title={name}
    style={{ fill: color }}
  />
);

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.oneOf([
    "group",
    "money-in",
    "money-out",
    "calendar-check",
    "plus",
    "clear",
  ]).isRequired,
};

Icon.defaultProps = {
  width: 30,
  height: 30,
  color: "black",
};

export default Icon;
