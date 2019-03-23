import React, { Component } from 'react';
import {Router, Route,Switch,BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Study from './components/study';
import Teach from './components/teach';
import  Login from './components/login';
import  LogOut from  './components/loginOut';
import Labor from './components/Laboratory';


class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <ul>
           <li>
           
           </li>
         </ul>
        </header>
       < BrowserRouter  >
                <Route    path='/'  exact={false}   component={Home}  />
                <Route    path='/study'  exact={false}   component={Study}  />
                <Route    path='/home'  exact={false}   component={Home}  />
                <Route    path='/teach'  exact={false}   component={Teach}  />
                <Route    path='/Labor'  exact={false}   component={Labor}  />
                <Route    path='/Login'  exact={false}   component={Login}  />
                <Route    path='/LogOut'  exact={false}   component={LogOut}  />
                
        </BrowserRouter>
      </div>
    );
  }
 
}

export default App;
