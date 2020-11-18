import React from 'react'
import './App.css';
import Menu from './components/Menu'; 
import Home from './components/Home';
import MapView from './components/MapView';
import Signin from './components/Signin'; 
import SignUp from './components/Signup';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={MapView} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;