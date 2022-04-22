import iconikLogo from "../../assets/images/iconik-logo.png";
import { Link } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => (
  <div className="nav-bar">
    <img className="nav-bar__logo" src={iconikLogo} alt="Iconik"/>
    <nav className="nav-bar__menu">
      <a className="nav-bar__link is-active" href="/">Dashboard</a>
      <Link className="nav-bar__link" to="/ingresos">Ingresos</Link>
      <Link className="nav-bar__link" to="/egresos">Egresos</Link>
      <Link className="nav-bar__link" to="/trabajadores">Trabajadores/as</Link>
      <Link className="nav-bar__link" to="/clientes">Clientes</Link>
      <Link className="nav-bar__link" to="/citas">Citas</Link>
      <Link className="nav-bar__link" to="/productos">Productos</Link>
      <Link className="nav-bar__link" to="/configuracion">Configuración</Link>
    </nav>
  </div>
);

export default NavBar;
