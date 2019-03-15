import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Button, Select,Pagination } from 'antd'

export default class Orders extends Component {
    render() {
        const TabPane = Tabs.TabPane
        const Option = Select.Option
        // const operations = <Button type='primary'>添加新订单</Button>;
        return (
            <div>
                <div style={{ marginTop: 5}}>
                    显示记录：
                   <Select defaultValue='1'  style={{ width: 120 }}>
                        <Option value="1">今天</Option>
                        <Option value="2">本月</Option>
                        <Option value="3">全部</Option>
                    </Select>
                    <Button type='primary' style={{marginLeft:'20px'}}>添加新订单</Button>
                    <Button style={{marginLeft:'10px'}}>搜 索</Button>
                </div>
                <Tabs>
                    <TabPane tab='新订单(20)' key='1'>
                        <Pagination  size="small" defaultCurrent={1} total={500} style={{float:"right"}} />
                    </TabPane>
                    <TabPane tab='已派单(15)' key='2'></TabPane>
                    <TabPane tab='已接单(5)' key='3'></TabPane>
                    <TabPane tab='已签单(51)' key='4'></TabPane>
                    <TabPane tab='拒收(51)' key='5'></TabPane>
                    <TabPane tab='全部(154)' key='6'></TabPane>
                </Tabs>
            </div>
        )
    }
}