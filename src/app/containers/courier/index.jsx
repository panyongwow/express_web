import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Orders extends Component{
    render(){
        return(
            <div>
                <p>这是快递员页！</p>
                <Link to='/orders'>到订单页面</Link>
            </div>
        )
    }
}