import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import Home from "./pages/Home";  
import Nosotros from "./pages/Nosotros";
import Pasteleria from "./pages/Pasteleria";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";


import "./App.css";

function App() {
  return (
    <HashRouter>
      <NavBar />

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pasteleria" element={<Pasteleria />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main><a
  href="https://wa.me/5491122631648"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <img
    src="/src/assets/logowpp.png"
    alt="WhatsApp"
    className="whatsapp-icon"
  />
</a>

      <Footer /> 
    </HashRouter>
  );
}

export default App;


