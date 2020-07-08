<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <!-- loading -->
          <loading v-show="loading&&false"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.currentUnitPrice +' X '+ item.quantity}} 元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status==10">
                <router-link :to="{path:'/order/pay',query:{orderNo:order.orderNo}}">{{order.statusDesc}}</router-link>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <!-- 分页器 -->
          <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            @current-change="handleChange"
            v-show="false"
            >
          </el-pagination>
          <!-- 加载更多 -->
          <div class="load-more" v-show="hasNextPage&&false">
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
          <!-- 滚动加载 -->
          <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="97"
          >
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
        </div>
        <no-data v-show="!loading && list.length==0"></no-data>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue'
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { Pagination, Button } from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: 'order-list',
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  directives: {
    infiniteScroll
  },
  data () {
    return {
      list: [], // 订单列表
      loadingInit: true, // 第一次加载时效果
      loading: false, // loading
      pageSize: 10, // 每页数量
      total: 0, // 总页数
      pageNum: 1, // 当前页码数
      busy: false, // 是否触发滚动加载
      hasNextPage: true// 是否有下一页
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      this.busy = true
      this.axios.get('/orders', {
        params: {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        }
      }).then(res => {
        // this.list = this.list.concat(res.list)//
        this.list = res.list
        this.total = res.total
        this.hasNextPage = res.hasNextPage
        this.loading = false
        this.busy = false
      }).catch(() => {
        this.loading = false
      })
    },
    // 分页器
    handleChange (num) {
      this.pageNum = num
      this.getList()
    },
    // 加载更多
    loadMore () {
      this.pageNum++
      this.getList()
    },
    // 滚动加载
    scrollMore () {
      this.busy = true
      setTimeout(() => {
        this.pageNum++
        this.getScrollList()
        // this.busy = false
      }, 500)
    },
    getScrollList () {
      this.loading = true
      this.axios.get('/orders', {
        params: {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        }
      }).then(res => {
        this.list = this.list.concat(res.list)
        this.total = res.total
        this.loading = false
        if (res.hasNextPage) {
          this.busy = false
        } else {
          this.hasNextPage = false
          this.busy = true
        }
      })
    },
    goPay (orderNo) {
      // 三种路由跳转方式
      // this.$router.push('/order/pay?orderNo='+orderNo)
      /* this.$router.push({
          name:'order-pay',
          query:{
            orderNo
          }
        }) */
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/config.scss';
  @import '@/assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>
