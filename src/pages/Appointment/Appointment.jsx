import Card from "../../components/Card";
import Table from "../../components/Table";
import Button from "../../components/Button";
import "./appointment.css";

const Appointment = () => (
  <div>
    <Card>
    <div className="appointment">
      <h2 className="appointment__title">Citas</h2>
      <Button />
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

export default Appointment;
