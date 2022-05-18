import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import "./services.css";

const Services = () => (
  <div>
    <Card>
      <div className="services">
        <h2 className="services__title">Citas</h2>
        <Button>
          Añadir Ingresos <Icon height={12} color="white" name="plus"/>
        </Button>
      </div>
      <Table
        columnsName={[
          "Cliente",
          "Trabajador/a",
          "Fecha",
          "Servicio",
        ]}
        rows={[
          ["Motito", "Yurlaydis", "Abril 21", "Uñas - Acrilicas"],
          ["Petesita", "Yurlaydis", "Abril 21", "Cejas y Pestañas"],
          ["Perrin", "Yurlaydis", "Abril 21", "Uñas - Semipermanentes"],
          ["La Pocho", "Yurlaydis", "Abril 21", "Uñas- Esculpidas"],
        ]}
      />
    </Card> 
  </div>
);

export default Services;
