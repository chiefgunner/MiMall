import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message, Cascader } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' //element-ui 按需加载不用引入css
//
import App from './App.vue'
import router from './router'
import store from './store'

// mockjs 开关
let mock = false
if (mock) {
  require('./mock/api')
}
// 接口基本设置
// baseURL 根据前端跨域做调整
// axios.defaults.baseURL = '/api'
axios.defaults.timeout = 7000

// axios.defaults.baseURL = '' // 本地mock
// axios.defaults.baseURL = 'https://reqres.in/api/'
axios.defaults.baseURL = '/api' // mockjs

// 接口拦截 interceptors
axios.interceptors.response.use(function (response) {
  let res = response.data
  let path = location.pathname
  // 如果 route 为 hash 模式 => path = location.hash
  if (res.status === 0) {
    return res.data || res.result
  } else if (res.status === 10) {
    if (path !== '/index' && path !== '/login') {
      window.location.href = '/login'
    }

    Message.error(res.msg)
    return Promise.reject(res)
  } else {
    // alert(res.msg)
    Message.error(res.msg || res.message)
    return Promise.reject(res)
  }
}, (error) => {
  let res = error.response
  Message.error(res.data.message)
  return Promise.reject(error)
})
//
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
// message 消息提示
Vue.prototype.$message = Message
// cascader 级联选择器
Vue.use(Cascader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
