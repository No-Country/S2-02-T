import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
