import logo from './logo.svg';
import './App.css';
import CompCiclos from './CompCiclos';
import CompEventos from './CompEventos.js';

function App() {
  // 
  return (
    //{/*<CompCiclos></CompCiclos>*/}
    <div className="App">
      <header className="App-header">
        <h1>Cliclos y eventos</h1>
        <CompEventos/>
      </header>
    </div>
  );
}

export default App;
