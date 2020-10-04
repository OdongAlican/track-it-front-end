import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Signin from './auth/Signin'
import Signup from './auth/Signup'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ App } exact/>
                <Route path="/signin" component= { Signin }/>
                <Route path="/signup" component= { Signup }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router