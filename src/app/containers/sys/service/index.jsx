import React, { Component } from 'react'
import { Button, Table, Divider, Modal, Form, Input } from 'antd'

import './style.css'
import InputForm from './inputForm'

//上游平台服务商管理
export default class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            selectedRowKeys: [],
            showModal: false,
            confirmLoading: false,
            openModalType: 'add',           //打开窗口类型，"add"添加新数据，"edit"修改数据
            editData:null
        }
    }

    componentDidMount() {
        const dataSource = [
            { key: '1', name: '叮咚买菜', remark: '' },
            { key: '2', name: '天天果园', remark: '' }
        ]
        this.setState({
            dataSource
        })
    }
    openModal = () => {
        this.setState({
            showModal: true,
            openModalType: 'add',
            editData:null
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false,
            //editData:null
        })
    }
    openEditModal = (data) => {
        this.setState({
            showModal: true,
            openModalType: 'edit',
            editData:data
        })
    }
    handleSubmitData = (data) => {
        alert(JSON.stringify(data))
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
                        {/* <Divider type='vertical'></Divider> */}
                        <Button size='small' style={{ marginLeft: '5px' }}>删除</Button>
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

        const { dataSource, showModal, confirmLoading } = this.state
        return (
            <div>
                <Button className='btn' type='primary' onClick={this.openModal}>添加</Button>
                <Button className='btn' onClick={() => alert(JSON.stringify(this.state.selectedRowKeys))} >删除</Button>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    rowSelection={rowSelection}
                    bordered
                    pagination={false}
                    size="small"
                    style={{ backgroundColor: '#fff' }}
                />
                <Modal
                    title={this.state.openModalType === 'add' ? '添加' : '修改'}
                    visible={showModal}
                    confirmLoading={confirmLoading}
                    onCancel={this.closeModal}
                    footer={null}
                >
                    <InputForm
                        onSubmitData={this.handleSubmitData}
                        editData={this.state.editData}
                    />
                </Modal>
            </div>
        )
    }
}