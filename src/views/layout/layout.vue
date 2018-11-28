<template>
    <div>
      <div class="page-container">
        <router-view/>
      </div>
      <TabBar/>
    </div>
</template>

<script type='text/ecmascript-6'>
import TabBar from './components/TabBar.vue'
export default {
  name: 'Layout',
  components: {
    TabBar
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.page-container{
  padding 12px 0;
}
</style>
