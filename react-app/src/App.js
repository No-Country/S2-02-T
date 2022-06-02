import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cuerpo from './components/Cuerpo/Cuerpo';
import Inicio from './components/Inicio/Inicio';
import Login from './components/Login/Login';
import Pie from './components/Pie/Pie';

function App() {
  return (
    <><Cuerpo /><Inicio /><Login /><Pie name="Vane" /></>
  );
}

export default App;
