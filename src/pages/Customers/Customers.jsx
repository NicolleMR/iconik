import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import "./customers.css";

const Customers = () => (
  <div>
    <Card>
    <div className="customers">
      <h2 className="customers__title">Clientes</h2>
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

export default Customers;
