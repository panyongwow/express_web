import React, { Component } from 'react'
import { Modal, Form, Input, Button, Icon } from 'antd'

class MapModal extends  Component{
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default Form.create({})(MapModal)