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
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="3" />
            </li>
          </ol>
            <button class="breadcrumbs-show-mobile" v-if="!showBreadcrumbsMobile" @click="showBreadcrumbsMobile = !showBreadcrumbsMobile" title="Показать подробнее"><span>...</span></button>
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать панель</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
                  <div  class="top-img-row">
                    <div class="col-xs-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/temnaya-stenovaya-panel.webp"  alt="Темная стеновая панель из камня на кухню">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/temnaya-stenovaya-panel.jpg"  alt="Темная стеновая панель из камня на кухню">
                        <img src="https://стильный-камень.рф/pictures/wall/temnaya-stenovaya-panel.jpg"  alt="Темная стеновая панель из камня на кухню">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/zelenaya-stenovaya-panel.webp"  alt="Зеленая стеновая панель из камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/zelenaya-stenovaya-panel.jpg"  alt="Зеленая стеновая панель из камня">
                        <img src="https://стильный-камень.рф/pictures/wall/zelenaya-stenovaya-panel.jpg"  alt="Зеленая стеновая панель из камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/korichnevaya-stenovaya-panel.webp"  alt="Коричневая стеновая панель из камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/korichnevaya-stenovaya-panel.jpg"  alt="Коричневая стеновая панель из камня">
                        <img src="https://стильный-камень.рф/pictures/wall/korichnevaya-stenovaya-panel.jpg"  alt="Коричневая стеновая панель из камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/svetlaya-stenovaya-panel.webp"  alt="Светлая стеновая панель из камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/svetlaya-stenovaya-panel.jpg"  alt="Светлая стеновая панель из камня">
                        <img src="https://стильный-камень.рф/pictures/wall/svetlaya-stenovaya-panel.jpg"  alt="Светлая стеновая панель из камня">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/стеновые-панели/галерея-стеновых-панелей.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
       </div>
<div class="col-xs-12 in-page-block">
<p>На зарубежном рынке отделочных материалов стеновые панели из искусственного камня появились в начале 80-х годов.
Они сразу завоевали признание потребителей. Основными производителями изделий стали <b>Avant Quartz</b>, <b>Caesarstone</b>, <b>Santa Margeritha</b>, <b>Silestone</b>, <b>Samsung</b> и другие известные компании. В России этот материал появился намного позже, с развитием отечественного
производства панели из композита стали доступнее для массового потребителя. Компания «Стильный камень» предлагает отделку,
изготовленную из сырья от ведущих мировых производителей, застройщикам из Московской, Рязанской и Владимирской областей на лучших условиях.</p>
<div class="created-from">
                        <div class="inner">
                            <h2>Мы изготавливаем из:</h2>
                            <nuxt-link title="Стеновые панели из кварцевого агломерата" to="/каталог/стеновые-панели/стеновые-панели-из-кварца.html" append >
                              <picture>
                                <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/made-from-1.webp"  alt="Стеновые панели из кварцевого агломерата">
                                <source type="image/png" srcset="https://стильный-камень.рф/pictures/bar/made-from-1.png"  alt="Стеновые панели из кварцевого агломерата">
                                <img src="https://стильный-камень.рф/pictures/bar/made-from-1.jpg"  alt="Стеновые панели из кварцевого агломерата">
                              </picture>
                            </nuxt-link>
                            <nuxt-link title="Стеновые панели из жидкого камня" to="/каталог/стеновые-панели/стеновые-панели-из-акрила.html" append >
                              <picture>
                                <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/made-from-2.webp"  alt="Стеновые панели из жидкого камня">
                                <source type="image/png" srcset="https://стильный-камень.рф/pictures/bar/made-from-2.png"  alt="Стеновые панели из жидкого камня">
                                <img src="https://стильный-камень.рф/pictures/bar/made-from-2.jpg"  alt="Стеновые панели из жидкого камня">
                              </picture>
                            </nuxt-link>
                            <a title="Чем отличаются столешницы из разных камней" rell="nofollow" href="https://стильный-камень.рф/статьи/столешницы-из-камня.html" class="button">Сравнить</a>
                        </div>
