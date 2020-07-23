<template>
  <div class="login">
    <div class="container">
      <router-link to="/index"><img src="https://txcdn.chiefgunner.com/mi/imgs/login-logo.png" alt=""></router-link>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号注册</span>
            <span class="sep-line">|</span>
            <router-link to="/login">
              <span>账号登录</span>
            </router-link>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入邮箱" v-model="email">
          </div>
          <div class="input">
            <input type="text" placeholder="请输入用户名" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="register">注册</a>
          </div>
          <div class="tips">
            <div></div>
            <div class="reg">
              <router-link to="/login">立即登录</router-link>
              <span>|</span>
              忘记密码？
            </div>
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
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      userId: ''
    }
  },
  methods: {
    register () {
      let { email, username, password } = this
      if (!email) {
        this.$message.error('请输入邮箱')
        return false
      }
      let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!reg.test(email)) {
        this.$message.error('邮箱格式错误')
        return false
      }
      if (!username) {
        this.$message.error('请输入用户名')
        return false
      }
      if (!password) {
        this.$message.error('请输入密码')
        return false
      }

      this.axios.post('/user/register', {
        username,
        password,
        email
      }).then(() => {
        //
        // alert('success')
        this.$message.success('success')
        this.$router.push('/login')
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
    background:url('https://txcdn.chiefgunner.com/mi/imgs/login-bg.jpg') no-repeat center;
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
          span:last-child{
            cursor: pointer;
          }
          a{
            color: #333333;
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
            a{
              color: #999999;
            }
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
