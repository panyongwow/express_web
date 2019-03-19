import 'es6-promise'
import 'whatwg-fetch'
import APIURL from '../config/config'

export default function post(url,data){
    return new Promise((resolve,reject)=>{
        fetch(APIURL + url,{
            method:'POST',
            headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:data
        })
        .then(res=>res.json())
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    })
}