<template>
<div>
  <nav class="midnav nav">
    <div class="nav-wrapper">
        <div class="midnav-title">Мы производим из:</div>
        <div class="midnav-body">
            <li v-for="(item, index) in link_arr" :key="index">
              <nuxt-link :to="item.url">{{item.name}}</nuxt-link>
            </li>
        </div>
        <div class="shadow-block right-shadow-block"></div>
    </div>
</nav>
<div class="col-xs-12 nav-content">
  <div class="crumbs">
    <ul class="breadcrumb">
      <li>
        <nuxt-link to="/" exact><span class="first-breadcrumb">Главная</span></nuxt-link>
      </li>
      <li>
        <nuxt-link to="../" exact><span>Каталог</span></nuxt-link>
      </li>
      <li>
        <nuxt-link to="../столы.html" exact><span>Столы</span></nuxt-link>
      </li>
      <li class="active">
        <span>{{page_name}}</span>
      </li>
    </ul>
    <h1>{{page_name}}</h1>
  </div>
</div>
</div>
</template>
<script>
export default {
  head: {
      title:"Изготовление обеденных столов из камня на заказ в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Столы обеденные из камня от производителя на заказ.'}
      ]
    },
    data() {
        return {
          page_name:"Столы обеденные",
          link_arr:[
            {name:"Кварцевый агломерат",url:"../изделия-из-кварцевого-агломерата/"},
            {name:"Акриловый камень",url:"../изделия-из-акрилового-камня/"},
            {name:"Жидкий гранит",url:"../изделия-из-жидкого-гранита"},
            {name:"Натуральный камень",url:"../изделия-из-натурального-камня"},
            {name:"Дерево",url:"../изделия-из-дерева/"}],
        }
    },
}
</script>
<style scoped>

</style>
