import PropTypes from "prop-types";
import "./table.scss";

const Table = ({ columnsName, rows }) => (
  <div className="table__container">
    <table className="table">
      <thead>
        <tr>
          {columnsName.map((columnName, i) => (
            <th key={`head-${i}-${columnName}`}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map((value, j) => (
              <td key={`cell-${j}`}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  columnsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Table;
