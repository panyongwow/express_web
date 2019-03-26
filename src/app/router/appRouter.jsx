import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Orders from '../containers/orders'
import Courier from '../containers/courier'
import Area from '../containers/area'
import Sys from '../containers/sys'

export default class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/orders' component={Orders} />
                <Route path='/courier' component={Courier} />
                <Route path='/Area' component={Area} />
                <Route path='/sys' component={Sys} />
                <Route exact path='/' component={Orders} />
            </Switch>
        )
    }
}