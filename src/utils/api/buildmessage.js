import request from '../request.js'
export function program(){
    return request({
        url:'http://www.forclementine.com:8089/item/getAll',
        method:'get',
        changeOrigin: true,
    })
}
export function build() {
    return request({
        url: 'http://www.forclementine.com:8089/building/getAll',
        method: 'get',
        changeOrigin: true,
    })
}