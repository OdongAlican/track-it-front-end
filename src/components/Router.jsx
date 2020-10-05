import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Signin from './auth/Signin'
import Activities from '../container/Activities'
import Navbar from './Navbar'

const Router = () => {
    return (
        <div>
           <Navbar/> 
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ App } exact/>
                    <Route path="/signin" component= { Signin }/>
                    <Route path="/activities" component= { Activities }/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router