import React from "react";
import { Routes, Route } from "react-router-dom";
import Uno from "./pages/Uno";
import Dos from "./pages/Dos";
import Tres from "./pages/Tres";
import Cuatro from "./pages/Cuatro";
import Cinco from "./pages/Cinco";
import Seis from "./pages/Seis";
import Siete from "./pages/Siete";
import Nueve from "./pages/Nueve";
import Diez from "./pages/Diez";
import Once from "./pages/Once";
import { Navbar } from "./components/nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Uno" element={<Uno />} />
        <Route path="/Dos" element={<Dos />} />
        <Route path="/Tres" element={<Tres />} />
        <Route path="/Cuatro" element={<Cuatro />} />
        <Route path="/Cinco" element={<Cinco />} />
        <Route path="/Seis" element={<Seis />} />
        <Route path="/Siete" element={<Siete />} />
        <Route path="/Nueve" element={<Nueve />} />
        <Route path="/Diez" element={<Diez />} />
        <Route path="/Once" element={<Once />} />
      </Routes>
    </div>
  );
}

export default App;
