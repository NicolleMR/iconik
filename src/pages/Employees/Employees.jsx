import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import { ModalContext, modalType } from "contexts/Modal";
import { formatRows } from "utils/table";
import data from "./mockData";
import "./employees.scss";

const Employees = () => {
  const { openModal } = ModalContext();
  const formattedRows = formatRows(data);
  const rowsWithEditButton = formattedRows.map((row, index) => [
    ...row,
    <button
      type="button"
      onClick={() =>
        openModal({ type: modalType.EMPLOYEE, props: { employee: data[index] } })
      }
    >
      <Icon name="edit" height={20} width={20} />
    </button>,
  ]);

  return (
    <div>
      <Card>
        <div className="employees">
          <h2 className="employees__title">
            <Icon height={24} width={24} name="employee" />
            Trabajadores/as
          </h2>
          <Button
            onClick={() => {
              openModal({ type: modalType.EMPLOYEE });
            }}
          >
            Añadir Trabajador/a <Icon height={12} name="plus" />
          </Button>
        </div>
        <Table
          columnsName={[
            "Cedula",
            "Nombre",
            "Apellido",
            "Fecha de nacimiento",
            "Género",
            <div>
              <Icon height={16} width={16} name="location" />
              Dirección
            </div>,
            <div>
              <Icon height={16} width={16} name="mobile" />
              Celular
            </div>,
            <div>
              <Icon height={16} width={16} name="money-in" />
              Forma de pago
            </div>,
            "# de cuenta",
            "",
          ]}
          rows={rowsWithEditButton}
        />
      </Card>
    </div>
  );
};

export default Employees;
