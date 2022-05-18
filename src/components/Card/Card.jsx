import PropTypes from "prop-types";
import "./card.css";

const Card = ({ children }) => <div className="card">{children}</div>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
