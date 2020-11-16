import React from 'react'
import './App.css';
import Menu from './components/Menu'; 
import Home from './components/Home';
import SimpleMap from './components/Map';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={SimpleMap} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;