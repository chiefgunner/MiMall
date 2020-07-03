<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡<em></em></a>
              <div class="children">
                <ul v-for="(item,i) in menuList" v-bind:key="i">
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <!-- <a v-bind:href="sub?'/product/'+sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      {{sub?sub.name:'小米9'}}
                    </a> -->
                    <router-link :to="sub?'/product/'+sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      {{sub?sub.name:'小米9'}}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子<em></em></a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板<em></em></a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板<em></em></a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴<em></em></a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器<em></em></a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件<em></em></a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包<em></em></a>
            </li>
          </ul>
        </div>
        <!-- 轮播 -->
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in slideList" :key="index" data-swiper-autoplay="2700">
            <router-link :to="'/product/'+item.id">
              <img :src="item.img">
            </router-link>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

      </div>
      <div class="ads-box">
        <router-link :to="'/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img">
        </router-link>
      </div>
      <div class="banner">
        <router-link to="/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <router-link to="/product/35">
              <img src="/imgs/mix-alpha.jpg" alt="">
            </router-link>
          </div>
          <div class="list-box">
            <div class="list" v-for="(items,index) in phoneList" :key="index">
              <div class="item" v-for="(item,i) in items" :key="i">
                <span :class="item.class">{{item.span}}</span>
                <!-- <span :class="[i%2==0?'new-pro':'kill-pro']">{{i%2==0?'新品':'秒杀'}}</span> -->
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle" v-bind:showModal="showModal"
      @submit="submit"
      @cancel="cancel"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import Modal from '@/components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data () {
    return {
      showModal: false,
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
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
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
          id: '43',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '44',
          img: '/imgs/slider/slide-1.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        }, {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        }, {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        }, {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [[1, 1, 1, 1], [1, 1, 1, 1]],
      subList: [
        {},
        {
          class: 'new-pro',
          name: '新品'
        }, {
          class: 'kill-pro',
          name: '秒杀'
        }, {
          class: 'reduce-pro',
          name: '满减'
        }
      ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        res.list.map((val, index) => {
          let num = Math.floor(Math.random() * 10 % 4)
          let tmp = {
            span: this.subList[num]['name'],
            class: this.subList[num]['class']
          }
          Object.assign(val, tmp)
        })
        this.phoneList = [res.list.slice(-8, -4), res.list.slice(-4)]
      })
    },
    submit () {
      this.$router.push('/cart')
    },
    cancel () {
      this.showModal = false
    },
    addCart (id) {
      // next
      this.axios.post('/carts', {
        productId: id,
        selected: true
      }).then((res = { cartProductVoList: '' }) => {
        this.showModal = true

        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      })
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/config.scss';
  @import '@/assets/scss/mixin.scss';
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        width:264px;
        height: 451px;
        z-index:2;
        padding:26px 0;
        background-color:#55585a7a;
        box-sizing: border-box;
        .menu-wrap{//ul
          .menu-item{//li
            height: 50px;
            line-height:50px;
            padding-left:30px;
            a{
              position: relative;
              display: block;
              font-size: 16px;
              // font-weight: bold;
              color:$colorG;
              em{
                content:'';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                position: absolute;
                top:17.5px;
                right:30px;
              }
            }
            &:hover{
              background-color: $colorA;
              .children{
                display: block;
              }
            }
            .children{
              display:none;
              width:962px;
              height:451px;
              background-color:$colorG;
              position:absolute;
              top:0;
              left:264px;
              border:1px solid $colorH;
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  flex:1;
                  height: 75px;
                  line-height: 75px;
                  padding-left: 23px;
                }
                a{
                  color:$colorB;
                  font-size: 14px;
                }
                img{
                  width:42px;
                  height:35px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev{
          left:274px;
        }
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .ads-box{
      margin-top:14px;
      margin-bottom:31px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        width:296px;
        height:167px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: $colorJ;
      height: 740px;
      padding:30px 0 50px;
      box-sizing: border-box;
      h2{
        font-size:$fontF;
        height:21px;
        line-height:21px;
        color:$colorB;
        margin-bottom:20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          width: 224px;
          height: 619px;
          margin-right: 16px;
          img{
            width: 224px;
            height: 619px;
          }
        }
        .list-box{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 302px;
              background-color:$colorG;
              text-align:center;
              span{
                display:inline-block;
                width:67px;
                height:24px;
                font-size:14px;
                line-height:24px;
                color:$colorG;
                &.new-pro{
                  background-color:#7ECF68;
                }
                &.kill-pro{
                  background-color:#E82626;
                }
                &.reduce-pro{
                  background-color:#d4af27;
                }
              }
              .item-img{
                img{
                  width: 100%;
                  //height: 195px;
                  height: 160px;
                  width: 160px;
                  margin:10px 0 13px;
                }
              }
              .item-info{
                h3{
                  font-size:$fontJ;
                  color:$colorB;
                  line-height:$fontJ;
                  font-weight:bold;
                }
                p{
                  color:$colorD;
                  line-height:13px;
                  margin:7px auto 13px;
                }
                .price{
                  color:#F20A0A;
                  font-size:$fontJ;
                  font-weight:bold;
                  cursor:pointer;
                  &:after{
                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                    content:'';
                    vertical-align: middle;
                    margin-left: 6px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
