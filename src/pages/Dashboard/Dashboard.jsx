import Icon from "../../components/Icon";
import ResumeCard from "../../components/ResumeCard";
import TableCard from "../../components/TableCard";
import "./dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <h1 className="dashboard__title">Dashboard</h1>
    <div className="dashboard__text">Bienvenid@s a Iconik</div>
    <div className="dashboard__resume">
      <ResumeCard
        value="$1000000"
        label="Ingresos"
        icon={<Icon name="money-in" color="white" width={40} height={40} />}
      />
      <ResumeCard
        value="$4000000"
        label="Egresos"
        icon={<Icon name="money-out" color="white" width={40} height={40} />}
        color="secondary"
      />
      <ResumeCard
        value="5"
        label="Clientes"
        icon={<Icon name="group" color="white" />}
        color="old-rose"
      />
      <ResumeCard
        value="10"
        label="Próximas Citas"
        icon={<Icon name="calendar-check" color="white" />}
        color="third"
      />
    </div>
    <div className="dashboard__grid">
      <TableCard
        title="Últimos Ingresos"
        columnsName={[
          "Cliente",
          "Trabajador/a",
          "Fecha",
          "Valor",
        ]}
        rows={[
          ["Motito", "Yurlaydis", "Abril 21", "$30000"],
          ["Petesita", "Yurlaydis", "Abril 21", "$30000"],
          ["Perrin", "Yurlaydis", "Abril 21", "$30000"],
          ["La Pocho", "Yurlaydis", "Abril 21", "$30000"],
        ]}
      />
      <TableCard
        title="Últimos Egresos"
        columnsName={[
          "Proveedor",
          "Descripción",
          "Fecha",
          "Valor",
        ]}
        rows={[
          ["AAA", "Servicio Agua", "Abril 1", "$80000"],
          ["Organic", "Compra esmaltes", "Abril 12", "$100000"],
        ]}
      />
      <TableCard
        title="Últimos Clientes"
        columnsName={[
          "Nombre",
          "Celular",
          "Cedula",
          "Email",
          "Sexo"
        ]}
        rows={[
          ["Matthew Fontalvo", "3002341234", "114087264", "-", "Hombre"],
          ["Valerie Fontalvo", "3202333234", "114087264", "-", "Mujer"],
          ["Rosa Herrera", "3162331225", "24087264", "me@gmail.com", "Mujer"],
        ]}
      />
      <TableCard
        title="Próximas Citas"
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
    </div>
  </div>
);

export default Dashboard;
