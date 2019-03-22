// import 'es6-promise'
import 'whatwg-fetch'
import {APIURL} from '../config/config'

export default function post(url,data){
    return new Promise((resolve,reject)=>{
        fetch(APIURL + url,{
            method:'POST',
            mode:'cors',
            headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:obj2params(data)
        })
        .then(res=>res.json())
        .then(result=>{
            resolve(result)
        })
        .catch(error=>reject(error))
    })
}

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}