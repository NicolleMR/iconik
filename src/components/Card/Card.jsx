import PropTypes from "prop-types";
import "./card.css";

const Card = ({ value, label, icon, color }) => (
  <div className={`card card--${color}-color`}>
    {!!icon && <div className="card__icon">{icon}</div>}
    <div className="card__value">{value}</div>
    <h3 className="card__label">{label}</h3>
  </div>
);

Card.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
  color: PropTypes.oneOf(["primary", "secondary", "third", "old-rose"]),
};

Card.defaultProps = {
  icon: "",
  color: "primary",
};

export default Card;
