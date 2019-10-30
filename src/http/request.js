/**
 * axios封装：请求拦截，响应拦截，错误编码
 * **/
import axios from 'axios'
// import router from '../router';
// import { toStatement } from '@babel/types';
// import store from '../store'
// import router from '../router'
axios.defaults.timeout = 10000;//默认10s请求超时

/**
 * 
 * 封装get请求和post请求
 * 
 * */ 
/**
 * get请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * **/ 

/**
 * 封装post
 * post方法，对应post请求
 * @param {String} url 请求的URL地址
 * @param {Object} params 请求时携带的参数
 * 
 * 使用方法:  this.$post().then(() => {}, ()=>{})
 * **/
