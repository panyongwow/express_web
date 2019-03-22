import Get from '../fetch/get'
import Post from '../fetch/post'

export default class Service {
    static list(s) {
        let url = '/service/list.ashx' +
            '?nowpage=' + s.nowpage +
            '&apagenum=' + s.apagenum +
            '&name=' + s.name
        return Get(url)
    }

    static add(data) {
        let url = '/service/add.ashx'
        // return Post(url,
        //     'name=' + name + '&remark=' + remark)
        return Post(url,data)
    }
}