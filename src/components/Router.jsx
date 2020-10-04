import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Signin from './auth/Signin'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ App } exact/>
                <Route path="/signin" component= { Signin }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router