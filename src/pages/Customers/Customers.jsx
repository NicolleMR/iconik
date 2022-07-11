import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import { ModalContext, modalType } from "contexts/Modal";
import { formatRows } from "utils/table";
import data from "./mockData";
import "./customers.scss";

const Customers = () => {
  const { openModal } = ModalContext();
  const formattedData = data.map(({ id, firstName, lastName, ...rest }) => ({
    id,
    name: `${firstName} ${lastName}`,
    ...rest,
  }));
  const formattedRows = formatRows(formattedData);
  const rowsWithEditButton = formattedRows.map((row, index) => [
    ...row,
    <button
      type="button"
      onClick={() =>
        openModal({ type: modalType.CUSTOMER, props: { customer: data[index] } })
      }
    >
      <Icon name="edit" height={20} width={20} />
    </button>,
  ]);

  return (
    <div>
      <Card>
        <div className="customers">
          <h2 className="customers__title">
            <Icon height={24} width={24} name="group" />
            Clientes
          </h2>
          <Button
            onClick={() => {
              openModal({ type: modalType.CUSTOMER });
            }}
          >
            Agregar Cliente <Icon height={12} name="plus" />
          </Button>
        </div>
        <Table
          columnsName={[
            "Cedula",
            "Nombre",
            <div>
              <Icon height={16} width={16} name="mobile" />
              Celular
            </div>,
            <div>
              <Icon height={16} width={16} name="email" />
              Email
            </div>,
            "Fecha de nacimiento",
            "Barrio",
            "Género",
            "",
          ]}
          rows={rowsWithEditButton}
        />
      </Card>
    </div>
  );
};

export default Customers;
