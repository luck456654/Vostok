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
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать столешницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<div class="col-sm-12 filters-block" v-if="showFilters">
  <h3>Фильтры</h3>
  <div class="row">
    <div class="col-xs-6 col-sm-4 filters-item">
      <span>Тип:</span>
      <select  v-model="selectedType">
        <option v-for="(item, index) in selectType" :key="index" :value="index">{{item}}</option>
      </select>
    </div>
    <div class="col-xs-6 col-sm-4 filters-item">
      <span>Мойка:</span>
      <select  v-model="selectedSink">
        <option v-for="(item, index) in selectSink" :key="index" :value="index">{{item}}</option>
      </select>
    </div>
    <div class="col-xs-6 col-sm-4 filters-item">
      <span>Оттенок:</span>
      <select  v-model="selectedColor">
        <option v-for="(item, index) in selectColor" :key="index" :value="index">{{item}}</option>
      </select>
    </div>
  </div>
  <button class="btn-filter" >Применить</button>
</div>
<div class="paginator-list" :class="{paginator_list_scroll: showPagMobile}">
   <nuxt-link v-for="(n,index) in (maxNumberPage)" :key="index" :to="'?page='+n">
    <button  class="new_paginator_link" :class="{new_paginator_link_active: $store.state.pageNumber==n}" @click="changeNP(n)">
      <span>{{n}}</span>
    </button>
  </nuxt-link>
   <button class="breadcrumbs-show-mobile" v-if="!showPagMobile" @click="showPagMobile = !showPagMobile" title="Показать подробнее"><span>...</span></button>
</div>
<div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
    <div class="row">
      <div v-for="(item, index) in arr" :key="index"  >
        <div class="catalog-preview_block col-xs-6 col-sm-3" v-if="index+1>(($store.state.pageNumber-1)*20)&&index+1<(($store.state.pageNumber)*20+1)">
          <a
            data-fancybox
            :href="'https://стильный-камень.рф/assets/images/resources/778/'+item.file"
            class="catalog-preview_wrapper"
            exact
            @click.prevent="openSuperModal=index+1"
          >
              <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
              <picture>
              <!--  <source type="image/webp" :srcset="'https://стильный-камень.рф/assets/gallery/16/slider_w/'+item.url+'.webp'"  alt="" class="new_gallery_img">
                <source type="image/jpg" :srcset="'https://стильный-камень.рф/assets/gallery/16/slider_j/'+item.url+'.jpg'"  alt="" class="new_gallery_img"> -->
                <img :src="'https://стильный-камень.рф'+item.url"  alt="" class="new_gallery_img">
              </picture>
              <!--<img :src="'https://стильный-камень.рф/assets/gallery/16/slider_j/'+item.url"  class="new_gallery_img">-->
          </a>
          <div v-if="openSuperModal == index+1"  class="modal-stone" >
            <span @click="openSuperModal=0" class="close-modal-stone">X</span>
            <div class="row modal-stone-row" v-if="$store.state.pageNumber<maxNumberPage">
              <div class="modal-stone-prev" v-if="index+1>((($store.state.pageNumber-1)*20)+1)" @click="openSuperModal=index">&#8592;</div>
              <div class="modal-stone-prev" v-else  @click="openSuperModal=(($store.state.pageNumber)*20)">&#8592;</div>
              <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/75/'+item.file" class="modal-stone-img"></div>
              <div class="modal-stone-next" v-if="index+1<(($store.state.pageNumber)*20)" @click="openSuperModal=index+2">&#8594;</div>
              <div class="modal-stone-next" v-else @click="openSuperModal=((($store.state.pageNumber-1)*20)+1)">&#8594;</div>
            </div>
            <div class="row modal-stone-row" v-else>
              <div class="modal-stone-prev" v-if="index+1>(($store.state.pageNumber-1)*20+1)" @click="openSuperModal=index">&#8592;</div>
              <div class="modal-stone-prev" v-else  @click="openSuperModal=(arr.length)">&#8592;</div>
              <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/75/'+item.file" class="modal-stone-img"></div>
              <div class="modal-stone-next" v-if="index+1<(arr.length)" @click="openSuperModal=index+2">&#8594;</div>
              <div class="modal-stone-next" v-else @click="openSuperModal=(((maxNumberPage-1)*20)+1)">&#8594;</div>
            </div>
            <div class="row modal-text-block">
              <span class="title-modal-stone">{{item.name}}</span>
              <span class="title-modal-count" v-if="$store.state.pageNumber<maxNumberPage">{{(index+1-(($store.state.pageNumber-1)*20))}} из 20</span>
              <span class="title-modal-count" v-else>{{((index+1)-((maxNumberPage-1)*20))}} из {{(arr.length-((maxNumberPage-1)*20))}}</span>
              <br><span class="title-modal-link" @click.prevent="showModalCallBackGallery = !showModalCallBackGallery">Заказать такую</span>
            </div>
              <ModalCallBackGallery v-if="showModalCallBackGallery" :imgCode="item.img" @close="closeModalCallBackGallery"/>
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
   <button class="breadcrumbs-show-mobile" v-if="!showPagMobile" @click="showPagMobile = !showPagMobile" title="Показать подробнее"><span>...</span></button>
