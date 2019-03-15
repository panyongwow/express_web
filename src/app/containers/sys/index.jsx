import React,{Component} from 'react'
import {Tabs,Button} from 'antd'

import Service from './subpages/service'

export default class Sys extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const TabPane=Tabs.TabPane
        return(
            <Tabs>
                <TabPane key='1' tab='上游平台'>
                    <Service />
                </TabPane>
                <TabPane key='2' tab='账号管理'></TabPane>
            </Tabs>
        )
    }
}