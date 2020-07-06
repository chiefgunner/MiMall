<template>
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请认证核对订单信息</span>
      </template>
    </order-header>
    <loadding></loadding>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import Loadding from '@/components/Loadding'
import OrderHeader from '@/components/OrderHeader'
export default {
  name: 'alipay',
  components: {
    Loadding, OrderHeader
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
