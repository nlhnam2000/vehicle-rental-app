import React from 'react'
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import MapView from './components/MapView';
import Signin from './components/Signin';
import SignUp from './components/Signup';
import Info from './components/Info';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component {

  componentDidMount() {
    this.props.onCheckSignup();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Menu {...this.props} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={MapView} />
            <Route path='/signin' exact component={Signin} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/user/info' exact component={Info} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);