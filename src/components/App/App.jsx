import Dashboard from "../../pages/Dashboard";
import Header from "../Header";
import NavBar from "../NavBar";
import "./app.css";

const App = () => (
  <main className="main">
    <NavBar/>
    <Header/>
    <div className="main__content">
      <Dashboard/>
    </div>
  </main>
);
  
export default App;
