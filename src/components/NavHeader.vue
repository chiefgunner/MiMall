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
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <router-link to="/order" v-if="username">
            我的订单
          </router-link>
          <router-link to="/cart" class="my-cart">
            <span class="icon-cart"></span>购物车（{{cartCount}}）
          </router-link>
        </div>
      </div>
    </div>

    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <router-link to="/"></router-link>
          <!-- <a href="/"></a> -->
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <router-link :to="'product/'+item.id" target="_blank">
                    <div class="pro-image">
                      <img :src="item.mainImage" :alt="item.name">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price|currency}}</div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
           <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div> <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'NavHeader',
  data () {
    return {
      phoneList: []
      // userName: this.$store.state.username,
      // cartCount: this.$store.state.cartCount
    }
  },
  computed: {
    ...mapState(['username']),
    // username () {
    //   return this.$store.state.username
    // },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  mounted () {
    this.getProductList()
    if (this.$route.params.from === 'login') {
      this.getCartCount()
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  methods: {
    ...mapActions(['saveUsername', 'saveCartCount']),
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
          // pageSize: 6
        }
      }).then((res) => {
        if (res.list.length > 6) { this.phoneList = res.list.splice(0, 6) }
      })
    },
    login () {
      this.$router.push('/login')
    },
    logout () {
      this.axios.post('/user/logout').then((res) => {
        // 清空 store 中的数据及 cookie
        this.$message.success('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.saveUsername('')
        this.saveCartCount(0)
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        // save cart num to vuex
        this.$store.dispatch('saveCartCount', res)
      })
    }

  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/config.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #B0B0B0;
    .container{
      @include flex();
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
        margin-right: 0;
        .icon-cart{
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header{
    .container{
      height: 112px;
      @include flex();
      position: relative;
      .header-logo{
        display:inline-block;
        background-color: #FF6600;
        width: 55px;
        height: 55px;
        a{
          display:inline-block;
          width: 110px;
          height: 55px;
          &:before{
            content: "";
            display:inline-block;
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
            transition: margin .2s;
          }
          &:after{
            content: "";
            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
          }
          &:hover:before{
            margin-left: -55px;
            transition:margin .2s;
          }
        }
      }
      .header-menu{
        display:inline-block;
        margin-left: 209px;
        width: 643px;
        .item-menu{
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-left: 20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color:$colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            width:1226px;
            position: absolute;
            top:112px;
            left:0px;
            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            border-top: 1px solid $colorH;
            z-index: 10;
            opacity: 0;
            height: 0;
            overflow: hidden;
            transition: all 0.5s;
            background-color: #fff;
            .product{
              display: inline-block;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              a{
                display: inline-block;
              }
              img{
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img{
                height: 137px;
              }
              .pro-name{
                font-weight: bold;
                color:$colorB;
                margin-top: 19px;
                margin-bottom: 8px;
              }
              .pro-price{
                color:$colorA;
                font-weight: bold;
              }
              &:before{
                content: '';
                width: 1px;
                height: 100px;
                position: absolute;
                top:28px;
                right: 0px;
                border-left: 1px solid $colorF;
              }
              &:last-child:before{
                display: none;
              }
            }
          }
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border:1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input{
            border:none;
            border-right:1px solid #E0E0E0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a{
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
