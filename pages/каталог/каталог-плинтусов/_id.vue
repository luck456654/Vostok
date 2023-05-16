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
                <nuxt-link to="../каталог-плинтусов"  itemprop="item" >
                  <span itemprop="name">Каталог плинтусов</span>
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
  <div class="row">
      <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
        <div class="col-xs-12 col-sm-6 col-md-6">
          <h3>Общий вид</h3>
            <div class="img" style="width:100%;">
              <a :href="photo_main+'.png'" @click.prevent="openSuperModal=1">
               <picture>
                  <source type="image/webp" :srcset="photo_main+'.webp'" class="hover-effect-2" :alt="page_name">
                  <source type="image/png" :srcset="photo_main+'.png'" class="hover-effect-2" :alt="page_name">
                  <img :src="photo_main+'.png'" class="hover-effect-2" :alt="page_name">
                </picture>
              </a>
              <div v-if="openSuperModal == 1"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev" style="color:transparent;cursor: default;}">&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="photo_main+'.png'" class="modal-stone-img" :alt="page_name">
                    </div>
                    <div class="modal-stone-next" style="color:transparent;cursor: default;">&#8594;</div>
                  </div>
                <span class="title-modal-stone">{{title}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div  class="nextblock2">
            <nuxt-link :to="prev_link" exact><button type="button" class="btn btn-warning">Назад</button></nuxt-link>
            <nuxt-link :to="up_link" exact><button type="button" class="btn btn-warning">Вверх</button></nuxt-link>
            <nuxt-link :to="next_link" exact><button type="button" class="btn btn-warning">Вперед</button></nuxt-link>
              <br> <br>
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
          up_link:"../каталог-плинтусов/",
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
                `https://стильный-камень.рф/data/katalog/data_plintus_kromka.php?data=plintus&url=${encodeURIComponent(uriPage)}`
            )
            .then((response) => {
                return {
                    title: response.title,
                    description: response.description,
                    page_name: response.page_name,
                    photo_main: response.photo_main,
                    prev_link: response.prev_link,
                    next_link: response.next_link,
                };
            })
            .catch(err => {
                error(err);
            });
    },

}
</script>
<style scoped>
   #effect-1 .img {width: 100%;
  margin-bottom: 25px;}
  h3, .h3 {font-size: 24px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;}
  .title-modal-stone{
    text-align: left;
    display: inline-block;
    margin-left: 10%;
    margin-top: 10px;
  }
  .count-modal-stone{
    float: right;
    color: #aaa!important;
    margin-top: 10px;
    display: inline-block;
    margin-right: 10%;
  }
  .modal-stone-prev-next-active {color:#ababab;cursor:pointer;}
  .modal-stone-prev-next-active:hover {color:#fff;}
</style>
