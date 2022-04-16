import iconikLogo from "../../assets/images/iconik-logo.png";
import "./nav-bar.css";

const NavBar = () => (
  <div className="nav-bar">
    <img className="nav-bar__logo" src={iconikLogo} alt="Iconik"/>
    <nav className="nav-bar__menu">
      <a className="nav-bar__link is-active" href="/">Dashboard</a>
      <a className="nav-bar__link" href="/">Ingresos</a>
      <a className="nav-bar__link" href="/">Egresos</a>
      <a className="nav-bar__link" href="/">Trabajador/a</a>
      <a className="nav-bar__link" href="/">Clientes</a>
      <a className="nav-bar__link" href="/">Citas</a>
      <a className="nav-bar__link" href="/">Productos</a>
      <a className="nav-bar__link" href="/">Configuración</a>
    </nav>
  </div>
);

export default NavBar;
