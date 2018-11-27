<template>
    <div>
        <input type="text" v-model="loginForm.username"/>
        <input type="text" v-model="loginForm.password"/>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<script type='text/ecmascript-6'>
import { Toast } from 'mint-ui'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    Toast({
      message: '提示',
      position: 'bottom',
      duration: 5000
    })
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('LoginByUsername', this.loginForm).then(res => {})
    }
  }
}
</script>

<style scoped>

</style>
