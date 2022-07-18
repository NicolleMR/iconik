import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import CurrencyText from "components/CurrencyText";
import { formatRows } from "utils/table";
import { ModalContext, modalType } from "contexts/Modal";
import "./services.scss";

const data = [
  { id: "1", name: "Uñas Esculpidas", value: 85000 },
  { id: "2", name: "Uñas Acrilicas", value: 75000 },
  { id: "3", name: "Uñas Semipermanentes", value: 35000 },
  { id: "4", name: "Uñas tradicional", value: 12000 },
];

const Services = () => {
  const { openModal } = ModalContext();
  const formattedToCurrency = data.map(({ value, ...row }) => ({
    ...row,
    value: <CurrencyText value={value} />,
  }));
  const formattedRows = formatRows(formattedToCurrency);
  const rowsWithEditButton = formattedRows.map((row, index) => [
    ...row,
    <>
      <button
        type="button"
        onClick={() =>
          openModal({ type: modalType.SERVICE, props: { service: data[index] } })
        }
      >
        <Icon name="edit" height={20} width={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          openModal({
            type: modalType.CONFIRM,
            props: {
              title: "Eliminar Servicio",
              description: `¿Estas seguro que quieres eliminar el servicio ${data[index].name}?`,
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
    <div className="services">
      <Card>
        <div className="services__header">
          <h2 className="services__title">
            <Icon height={24} width={24} name="services" />
            Servicios
          </h2>
          <Button onClick={() => openModal({ type: modalType.SERVICE })}>
            Añadir Servicio <Icon height={12} name="plus" />
          </Button>
        </div>
        <Table columnsName={["Nombre", "valor", ""]} rows={rowsWithEditButton} />
      </Card>
    </div>
  );
};

export default Services;
