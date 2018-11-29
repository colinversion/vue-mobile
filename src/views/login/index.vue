<template>
    <div class="login-container">
        <form class="login-form">
          <div class="form-item">
            <label>账号：</label>
            <cube-input v-model="loginForm.username" placeholder="请输入登录账户"></cube-input>
          </div>
          <div class="form-item">
            <label>密码：</label>
            <cube-input v-model="loginForm.password" type="password" :eye="eye" placeholder="请输入登录密码"></cube-input>
          </div>
          <cube-button @click="handleLogin">登录</cube-button>
        </form>
        <div>
          <div>使用社交账号登录</div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      eye: {
        open: false,
        reverse: false
      }
    }
  },
  mounted () {
  },
  methods: {
    handleLogin () {
      this.$loading.show()
      this.$store.dispatch('LoginByUsername', this.loginForm).then(res => {
        this.$loading.hide()
        if (res.status === '100000') {
          this.$router.push({ path: '/' })
        } else {
          this.$createDialog({
            type: 'alert',
            content: res.message,
            showClose: true
          }).show()
        }
      }).catch(err => {
        this.$loading.hide()
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.login-container{
  height 100vh;
}
.login-form{
  padding: 400px 100px 100px;
  .form-item{
    border-bottom: 1px solid #ccc;
    padding: 12px 0;
    margin-bottom 36px
    label{
      width 100px
      height 40px
      line-height 40px
      float left
    }
  }
}
</style>
