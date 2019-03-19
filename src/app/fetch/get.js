import 'es6-promise'
import 'whatwg-fetch'
import APIURL from '../config/config'

export default function get(url){
    return new Promise((resolve,reject)=>{
        fetch(APIURL+ url,{
            credentials:'include',
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
        })
        .then(res=>res.json())
        .then(result=>resolve(result))
        .catch(error=>reject(error))
    })
}