import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Layout, Menu } from 'antd'
import AppRouter from './app/router/appRouter'
import SubRouter from './app/router/subRouter'
import Home from './app/containers/home'

// class App extends Component {
//   render() {
//     const { Header, Content, Footer } = Layout
//     return (
//       <Layout className='layout'>
//         <Header>
//           <Menu
//             theme='dark'
//             mode='horizontal'
//             defaultSelectedKeys={['1']}
//             style={{ lineHeight: '64px' }}
//           >
//             <Menu.Item key='1'>订单</Menu.Item>
//             <Menu.Item key='2'>快递员</Menu.Item>
//             <Menu.Item key='3'>区域</Menu.Item>
//             <Menu.Item key='4'>系统</Menu.Item>
//           </Menu>
//         </Header>
//         <Content style={{padding:'0 50px'}}>
//           {/* <Route path='/' component={AppRouter} />  */}
//           <AppRouter />

//         </Content>
//       </Layout>
//     );
//   }
// }

//export default App;
//export default Home
//export default AppRouter
export default SubRouter