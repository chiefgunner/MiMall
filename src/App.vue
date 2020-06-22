<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
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
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import '@/assets/scss/config';
@import '@/assets/scss/button.scss';
</style>
