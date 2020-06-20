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

    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="">
                    <div class="pro-image">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=320&h=220&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-image">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=320&h=220&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-image">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=320&h=220&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-image">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=320&h=220&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-image">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=320&h=220&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="pro-image">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=320&h=220&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10</div>
                    <div class="pro-price">1999</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
           <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div> <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
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
export default {
  name: 'NavHeader',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
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
        .icon-cart{
          @include bigImg(16px,12px,'/imgs/icon-cart-checked.png');
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
            @include bigImg(55px,55px,'/imgs/mi-logo.png',55px);
            transition: margin .2s;
          }
          &:after{
            content: "";
            @include bigImg(55px,55px,'/imgs/mi-home.png',55px);
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
          }
          .children{
            width:1226px;
            height: 220px;
            position: absolute;
            top:112px;
            left:0px;
            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            border-top: 1px solid $colorH;
            z-index: 10;
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
            @include bigImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
