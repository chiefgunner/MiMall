<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import Storage from '@/storage/'

export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter
  },
  data () {
    return {

    }
  },
  mounted () {
    // Storage.setItem('user', { userName: 'sundong' })
    // Storage.setItem('age', 18, 'user')
    // Storage.setItem('order', { 123456: 'goods_1' })
    // Storage.setItem(2, 'goods_2', 'order')
    // console.log(Storage.getItem('user'))
    // console.log(Storage.getItem('userName', 'user'))
    // Storage.clear(123456, 'order')
    // Storage.setItem(1, 'goods_1', 'order')
    // Storage.clear('order')
    // Storage.getStorage()
  }
}
</script>

<style lang="" scoped>

</style>
