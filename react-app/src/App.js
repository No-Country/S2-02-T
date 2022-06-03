   
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Steps from "./components/Steps/Steps";
function App() {
  return (
    <>
      <Navbar />
      <Steps />
      <Footer />
      <div>
        crear db
      </div>
    </>
  );
}

export default App;