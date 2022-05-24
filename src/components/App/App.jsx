import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Income from "../../pages/Income";
import Expenses from "../../pages/Expenses";
import Employees from "../../pages/Employees";
import Customers from "../../pages/Customers";
import Services from "../../pages/Services";
import Settings from "../../pages/Settings";
import Header from "../Header";
import NavBar from "../NavBar";
import "./app.scss";

const App = () => (
  <BrowserRouter>
    <main className="main">
      <NavBar />
      <Header />
      <div className="main__content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ingresos" element={<Income />} />
          <Route path="/egresos" element={<Expenses />} />
          <Route path="/trabajadores" element={<Employees />} />
          <Route path="/clientes" element={<Customers />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/configuracion" element={<Settings />} />
        </Routes>
      </div>
    </main>
  </BrowserRouter>
);

export default App;
