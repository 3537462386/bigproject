import request from '../request.js'
export function login(params){
    return request({
        url:'http://172.22.78.237:8089/admin/login',
        method:'get',
        params
    })
}