<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from "./components/tabbar/tabbar.vue"
export default {
  name:'App',
  components:{
    tabBar
  }
}
</script>

<style scoped>

</style>