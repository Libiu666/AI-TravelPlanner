//axios基础封装
import axios from 'axios'

const httpInstance =axios.create({
    baseURL: 'http://localhost:7000',
    timeout:5000
})
//请求拦截器
httpInstance.interceptors.request.use(config => {
    // console.log(config)
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})
//响应拦截器
httpInstance.interceptors.response.use(response => {
    // console.log(response)
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

export default httpInstance
