import React, { Component } from 'react'
import { Modal, Form, Input, Button, Icon } from 'antd'
import './style.css'

class InputModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            mapVisible: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            const { BMap } = window
            var map = new BMap.Map("mapContainer"); // 创建Map实例 
            map.centerAndZoom(new BMap.Point(121.4789, 31.236), 16); // 初始化地图,设置中心点坐标和地图级别 
            map.addControl(new BMap.MapTypeControl()); //添加地图类型控件 
            map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的 
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
            map.addEventListener("click",(e)=>{
                alert(e.point.lng+","+e.point.lat)
            })               
        }, 2000);
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.visible !== nextProps.visible) {
            this.setState({
                visible: nextProps.visible
            })
        }
    }
    openMap = () => {
        if (!this.state.mapVisible) {
            this.setState({
                mapVisible: true
            })
              
        }
        else {
            this.setState({
                mapVisible: false
            })
        }

    }
    onCancel = () => {
        this.setState({
            visible: false
        })
    }
    handlerAfterClosed = () => {
        this.props.onClosed()
    }
    render() {
        const { form, type } = this.props
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
                title={type === 'add' ? '添加' : '修改'}
                okText="确定"
                cancelText="取消"
                onCancel={this.onCancel}
                // onOk={this.handleSubmitData}
                // confirmLoading={this.state.confirmLoading}
                afterClose={this.handlerAfterClosed}
                width={this.state.mapVisible ? 1000 : 520}
                style={{top:this.state.mapVisible?20:50}}
            >
                <Form {...formItemLayout}>
                    <FormItem label="区域名称">
                        {getFieldDecorator('name',
                            {
                                // initialValue: initData ? initData.name : '',
                                rules: [{ required: true, message: '请输入区域名称' }],
                            }
                        )(
                            <Input placeholder='区域名称' />
                        )}
                    </FormItem>
                    <FormItem label="区域范围" style={{ textAlign: 'left' }}>
                        <Button type='primary' onClick={this.openMap}>设置区域范围<Icon type={this.state.mapVisible?'up':'down'} /></Button>
                    </FormItem>
                    <FormItem style={{ display: this.state.mapVisible ? 'block' : 'none' }}>
                        <Button type='primary' onClick={this.openMap}>添加节点</Button>
                        <div className='mapContainer' id='mapContainer'></div>
                    </FormItem>
                    <FormItem label="备注">
                        {getFieldDecorator('remark',
                            // { initialValue: initData ? initData.remark : '' },
                        )(
                            <Input.TextArea rows={2} placeholder='备注' />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create({})(InputModal)