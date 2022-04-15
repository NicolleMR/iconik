import "./dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <h1 className="dashboard__title">Dashboard</h1>
    <div className="dashboard__text">Bienvenid@s a Iconik</div>
    <div className="dashboard__resume">
      <div className="dashboard__card dashboard__card--primary-color">
        <span className="dashboard__card-icon">$</span>
        <span className="dashboard__card-value dashboard__card-value--currency">
          $<span className="dashboard__value">1200000</span>
        </span>
        <h3 className="dashboard__card-label">Ingresos</h3>
      </div>
      <div className="dashboard__card dashboard__card--secondary-color">
        <span className="dashboard__card-icon">$</span>
        <span className="dashboard__card-value dashboard__card-value--currency">
          $<span className="dashboard__value">4000000</span>
        </span>
        <h3  className="dashboard__card-label">Egresos</h3>
      </div>
      <div className="dashboard__card dashboard__card--old-rose-color">
        <span className="dashboard__card-value">5</span>
        <h3  className="dashboard__card-label">Clientes</h3>
      </div>
      <div className="dashboard__card dashboard__card--third-color">
        <span className="dashboard__card-value">10</span>
        <h3  className="dashboard__card-label">Proximas Citas</h3>
      </div>
    </div>
  </div>
  )
export default Dashboard;
