import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { CardsContext } from "./contexts/CardContext";
import Home from "./routes/Home/Home";
import Formulario from "./routes/Form/Formulario";

function App() {
  return (
    <div className="App">
      <CardsContext.Provider>
        <Router>
          <div className="container mt-5">
            <div className="btn-group">
              <Link to="/" className="btn btn-dark">
                Home Cards
              </Link>
              <NavLink
                to="/form"
                className="btn btn-dark"
                activeClassName="active"
              >
                Formulario
              </NavLink>
            </div>
            <hr />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Formulario />} />
            </Routes>
          </div>
        </Router>
      </CardsContext.Provider>
    </div>
  );
}

export default App;
