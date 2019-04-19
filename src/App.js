import React, { Component } from 'react';
import {Router, Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/header';
import Home from './components/home';
import Active from './components/activety/index';
import Action from './components/action/index';
import Study from './components/study';
import Teach from './components/teach';
import  Login from './components/login';
import  FormUser from  './components/formUser';
import Labor from './components/Laboratory';
import User from './components/user';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <div className="App">
                <Router  history={createHistory()}>
                    {console.log('match', this)}
                    <Route>
                        <Header className="App-header" {...this.props} >
                        </Header>
                        <Route    component={Login}
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
                        <Route    component={FormUser}
                            exact
                            path="/form"
                        />
                        <Route    component={Active}
                            exact
                            path="/active"
                        />
                        <Route    component={Action}
                            exact
                            path="/action"
                        />
                        <Route    component={User}
                            exact
                            path="/user"
                        />
                        
                    </Route>
                    
                </Router>

            </div>
        );
    }

}

export default App;
