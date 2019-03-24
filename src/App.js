import React, { Component, } from 'react';
import {Router, Route,Switch,BrowserRouter, } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/header';
import Home from './components/home';
import Study from './components/study';
import Teach from './components/teach';
import  Login from './components/login';
import  LogOut from  './components/loginOut';
import Labor from './components/Laboratory';


class App extends Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  render() {
    return (
      <div className="App">
        <Router  history={createHistory()}>
          <Header className="App-header">
          </Header>
          <Route    component={Home}
            exact
            path="/"
          />
          <Route    component={Study}
            exact
            path="/study"
          />
          <Route    component={Home}
            exact
            path="/home"
          />
          <Route    component={Teach}
            exact
            path="/teach"
          />
          <Route    component={Labor}
            exact
            path="/Labor"
          />
          <Route    component={Login}
            exact
            path="/Login"
          />
          <Route    component={LogOut}
            exact
            path="/LogOut"
          />


        </Router>

      </div>
    );
  }

}

export default App;
