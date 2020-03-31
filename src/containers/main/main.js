import React from 'react'
import {Route,Switch} from 'react-router-dom'
import dashboard from './dashboard/dashboard'

export default function main() {
    return (
        <div>
            <Switch>
                <Route path="/InfaKart" component={dashboard}/>
            </Switch>
        </div>
    )
}
