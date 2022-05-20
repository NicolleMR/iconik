import PropTypes from "prop-types";
import "./table.scss";

const Table = ({ columnsName, rows }) => (
  <div className="table__container">
    <table className="table">
      <thead>
        <tr>
          {columnsName.map((columnName) => (
            <th>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {row.map((value) => (
              <td>{value}</td>
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
