import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario';
import ListaArticulos from './componentes/ListaArticulos';

function App() {
  return (
    <div className="App">
      <Header titulo="Aplicacion articulos"/>
      <Formulario/>
      <ListaArticulos/>
    </div>
  );
}

export default App;
