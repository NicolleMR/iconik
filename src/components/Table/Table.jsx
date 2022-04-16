import "./table.css";

const Table = () => (
  <div className="table__container">
    <table className="table">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Trabajador/a</th>
          <th>Fecha</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nicolle</td>
          <td>Yurleidis</td>
          <td>16/04</td>
          <td>$80000</td>
        </tr>
        <tr>
          <td>Jorge</td>
          <td>Hasbleidy</td>
          <td>16/04</td>
          <td>$100000</td>
        </tr>
        <tr>
          <td>Vale</td>
          <td>Britany</td>
          <td>16/04</td>
          <td>$10000</td>
        </tr>
        <tr>
          <td>Stefy</td>
          <td>Yajaira</td>
          <td>16/04</td>
          <td>$5000</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
