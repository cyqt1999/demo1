import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import {get,post} from './http/request'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './mock'//这样写是会默认到mock文件夹下找到index文件，执行了index.js中的Mock.mock()下面才会有数据返回


Vue.use(ElementUI)
Vue.use(VueAxios,aixos)
// Vue.prototype.$get = get;
// Vue.prototype.$post = post;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
