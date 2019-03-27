import 'react-app-polyfill/ie9'     //处理IE9的兼容性
import 'react-app-polyfill/ie11'    //处理IE11的兼容性
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from '../src/app/containers'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
