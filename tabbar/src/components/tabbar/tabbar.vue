<template>
<div class="tab-bar-item">
    <!-- home buttom -->
  <tab-bar-item path="/home">
        <template v-slot:text>
            <div>Home</div>
        </template>
        <template v-slot:img>
            <img src="../../assets/img/tabbar/home.svg">
        </template>
        <template v-slot:img-actived>
            <img src="../../assets/img/tabbar/home_active.svg">
        </template>
  </tab-bar-item>
  <!-- category button -->
    <tab-bar-item path="/category">
        <template v-slot:text>
            <div>catagory</div>
        </template>
        <template v-slot:img>
            <img src="../../assets/img/tabbar/category.svg">
        </template>
        <template v-slot:img-actived>
            <img src="../../assets/img/tabbar/category_active.svg">
        </template>
     </tab-bar-item>
     <!-- shopcart button -->
         <tab-bar-item path="/cart">
        <template v-slot:text>
            <div>shopcart</div>
        </template>
        <template v-slot:img>
            <img src="../../assets/img/tabbar/shopcart.svg">
        </template>
        <template v-slot:img-actived>
            <img src="../../assets/img/tabbar/shopcart_active.svg">
        </template>
     </tab-bar-item>
     <!-- profile button -->
         <tab-bar-item path="profile">
        <template v-slot:text>
            <div>profile</div>
        </template>
        <template v-slot:img>
            <img src="../../assets/img/tabbar/profile.svg">
        </template>
        <template v-slot:img-actived>
            <img src="../../assets/img/tabbar/profile_active.svg">
        </template>
     </tab-bar-item>
</div>
</template>

<script>
import tabBarItem from './tabbaritem.vue'
export default {
    name:"tabBar",
    components:{
        tabBarItem
    }
}
</script>

<style scoped>
    .tab-bar-item{
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        flex: 1;
    }

</style>