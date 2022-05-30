import { useState } from "react";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import "./customers.scss";

const Customers = () => {
  const [isModalOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Card>
        <div className="customers">
          <h2 className="customers__title">Clientes</h2>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Añadir Ingresos <Icon height={12} color="white" name="plus" />
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
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        label="Create Customer Modal"
      >
        <h1>Hola!</h1>
      </Modal>
    </div>
  );
};

export default Customers;
