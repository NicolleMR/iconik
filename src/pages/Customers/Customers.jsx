import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { ModalContext, modalType } from "../../contexts/Modal";
import "./customers.scss";

const Customers = () => {
  const { openModal } = ModalContext();

  return (
    <div>
      <Card>
        <div className="customers">
          <h2 className="customers__title">Clientes</h2>
          <Button
            onClick={() => {
              openModal({ type: modalType.CREATE_CUSTOMER });
            }}
          >
            Agregar Cliente <Icon height={12} color="white" name="plus" />
          </Button>
        </div>
        <Table
          columnsName={["Nombre", "Celular", "Cedula", "Email", "Sexo"]}
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
};

export default Customers;
