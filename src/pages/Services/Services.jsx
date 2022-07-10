import Card from "components/Card";
import Table from "components/Table";
import Button from "components/Button";
import Icon from "components/Icon";
import "./services.scss";

const Services = () => (
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
      <Table
        columnsName={["Nombre", "valor"]}
        rows={[
          ["Uñas Esculpidas", "$85.000"],
          ["Uñas Acrilicas", "$75.000"],
          ["Uñas Semipermanentes", "$35.000"],
          ["Uñas tradicional", "$12.000"],
        ]}
      />
    </Card>
  </div>
);

export default Services;
