import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import CurrencyText from "components/CurrencyText";
import { formatRows } from "utils/table";
import "./services.scss";

const data = [
  { id: "1", name: "Uñas Esculpidas", value: 85000 },
  { id: "2", name: "Uñas Acrilicas", value: 75000 },
  { id: "3", name: "Uñas Semipermanentes", value: 35000 },
  { id: "4", name: "Uñas tradicional", value: 12000 },
];

const Services = () => {
  const formattedToCurrency = data.map(({ value, ...row }) => ({
    ...row,
    value: <CurrencyText value={85000} />,
  }));
  const formattedRows = formatRows(formattedToCurrency);

  return (
    <div>
      <Card>
        <div className="services">
          <h2 className="services__title">
            <Icon height={24} width={24} name="services" />
            Servicios
          </h2>
          <Button>
            Añadir Servicio <Icon height={12} name="plus" />
          </Button>
        </div>
        <Table columnsName={["Nombre", "valor"]} rows={formattedRows} />
      </Card>
    </div>
  );
};

export default Services;
