import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Layout, Menu} from 'antd'
import AppRouter from '../router/appRouter'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedKey:'1'
        }
    }
    menuItemClicked=(e)=>{
        this.setState({
            selectedKey:e.key
        })
    }
    render() {
        const { Header, Content, Footer } = Layout
        return (
            <BrowserRouter>
                <Layout className='layout' style={{backgroundColor:'#fff'}}>
                    <Header>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            defaultSelectedKeys={[this.state.selectedKey]}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key='1' onClick={this.menuItemClicked}><Link to='/orders'>订 单</Link></Menu.Item>
                            <Menu.Item key='2' onClick={this.menuItemClicked}><Link to='/courier'>快递员</Link></Menu.Item>
                            <Menu.Item key='3' onClick={this.menuItemClicked}><Link to='/area'></Link> 区 域</Menu.Item>
                            <Menu.Item key='4' onClick={this.menuItemClicked}><Link to='sys'>系 统</Link></Menu.Item>
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