</div>
<h2>Каталог столешниц для кухни</h2>
<p>Интерьер, в котором мы находимся, играет огромную роль, влияя на наше самочувствие и настроение. Воздействие цвета на психоэмоциональное состояние человека доказано учеными. Поэтому, собираясь оформить любое пространство, тщательно подойдите к выбору палитры оттенков.</p>
<p>Компания «Стильный камень» предлагает обратить внимание на тонкости выбора цвета столешниц из искусственного камня при обустройстве кухонь и ванных комнат. Фото наших изделий поможет вам оценить их внешний вид и многообразие форм и оттенков.</p>
<p>Тонкости выбора: темное или светлое?</p>
<p>Продуманный дизайн помещения предполагает гармоничное сочетание разных цветов. Их может быть два или больше, главное правило – они не должны соперничать между собой. Все, что им разрешается – иногда контрастировать, в основном колеры должны дополнять друг друга.</p>
<p>Если вам нравятся кухни с темной столешницей, можно использовать классическое сочетание черного и белого (панель и фасады столов и шкафчиков). При желании уйти от стандартных решений можно вместо белого использовать яркий цвет – например, золотистый, оранжевый или медно-рыжий. Дизайнеры советуют при выборе таких колеров оформить окружающее пространство (стены, пол, потолок) в светлых тонах, чтобы обилие красок не утомляло глаза и нервную систему.</p>
<h2>Cветлая кухня с темной или черной столешницей</h2>
<p>Светлая кухня с темной столешницей отлично подойдет для интерьера небольшой площади – появятся иллюзия зрительного увеличения пространства и яркий акцент в виде насыщенного цвета рабочей поверхности. Также в декоре кухни можно использовать темную столешницу и светлую мойку. Смотрится подобный тандем оригинально, контраст будет задавать тон окружающему пространству.</p>
<h2>Кухня со светлой или белой столешницей</h2>
<p>Кухня со светлой столешницей может иметь как белые фасады, так и цветные. В первом случае акцент нужно сделать на ярких аксессуарах, особенно стильно смотрятся красные, синие и черные.</p>
<p>В нашем каталоге вы можете найти различные варианты столешниц, среди которых хит продаж – столешница <strong>«Дуглас светлый»</strong>. Мы изготовим для вас изделие любого размера и формы, учтем пожелания по цвету и конфигурации. Заказы принимаются по телефону, указанному на сайте. Также вы можете оставить свой номер, и наш сотрудник вам перезвонит. С оптовыми покупателями мы работаем на взаимовыгодных условиях, которые готовы обсуждать в индивидуальном порядке. Вместе мы достигнем больших успехов!</p>

 </div>
               </div>
            </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import ModalCallBackGallery from "~/components/ModalCallBackGallery.vue";
export default {
  head() {
    return{
      title:"Фото столешниц из камня для кухни и ванной",
      meta: [
        { name: 'description', hid: 'description', content: 'Каталог работ установленных столешниц из камня  в Москве, Рязани и Владимире.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/галерея-работ.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
      ModalCallBackGallery,
    },
    data() {
        return {
          page_name:"Галерея работ",
          page_full_name:"Дизайн столешниц",
          showModalCallBack:false,
          showBreadcrumbsMobile:false,
          openSuperModal:0,
          showFilters:false,
          showModalCallBackGallery:false,
          showPagMobile:false,
          selectType:['все','для кухни','для ванной','другое'],
          selectSink:['все','с мойкой','без мойки'],
          selectColor:['все','светлые','темные'],
          selectedType:0,
          selectedSink:0,
          selectedColor:0,
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
                `https://стильный-камень.рф/api/mainGallery.php`
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
.filters-item {
  margin-bottom: 20px;
}
.filters-item span {
  font-size: 18px;
  font-family: displaepro;
  font-weight: 100;
  line-height: 1.1;
  padding-right: 10px;
  color: #808080;
}
.filters-item select {
  color: #8c9398;
  border: 1px solid #8c9398!important;
  border-radius: 3px;
  font-size: 21px;
}
.filters-item option:active
{
  background: orange!important;
  color: #fff;
}
.btn-filter {
  background-color: #ff8400;
  color: #fff;
  border: 1px solid #ff8400;
  border-radius: 4px;
  /*font-family: Calibri;*/
  font-size: 14px;
  padding: 5px 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: displaepro-bold;
  letter-spacing: 0.2px;
  cursor: pointer;
}
.btn-filter:hover {
  background-color: #fff;
  color: #ff8400;
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
@media (max-width: 600px){
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
.modal-stone-img {
      max-width: calc(100%);
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
