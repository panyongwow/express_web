import React, { Component } from 'react'
import { Button, Table, Modal } from 'antd'

import './style.css'
import InputModal from './inputModal'
import serviceDao from '../../../dao/service'

//上游平台服务商管理
export default class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            selectedRowKeys: [],
            showModal: false,
            // confirmLoading: false,
            openModalType: 'add',           //打开窗口类型，"add"添加新数据，"edit"修改数据
            editData: null
        }
        this.search = {                      //搜索条件
            nowpage: 1,
            apagenum: 9999,
            name: ''
        }
    }

    componentDidMount() {
        this.list(this.search)
    }
    list(s) {
        serviceDao.list(s)
            .then(result => {
                this.setState({
                    dataSource: result.details
                })
            })
    }
    del(id) {
        if (id.length === 0) {
            Modal.info({
                title: '提示',
                content: '请选择要删除的记录!',
                okText: '确定',
            })
        }
        else {
            let that=this
            Modal.confirm({
                title: '删除',
                content: '确认要删除所选记录吗？',
                okText: '确认',
                cancelText: '取消',
                onOk() {
                    serviceDao.del(id)
                        .then(result => {
                            if (result.status === 'OK') {
                                let newData=[]
                                let idArray=[...id]
                                let dataSource= that.state.dataSource
                                dataSource.map((item,index)=>{
                                    if(!idArray.find((delID)=>delID===item.id)){
                                        newData.push(item) 
                                    }
                                })
                                that.setState({
                                    dataSource:newData
                                })
                            }
                            else {
                                Modal.error({
                                    title: '删除失败',
                                    content: result.errordetail
                                })
                            }
                        })
                }
            })
        }

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
            //showModal: false
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
            { title: '名称', dataIndex: 'name', key: 'name', width: '30%' },
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
                    ref={this.inputFormRef}
                    type={this.state.openModalType}
                    initData={this.state.editData}
                    visible={this.state.showModal}
                    onAddedData={this.handleAddedData}
                    onModifiedData={this.handleModifiedData}
                    onClosed={this.closeModal}
                />
            </div>
        )
    }
}