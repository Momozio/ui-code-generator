// axios 二次封装
import axios from 'axios'
import { Cookie } from './cookie';
import { ElMessage } from 'element-plus';


const requsets = axios.create({
    baseURL: 'http://localhost:8000',
    // baseURL:'http://172.17.147.23:3000/',
    timeout: 5000
})

// 请求拦截器
requsets.interceptors.request.use((config: any) => {
    const token = Cookie.get('token') || '';
    // console.log(Cookie.get('token'))
    token && (config.headers.Authorization = `Bearer ${token}`)
    return config
})

// 响应拦截器
requsets.interceptors.response.use((res) => {
    if (res.data.code === 401) {
        ElMessage.error('请先登录')
        return
    } else if (res.data.code === 402) {
        ElMessage.error('您没有权限')
        return
    }
    return res.data

}, (error) => {
    ElMessage.error('出错了, 服务器无法访问')
    return Promise.reject(error)
})

export default requsets