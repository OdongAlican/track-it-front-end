import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Signin from './auth/Signin'
import Activities from '../container/Activities'
import Navbar from './Navbar'
import CreateActivity from './CreateActivity'
import Measurements from '../container/Measurements'

const Router = () => {
    return (
        <div>
           <Navbar/> 
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ App } exact/>
                    <Route path="/signin" component= { Signin }/>
                    <Route path="/activities" component= { Activities }/>
                    <Route path="/create-activity" component={CreateActivity}/>
                    <Route path="/activity/:id/measurements" component={ Measurements }/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router