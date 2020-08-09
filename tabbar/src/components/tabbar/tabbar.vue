<template>
  <tabbaritemvue>
        <template v-slot:text>
            <div>Home</div>
        </template>
        <template v-slot:img>
            <!-- <img src="./"> -->
        </template>
  </tabbaritemvue>
</template>

<script>
import tabbaritemVue from './tabbaritem.vue'
export default {
    name:"tabBar",
    component:tabbaritemVue
}
</script>

<style>

</style>