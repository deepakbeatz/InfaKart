import React from 'react'
import {Route} from 'react-router-dom'
import home from './home/home'
import login from './login/login'
import register from './register/register'
import flink from './flink/flink'
import dashboard from './dashboard/dashboard'

export default function main() {
    return (
        <div>
            <Route path="/InfaKart/" exact component={home}/>
            <Route path="/InfaKart/login" exact component={login}/>
            <Route path="/InfaKart/register" exact component={register}/>
            <Route path="/InfaKart/link" exact component={flink}/>
            <Route path="/InfaKart/dashboard" exact component={dashboard}/>
            <Route path="/InfaKart/dashboard/category/:name" exact component={dashboard}/>
        </div>
    )
}
