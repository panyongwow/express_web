import React, { Component } from 'react'
//import Button from 'antd/lib/button'
import {Button} from 'antd'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>这是首页123565656！</p>
                {/* <Button type='primary'>Prime</Button> */}
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}