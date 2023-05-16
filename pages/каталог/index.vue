<template>
<div>
<Proizvodim/>
  <div class="col-xs-12 nav-content">
     <div class="crumbs">
          <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb">
            <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <nuxt-link to="/"  itemprop="item" >
                  <span itemprop="name" class="first-breadcrumb">Главная</span>
                </nuxt-link>
                <meta itemprop="position" content="1" />
            </li>
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="2" />
            </li>
          </ol>
            <h1>{{page_name}}</h1>
    </div>
       <div  class="standart-palitra">
          <div class="row">
            <div v-for="(item_arr, index) in arr" :key="index">
              <div class="row">
                <h2>{{item_arr.paragraf_name}}</h2>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 catalog-preview_block"  v-for="(item, index2) in item_arr.content" :key="index2">
                    <div class="img">
                        <nuxt-link :to="item.url" exact>
                          <picture>
                              <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/category/'+item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                              <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/category/'+item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                              <img :src="'https://стильный-камень.рф/pictures/category/'+item.img+'.jpg'" class="hover-effect-2" alt="Кварцевые столешницы для кухни на заказ">
                            </picture>
                            <span> {{item.title}}</span>
                        </nuxt-link>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
</div>
  </div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
     head() {
    return {
      meta: [
        { charset: "utf-8" },
        { name: "description", content: this.description }
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/'},
      ],
      title: this.title
    };
  },
   components: {
    Proizvodim,
  },
    async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=katalog`
            )
            .then(arr => {
                return {
                    title: arr.page_name +' изделий из камня в Москве от производителя',
                    description: arr.page_name + '  изделий из камня в Москве от производителя - компании «Стильный камень»',
                    page_name:arr.page_name,
                    arr:arr,
                };
            })
            .catch(err => {
                error(err);
            });
    },
}
</script>
<style scoped>
.catalog-preview_block a{
  color: #c8601b;
  text-decoration: underline;
  text-align: center;
}
.catalog-preview_block img{
  position: relative;
  left: 10px;
  max-width: 90%;
}
.catalog-preview_block a span{
  display: block;
  height: 50px;
}
h2, .h2 {padding-left: 1.2em;}
@media (max-width:600px){
.img {
   text-align: center;
}
}
</style>


