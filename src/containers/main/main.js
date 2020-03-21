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
            <Route path="/" exact component={home}/>
            <Route path="/login" exact component={login}/>
            <Route path="/register" exact component={register}/>
            <Route path="/link" exact component={flink}/>
            <Route path="/dashboard" exact component={dashboard}/>
            <Route path="/dashboard/category/:name" exact component={dashboard}/>
        </div>
    )
}
