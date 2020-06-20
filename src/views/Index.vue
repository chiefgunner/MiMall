<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
  //@import
  .index{
    .container{
      .swiper-box{
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
