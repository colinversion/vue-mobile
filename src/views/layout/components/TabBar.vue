<template>
    <div class="tab-bar">
        <div class="tab-bar-item" v-for="(item, idx) in tabs" :key="idx" :class="{ isActive: selectedDefault === item.label}"
         @click="handelChange(item)">
            <i :class="item.icon"></i>
            <div>{{ item.label }}</div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'TabBar',
  data () {
    return {
      selectedDefault: '首页',
      tabs: [
        {
          label: '首页',
          icon: 'cubeic-home',
          path: '/home'
        },
        {
          label: '收藏',
          icon: 'cubeic-like',
          path: '/collection'
        },
        {
          label: '会员',
          icon: 'cubeic-vip',
          path: '/vip'
        },
        {
          label: '个人中心',
          icon: 'cubeic-person',
          path: '/personal'
        }
      ]
    }
  },
  mounted () {
    this.getSelectedDefault(this.$route)
  },
  watch: {
    $route (to) {
      this.getSelectedDefault(to)
    }
  },
  methods: {
    getSelectedDefault (route) {
      if (route.path === '' || route.path === '/') {
        this.selectedDefault = '首页'
        return
      }
      this.tabs.forEach(item => {
        if (item.path === route.path) {
          this.selectedDefault = item.label
        }
      })
    },
    handelChange (item) {
      this.selectedDefault = item.label
      this.$router.push(item.path)
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.tab-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    .tab-bar-item{
        width: 25%;
        height 60px;
        padding 12px 0;
        display: inline-block;
        i{
            font-size: 40px;
        }
    }
    .isActive{
        color: #e8864c;
    }
}
</style>
