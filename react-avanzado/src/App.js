import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

// import CompListaDiezChildren from './ComponentesPropChildren';
//import CompListaDiezChildren from './ComponentesChildreLambda';
import CompListaDiezChildren from './ComponentesChildreClases';
import CompEventParam from './CompEventParam';
import CompCondicional from './CompCondicional';
import CompForCond from './CompForCond';
import AutoFocusTextInput from './CustomTextInput';

function App(props) {
  let home = <div><p>Página principal, pinche en un enlace</p></div>
  return (
    <div className="App">
     <h1>React avanzado</h1>
     <BrowserRouter>
      <nav>
        <NavLink to="/refs" activeClassName="link-activo">Refs</NavLink>  ·  
        <NavLink to="/children" activeClassName="link-activo">Children</NavLink>  · 
        <NavLink to="/events" activeClassName="link-activo">Events</NavLink>
      </nav>
       <Switch>
         <Route path="/" exact>{home} <p>¡Dale!</p></Route>
         <Route path="/refs" exact><AutoFocusTextInput/></Route>
         <Route path="/children" exact><CompListaDiezChildren/></Route>
         <Route path="/events" exact><CompEventParam></CompEventParam></Route>
         <Route path="/cond/true" exact><CompCondicional mostrar={true}/></Route>
         <Route path="/cond/false" exact><CompCondicional mostrar={false}/></Route>
         <Route path="/forcond" exact><CompForCond array={[3, 6, 9, 2]}/></Route>

       </Switch>
     </BrowserRouter>      
    </div>
  );
}

export default App;
