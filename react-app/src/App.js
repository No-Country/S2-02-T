import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './components/Cuerpo/Cuerpo';
import Tabla from './components/Tabla/Tabla';
import Login from './components/Login/Login';
import Pie from './components/Pie/Pie';

function App() {
  return (
    <><Cuerpo /><Tabla /><Login /><Pie name="Vane" /></>
  );
}

export default App;
