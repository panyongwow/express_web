import React, { Component } from 'react'
import { Button, Table, Modal } from 'antd'

export default class Area extends Component {
    constructor(props) {
        super(props)
        this.state={
            dataSource: [],
            selectedRowKeys: [],
        }
    }
    componentDidMount() {
        // const { BMap } = window
        // var map = new BMap.Map("mapContainer"); // 创建Map实例 
        // map.centerAndZoom(new BMap.Point(121.4789,31.236), 16); // 初始化地图,设置中心点坐标和地图级别 
        // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件 
        // map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的 
        // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放


    }
    render() {
        const columns = [
            { title: '区域名称', dataIndex: 'name', key: 'name', width: '30%' },
            { title: '备注', dataIndex: 'remark', key: 'remark' },
            {
                title: '操作', key: 'action', width: '10%', align: 'center',
                render: (text, record) => (
                    <span>
                        <Button size='small' type='primary' onClick={() => this.openEditModal(record)}>修改</Button>
                        <Button size='small' style={{ marginLeft: '5px' }} onClick={() => this.del(record.id)}>删除</Button>
                    </span>
                )
            }
        ]
        const rowSelection = {
            onChange: (selectedRowKeys) => {
                this.setState({
                    selectedRowKeys
                })
            }
        }        
        return (
            <div>
                <Table></Table>
                <div
                    className="mapContainer"
                    id="mapContainer"
                    style={{height:'300px'}}
                >
                </div>
            </div>
        )
    }
}