import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./routes/Home/Home";
import Formulario from "./routes/Formulario/Formulario";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Home
          </Link>
          <NavLink
            to="/formulario"
            className="btn btn-dark"
            activeClassName="active"
          >
            Crear
          </NavLink>
        </div>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
