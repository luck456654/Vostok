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
            <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <nuxt-link to="/каталог/стеновые-панели.html" append itemprop="item">
                  <span itemprop="name">Стеновые панели и фартуки </span>
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
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать панель</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-sm-12">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 main-content">
            <br>
  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
    <div class="row">
      <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr" :key="index"  >
        <a
          data-fancybox
          :href="'https://стильный-камень.рф/assets/images/resources/630/'+item.img"
          class="catalog-preview_wrapper"
          :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/630/360x270/'+item.url+')'}"
          exact
          @click.prevent="openSuperModal=index+1"
        >
            <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
        </a>
        <div v-if="openSuperModal == index+1"  class="modal-stone" >
          <span @click="openSuperModal=0" class="close-modal-stone">X</span>
          <div class="row modal-stone-row">
            <div class="modal-stone-prev" v-if="index>0" @click="openSuperModal=index">&#8592;</div>
            <div class="modal-stone-prev" v-else  @click="openSuperModal=arr.length">&#8592;</div>
            <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/630/'+item.img" class="modal-stone-img"></div>
            <div class="modal-stone-next" v-if="index<arr.length-1" @click="openSuperModal=index+2">&#8594;</div>
            <div class="modal-stone-next" v-else @click="openSuperModal=1">&#8594;</div>
          </div>
            <span class="title-modal-stone"> {{index+1}} из {{arr.length}}</span>
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
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Фото стеновых панелей из камня и фартуков",
      meta: [
        { name: 'description', hid: 'description', content: 'Посмотрите галерею изготовленных и установленных стеновых панелей из камня.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/стеновые-панели/галерея-стеновых-панелей.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Галерея стеновых панелей",
          showModalCallBack:false,
          showBreadcrumbsMobile:false,
          openSuperModal:0,
        }
    },
     async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=gallery_panel`
            )
            .then(arr => {
                return {
                    arr:arr,
                    long:arr.length,
                };
            })
            .catch(err => {
                error(err);
            });
    },
     methods: {
        closeModalCallBack() {
          this.showModalCallBack = false;
        },
     }
}
</script>
<style scoped>
.send-button {float: left;margin-top: 15px;}
h2, .h2 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.title-modal-stone {
    text-align: right;
    padding-right: 90px;
    margin-top: 0px;
}
.catalog-preview_block {
    margin-bottom: 0px;
}
.catalog-preview_block.col-sm-4 .catalog-preview_wrapper {
    height: 215px;
}
.catalog-preview_wrapper img {top: 0px;}
.modal-stone-prev, .modal-stone-next {
    cursor: pointer;
}
.modal-stone-prev:hover, .modal-stone-next:hover {
    color:#fff;
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
