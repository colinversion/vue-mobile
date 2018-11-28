<template>
    <div>个人中心</div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'Personal',
  data () {
    return {
    }
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      if (!this.$store.getters.user.token) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>

</style>
