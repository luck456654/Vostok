<template>
<div>
<Proizvodim/>
  <div class="col-xs-12 nav-content">
     <div class="crumbs">
          <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb" :class="{breadcrumb_open: showBreadcrumbsMobile}">
            <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <nuxt-link to="/"  itemprop="item" >
                  <span itemprop="name" class="first-breadcrumb">Главная</span>
                </nuxt-link>
                <meta itemprop="position" content="1" />
            </li>
            <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <nuxt-link to="/каталог/" append itemprop="item">
                  <span itemprop="name">Каталог</span>
                </nuxt-link>
                <meta itemprop="position" content="2" />
            </li>
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="3" />
            </li>
          </ol>
            <button class="breadcrumbs-show-mobile" v-if="!showBreadcrumbsMobile" @click="showBreadcrumbsMobile = !showBreadcrumbsMobile" title="Показать подробнее"><span>...</span></button>
            <h1>{{page_name}}</h1>
    </div>
       <div  class="standart-palitra">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 catalog-preview_block"  v-for="(item, index) in content_arr" :key="index">
              <div class="img" v-if="item.old">
                  <a :href="item.old" >
                    <picture>
                        <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/category/acril/'+item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                        <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/category/acril/'+item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                        <img :src="'https://стильный-камень.рф/pictures/category/acril/'+item.img+'.jpg'" class="hover-effect-2" alt="Кварцевые столешницы для кухни на заказ">
                      </picture>
                      <span> {{item.title}}</span>
                  </a>
              </div>
              <div class="img" v-else>
                  <nuxt-link :to="item.url" exact>
                     <picture>
                        <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/category/acril/'+item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                        <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/category/acril/'+item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                        <img :src="'https://стильный-камень.рф/pictures/category/acril/'+item.img+'.jpg'" class="hover-effect-2" alt="Кварцевые столешницы для кухни на заказ">
                      </picture>
                      <span> {{item.title}}</span>
                  </nuxt-link>
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
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/изделия-из-акрилового-камня.html'},
      ],
      title: this.title
    };
  },
   components: {
    Proizvodim,
  },
  data() {
        return {
          showBreadcrumbsMobile:false,
        }
  },
    async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=acril`
            )
            .then(arr => {
                return {
                    title: arr.page_name +' в Москве от производителя',
                    description: arr.page_name + ' в Москве от производителя - компании «Стильный камень»',
                    content_arr:arr.content,
                    page_name:arr.page_name,
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
</style>