</div>
<h2>Выгоды использования стеновых панелей из искусственного камня в отделке</h2>
<p style="margin-bottom: 0;">Искусственный камень – материал с уникальными свойствами, которые передаются любым изделиям, изготовленным из него, в том числе стеновым панелям. Перечисление полного набора достоинств и выгод их использования при отделке зданий и помещений займет много времени, поэтому мы назовем основные преимущества:</p>
<ul style="margin-top: 5px;">
  <li>возможно изготовление по индивидуальным замерам, что сводит к минимуму отходы;</li>
  <li>материал абсолютно устойчив к влаге и агрессивным воздействиям, благодаря чему с одинаковым успехом может использоваться для внутренних и наружных отделочных работ;</li>
  <li>отличная механическая прочность при малом весе;</li>
  <li>невероятное разнообразие цветов и фактур;</li>
  <li>легкость в монтаже и обработке;</li>
  <li>приемлемые цены и т. д.</li>
</ul>
<p>Панели из искусственного камня особенно хороши при отделке кухонь и ванных комнат, но их достоинства
открывают новые сферы использования. Сегодня материал широко используют в декорировании коммерческих помещений
(офисов, ресторанов и проч.), чьи владельцы оценили его долговечность, санитарную и экологическую безопасность, простоту ухода.</p>
<h2>Заказать кухонный фартук из искусственного камня</h2>
<p>Фартуки из искусственного камня могут иметь толщину 10 мм. Приобретение материала, как и других изделий из искусственного камня,
начинается с замеров. Их результат служит основанием для расчета стоимости заказа. Затем покупатель выбирает подходящую цветовую гамму,
и <strong>«Стильный камень»</strong> приступает к исполнению заказа. Помимо собственно изготовления панелей, мы предлагаем услуги по их монтажу
«под ключ». Необходимые подробности узнавайте через рубрику «Контакты» нашего сайта.</p>

</div>

