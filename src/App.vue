<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {},
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // 1、本地加载json文件 baseURL = '';
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    // 2、通过线上mock平台实现mock数据模拟
    // this.axios.get('/users/2').then((res) => {
    //   this.res = res
    // })

    // 3、mockjs
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
  },
  methods: {
    ...mapActions(['saveUsername', 'saveCartCount']),
    getUser () {
      this.axios.get('/user').then((res) => {
        // save username to vuex
        // this.$store.dispatch('saveUsername', res.username)
        this.saveUsername(res.username)
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        // save cart num to vuex
        console.log(res)

        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import '@/assets/scss/config';
@import '@/assets/scss/button.scss';
</style>
