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
                <nuxt-link to="/каталог/столы.html" append itemprop="item">
                  <span itemprop="name">Столы из камня</span>
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
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
<h2>Столы из кварцевого агломерата</h2>

<p>Столы из кварцевого агломерата – альтернатива тяжелой и супердорогой мебели из натурального камня, но лишены недостатков последнего.
Они уместны в заведениях общественного питания, коммерческих организациях и на домашней кухне. Совмещают в себе эстетичность, прочность
и долговечность. Кварцевые столы гигиеничны и отвечают требованиям безопасности, принятым в РФ.</p>

<h3>Текстура и цвета столов</h3>
<KamenKvartcz />
<div class="btn-center">
  <nuxt-link to="">
    <button class="content-zakaz">Смотреть всю палитру</button>
  </nuxt-link>
</div>
<p>На выбор клиента – более 700 образцов искусственного камня различных оттенков и фактур. По индивидуальному заказу мы делаем мебель
любой ширины, длины, в неограниченном количестве.</p>
<h3>Примеры изготовленных столов</h3>
 <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                    <div class="row">
                            <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr" :key="index" v-show="index+1<=firstIndex">
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/pictures/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/pictures/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                                  <div class="row modal-stone-row">
                                    <div class="modal-stone-prev" style="color: transparent;">&#8592;</div>
                                    <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/pictures/'+item.url" class="modal-stone-img"></div>
                                    <div class="modal-stone-next"style="color: transparent;">&#8594;</div>
                                  </div>
                                  <span class="title-modal-stone"> {{item.name}}</span>
                              </div>
                        </div>
                    </div>

                    <div class="open2" @click="changeFirstIndex()" v-if="firstIndex==6&&arr.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnFirstIndex()" v-else-if="firstIndex>6&&arr.length>6" ><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
</div>
<h2>Предложения для покупателей</h2>

<p>В производстве изделий из искусственного кварца используется только сертифицированное сырье известных торговых марок:
<strong>PlazaStone, Santa Margeritha, Avant Quartz, Caesarstone, Silestone</strong> и другие.</p>

<p>Мы используем инновационную технологию,
которая позволяет экономить на ресурсах и предлагать клиентам лучшие цены. В нашем каталоге вы найдете готовые решения для офиса,
дома, кафе и ресторана.</p>
<p style="margin-bottom: 0px;">Преимущества для клиентов:</p>
<ul style="margin-top: 5px;">
  <li>Даем гарантию 3 года на все изделия нашего магазина.</li>
  <li>Доставляем товар во все регионы РФ.</li>
  <li>Обеспечиваем высокое качество изделий и услуг.</li>
  <li>Предоставляем полную информационную поддержку.</li>
</ul>
<h2>Характеристики кварцевых столов</h2>

<p>Фактура кварцевого стола ничем не отличается от поверхности мебели, изготовленной из натурального камня.
Этого достигают за счет использования в сырье значительного количества минеральных компонентов. Результат –
высокая прочность поверхности и большая плотность материала.</p>
<div class="clearfix ossobennosti osqwst icons-row">
  <div class="row">
    <div class="item" v-for="(item,index) in osob" :key="index">
      <div class="img" :class="'img-'+(index+1)"></div>
      <span>{{item.name}}</span>
    </div>
  </div>
</div>
<p>Кварцевые столы с точки зрения гигиены идеально подходят для сетей общественного питания. Глянцевая, нестатичная
поверхность не оставляет шансов жиру, грязи и пыли. Уход за такими столами минимальный: достаточно протереть столешницу
влажной салфеткой и отполировать насухо. Кварц не реагирует на хлорсодержащие вещества и другие антибактериальные составы,
не поддается коррозии и не впитывает посторонних запахов. Соки, алкоголь, пищевые красители не оставляют следов на гладкой поверхности.
Столы не нужно накрывать скатертью, они и без украшений смотрятся роскошно.</p>
<p style="margin-bottom: 0px;">Достоинства кварцевых столов:</p>
<ul style="margin-top: 5px;">
  <li>вписываются в любой интерьер;</li>
  <li>химически и биологически инертны;</li>
  <li>обладают относительно низким весом;</li>
  <li>гигиеничны и безвредны;</li>
  <li>ремонтопригодны;</li>
  <li>долговечны и прочны.</li>
</ul>
<p class="proximait">Мы изготавливаем и устанавливаем столы из кварца на территории Московской, Рязанской и Владимирской областях.</p>
</div>
               </div>
            </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import KamenKvartcz from "~/components/KamenKvartcz.vue";
export default {
   head() {
    return{
      title:"Изготовление кварцевых столов на заказ в Москве, Рязани и Владимире - Стол из кварца.",
      meta: [
        { name: 'description', hid: 'description', content: 'Столы из кварцевого агломерата от производителя на заказ.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столы/столы-из-кварца.html'},
      ]
    };
  },
  components: {
    Proizvodim,
    ModalCallBack,
    CallBackInPage,
    KamenKvartcz,
  },
    data() {
        return {
          page_name:"Стол из кварцевого агломерата",
          page_full_name:"Столы из кварца",
          osob:[{name:"Не оставляет пятен",img:"https://стильный-камень.рф/assets/img/osobennost-01.jpg)"},{name:"Простой уход",img:"https://стильный-камень.рф/assets/img/osobennost-02.jpg)"},
                {name:"Износостойкость",img:"https://стильный-камень.рф/assets/img/osobennost-03.jpg)"},{name:"Высокая прочность",img:"https://стильный-камень.рф/assets/img/osobennost-04.jpg)"},
                {name:"Жаростойкость",img:"https://стильный-камень.рф/assets/img/osobennost-05.jpg)"},{name:"Экологичность",img:"https://стильный-камень.рф/assets/img/osobennost-06.jpg)"},
                {name:"Натуральность",img:"https://стильный-камень.рф/assets/img/osobennost-07.jpg)"}],
          firstIndex:6,
          openSuperModal:0,
          showBreadcrumbsMobile:false,          
          showModalCallBack:false,
        }
    },
       async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stol_kvarz`
            )
            .then(arr => {
                return {
                    arr:arr,
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
      changeFirstIndex() {
        this.firstIndex = 1000;
      },
      returnFirstIndex() {
        this.firstIndex = 6;
      },
    },
}
</script>
<style scoped>
  h1, .h1 {
    font-size: 1.3em;
    }
    .send-button {float: left;margin-top: 15px;} 
@media (min-width: 501px) {
    .osqwst .item {width:33.33333333%;}
    .osqwst .item:last-child {margin-left: 33.33333333%;}
}
@media (min-width: 768px) {
    .osqwst .item {width:25%;}
    .osqwst .item:nth-child(5) {margin-left: 12.5%;}
    .osqwst .item:last-child {margin-left: 0;}
}

@media (min-width: 992px) {
    .osqwst .item {width:20%;}
    .osqwst .item:nth-child(6) {margin-left: 30%;}
    .osqwst .item:nth-child(5) {margin-left: 0;}
}

@media (min-width: 1200px) {
    .osqwst .item {width:fit-content;}
    .osqwst .item:nth-child(6) {margin-left: 0;}
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .float-images {top: -10px;}
  .content-zakaz {padding: 5px 20px;font-size: 12px;}
  .osqwst .item {width:50%;}
  .osqwst .item:last-child {margin-left: 25%;}
}
</style>
