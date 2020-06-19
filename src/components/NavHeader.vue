<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javasrcipt:;">小米商城</a>
          <a href="javasrcipt:;">MIUI</a>
          <a href="javasrcipt:;">云服务</a>
          <a href="javasrcipt:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="">登录</a>
          <a href="">注册</a>
          <a href="" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;
    .container{
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        display: inline-block;
        margin-right: 17px;
        color: #B0B0B0;
      }
      .my-cart{
        width: 110px;
        background-color:#FF6600 ;
        text-align: center;
        color: #fff;
        .icon-cart{
          display: inline-block;
          width: 16px;
          height: 12px;
          margin-right: 4px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size:contain;
        }
      }
    }
  }
}
</style>
