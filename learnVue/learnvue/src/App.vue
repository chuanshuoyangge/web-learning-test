<template>
  <div id="app">
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/home'+person">首页</router-link>
    <div @click="linkToHome">div首页</div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    linkToHome(){
      this.$router.push('/home')
    }
  },
  data:function(){
    return{
      person:'lianghedong'
    }
  }
}
</script>

<style>



</style>
