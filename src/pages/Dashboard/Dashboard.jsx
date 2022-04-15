import Card from "../../components/Card";
import "./dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <h1 className="dashboard__title">Dashboard</h1>
    <div className="dashboard__text">Bienvenid@s a Iconik</div>
    <div className="dashboard__resume">
      <Card value="1000000" label="Ingresos" icon="$" />
      <Card value="4000000" label="Egresos" icon="$" color="secondary" />
      <Card value="5" label="Clientes" color="old-rose" />
      <Card value="10" label="Proximas Citas" color="third" />
    </div>
  </div>
  )
export default Dashboard;
