import Header from "../Header";
import NavBar from "../NavBar/NavBar";
import "./app.css";

const App = () => (
  <main className="main">
    <NavBar/>
    <Header/>
    <div className="main__content">
      content  
    </div>
  </main>
);
  
export default App;
