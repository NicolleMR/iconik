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
  const formattedData = data.map(({ state, ...rest }) => ({
    ...rest,
    state: state ? "Activo" : "Inactivo",
  }));
  const formattedRows = formatRows(formattedData);
  const rowsWithEditButton = formattedRows.map((row, index) => [
    ...row,
    <>
      <button
        type="button"
        onClick={() =>
          openModal({ type: modalType.EMPLOYEE, props: { employee: data[index] } })
        }
      >
        <Icon name="edit" height={20} width={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          const isWoman = data[index].gender === "mujer";
          const employeeName = `${data[index].firstName} ${data[index].lastName}`;
          openModal({
            type: modalType.CONFIRM,
            props: {
              title: "Eliminar Trabajador",
              description: `¿Estas seguro que quieres eliminar ${
                isWoman ? "a la trabajadora" : "al trabajador"
              } ${employeeName}?`,
              onConfirm: () => {},
            },
          });
        }}
      >
        <Icon name="bin" height={20} width={20} />
      </button>
    </>,
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
            "Estado",
            "",
          ]}
          rows={rowsWithEditButton}
        />
      </Card>
    </div>
  );
};

export default Employees;
