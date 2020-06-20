<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceBar',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';
  @import '@/assets/scss/config';
  @import '@/assets/scss/mixin';
  .service{
    padding:33px 0;
    color:$colorB;
    li{
      display: inline-block;
      width:24.9%;
      text-align: center;
      border-left: 1px solid $colorH;
      height: 20px;
      font-size: 16px;
      &:first-child{
        border-left:0;
      }
      span{
        // position: absolute;
        top:0px;
        display: inline-block;
        widows: 20px;
        height: 19px;
        margin-right: 8px;
        vertical-align: -4px;
      }
    }
    .icon-setting{
      @include bigImg(20px,20px,'/imgs/icon-setting.png');
    }
    .icon-7day{
      @include bigImg(20px,20px,'/imgs/icon-7day.png');
    }
    .icon-15day{
      @include bigImg(20px,20px,'/imgs/icon-15day.png');
    }
    .icon-post{
      @include bigImg(20px,20px,'/imgs/icon-post.png');
    }
  }
</style>
