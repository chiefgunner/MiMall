import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//
import App from './App.vue'
import router from './router'
import store from './store'
import env from './env'

// 接口基本设置
// baseUrl 根据前端跨域做调整
axios.defaults.baseUrl = '/api'
axios.defaults.timeout = 7000
// jsop cros
axios.defaults.baseUrl = env.baseUrl

// 接口拦截 interceptors
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/'
  } else {
    alert(res.msg)
  }
})
//
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
