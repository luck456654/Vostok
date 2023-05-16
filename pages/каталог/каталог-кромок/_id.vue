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
                <nuxt-link to="../каталог-кромок.html"  itemprop="item" >
                  <span itemprop="name">Каталог кромок</span>
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
              <a :href="photo_main+'.png'" @click.prevent="openSuperModal=1" exact>
               <picture>
                  <source type="image/webp" :srcset="photo_main+'.webp'" class="hover-effect-2" :alt="'Общий вид '+photo_disc">
                  <source type="image/png" :srcset="photo_main+'.png'" class="hover-effect-2" :alt="'Общий вид '+photo_disc">
                  <img :src="photo_main+'.png'" class="hover-effect-2" :alt="'Общий вид '+photo_disc">
                </picture>
              </a>
              <div v-if="openSuperModal == 1"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev modal-stone-prev-next-active" v-if="photo_num>1" @click="minus(openSuperModal)">&#8592;</div>
                    <div class="modal-stone-prev" v-else>&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="photo_main+'.png'" class="modal-stone-img" :alt="'Общий вид '+photo_disc">
                    </div>
                    <div class="modal-stone-next modal-stone-prev-next-active" v-if="photo_num>1" @click="plus(openSuperModal)">&#8594;</div>
                    <div class="modal-stone-next" v-else>&#8594;</div>
                  </div>
                <span class="title-modal-stone">Общий вид {{photo_disc}}</span><span class="count-modal-stone">1 из {{photo_num}} </span>
              </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
          <h3>Схема</h3>
            <div class="img" style="width:100%;">
              <a :href="photo_shema+'.png'" @click.prevent="openSuperModal=2" exact>
                <picture>
                  <source type="image/webp" :srcset="photo_shema+'.webp'" class="hover-effect-2" :alt="'Схема '+photo_disc">
                  <source type="image/png" :srcset="photo_shema+'.png'" class="hover-effect-2" :alt="'Схема '+photo_disc">
                  <img :src="photo_shema+'.png'" class="hover-effect-2" :alt="'Схема '+photo_disc">
                </picture>
              </a>
              <div v-if="openSuperModal == 2"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev modal-stone-prev-next-active" v-if="photo_num>1" @click="minus(openSuperModal)">&#8592;</div>
                    <div class="modal-stone-prev" v-else>&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="photo_shema+'.png'" class="modal-stone-img" :alt="'Схема '+photo_disc">
                    </div>
                    <div class="modal-stone-next modal-stone-prev-next-active" v-if="photo_num>1" @click="plus(openSuperModal)">&#8594;</div>
                    <div class="modal-stone-next" v-else>&#8594;</div>
                  </div>
                <span class="title-modal-stone">Схема {{photo_disc}}</span><span class="count-modal-stone">2 из {{photo_num}} </span>
              </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6" v-if="photo_side">
          <h3>Вид сбоку</h3>
            <div class="img" style="width:100%;">
              <a :href="photo_side+'.png'" @click.prevent="openSuperModal=3"  exact>
                 <picture>
                  <source type="image/webp" :srcset="photo_side+'.webp'" class="hover-effect-2" :alt="'Вид сбоку '+photo_disc">
                  <source type="image/png" :srcset="photo_side+'.png'" class="hover-effect-2" :alt="'Вид сбоку '+photo_disc">
                  <img :src="photo_side+'.png'" class="hover-effect-2" :alt="'Вид сбоку '+photo_disc">
                </picture>
              </a>
              <div v-if="openSuperModal == 3"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev modal-stone-prev-next-active" v-if="photo_num>1" @click="minus(openSuperModal)">&#8592;</div>
                    <div class="modal-stone-prev" v-else>&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="photo_side+'.png'" class="modal-stone-img" :alt="'Вид сбоку '+photo_disc">
                    </div>
                    <div class="modal-stone-next modal-stone-prev-next-active" v-if="photo_num>1" @click="plus(openSuperModal)">&#8594;</div>
                    <div class="modal-stone-next" v-else>&#8594;</div>
                  </div>
                <span class="title-modal-stone">Вид сбоку {{photo_disc}}</span><span class="count-modal-stone">3 из {{photo_num}} </span>
              </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6" v-if="photo_front">
          <h3>Вид спереди</h3>
            <div class="img" style="width:100%;">
              <a :href="photo_front+'.png'" @click.prevent="openSuperModal=4"  exact>
                 <picture>
                  <source type="image/webp" :srcset="photo_front+'.webp'" class="hover-effect-2" :alt="'Вид спереди '+photo_disc">
                  <source type="image/png" :srcset="photo_front+'.png'" class="hover-effect-2" :alt="'Вид спереди '+photo_disc">
                  <img :src="photo_front+'.png'" class="hover-effect-2" :alt="'Вид спереди '+photo_disc">
                </picture>
              </a>
              <div v-if="openSuperModal == 4"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev modal-stone-prev-next-active" v-if="photo_num>1" @click="minus(openSuperModal)">&#8592;</div>
                    <div class="modal-stone-prev" v-else>&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="photo_front+'.png'" class="modal-stone-img" :alt="'Вид спереди '+photo_disc">
                    </div>
                    <div class="modal-stone-next modal-stone-prev-next-active" v-if="photo_num>1" @click="plus(openSuperModal)">&#8594;</div>
                    <div class="modal-stone-next" v-else>&#8594;</div>
                  </div>
                <span class="title-modal-stone">Вид спереди {{photo_disc}}</span><span class="count-modal-stone">4 из {{photo_num}} </span>
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
      <div class="col-xs-12 col-sm-12 col-md-12" v-if="page_description">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 main-content">
              <p><span>{{page_description}}</span></p>
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
      title: this.title
    };
  },
   components: {
    Proizvodim,
  },
    data() {
        return {
          up_link:"../каталог-кромок.html",
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
                `https://стильный-камень.рф/data/katalog/data_plintus_kromka.php?data=kromka&url=${encodeURIComponent(uriPage)}`
            )
            .then((response) => {
                return {
                    title: response.title,
                    description: response.description,
                    page_name: response.page_name,
                    photo_main: response.photo_main,
                    photo_shema: response.photo_shema,
                    photo_side: response.photo_side,
                    photo_front: response.photo_front,
                    photo_disc: response.photo_disc,
                    photo_num: response.photo_num,
                    page_description: response.page_description,
                    prev_link: response.prev_link,
                    next_link: response.next_link,
                };
            })
            .catch(err => {
                error(err);
            });
    },
  methods: {
    minus(openSuperModal) {
      if(openSuperModal>1){
      this.openSuperModal = (this.openSuperModal - 1);
      }
      else{
        this.openSuperModal = this.photo_num;
      }
    },
    plus(openSuperModal) {
       if(openSuperModal < this.photo_num){
      this.openSuperModal = (this.openSuperModal + 1);
       }
       else{
         this.openSuperModal = 1;
       }
    },
  }
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
