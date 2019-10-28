import axios from 'axios'
import store from '../store'
import router from '../router'

// axios.defaults.baseURL = 'http://192.168.1.188:12';//默认访问接口路径

const http = axios.create();
http.defaults.timeout = 3000

http.interceptors.request.use(config => {//请求拦截配置 
    // do sth
    return config
},error => {
    console.log(error);
    return Promise.reject(error)
})

http.interceptors.response.use(response => {//响应拦截器配置
    // do something
    return response
},error => {
    console.log(error);
    return Promise.reject(error)
})

export function fetch(url,params){//封装axios的post请求
    return new Promise((resolve,reject) => {
        axios.post(url,params).then(responese => {
            resolve(response.data)//promise相关
        }).catchh(error => {
            reject(error)//promise相关
        })
    })
}
export default {//暴露htto_mock方法，即后面页面中用到的方法
    http_mock(url,params){
        return fetch(url,params)
    }
}

// /**
//  * 封装post
//  * post方法，对应post请求
//  * @param {String} url 请求的URL地址
//  * @param {Object} params 请求时携带的参数
//  * 
//  * 使用方法:  this.$post().then(() => {}, ()=>{})
//  * **/
// export function post(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, data, params).then(res => {
//             resolve(res.data);
//         }).catch(err => {
//             reject(err.data)
//         })
//     });
// }


// /**
//  * 封装get
//  * get 方法，对应get请求
//  * @param {String} url  请求的URL地址
//  * @param {Object} params 请求时携带的参数
//  * */
// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, params).then(res => {
//             resolve(res.data);
//         }).catch(err => {
//             reject(err.data)
//         })
//     })
// }