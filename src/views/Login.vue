<template>
  <div class="login">
    <div class="container">
      <router-link to="/index"><img src="/imgs/login-logo.png" alt=""></router-link>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登陆</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="//blog.chiefgunner.com" target="_blank">酋长小枪</a>
        <a href="">酋长小枪</a>
        <a href="">酋长小枪</a>
        <a href="">酋长小枪</a>
      </div>
      <div class="copyright">Copyright ©2018-2020 <span class="domain">blog.chiefgunner.com</span> All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    ...mapActions(['saveUsername']),
    login () {
      let { username, password } = this
      if (!username) {
        this.$message.error('请输入用户名')
        return false
      }
      if (!password) {
        this.$message.error('请输入密码')
        return false
      }
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        //
        this.userId = res.id
        // 用户信息保存 vuex
        // this.$store.dispatch('saveUsername', res.username)
        this.saveUsername(res.username)

        // 将用户信息保存到 cookie 中
        // this.$cookie.set('userId', res.id, { expires: '1M' })// 过期时间 1 个月
        this.$cookie.set('userId', res.id, { expires: 'Session' })
        this.$router.push({
          name: 'index',
          params: {
            from: 'login'
          }
        })
        // this.$router.push('/index')
        // query => /index?from=login
        // this.$router.push({
        //   path: '/index',
        //   query: {
        //     from: 'login'
        //   }
        // })
      })
    },
    register () {
      this.axios.post('/user/register', {
        username: 'chiefgunner',
        password: '123456',
        email: 'chiefgunner@163.com'
      }).then(() => {
        //
        // alert('success')
        this.$message.success('success')
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/config';
.login{
  &>.container{
    height: 112px;
    img{
      height: 100%;
      width: auto;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height: 576px;
      position: relative;
      .login-form{
        width: 410px;
        height: 510px;
        position: absolute;
        bottom:29px;
        right: 0;
        padding-left: 31px;
        padding-right: 31px;
        box-sizing: border-box;
        background-color: $colorG;
        h3{
          line-height:24px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:$colorA;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display: inline-block;
          width: 348px;
          height: 50px;
          border:1px solid $colorH;
          margin-bottom: 20px;
          input{
            width: 100%;
            height: 100%;
            border:none;
            padding:18px;
            box-sizing: border-box;
          }
        }
        .btn{
          width: 100%;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          margin-top:10px;
        }
        .tips{
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms{
            color:$colorA;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height: 100px;
    margin-top:37px;
    text-align: center;
    font-size:16px;
    color:$colorD;
    .footer-link{
      a{
        color:$colorD;
        display: inline-block;
        &:after{
          content:'|';
          width:1px;
          height: 16px;
          margin:0 15px;
        }
        &:last-child:after{
          content:'';
        }
      }
    }
    .copyright{
      margin-top: 17px;
      .domain{
        color:$colorA;
      }
    }
  }
}
</style>
