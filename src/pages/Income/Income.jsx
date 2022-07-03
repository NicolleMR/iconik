import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import "./income.scss";

const Income = () => (
  <Card>
    <div className="income">
      <h2 className="income__title">
        <Icon height={24} width={24} name="money-in" />
        Ingresos
      </h2>
      <Button>
        Añadir Ingresos <Icon height={12} name="plus" />
      </Button>
    </div>
    <Table
      columnsName={["Cliente", "Trabajador/a", "Fecha", "Valor"]}
      rows={[
        ["Motito", "Yurlaydis", "Abril 21", "$30000"],
        ["Petesita", "Yurlaydis", "Abril 21", "$30000"],
        ["Perrin", "Yurlaydis", "Abril 21", "$30000"],
        ["La Pocho", "Yurlaydis", "Abril 21", "$30000"],
      ]}
    />
  </Card>
);

export default Income;
