import PropTypes from "prop-types";
import "./table-card.css";
import Card from "../Card";
import Table from "../Table";

const TableCard = ({ title }) => (
  <Card>
    <h2 className="table-card__title">{title}</h2>
    <Table />
  </Card>
);

TableCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TableCard;
