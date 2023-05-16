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
                <nuxt-link to="/каталог/столешницы.html" append itemprop="item">
                  <span itemprop="name">Столешницы из камня</span>
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
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать столешницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<div class="paginator-list" :class="{paginator_list_scroll: showPagMobile}">
   <nuxt-link v-for="(n,index) in (maxNumberPage)" :key="index" :to="'?page='+n">
    <button  class="new_paginator_link" :class="{new_paginator_link_active: $store.state.pageNumber==n}" @click="changeNP(n)">
      <span>{{n}}</span>
    </button>
  </nuxt-link>
   <!--<button class="breadcrumbs-show-mobile" v-if="!showPagMobile" @click="showPagMobile = !showPagMobile" title="Показать подробнее"><span>...</span></button>-->
</div>
<div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
    <div class="row">
      <div v-for="(item, index) in arr" :key="index"  >
        <div class="catalog-preview_block col-xs-6 col-sm-3" v-if="index+1>(($store.state.pageNumber-1)*20)&&index+1<(($store.state.pageNumber)*20+1)">
          <a
            data-fancybox
            :href="'https://стильный-камень.рф/assets/images/resources/799/'+item.img"
            class="catalog-preview_wrapper"
            exact
            @click.prevent="openSuperModal=index+1"
          >
              <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
              <picture>
                <source type="image/webp" :srcset="'https://стильный-камень.рф/assets/images/resources/799/360x270_webp/'+item.url+'.webp'"  alt="" class="new_gallery_img">
                <source type="image/jpg" :srcset="'https://стильный-камень.рф/assets/images/resources/799/360x270/'+item.url+'.jpg'"  alt="" class="new_gallery_img">
                <img :src="'https://стильный-камень.рф/assets/gallery/799/360x270/'+item.url+'.jpg'"  alt="" class="new_gallery_img">
              </picture>
          </a>
          <div v-if="openSuperModal == index+1"  class="modal-stone" >
            <span @click="openSuperModal=0" class="close-modal-stone">X</span>
            <div class="row modal-stone-row" v-if="$store.state.pageNumber<maxNumberPage">
              <div class="modal-stone-prev" v-if="index+1>((($store.state.pageNumber-1)*20)+1)" @click="openSuperModal=index">&#8592;</div>
              <div class="modal-stone-prev" v-else  @click="openSuperModal=(($store.state.pageNumber)*20)">&#8592;</div>
              <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/799/'+item.img" class="modal-stone-img"></div>
              <div class="modal-stone-next" v-if="index+1<(($store.state.pageNumber)*20)" @click="openSuperModal=index+2">&#8594;</div>
              <div class="modal-stone-next" v-else @click="openSuperModal=((($store.state.pageNumber-1)*20)+1)">&#8594;</div>
            </div>
            <div class="row modal-stone-row" v-else>
              <div class="modal-stone-prev" v-if="index+1>(($store.state.pageNumber-1)*20+1)" @click="openSuperModal=index">&#8592;</div>
              <div class="modal-stone-prev" v-else  @click="openSuperModal=(arr.length)">&#8592;</div>
              <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/799/'+item.img" class="modal-stone-img"></div>
              <div class="modal-stone-next" v-if="index+1<(arr.length)" @click="openSuperModal=index+2">&#8594;</div>
              <div class="modal-stone-next" v-else @click="openSuperModal=(((maxNumberPage-1)*20)+1)">&#8594;</div>
            </div>
            <div class="row modal-text-block">
              <span class="title-modal-count" v-if="$store.state.pageNumber<maxNumberPage">{{(index+1-(($store.state.pageNumber-1)*20))}} из 20</span>
              <span class="title-modal-count" v-else>{{((index+1)-((maxNumberPage-1)*20))}} из {{(arr.length-((maxNumberPage-1)*20))}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="paginator-list" :class="{paginator_list_scroll: showPagMobile}">
   <nuxt-link v-for="(n,index) in (maxNumberPage)" :key="index" :to="'?page='+n">
    <button  class="new_paginator_link" :class="{new_paginator_link_active: $store.state.pageNumber==n}" @click="changeNP(n)">
      <span>{{n}}</span>
    </button>
  </nuxt-link>
   <!--<button class="breadcrumbs-show-mobile" v-if="!showPagMobile" @click="showPagMobile = !showPagMobile" title="Показать подробнее"><span>...</span></button>-->
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
      title:"Фото столешниц из жидкого камня для кухни и ванной",
      meta: [
        { name: 'description', hid: 'description', content: 'Каталог работ установленных столешниц из жидкого гранита в Москве, Рязани и Владимире.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/галерея-работ-столешниц-из-жидкого-гранита.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Галерея работ столешниц из жидкого гранита",
          showModalCallBack:false,
          showBreadcrumbsMobile:false,
          openSuperModal:0,
          showFilters:false,
          showModalCallBackGallery:false,
          showPagMobile:false,
        }
    },
     async asyncData({
        $axios,
        app,
        route,
        store,
        error,
        req
    }) {
      if (route.query.page === undefined) {
    } else {
     store.dispatch("changeNumberPage", route.query.page);
    }
    console.log(store.state.pageNumber);
    console.log(route.query.page);
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=gallery_st_granit`
            )
            .then(arr => {
                return {
                    arr:arr,
                    long:arr.length,
                    maxNumberPage: Math.ceil(arr.length/20),
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
        changeNP(index) {
              this.$store.dispatch('changeNumberPage', index)
              console.log(this.$store.state.pageNumber);
        },
        closeModalCallBackGallery() {
          this.showModalCallBackGallery = false;
        }
     }
}
</script>
<style scoped>
.send-button {float: left;margin-top: 15px;}
h2, .h2 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.view-zoom{
  top: 0;
}
.title-modal-stone {
    color: #aaa!important;
    display: inline-block;
    padding-left: 90px;
    margin-top: 0px;
    /*float: left;*/
    text-align: left;
    max-width: calc(100% - 300px);
}
.catalog-preview_title {
    display: none;
}
.title-modal-count {
    text-align: right;
    padding-right: 90px;
    display: inline-block;
    color: #aaa;
    margin-top: 0;
    float: right;
}
.title-modal-link {
  text-align: center;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background: #eea236;
  border: solid 1px #eea236;
  width: fit-content;
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
  position: absolute;
  top: 50px;
  left: calc(50% - 74px);
}
.title-modal-link:hover {
  background: #fff;
  color: #eea236;
}
.catalog-preview_block {
  margin-bottom: 30px;
  height: auto;
}
.photo_preview_title h4, .photo_preview_title h6 {
    font-size: 14px;
}
.catalog-preview_block.col-sm-3 .catalog-preview_wrapper {
    height: auto;
}
.modal-stone-prev, .modal-stone-next {
    cursor: pointer;
}
.modal-stone-prev:hover, .modal-stone-next:hover {
    color:#fff;
}
.paginator-list{
  padding: 10px;
}
.paginator-list a {
  background-color: #fff;
  padding-left: 5px;
  padding-right: 5px;
}
.new_paginator_link {display: inline-block;
  padding: 7px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  text-decoration: none;
  margin-top: 3px;
  color: #c8601b;
  margin: 1px;
  border-radius: 0;
  font-size: 17px;
  font-family: Proxima, Times;}
.new_paginator_link:hover {
  border: 1px solid #ddd;
  background-color: #eee;
  }
.new_paginator_link_active {
  border: 1px solid #c8601b;
  }
.paginator-list a button span {border:none;}
.modal-stone-prev, .modal-stone-next {
    margin-top: 40vh;
}
.modal-stone-img {
    max-width: calc(100% - 70px);
}
.new_gallery_img {
  width: 100%;
  height: auto;
}
.exampels_photo {
  margin-bottom: 20px;
}
.exampels_photo .catalog-preview_block {
    margin-bottom: 5px!important;
    margin-top: 5px!important;
    padding-right: 5px!important;
    padding-left: 5px!important;
}
@media (min-width: 992px){
    .title-modal-link{
      top: 20px;
      margin-top: 10px;
    }
    .modal-stone-img {
      max-width: calc(100% - 70px);
      max-height: 90%;
  }
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .title-modal-stone {
    color: #aaa!important;
    display: block;
    float: none;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
    float: none;
    max-width: calc(100% - 20px);
}
  .title-modal-count {
      padding-right: 10px;
      display: block;
      color: #aaa;
      margin-top: 0;
      float: none;
      text-align: right;
      padding-right: 25px;
  }
  .paginator-list {
    background-color: white;
    overflow: auto;
    white-space: nowrap;
    margin-bottom: 20px;
    margin-left: -25px;
    margin-right: -15px;
    position: relative;
  }
  .paginator_list_scroll{
    background-color: white;
    overflow: auto;
    white-space: normal;
    margin-bottom: 20px;
  }
  .paginator-list .breadcrumbs-show-mobile span {
    top: -9px;
    color: #c8601b;
  }
  .paginator-list .breadcrumbs-show-mobile {
    left: 92%;
  }
  .exampels_photo {
    padding-left: 0px;
    padding-right: 0px;
  }

}
</style>
