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
          className="customers__table"
          columnsName={[
            "Cedula",
            "Nombre",
            <div>
              <Icon height={16} width={16} color="white" name="mobile" />
              Celular
            </div>,
            <div>
              <Icon height={16} width={16} color="white" name="email" />
              Email
            </div>,
            "Fecha de nacimiento",
            "Barrio",
            "Sexo",
          ]}
          rows={[
            [
              "1140876361",
              "Jorge Monroy",
              "301241036",
              "jlmonroy13@gmail.com",
              "13 Septiembre",
              "Altos del prado",
              "Hombre",
            ],
            [
              "940186361",
              "Lina Perez",
              "304243039",
              "linap@gmail.com",
              "15 Marzo",
              "Jumbo",
              "Mujer",
            ],
            [
              "10020186361",
              "Tatiana Ruiz",
              "311253038",
              "tatiruiz@gmail.com",
              "2 Febrero",
              "Villa Carolina",
              "Mujer",
            ],
            [
              "740186361",
              "Dayana Herrera",
              "321743039",
              "dayahe@gmail.com",
              "30 Junio",
              "Paraiso",
              "Mujer",
            ],
            [
              "115672346",
              "Valerie Vergara",
              "315642039",
              "vergaraVale@gmail.com",
              "31 Diciembre",
              "Villa Carolina",
              "Mujer",
            ],
          ]}
        />
      </Card>
    </div>
  );
};

export default Customers;
