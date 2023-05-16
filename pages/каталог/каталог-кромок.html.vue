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
                               <h2>Кромки для жидкого гранита</h2>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 adap-katalog" style="height:160px;margin-bottom:10px;" v-for="(item, index) in granit_arr" :key="index">
                                      <div v-if="publish_Kromka">
                                        <nuxt-link :to="item.url" exact>
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
                                        <a :href="'https://стильный-камень.рф/каталог/'+item.url">
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
                               <h2>Кромки для акрилового камня</h2>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 adap-katalog" style="height:160px;margin-bottom:10px;" v-for="(item, index) in akril_arr" :key="index">
                                      <div v-if="publish_Kromka">
                                        <nuxt-link :to="item.url" exact>
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
                                        <a :href="'https://стильный-камень.рф/каталог/'+item.url">
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
                                <h2>Кромки для кварцевого агломерата и натурального камня</h2>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 adap-katalog" style="height:160px;margin-bottom:10px;" v-for="(item, index) in kvartz_arr" :key="index">
                                      <div v-if="publish_Kromka">
                                        <nuxt-link :to="item.url" exact>
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
                                        <a :href="'https://стильный-камень.рф/каталог/'+item.url">
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
                </div>

</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Каталог кромок для кухонной столешницы",
      meta: [
        { name: 'description', hid: 'description', content: 'Вид и характеристики кромок для столешниц.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/каталог-кромок.html'},
      ],
    };
  },
  components: {
    Proizvodim,
  },
    data() {
        return {
          page_name:"Каталог кромок",
           granit_arr:[
            {name:"Кромка 1",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-1_cam",url:"каталог-кромок/кромка-1.html"},
            {name:"Кромка 1.1",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-1.1_cam1",url:"каталог-кромок/кромка-1.1.html"},
            {name:"Кромка 1.2",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-1.2_cam1",url:"каталог-кромок/кромка-1.2.html"},
            {name:"Кромка 2",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-2_cam1",url:"каталог-кромок/кромка-2.html"},
            {name:"Кромка 3",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-3_cam1",url:"каталог-кромок/кромка-3.html"},
            {name:"Кромка 4",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-4_cam1",url:"каталог-кромок/кромка-4.html"},
            {name:"Кромка 5",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-5_cam1",url:"каталог-кромок/кромка-5.html"},
            {name:"Кромка «Непроливайка»",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-NE_cam1",url:"каталог-кромок/кромка-непроливайка.html"},
            {name:"Кромка «Классика 1»",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-CL-1_cam1",url:"каталог-кромок/кромка-классика-1.html"},
            {name:"Кромка «Классика 2»",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-CL-2_cam1",url:"каталог-кромок/кромка-классика-2.html"},
            {name:"Аппликация торца",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-AT_cam1",url:"каталог-кромок/аппликация-торца.html"},
            {name:"Торец другого цвета",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-DT_cam1",url:"каталог-кромок/торец-другого-цвета.html"},
            {name:"Подхлёст снизу",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-POD_cam1",url:"каталог-кромок/подхлёст-снизу.html"},
            {name:"Подхлёст с нижней кромкой",img:"https://стильный-камень.рф/pictures/katalog/new_photos/slider/G-kromka-PODNK_cam1",url:"каталог-кромок/подхлёст-с-нижней-кромкой.html"},
          ],
          akril_arr:[
            {name:"Кромка 1",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-1_cam1",url:"каталог-кромок/кромка-1-акрил.html"},
            {name:"Кромка 1.1",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-1.1_cam1",url:"каталог-кромок/кромка-1.1-акрил.html"},
            {name:"Кромка 1.2",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-1.2_cam1",url:"каталог-кромок/кромка-1.2-акрил.html"},
            {name:"Кромка 2",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-2_cam1",url:"каталог-кромок/кромка-2-акрил.html"},
            {name:"Кромка 3",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-3_cam1",url:"каталог-кромок/кромка-3-акрил.html"},
            {name:"Кромка 4",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-4_cam1",url:"каталог-кромок/кромка-4-акрил.html"},
            {name:"Кромка 5",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-5_cam1",url:"каталог-кромок/кромка-5-акрил.html"},
            {name:"Кромка «Классика 1»",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-CL-1_cam1",url:"каталог-кромок/кромка-классика-1-акрил.html"},
            {name:"Кромка «Классика 2»",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-CL-2_cam1",url:"каталог-кромок/кромка-классика-2-акрил.html"},
            {name:"Кромка «Непроливайка»",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-NE_cam1",url:"каталог-кромок/кромка-непроливайка-акрил.html"},
            {name:"Подхлёст снизу",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-POD_cam1",url:"каталог-кромок/подхлёст-снизу-акрил.html"},
            {name:"Подхлёст с нижней кромкой",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-akril/slider/A-kromka-PODNK_cam1",url:"каталог-кромок/подхлёст-с-нижней-кромкой-акрил.html"},
          ],
          kvartz_arr:[
            {name:"Кромка 1",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/1-kromka",url:"каталог-кромок/кромка-1-кварц.html"},
            {name:"Кромка 2",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/2-kromka",url:"каталог-кромок/кромка-2-кварц.html"},
            {name:"Кромка 3",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/3-kromka",url:"каталог-кромок/кромка-3-кварц.html"},
            {name:"Кромка 4",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/4-kromka",url:"каталог-кромок/кромка-4-кварц.html"},
            {name:"Кромка 5",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/5-kromka",url:"каталог-кромок/кромка-5-кварц.html"},
            {name:"Кромка F",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/F-kromka",url:"каталог-кромок/кромка-f-кварц.html"},
            {name:"Кромка H",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/H-kromka",url:"каталог-кромок/кромка-h-кварц.html"},
            {name:"Кромка O",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/O-kromka",url:"каталог-кромок/кромка-o-кварц.html"},
            {name:"Кромка V",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/V-kromka",url:"каталог-кромок/кромка-v-кварц.html"},
            {name:"Кромка Z",img:"https://стильный-камень.рф/pictures/katalog/katalog-kromok-kvatz/slider/Z-kromka",url:"каталог-кромок/кромка-z-кварц.html"}
          ],
          publish_Kromka:true,
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
