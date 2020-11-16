import React from 'react'
import './App.css';
import Menu from './components/Menu'; 
import Home from './components/Home';
import MapView from './components/MapView';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={MapView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;