<div class="col-xs-12 col-sm-12 col-md-12">
              <div class="row">
                   <div class="col-xs-12 col-sm-8 col-md-9 pull-right">
                       <hr class="blue-line">
                   </div>
                   <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6" itemscope itemtype="http://schema.org/ImageObject" v-for="(item,index) in gallery" v-bind:key="index">
                      <a itemprop="contentUrl" @click.prevent="modalMiniGallery(index)" :href="'https://стильный-камень.рф/pictures/wall/'+item.img+'.jpg'">
                        <img :src="'https://стильный-камень.рф/pictures/wall/mob/'+item.img+'.jpg'" class="img-responsive hover-effect" :alt="item.name">
                        <span itemprop="caption description" style="display:none;">{{item.name}}</span>
                      </a>

                      <div class="modal-gallery" v-if="modalMiniGalleryBlock&&index==showSlide">
                        <div class="modal-content" >
                          <span class="close-modal-gallery" @click="modalMiniGalleryBlock=!modalMiniGalleryBlock">x</span>
                          <img :src="'https://стильный-камень.рф/pictures/wall/'+item.img+'.jpg'" :alt="item.name">
                          <span class="modal-gallery-name">{{item.name}}</span>
                          <span class="modal-gallery-count">{{index+1}} из 6</span>
                          <button class="slider-button slider-button-left"  @click="prevSlide()"><span>&lt;</span></button>
                          <button class="slider-button slider-button-right" @click="nextSlide()"><span>&gt;</span></button>
                        </div>
                      </div>
                    </div>
                   </div>
                   <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
                   </div>
                  <a href="https://стильный-камень.рф/каталог/стеновые-панели/галерея-стеновых-панелей.html" rel="nofollow" class="link-gal">смотреть всю галерею &gt;</a>

        </div></div>
            </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Заказать фартук из натурального камня  в Москве, Рязани и Владимире - Кухонные фартуки от производителя",
      meta: [
        { name: 'description', hid: 'description', content: 'Стеновые панели из жидкого камня на заказ. Цены производителя.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/стеновые-панели.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Стеновые панели и фартуки",
          page_full_name:"Стеновые панели и фартуки из камня",
          gallery:[
            {name:'Темная панель из камня',img:'578'},
            {name:'Розовая стеновая угловая панель для кухни',img:'586'},
            {name:'Угловая панель-фартук с полкой',img:'584'},
            {name:'Светлая стеновая панель для кухни по индивидуальному заказу',img:'566'},
            {name:'Фигурная стеновая панель для кухни',img:'564'},
            {name:'Фигурная стеновая панель для кухни',img:'563'}
          ],
          showModalCallBack:false,
          modalMiniGalleryBlock:false,
          showSlide:-1,
          showBreadcrumbsMobile:false,
        }
    },
    methods: {
        closeModalCallBack() {
          this.showModalCallBack = false;
        },
        modalMiniGallery(index) {
          this.modalMiniGalleryBlock = true;
          this.showSlide = index;
        },
         prevSlide() {
          this.showSlide = ((this.showSlide + 5)%6);
        },
        nextSlide() {
          this.showSlide = ((this.showSlide + 1)%6);
        },
    }
}
</script>
<style scoped>
.send-button {float: left;margin-top: 15px;}
h2, .h2 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
.in-page-block .created-from {
    margin-left: 0px!important;
    background: #f0f6f6;
    padding: 15px 20px;
    text-align: center;
    margin: 40px -15px;
    -ms-transform: skewX(45deg);
    -webkit-transform: skewX(45deg);
    transform: skewX(45deg);
    width: 110%;
}
.in-page-block .created-from .inner {
    -ms-transform: skewX(-45deg);
    -webkit-transform: skewX(-45deg);
    transform: skewX(-45deg);
}
.in-page-block .created-from h2 {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    margin-right: 5px;
    padding-top:0;
}
.in-page-block .created-from img {
    display: inline-block;
    float: none;
    margin: 0 5px;
}
.in-page-block .created-from a {
    margin-left: 0;
    margin-right: 0;
}
.in-page-block .created-from .button {
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
    color: white;
    border: 2px solid #9f4000;
    background: #9f4000;
    border-radius: 15px;
    padding: 7px 30px;
    margin-left: 5px;
    vertical-align: middle;
    -webkit-box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);
    box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);
}
.in-page-block .created-from .button:hover {
    color: white;
    text-decoration: none;
    background: #ab5219;
}
hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
}

.modal-gallery {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background: #333;
}
.slider-button {
    top: 50%;
}
.modal-content{
  position: relative;
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  height: 100vh;
}
.modal-gallery img{
  z-index: 11;
  width: auto;
  max-width: 100%;
  padding-top: 120px;
  margin-left: auto;
  display: block;
  margin-right: auto;
  max-height: 90vh;
}
.modal-gallery span{
  display: inline-block;
  z-index: 11;
}
.close-modal-gallery, .modal-gallery-count {float: right;}
.close-modal-gallery:hover, .modal-gallery-count,.modal-gallery-name {color: #fff;}
.slider-button {color: #ababab !important;}
.slider-button:hover {color: #fff !important;}
.close-modal-gallery{
  float: right;
  margin-top: 50px;
  padding: 10px;
  font-size: 30px;
  cursor:pointer;
  color: #ababab;
}
.modal-gallery-name, .modal-gallery-count {padding-top: 5px;}
@media (max-width: 991px) {
  .in-page-block .created-from {
      -ms-transform: skewX(0deg);
      -webkit-transform: skewX(0deg);
      transform: skewX(0deg);
      margin: 40px 0;
      width: 100%;
  }
  .in-page-block .created-from .inner {
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    padding: 0;
    text-align: left;
  }
  .in-page-block .created-from h2 {
    display: block;
    margin-bottom: 10px;
  }
  .in-page-block .created-from img {
    margin: 0;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .in-page-block .created-from a {
    margin-left: 10px;
    margin-right: 10px;
  }
  .in-page-block .created-from .button {
    display: block;
    width: 150px;
    text-align: center;
  }
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px; max-width: 120%;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
  .content-zakaz {margin-bottom: 20px;}
  .slider-button-left {left: -10%;}
}
</style>
