import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Header titulo="Aplicacion articulos"/>
      <Formulario/>
    </div>
  );
}

export default App;
