import PropTypes from "prop-types";
import Icon from "../Icon";
import "./resume-card.scss";

const ResumeCard = ({ value, label, iconName, color }) => (
  <div className={`resume-card resume-card--${color}-color`}>
    {!!iconName && (
      <div className="resume-card__icon">
        <Icon name={iconName} width={30} height={30} />
      </div>
    )}
    <div className="resume-card__value">{value}</div>
    <h3 className="resume-card__label">{label}</h3>
  </div>
);

ResumeCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "third", "old-rose"]),
};

ResumeCard.defaultProps = {
  iconName: "",
  color: "primary",
};

export default ResumeCard;
