import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import iconikLogo from "assets/images/iconik-logo.png";
import "./nav-bar.scss";

const links = [
  { name: "Dashboard", iconName: "dashboard", route: "/" },
  { name: "Clientes", iconName: "group", route: "/clientes" },
  { name: "Ingresos", iconName: "money-in", route: "/ingresos" },
  { name: "Egresos", iconName: "money-out", route: "/egresos" },
  { name: "Trabajadores/as", iconName: "employee", route: "/trabajadores" },
  { name: "Servicios", iconName: "services", route: "/servicios" },
  { name: "configuración", iconName: "config", route: "/configuracion" },
];

const NavBar = () => (
  <div className="nav-bar">
    <img className="nav-bar__logo" src={iconikLogo} alt="Iconik" />
    <nav className="nav-bar__menu">
      {links.map(({ name, iconName, route }) => (
        <NavLink
          key={name}
          className={({ isActive }) => `nav-bar__link ${isActive ? "is-active" : ""}`}
          to={route}
        >
          <Icon name={iconName} color="white" width={20} height={20} />
          {name}
        </NavLink>
      ))}
    </nav>
  </div>
);

export default NavBar;
