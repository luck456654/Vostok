<template>
<nav class="midnav nav">
    <div class="nav-wrapper">
        <div class="midnav-title">Мы производим из:</div>
        <div class="midnav-body">
            <li v-for="(item, index) in link_arr" :key="index">
              <nuxt-link :to="item.url" append v-if="item.url">{{item.name}}</nuxt-link>
              <a href="" @click.prevent v-else>{{item.name}}</a>
            </li>
        </div>
        <div class="shadow-block right-shadow-block"></div>
    </div>
</nav>
</template>
<script>
export default {
  data() {
        return {
         link_arr:[
            {name:"Кварцевый агломерат",url:"/каталог/изделия-из-кварцевого-агломерата/"},
            {name:"Акриловый камень",url:"/каталог/изделия-из-акрилового-камня/"},
            {name:"Жидкий гранит",url:"/каталог/изделия-из-жидкого-гранита/"},
            {name:"Натуральный камень",url:"/каталог/изделия-из-натурального-камня/"},
          /*  {name:"Дерево",url:"/каталог/столешницы/столешницы-из-массива-дерева.html"},*/
          ],
    }
  }
}
</script>
<style scoped>
</style>
