import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './components/Cuerpo/Cuerpo';
import Tabla from './components/Tabla/Tabla';
import Login from './components/Login/Login';
import Pie from './components/Pie/Pie';
import Bienvenida from './components/Tabla/Bienvenida';

function App() {
  return (
    <>
      <Cuerpo />
      <Bienvenida />
      <Login />
      <Tabla />
      <Pie name="Vane" />
    </>
  );
}

export default App;
