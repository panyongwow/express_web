import React, { Component } from 'react'
import { Router, Route, HashRouter } from 'react-router-dom'
import App from '../containers'
import SubRouter from './subRouter'

import createBrowserHistory from 'history/createBrowserHistory'
const customeHistory=createBrowserHistory()

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={customeHistory}>
                <App>
                    {/* <Route path="/" component={SubRouter} /> */}
                    <SubRouter />
                </App>
            </Router>
            // <Router history={customeHistory} component={App} >
            //     <SubRouter />
            // </Router>
        )
    }
}
