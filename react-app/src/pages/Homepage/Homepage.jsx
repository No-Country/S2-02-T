import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.js";
import Steps from "../../components/Steps/Steps.jsx";
import Calculadora from "../../components/Calculadora/Calculadora.jsx";
export default function Homepage() {
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
