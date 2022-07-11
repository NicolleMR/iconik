import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import { ModalContext, modalType } from "contexts/Modal";
import "./employees.scss";

const Employees = () => {
  const { openModal } = ModalContext();

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
            "Género",
          ]}
          rows={[
            [
              "1148147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
            [
              "1048147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
            [
              "1148147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
            [
              "1148147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
            [
              "1148147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
            [
              "1148147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
            [
              "1148147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
            [
              "1148147822",
              "Olga Yaneth",
              "Diaz Vargas",
              "Cra 27 # 85a - 52 El Eden",
              "3213947814",
              "Bancolombia a la mano",
              "03213947814",
              "Mujer",
            ],
          ]}
        />
      </Card>
    </div>
  );
};

export default Employees;
