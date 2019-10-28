/**
 * axios封装：请求拦截，响应拦截，错误编码
 * **/ 
import axios from 'axios'
/**
 * 默认10s请求超时
 * */ 
axios.defaults.timeout = 10000;

// import store from '../store'
// import router from '../router'

// axios.defaults.baseURL = 'http://192.168.1.188:12';//默认访问接口路径

/**
 * 设置post请求头
 * */ 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * 设置拦截器拦截请求
 * 
 * 请求拦截器
 * 
 * */ 
axios.interceptors.request.use(
    config => {
        //每次发送请求之前判断是否存在token，如果存在，则统一在htpp请求的header都加上token，不用每次请求都手动添加了

        //即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断

        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;

    },
    error => {
        return Promise.error(error);
    }
)


/**
 * 响应请求拦截以及返回服务 器状态码
 * 响应拦截器
 * 
 * */ 
axios.interceptors.response.use(
    response => {
        if(response.status === 200){
            return Promise.resolve(response);
        }else{
            return Promise.reject(response);
        }
    },
    //服务器状态码不是200的情况
    error => {
        if(error.response.status){
            switch (error.response.status){
                //401:未登录
                //未登录则跳转登录页面，并携带当前页面的路径
                //在登录成功后返回当前页面，这一步需要在登录页操作
                
            }
        }
    }
)




































/**
 * 封装post
 * post方法，对应post请求
 * @param {String} url 请求的URL地址
 * @param {Object} params 请求时携带的参数
 * 
 * 使用方法:  this.$post().then(() => {}, ()=>{})
 * **/
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}


/**
 * 封装get
 * get 方法，对应get请求
 * @param {String} url  请求的URL地址
 * @param {Object} params 请求时携带的参数
 * */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    })
}