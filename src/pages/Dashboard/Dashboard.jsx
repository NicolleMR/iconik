import "./dashboard.css";

const Dashboard = () => (
    <div className="content__card">
        <div className="content__resume">
          <h3 className="content__label">Ingresos</h3>
          <span className="content__value">$1200000</span>
        </div>
        <div className="content__resume">
          <h3  className="content__label">Egresos</h3>
          <span className="content__value">$4000000</span>
        </div>
        <div className="content__resume">
          <h3  className="content__label">Clientes</h3>
          <span className="content__value">5</span>
        </div>
        <div className="content__resume">
          <h3  className="content__label">Proximas Citas</h3>
          <span className="content__value">10</span>
        </div>
      </div>
  )
export default Dashboard;
