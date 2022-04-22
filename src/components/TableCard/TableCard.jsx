import PropTypes from "prop-types";
import "./table-card.css";
import Card from "../Card";
import Table from "../Table";

const TableCard = ({ title, columnsName, rows }) => (
  <Card>
    <h2 className="table-card__title">{title}</h2>
    <Table
      columnsName={columnsName}
      rows={rows}
    />
  </Card>
);

TableCard.propTypes = {
  title: PropTypes.string.isRequired,
  columnsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired,
};

export default TableCard;
