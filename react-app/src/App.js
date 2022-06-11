import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Calculadora from "./components/Calculadora/Calculadora";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Calculadora />
      <Footer />
    </>
  );
}

export default App;
