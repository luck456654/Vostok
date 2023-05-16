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
  </div>
      <div class="col-xs-12 standart-palitra">
                                <div class="row">
                               <h2>Плинтус для жидкого гранита</h2>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 adap-katalog" style="height:160px;margin-bottom:10px;" v-for="(item, index) in granit_arr" :key="index">
                                      <div v-if="publish_plintus">
                                        <nuxt-link :to="'/каталог/каталог-плинтусов/'+item.url" exact>
                                          <div class="img-katalog">
                                            <picture>
                                              <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                                              <source type="image/png" :srcset="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                              <img :src="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                            </picture>
                                          </div>
                                          {{item.name}}
                                        </nuxt-link>
                                      </div>
                                      <div v-else>
                                        <a :href="'https://стильный-камень.рф/каталог/каталог-плинтусов/'+item.url" exact>
                                          <div class="img-katalog">
                                            <picture>
                                              <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                                              <source type="image/png" :srcset="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                              <img :src="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                            </picture>
                                          </div>
                                          {{item.name}}
                                        </a>
                                      </div>
                                </div>
                                </div>
                                <div style="clear:both;"></div>
                                <div class="row">
                                <h2>Плинтус для акрилового камня</h2>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 adap-katalog" style="height:160px;margin-bottom:10px;" v-for="(item, index) in akril_arr" :key="index">
                                      <div v-if="publish_plintus">
                                        <nuxt-link :to="'/каталог/каталог-плинтусов/'+item.url" exact>
                                          <div class="img-katalog">
                                            <picture>
                                              <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                                              <source type="image/png" :srcset="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                              <img :src="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                            </picture>
                                          </div>
                                          {{item.name}}
                                        </nuxt-link>
                                      </div>
                                      <div v-else>
                                        <a :href="'https://стильный-камень.рф/каталог/каталог-плинтусов/'+item.url" exact>
                                          <div class="img-katalog">
                                            <picture>
                                              <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                                              <source type="image/png" :srcset="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                              <img :src="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                            </picture>
                                          </div>
                                          {{item.name}}
                                        </a>
                                      </div>
                                </div>
                               </div>
                          <div style="clear:both;"></div>
                              <div class="row">
                               <h2>Плинтус для кварцевого камня</h2>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 adap-katalog" style="height:160px;margin-bottom:10px;" v-for="(item, index) in kvartz_arr" :key="index">
                                      <div v-if="publish_plintus">
                                        <nuxt-link :to="'/каталог/каталог-плинтусов/'+item.url" exact>
                                          <div class="img-katalog">
                                            <picture>
                                              <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                                              <source type="image/png" :srcset="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                              <img :src="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                            </picture>
                                          </div>
                                          {{item.name}}
                                        </nuxt-link>
                                      </div>
                                      <div v-else>
                                        <a :href="'https://стильный-камень.рф/каталог/каталог-плинтусов/'+item.url" exact>
                                          <div class="img-katalog">
                                            <picture>
                                              <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                                              <source type="image/png" :srcset="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                              <img :src="item.img+'.png'" class="hover-effect-2" :alt="item.name">
                                            </picture>
                                          </div>
                                          {{item.name}}
                                        </a>
                                      </div>
                                </div>
                                </div>
                                <div style="clear:both;"></div>
                </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head: {
      title:"Каталог плинтусов для кухонной столешницы",
      meta: [
        { name: 'description', hid: 'description', content: 'Каталог плинтусов для столешниц.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/каталог-плинтусов'},
      ],
    },
     components: {
    Proizvodim,
  },
    data() {
        return {
          page_name:"Каталог плинтусов",
          granit_arr:[
            {name:"Пристеночный бортик 1",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-1",url:"пристеночный-бортик-1-гранит.html"},
            {name:"Пристеночный бортик 1.1",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-1.1",url:"пристеночный-бортик-1-1-гранит.html"},
            {name:"Пристеночный бортик 1.2",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-1.2",url:"пристеночный-бортик-1-2-гранит.html"},
            {name:"Пристеночный бортик 2",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-2",url:"пристеночный-бортик-2-гранит.html"},
            {name:"Пристеночный бортик 3",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-3",url:"пристеночный-бортик-3-гранит.html"},
            {name:"Пристеночный бортик 4",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-4",url:"пристеночный-бортик-4-гранит.html"},
            {name:"Пристеночный бортик 5",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-5",url:"пристеночный-бортик-5-гранит.html"},
            {name:"Пристеночный бортик галтель",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/G-PL-GL",url:"пристеночный-бортик-галтель-гранит.html"},
          ],
           akril_arr:[
            {name:"Пристеночный бортик 1",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-1",url:"пристеночный-бортик-1-акрил.html"},
            {name:"Пристеночный бортик 1.1",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-1.1",url:"пристеночный-бортик-1-1-акрил.html"},
            {name:"Пристеночный бортик 1.2",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-1.2",url:"пристеночный-бортик-1-2-акрил.html"},
            {name:"Пристеночный бортик 2",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-2",url:"пристеночный-бортик-2-акрил.html"},
            {name:"Пристеночный бортик 3",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-3",url:"пристеночный-бортик-3-акрил.html"},
            {name:"Пристеночный бортик 4",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-4",url:"пристеночный-бортик-4-акрил.html"},
            {name:"Пристеночный бортик 5",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-5",url:"пристеночный-бортик-5-акрил.html"},
            {name:"Пристеночный бортик галтель",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/A-PL-GL",url:"пристеночный-бортик-галтель-акрил.html"},
          ],
          kvartz_arr:[
            {name:"Пристеночный бортик 1",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/Q-PL-1",url:"пристеночный-бортик-1.html"},
            {name:"Пристеночный бортик 1.2",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/Q-PL-3",url:"пристеночный-бортик-1-2.html"},
            {name:"Пристеночный бортик 2",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/Q-PL-2",url:"пристеночный-бортик-2.html"},
            {name:"Пристеночный бортик F",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/Q-PL-F",url:"пристеночный-бортик-f.html"},
            {name:"Пристеночный бортик H",img:"https://стильный-камень.рф/pictures/katalog/katalog-plintusov/slider/Q-PL-H",url:"пристеночный-бортик-h.html"},
          ],
          publish_plintus:true,
          showBreadcrumbsMobile:false,
        }
    },


}
</script>
<style scoped>
.img-katalog img{
      max-width: 100%;
    }
@media (max-width: 450px){
    .img-katalog img{
      max-width: 200px;
    }
}
</style>
