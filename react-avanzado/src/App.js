import logo from './logo.svg';
import './App.css';
// import CompListaDiezChildren from './ComponentesPropChildren';
//import CompListaDiezChildren from './ComponentesChildreLambda';
import CompListaDiezChildren from './ComponentesChildreClases';
import CompEventParam from './CompEventParam';
import CompCondicional from './CompCondicional';
import CompForCond from './CompForCond';

function App() {
  return (
    <div className="App">
     <h1>React avanzado</h1>
      <CompListaDiezChildren/>
      <CompEventParam></CompEventParam>
      <CompCondicional mostrar={true}/>
      <CompCondicional mostrar={false}/>
      <CompForCond array={[3, 6, 9, 2]}/>
    </div>
  );
}

export default App;
