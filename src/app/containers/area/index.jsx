import React, { Component } from 'react'
import { Button, Table, Modal, Row, Col } from 'antd'
import InputModal from './inputModal'

export default class Area extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            selectedRowKeys: [],
            showModal: false,
            openModalType: 'add',           //打开窗口类型，"add"添加新数据，"edit"修改数据
            editData: null            
        }
    }
    componentDidMount() {
        // const { BMap } = window
        // var map = new BMap.Map("mapContainer"); // 创建Map实例 
        // map.centerAndZoom(new BMap.Point(121.4789, 31.236), 16); // 初始化地图,设置中心点坐标和地图级别 
        // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件 
        // map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的 
        // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

        const data = [
            { id: 1, name: 'A区', remark: '测试' },
            { id: 2, name: 'B区', remark: '测试二' }
        ]
        this.setState({
            dataSource: data
        })
    }
    openModal = () => {
        this.setState({
            showModal: true,
            openModalType: 'add',
            editData: null
        })
    }
    openEditModal = (data) => {
        this.setState({
            showModal: true,
            openModalType: 'edit',
            editData: data
        })
    }
    closeModal=()=>{
        this.setState({
            showModal:false
        })
    }   
    handleAddedData = (data) => {
        let newDataSource = this.state.dataSource;
        newDataSource.push(data)
        this.setState({
            dataSource: newDataSource,
            showModal: false
        })
    }
    handleModifiedData = (data) => {
        let dataSource = this.state.dataSource;
        let serviceData = dataSource.find((item) => item.id === data.id)
        serviceData.name = data.name
        serviceData.remark = data.remark
        this.setState({
            dataSource: dataSource
        })
    }     
    render() {
        const columns = [
            { title: '区域名称', dataIndex: 'name', key: 'name', width: '30%' },
            { title: '备注', dataIndex: 'remark', key: 'remark' },
            {
                title: '操作', key: 'action', width: '15%', align: 'center',
                render: (text, record) => (
                    <span>
                        <Button size='small' type='primary' onClick={() => this.openEditModal(record)}>修改</Button>
                        <Button size='small' style={{ marginLeft: '5px' }} onClick={() => this.del(record.id)}>删除</Button>
                        <Button size='small' style={{ marginLeft: '5px' }} onClick={() => this.del(record.id)}>查看</Button>
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
                <Button className='btn' type='primary' onClick={this.openModal}>添加</Button>
                <Button className='btn' onClick={() => this.del(this.state.selectedRowKeys)} >删除</Button>
                <Table
                    rowKey="id"
                    dataSource={this.state.dataSource}
                    columns={columns}
                    rowSelection={rowSelection}
                    bordered
                    pagination={false}
                    size="small"
                    style={{ backgroundColor: '#fff' }}
                />
                <InputModal
                    // ref={this.inputFormRef}
                    type={this.state.openModalType}
                    initData={this.state.editData}
                    visible={this.state.showModal}
                    onAddedData={this.handleAddedData}
                    onModifiedData={this.handleModifiedData}
                    onClosed={this.closeModal}
                />      
                {/* <div className='mapContainer' id='mapContainer'></div>           */}
            </div>
            
        )
    }
}