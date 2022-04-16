import Icon from "../../components/Icon";
import Card from "../../components/Card";
import "./dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <h1 className="dashboard__title">Dashboard</h1>
    <div className="dashboard__text">Bienvenid@s a Iconik</div>
    <div className="dashboard__resume">
      <Card
        value="$1000000"
        label="Ingresos"
        icon={<Icon name="money-in" color="white" width={40} height={40} />}
        />
      <Card
        value="$4000000"
        label="Egresos"
        icon={<Icon name="money-out" color="white" width={40} height={40} />}
        color="secondary"
      />
      <Card
        value="5"
        label="Clientes"
        icon={<Icon name="group" color="white" />}
        color="old-rose"
      />
      <Card
        value="10"
        label="Proximas Citas"
        icon={<Icon name="calendar-check" color="white" />}
        color="third"
      />
    </div>
  </div>
  )
export default Dashboard;
