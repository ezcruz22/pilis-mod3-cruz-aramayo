import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Formulario from "./routes/Formulario/Formulario";
import Navigation from "./routes/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home/>}/>
          <Route path="/formulario" element={<Formulario />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;