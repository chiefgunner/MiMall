<template>
  <div class="ali-pay">
    <loadding></loadding>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import Loadding from '@/components/Loadding'
export default {
  name: 'alipay',
  components: {
    Loadding
  },
  data () {
    return {
      orderId: this.$route.query.orderId, // 订单ID
      content: ''
    }
  },
  mounted () {
    this.pay()
  },
  methods: {
    pay () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: 'Vue 商城', // 扫码支付时订单名称
        amount: 0.01, // 单位元
        payType: 1 // 1支付宝，2微信
      }).then((res) => {
        //
        this.content = res.content// 支付宝content
        setTimeout(() => {
          document.forms[0].submit()
        }, 100)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
