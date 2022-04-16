import PropTypes from "prop-types";
import "./resume-card.css";

const ResumeCard = ({ value, label, icon, color }) => (
  <div className={`resume-card resume-card--${color}-color`}>
    {!!icon && <div className="resume-card__icon">{icon}</div>}
    <div className="resume-card__value">{value}</div>
    <h3 className="resume-card__label">{label}</h3>
  </div>
);

ResumeCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
  color: PropTypes.oneOf(["primary", "secondary", "third", "old-rose"]),
};

ResumeCard.defaultProps = {
  icon: "",
  color: "primary",
};

export default ResumeCard;
