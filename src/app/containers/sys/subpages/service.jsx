import React, { Component } from 'react'
import { Button, Table, Divider, Modal, Form, Input } from 'antd'
import './style.css'

//上游平台服务商管理
export default class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            selectedRowKeys: [],
            showModal: false,
            confirmLoading: false,
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
            showModal: true
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false
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
                        {/* <a href="javascript:;">修改</a> */}
                        <Button size='small' type='primary' onClick={() => alert(JSON.stringify(record))}>修改</Button>
                        <Divider type='vertical'></Divider>
                        <Button size='small'>删除</Button>
                        {/* <a href="javascript:;">删除</a> */}
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
        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
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
                    title='添加'
                    visible={showModal}
                    confirmLoading={confirmLoading}
                    onCancel={this.closeModal}
                    footer={null}
                >
                    <Form {...formItemLayout}>
                        <Form.Item label="平台名称" layout='inline'>
                            <Input placeholder="请输入上游平台名称" />
                        </Form.Item>
                        <Form.Item label="备注" layout='inline'>
                            <Input.TextArea rows={4} placeholder="请输入备注信息" />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                xs: { span: 14, offset: 10 },
                                sm: { span: 13, offset: 11},
                            }}
                        >
                            <Button type="primary" htmlType="submit" >确 定</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}