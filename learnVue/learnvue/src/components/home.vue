<template>
    <div>
        <p>我是主页home</p>
        <h1>我是主页home的标题</h1>
        <p>傻逼名字:{{$route.params.userid}}</p>
    </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style scoped>



</style>