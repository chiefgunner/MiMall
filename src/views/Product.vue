<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>

    <div class="h">height</div>
  </div>
</template>

<script>
import ProductParam from '@/components/ProductParam'
export default {
  name: 'Product',
  data () {
    return {

    }
  },
  components: {
    ProductParam
  }
}
</script>

<style lang="scss">
.product{
  button{
    margin-left:12px;
  }
  .h{
    height: 1200px;
    background-color: beige;
  }
}
</style>
