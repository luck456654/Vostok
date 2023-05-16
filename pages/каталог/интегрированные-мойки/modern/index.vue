<template>
<div>
<Proizvodim/>
<div class="col-xs-12 nav-content offset-40">
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
                <nuxt-link to="/каталог/интегрированные-мойки.html" itemprop="item" append>
                  <span itemprop="name">Интегрированные мойки</span>
                </nuxt-link>
                <meta itemprop="position" content="3" />
            </li>
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="4" />
            </li>
          </ol>
            <button class="breadcrumbs-show-mobile" v-if="!showBreadcrumbsMobile" @click="showBreadcrumbsMobile = !showBreadcrumbsMobile" title="Показать подробнее"><span>...</span></button>
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
            <div  class="col-xs-12 standart-palitra">
              <div class="row">
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog"  v-for="(item, index) in arr" :key="index">
                  <nuxt-link :to="item.url" exact>
                    <div class="img katalog">
                       <picture>
                        <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                        <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                        <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                    </div>
                      {{item.name}}
                  </nuxt-link>
                </div>
              </div>
            </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Интегрированные мойки Modern для кухонной столешницы из жидкого гранита",
      meta: [
        { name: 'description', hid: 'description', content: 'Каталог интегрированных моек Modern для кухонной столешницы из жидкого гранита.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/интегрированные-мойки/modern'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
          page_name:"Modern",
          page_full_name:"Интегрированные мойки Modern",
          arr:[
            {name:"Modern 1",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-1",url:"modern-1.html"},
            {name:"Modern 2",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-2",url:"modern-2.html"},
            {name:"Modern 3",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-3",url:"modern-3.html"},
            {name:"Modern 4",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-4",url:"modern-4.html"},
            {name:"Modern 5",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-5",url:"modern-5.html"},
            {name:"Modern 6",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-6",url:"modern-6.html"},
            {name:"Modern 7",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-7",url:"modern-7.html"},
            {name:"Modern 8",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-8",url:"modern-8.html"}
          ],
          showBreadcrumbsMobile:false,
        }
    },
}
</script>
<style scoped>
  .h2-category {margin-left: -15px;}
  h2, .h2, h3, .h3  {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.katalog img {max-width: 100%;}
.adap-katalog a {
    color: #c8601b;
    text-decoration: underline;
}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>

