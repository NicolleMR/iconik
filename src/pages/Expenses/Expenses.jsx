import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import "./expenses.scss";

const Expenses = () => (
  <div>
    <Card>
      <div className="expenses">
        <h2 className="expenses__title">
          <Icon height={24} width={24} name="money-out" />
          Egresos
        </h2>
        <Button>
          Añadir Ingresos <Icon height={12} name="plus" />
        </Button>
      </div>
      <Table
        columnsName={["Provedor", "Descripción", "Fecha", "Valor"]}
        rows={[
          ["Motito", "Yurlaydis", "Abril 21", "$80000"],
          ["Petesita", "Yurlaydis", "Abril 21", "$100000"],
        ]}
      />
    </Card>
  </div>
);

export default Expenses;
