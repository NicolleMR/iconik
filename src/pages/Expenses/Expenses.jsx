import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import "./expenses.css";

const Expenses = () => (
  <div>
    <Card>
      <div className="expenses">
        <h2 className="expenses__title">Egresos</h2>
        <Button>
          Añadir Ingresos <Icon height={12} color="white" name="plus"/>
        </Button>
      </div>
      <Table
        columnsName={[
          "Provedor",
          "Descripción",
          "Fecha",
          "Valor",
        ]}
        rows={[
          ["Motito", "Yurlaydis", "Abril 21", "$80000"],
          ["Petesita", "Yurlaydis", "Abril 21", "$100000"],
        ]}
      />
    </Card> 
  </div>
);

export default Expenses;
