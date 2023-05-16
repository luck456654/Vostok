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
            <h1>{{page_name}}</h1>
      </div>
  </div>
            <div  class="col-xs-12 standart-palitra">
              <div class="row">
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog" v-for="(item, index) in arr" :key="index">
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
      title:"Интегрированные мойки из акрилового камня для ванной",
      meta: [
        { name: 'description', hid: 'description', content: 'Каталог интегрированных моек из акрилового камня для ванной.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/интегрированные-мойки/мойки-из-акрилового-камня-для-ванной/'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
         page_name:"Мойки из акрилового камня для ванной",
          arr:[
            {name:"Модель №201",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_201_new",url:"модель-№201.html"},
            {name:"Модель №202",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_202_new",url:"модель-№202.html"},
            {name:"Модель №203",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_203_new",url:"модель-№203.html"},
            {name:"Модель №204",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_204_new",url:"модель-№204.html"},
            {name:"Модель №205",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_205_new",url:"модель-№205.html"},
            {name:"Модель №205R",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_205r_new",url:"модель-№205r.html"},
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
