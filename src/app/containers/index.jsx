import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Layout, Menu} from 'antd'
import AppRouter from '../router/appRouter'

export default class App extends Component {
    render() {
        const { Header, Content, Footer } = Layout
        return (
            <BrowserRouter>
                <Layout className='layout' style={{backgroundColor:'#fff'}}>
                    <Header>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key='1'><Link to='/orders'>订 单</Link></Menu.Item>
                            <Menu.Item key='2'><Link to='/courier'>快递员</Link></Menu.Item>
                            <Menu.Item key='3'><Link to='/area'></Link> 区 域</Menu.Item>
                            <Menu.Item key='4'><Link to='sys'>系 统</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <div style={{height:'3px',backgroundColor:'#fff'}}></div>
                    <Content style={{ padding: '0 50px',margin:'10px',backgroundColor:'#fff'}}>
                        <AppRouter />
                    </Content>

                </Layout>
            </BrowserRouter>
        );
    }
}