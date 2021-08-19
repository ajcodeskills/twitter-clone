import React from 'react'
import {Route, Switch} from 'react-router-dom';
import SignupLogin from '../components/signupLogin/SignupLogin';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
function Routes() {
    return (
        <Switch>
            <Route  exact path = '/auth'>
                <SignupLogin />
            </Route>
            <Route  exact path = '/login'>
                <Login />
            </Route>
            
        </Switch>
    )
}

export default Routes
