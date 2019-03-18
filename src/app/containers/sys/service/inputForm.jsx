import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'antd'

class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editData: null
        }
    }
    componentDidMount() {
        this.setState({
            editData: this.props.editData
        })
    }
    componentWillReceiveProps(nextProps){
        if(this.props.editData !==nextProps.editData){
            this.setState({
                editData: nextProps.editData
            })            
        }
    }
    handleSubmit = (e) => {
        //alert(JSON.stringify(this.state.editData))
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //alert(JSON.stringify(values))
                this.props.onSubmitData(values)
            }
            else {
                //   alert(JSON.stringify(err[0]))
                Modal.error({
                    title: '提交失败',
                    content: err[Object.keys(err)[0]].errors[0].message
                })
            }
        })
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        }
        const { getFieldDecorator, getFieldsError } = this.props.form
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="平台名称" layout='inline'>
                    {
                        getFieldDecorator('name',
                            { initialValue: this.state.editData ? this.state.editData.name : '' },
                            { rules: [{ required: true, message: '请输入上游平台名称！' }] }
                        )(
                            <Input placeholder="平台名称" />
                        )
                    }
                </Form.Item>
                <Form.Item label="备注" layout='inline'>
                    {
                        getFieldDecorator('remark')(
                            <Input.TextArea rows={4} placeholder="备注信息" />
                        )
                    }
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        xs: { span: 14, offset: 10 },
                        sm: { span: 13, offset: 11 },
                    }}
                >
                    <Button type="primary" htmlType="submit">确 定</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({ name: 'ServiceInputForm' })(InputForm)

