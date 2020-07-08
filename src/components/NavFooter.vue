<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="https://txcdn.chiefgunner.com/mi/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="//blog.chiefgunner.com" target="_blank">酋长小枪</a>
      <a href="">酋长小枪</a>
      <a href="">酋长小枪</a>
      <a href="">酋长小枪</a>
    </div>
    <div class="copyright">Copyright ©2018-2020 <span class="domain">blog.chiefgunner.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';
.footer{
  height: 234px;
  background-color: $colorB;
  text-align: center;
  border-top:4px solid $colorA;
  color:$colorD;
  font-size:16px;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    margin-bottom: 13px;
    a{
      color: $colorD;
      &:after{
        content:'';
        height:16px;
        //width: 1px;
        border-left:1px solid $colorD;
        margin:0px 10px;
      }
      &:last-child:after{
        display: none;
      }
    }
  }
  .copyright{
    .domain{
      color:$colorA;
    }
  }
}
</style>
