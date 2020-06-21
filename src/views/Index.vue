<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <!-- 左侧导航栏 -->
        <div class="nav-menu">
          <ul class="menu-warp">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <!-- 轮播 -->
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in slideList" :key="index" data-swiper-autoplay="2000">
            <a :href="'/product/'+item.id"><img :src="item.img"></a>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>

      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>

    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/mixin';
  @import '@/assets/scss/config';
  .index{
    .container{
      .swiper-box{
        .swiper-button-prev{
          left:274px;
        }
        .nav-menu{
          position: absolute;
          z-index:2;
          height: 451px;
          width: 264px;
          padding: 26px 0;
          box-sizing: border-box;
          background-color: #55585a7a;
          .menu-warp{
            .menu-item{
              height: 50px;
              line-height: 50px;
              a{
                font-size: 16px;
                color:$colorG;
                padding-left: 30px;
                display: block;
                position: relative;
                &:after{
                  content:'';
                  @include bigImg(10px,15px,'/imgs/icon-arrow.png');
                  position: absolute;
                  top:17.5px;
                  right:30px;
                }
              }
              &:hover{
                background-color: $colorA;
              }
            }
          }
        }
        .swiper-container {
          height: 451px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
