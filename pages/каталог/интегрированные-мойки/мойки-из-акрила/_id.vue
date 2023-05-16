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
                <nuxt-link to="../../интегрированные-мойки.html"  itemprop="item">
                  <span itemprop="name">Интегрированные мойки</span>
                 </nuxt-link>
                <meta itemprop="position" content="3" />
            </li>
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <nuxt-link to="../мойки-из-акрила.html"  itemprop="item">
                  <span itemprop="name">Кухонные мойки из акрилового камня</span>
                 </nuxt-link>
                <meta itemprop="position" content="4" />
            </li>
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="5" />
            </li>
          </ol>
            <button class="breadcrumbs-show-mobile" v-if="!showBreadcrumbsMobile" @click="showBreadcrumbsMobile = !showBreadcrumbsMobile" title="Показать подробнее"><span>...</span></button>
            <h1>{{page_name}}</h1>
      </div>
  </div>
    <div class="row popup-gallery">
        <div class="col-xs-12 col-sm-6 col-md-7">
          <div class="img">
            <a :href="photo_main+'.png'" @click.prevent="openSuperModal=1">
              <picture>
                  <source type="image/webp" :srcset="photo_main+'.webp'" class="hover-effect-2" :alt="'Общий вид '+photo_name+' из акрилового камня'">
                  <source type="image/jpg" :srcset="photo_main+'.jpg'" class="hover-effect-2" :alt="'Общий вид '+photo_name+' из акрилового камня'">
                  <img :src="photo_main+'.jpg'" class="hover-effect-2" :alt="'Общий вид '+photo_name+' из акрилового камня'">
                </picture>
            </a>
            <div v-if="openSuperModal == 1"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev modal-stone-prev-next-active" @click="openSuperModal = 2">&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="photo_main+'.jpg'" class="modal-stone-img" :alt="'Общий вид '+photo_name+' из акрилового камня'">
                    </div>
                    <div class="modal-stone-next modal-stone-prev-next-active" @click="openSuperModal = 2">&#8594;</div>
                  </div>
                <span class="title-modal-stone">Общий вид {{photo_name}} из акрилового камня</span>
              </div>
            </div>
            <p><span>{{page_description}}</span></p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-5">
          <div class="img">
            <a :href="photo_shema+'.png'"  @click.prevent="openSuperModal=2">
              <picture>
                  <source type="image/webp" :srcset="photo_shema+'.webp'" class="hover-effect-2" :alt="'Схема '+photo_name+' из акрилового камня'">
                  <source type="image/jpg" :srcset="photo_shema+'.jpg'" class="hover-effect-2" :alt="'Схема '+photo_name+' из акрилового камня'">
                  <img :src="photo_shema+'.jpg'" class="hover-effect-2" :alt="'Схема '+photo_name+' из акрилового камня'">
                </picture>
            </a>
            <div v-if="openSuperModal == 2"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev modal-stone-prev-next-active" @click="openSuperModal = 1">&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="photo_shema+'.jpg'" class="modal-stone-img" :alt="'Схема '+photo_name+' из акрилового камня'">
                    </div>
                    <div class="modal-stone-next modal-stone-prev-next-active" @click="openSuperModal = 1">&#8594;</div>
                  </div>
                <span class="title-modal-stone">Схема {{photo_name}} из акрилового камня</span>
              </div>
            </div>
          <p>
            <table class="table_painted" border="0">
              <tbody>
                <tr  v-for="(item, index) in page_table" :key="index">
                  <td> <strong>{{item.td1}}:</strong></td>
                  <td>{{item.td2}}</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </div>
    <div class="row">
      <div  class="nextblock2">
        <nuxt-link :to="prev_link" exact><button type="button" class="btn btn-warning">Назад</button></nuxt-link>
        <nuxt-link :to="up_link" exact><button type="button" class="btn btn-warning">Вверх</button></nuxt-link>
        <nuxt-link :to="next_link" exact><button type="button" class="btn btn-warning">Вперед</button></nuxt-link>
      <br> <br>
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
      title: this.title
    };
  },
   components: {
    Proizvodim,
  },
    data() {
        return {
          up_link:"../мойки-из-акрила.html",
          showBreadcrumbsMobile:false,
          openSuperModal:0,
        }
    },
    validate({
        params,
        query
    }) {
        return true
    },
    async asyncData({
        $axios,
        app,
        route,
        error
    }) {
        const uriPage = route.params.id;
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_moyki.php?data=akril&url=${encodeURIComponent(uriPage)}`
            )
            .then((response) => {
                return {
                    title: response.title,
                    description: response.description,
                    page_name: response.page_name,
                    photo_main: response.photo_main,
                    photo_shema: response.photo_shema,
                    photo_name: response.photo_name,
                    prev_link: response.prev_link,
                    next_link: response.next_link,
                    page_description: response.page_description,
                    page_table: response.page_table,
                };
            })
            .catch(err => {
                error(err);
            });
    },

}
</script>
<style scoped>
.popup-gallery img{width: 100%;}
.modal-stone-prev-next-active {color:#ababab;cursor:pointer;}
.modal-stone-prev-next-active:hover {color:#fff;}
.modal-stone-img {width: auto!important;height: auto;}
</style>

