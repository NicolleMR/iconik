import PropTypes from "prop-types";
import "./card.css";

const Card = ({ value, label, icon, color }) => (
  <div className={`card card--${color}-color`}>
    {icon && <span className="card__icon">{icon}</span>}
    <span className="card__value">{value}</span>
    <h3 className="card__label">{label}</h3>
  </div>
);

Card.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "third", "old-rose"]),
};

Card.defaultProps = {
  icon: "",
  color: "primary",
};

export default Card;
