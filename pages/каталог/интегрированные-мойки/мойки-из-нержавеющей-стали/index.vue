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
                      <span>{{item.name}}</span>
                  </nuxt-link>
                </div>
              </div>
      </div>
    <div style="clear:both;"></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Мойки из нержавеющей стали для кухни",
      meta: [
        { name: 'description', hid: 'description', content: 'Характеристики интегрированных моек из камня из нержавеющей стали.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/интегрированные-мойки/мойки-из-нержавеющей-стали/'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
         page_name:"Мойки",
          page_full_name:"Мойки из нержавеющей стали",
          arr:[
            {name:"Мойка Alveus DUO 30",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusDUO30Lux",url:"alveus-duo-30.html"},
            {name:"Мойка Alveus DUO 40",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusDUO40Lux",url:"alveus-duo-40.html"},
            {name:"Мойка Alveus VARIANT 10 Lux",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusVARIANT10Lux",url:"alveus-variant-10-lux.html"},
            {name:"Мойка Alveus VARIANT 20 Lux",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusVARIANT20Lux",url:"alveus-variant-20-lux.html"},
            {name:"Мойка Alveus VARIANT 30 Lux",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusVARIANT30Lux",url:"alveus-variant-30-lux.html"},
            {name:"Мойка Alveus VARIANT 40 Lux",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusVARIANT40Lux",url:"alveus-variant-40-lux.html"},
            {name:"Мойка Alveus VARIANT 70 Lux",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusVARIANT70Lux",url:"alveus-variant-70-lux.html"},
            {name:"Мойка Blanco Rondosol IF",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/BlancoRONDOSOLIF",url:"blanco-rondosol-if.html"},
            {name:"Мойка Longran Techno",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/longran-techno-tep-340-400",url:"longran-techno.html"},
            {name:"Мойка Teka BE Linea",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/TekaBELinea50401",url:"teka-be-linea.html"},
            {name:"Мойка Teka BE Linea R15",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/tekabelinea3040r15",url:"teka-be-linea-r15.html"},
            {name:"Мойка ZORG RX-5151",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/ZORGRX-5151Inox",url:"zorg-rx-5151.html"},
            {name:"Мойка ZORG RX-8251",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/ZORGRX-8251Inox",url:"zorg-rx-8251.html"},
            {name:"Мойка ZORG X-50 X 78 Inox",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/ZORGX-50X78Inox",url:"zorg-x-50-x-78-inox.html"},
            {name:"Мойка ZORG X-4444 Inox",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/ZORGX-4444Inox",url:"zorg-x-4444-inox.html"},
            {name:"Мойка ZORG X-6050 Inox",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/ZORGX-6050Inox",url:"zorg-x-6050-inox.html"},
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
.adap-katalog a span {height: 35px;display: block;}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>
