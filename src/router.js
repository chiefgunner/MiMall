import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/product/:id',
          name: 'product',
          component: () => import(/* webpackChunkName: "product" */ './views/Product.vue')
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import(/* webpackChunkName: "detail" */ './views/Detail.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ './views/Order.vue'),
      children: [
        {
          path: 'list',
          name: 'order-list',
          component: () => import(/* webpackChunkName: "orderlist" */ './views/OrderList.vue')
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: () => import(/* webpackChunkName: "orderconfirm" */ './views/OrderConfirm.vue')
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: () => import(/* webpackChunkName: "orderpay" */ './views/OrderPay.vue')
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: () => import(/* webpackChunkName: "alipay" */ './views/Alipay.vue')
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
