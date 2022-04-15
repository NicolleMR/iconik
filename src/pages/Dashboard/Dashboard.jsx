import "./dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <h3 className="dashboard__subtitle">Dashboard</h3>
    <h1 className="dashboard__title">Bienvenid@s a Iconik</h1>
    <div className="dashboard__card">
      <div className="dashboard__resume dashboard__resume--primary-color">
        <span className="dashboard__weight ">$</span>
        <span className="dashboard__value dashboard__value--signo">$<span className="dashboard__value">1200000</span></span>
        <h3 className="dashboard__label">Ingresos</h3>
      </div>
      <div className="dashboard__resume dashboard__resume--secondary-color">
        <span className="dashboard__weight ">$</span>
        <span className="dashboard__value dashboard__value--signo">$<span className="dashboard__value">4000000</span></span>
        <h3  className="dashboard__label">Egresos</h3>
      </div>
      <div className="dashboard__resume dashboard__resume--third-color">
        <span className="dashboard__value">5</span>
        <h3  className="dashboard__label">Clientes</h3>
      </div>
      <div className="dashboard__resume dashboard__resume--other-color">
        <span className="dashboard__value">10</span>
        <h3  className="dashboard__label">Proximas Citas</h3>
      </div>
    </div>
  </div>
  )
export default Dashboard;
