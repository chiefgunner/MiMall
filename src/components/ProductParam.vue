<template>
  <div class="nav-bar" :class="{'is-fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paroduct-param',
  props: {
    title: String
  },
  data () {
    return {
      isFixed: false
    }
  },
  methods: {
    initHeight () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop > 223) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  destroyed () {
    // false 冒泡移出监听事件
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/config';
@import '@/assets/scss/mixin';
.nav-bar{
  height: 70px;
  background-color: $colorG;
  transition: all .5s linear;
  &.is-fixed{
    position: fixed;
    top:0;
    margin-top:0;
    width: 100%;
    box-shadow:0px 20px 39px 1px rgba(225,225,225,0.19);
  }
  .container{
    border-top:1px solid $colorH;
    @include flex();
    .pro-title{
      line-height: 70px;
      font-size:$fontH;
      font-weight:bold;
    }
    .pro-param{
      font-size:$fontJ;
      font-weight: bold;
      a{
        color:$colorC;
      }
      span{
        margin:0 10px;
      }
    }
  }
}
</style>
