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
      <TableCard title="Últimos Ingresos" />
      <TableCard title="Últimos Egresos" />
      <TableCard title="Últimos Clientes" />
      <TableCard title="Próximas Citas" />
    </div>
  </div>
);

export default Dashboard;
