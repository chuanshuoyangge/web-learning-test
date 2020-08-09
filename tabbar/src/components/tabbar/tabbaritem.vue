<template>
    <div v-on:click="itemClick">
        <div v-if="!isActived"><slot name="img"></slot></div>
        <div v-else><slot name="img-actived"></slot></div>
        <div><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name:"tabBarItem",
    props:{
        path:String
    },
    methods:{
        itemClick:function(){
            this.$router.replace(this.path)
            console.log(this.$route.path)
        }
    },
    computed:{
        isActived:function(){
            return this.$route.path.indexOf(this.path) != -1
        }
    }
}
</script>

<style scoped>

</style>>