<template>
  <div id="app">
    <router-link to="/about">关于</router-link>
    <router-link to="/home">首页</router-link>
    <div @click="linkToHome">div首页</div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    linkToHome(){
      this.$router.push('/home').catch((e)=>{
        console.log('输出报错',e)
      })
    }
  }
}
</script>

<style>



</style>
