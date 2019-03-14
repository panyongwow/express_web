import React, { Component } from 'react';
import { Link, withRouter, BrowserRouter,Switch,Route } from 'react-router-dom'
import Orders from '../containers/orders'
import Courier from  '../containers/courier'
import SubRouter from '../router/subRouter'
//import './App.css';
import { Layout, Menu } from 'antd'

export default class App extends Component {
    render() {
        const { Header, Content, Footer } = Layout
        return (
            <BrowserRouter>
                <Layout className='layout'>

                    <Header>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key='1'><Link to='/orders'>订单</Link></Menu.Item>
                            <Menu.Item key='2'><Link to='/courier'>快递员</Link></Menu.Item>
                            <Menu.Item key='3'>区域</Menu.Item>
                            <Menu.Item key='4'>系统</Menu.Item>
                        </Menu>
                    </Header>
                    <Link to='/courier'>快递员</Link>
                    <Content style={{ padding: '0 50px' }}>
                            <SubRouter />
                    </Content>

                </Layout>
            </BrowserRouter>
        );
    }
}
//export default withRouter(App)