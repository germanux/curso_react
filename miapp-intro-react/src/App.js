import logo from './logo.svg';
import './App.css';
import Bienvenido from './Bienvenido';
import CompConProps from './CompConProps';
import CompConEstado from './CompConEstado';

function App() {
  const titulo = "Mi primera web React";
  let tabs = [1, 0, 2];
  let user = new Object();
  user.avatarUrl = './external.jpeg';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={user.avatarUrl}/>
        <h1>  { titulo }</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer" tabIndex={tabs[0]} >
          Learn React 1
        </a>
        <a className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer" tabIndex={tabs[1]}>
          Learn React 2
        </a>
        <a className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer" tabIndex={tabs[2]}>
          Learn React 3
        </a>
        <Bienvenido/>
        <CompConProps  titulo="Welcome to Madrid"/>
        <CompConEstado/>
      </header>
    </div>
  );
}

export default App;
