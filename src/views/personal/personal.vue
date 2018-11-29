<template>
    <div>个人中心</div>
</template>

<script type='text/ecmascript-6'>
import { getToken } from '@/utils/auth'
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
      if (!getToken()) {
        this.$store.dispatch('FedLogOut').then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>

</style>
