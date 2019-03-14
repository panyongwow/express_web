import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Orders extends Component{
    render(){
        return(
            <div>
                <p>这是订单页！</p>
                <Link to='/courier'>到快递员页面</Link>
            </div>
        )
    }
}