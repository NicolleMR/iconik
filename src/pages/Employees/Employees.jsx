import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import "./employees.css";

const Employees = () => (
  <div>
    <Card>
    <div className="employees">
      <h2 className="employees__title">Trabajadores/as</h2>
      <Button />
    </div>
    <Table
      columnsName={[
        "Nombre",
        "Celular",
        "Cedula",
        "Email",
        "Sexo",
      ]}
      rows={[
        ["Rosa", "3002458762", "50505050", "iconik@gmail.com", "mujer"],
        ["Olga", "3002458762", "50505050", "iconik@gmail.com", "mujer"],
        ["Eli", "3002458762", "50505050", "iconik@gmail.com", "mujer"],
        ["Maria", "3002458762", "50505050", "iconik@gmail.com", "mujer"],
      ]}
    />
  </Card> 
  </div>
);

export default Employees;
