import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Orders from '../containers/orders'
import Courier from '../containers/courier'

export default class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/orders' component={Orders} />
                <Route path='/courier' component={Courier} />
                <Route exact path='/' component={Orders} />
            </Switch>
        )
    }
}