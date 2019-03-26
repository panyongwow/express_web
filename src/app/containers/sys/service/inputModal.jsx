import React, { Component } from 'react'
import {Modal, Form, Input } from 'antd'
import serviceDao from '../../../dao/service'

class InputModal extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(this.state.visible !==nextProps.visible){
            this.setState({
                visible:nextProps.visible
            })
        }
    }
    onCancel=()=>{
        this.setState({
            visible:false
        })

    }
    handlerAfterClosed=()=>{
        this.props.onClosed()
    }
    handleSubmitData=(e)=>{
        e.preventDefault()
        this.props.form.validateFields((err,data)=>{
            if(err) return
            this.setState({
                confirmLoading:true
            })
            if(this.props.type==='add'){
                this.add(data)
            }
            else{
                this.modify(data)
            }
            
        })
    }

    add(data) {
        serviceDao.add(data)
            .then(result => {
                this.setState({
                    confirmLoading:false
                })
                if (result.status === 'OK') {
                    this.props.onAddedData({...data,id:result.id})
                    this.props.form.resetFields()
                    this.setState({
                        visible:false
                    })
                }
                else {
                    Modal.error({
                        title: '添加失败',
                        content: result.errordetail
                    })
                }
            })
            .catch(e => {
                alert(e)
                this.setState({
                    confirmLoading:false
                })
            })
    }
    modify(data){
        let modifyData={...data,id:this.props.initData.id}
        serviceDao.modify(modifyData)
            .then(result=>{
                this.setState({
                    confirmLoading:false
                })                
                if(result.status==='OK'){
                    //console.log(modifyData)
                    this.props.onModifiedData(modifyData)
                    this.props.form.resetFields()
                    this.setState({
                        visible:false
                    })                    
                }
                else {
                    Modal.error({
                        title:'修改失败',
                        content:result.errordetail
                    })
                }
            })
        
    }
    render() {
        const { form, initData,type } = this.props
        const { getFieldDecorator } = form
        const FormItem = Form.Item
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
        return (
            <Modal
                visible={this.state.visible}
                title={type==='add'?'添加':'修改'}
                okText="确定"
                cancelText="取消"
                onCancel={this.onCancel}
                onOk={this.handleSubmitData}
                confirmLoading={this.state.confirmLoading}
                afterClose={this.handlerAfterClosed}
            >
                <Form {...formItemLayout}>
                    <FormItem label="平台名称">
                        {getFieldDecorator('name',
                            {
                                initialValue: initData ? initData.name : '',
                                rules: [{ required: true, message: '请输入平台名称' }],
                            }
                        )(
                            <Input placeholder='平台名称' />
                        )}
                    </FormItem>
                    <FormItem label="备注">
                        {getFieldDecorator('remark',
                            { initialValue: initData ? initData.remark : '' },
                        )(
                            <Input.TextArea rows={4} placeholder='备注' />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
export default Form.create({})(InputModal)

// 以下是用纯函数创建，可以参考

// export const InputModal = Form.create()(
//     (props) => {
//         const { visible, onCancel, onSubmitData, form, title, initData } = props
//         const { getFieldDecorator } = form
//         const formItemLayout = {
//             labelCol: {
//                 xs: { span: 12 },
//                 sm: { span: 4 },
//             },
//             wrapperCol: {
//                 xs: { span: 24 },
//                 sm: { span: 20 },
//             },
//         }
//         return (
//             <Modal
//                 visible={visible}
//                 title={title}
//                 okText="确定"
//                 cancelText="取消"
//                 onCancel={onCancel}
//                 onOk={onSubmitData}
//             >
//                 <Form {...formItemLayout}>
//                     <FormItem label="平台名称">
//                         {getFieldDecorator('name',
//                             {
//                                 initialValue: initData ? initData.name : '',
//                                 rules: [{ required: true, message: '请输入平台名称' }],
//                             }
//                         )(
//                             <Input placeholder='平台名称' />
//                         )}
//                     </FormItem>
//                     <FormItem label="备注">
//                         {getFieldDecorator('remark',
//                             { initialValue: initData ? initData.remark : '' },
//                         )(
//                             <Input.TextArea rows={4} placeholder='备注' />
//                         )}
//                     </FormItem>
//                 </Form>
//             </Modal>
//         )
//     }
// )

