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
<br>
<p>Стол – незаменимый предмет интерьера любой кухни и столовой. Он создаёт атмосферу, настроение делает пространство тёплым и гостеприимным. Прочная и аккуратная конструкция стола из жидкого камня идеально впишется в любой стиль и любое помещение и станет его функциональным украшением. Окружающая среда, освещение будут отражаться и преломляться в его каменной поверхности.</p>
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
<p>Дети пролили лимонад на ваш красивый стол из жидкого камня? Не беда. Всё очень легко исправить. За счёт особой технологии производства материал очень прост и удобен в уходе.</p>

<h2>Плюсы и минусы стола из жидкого камня</h2>

<p>Состав в высшей степени экологичен: 80 % – натуральная каменная крошка; остальные 20 % приходятся на полиэстер, чья безопасность подтверждена институтом полимеров, и колеры, благодаря которым столу можно придать любой оттенок.</p>
<p>Красота, простота ухода и безвредность для окружающей среды – далеко не все преимущества стола из этого современного материала. Кроме этого, есть масса технологических плюсов, основными из которых являются:</p>
<ul>
    <li>возможность отлить целое изделие любой формы, создания поворотов и изгибов;</li>
    <li>бесшовная стыковка;</li>
    <li>способность становиться твёрже под воздействием тепла;</li>
    <li>влагостойкость;</li>
    <li>небольшой вес по сравнению с природным минералом;</li>
    <li>ремонтопригодность: небольшие сколы, царапины можно устранить непосредственно на месте;</li>
    <li>прочность и длительная эксплуатация.</li>
</ul>

<h2>Как рассчитать стоимость стола</h2>

<p>Вы можете самостоятельно определить приблизительную стоимость стола из жидкого камня. На неё влияют несколько показателей:</p>
<ul>
    <li>ширина, длина, толщина изделия;</li>
    <li>выбранный вами производитель сырья;</li>
    <li>палитра: жидкий камень, полноценно имитируя эстетические достоинства натурального материала, имеет более широкий выбор цветов. Все возможные варианты оттенков можно посмотреть в разделе <a href="https://стильный-камень.рф/цвет-столешницы/">«Палитра»</a></li>
    <li>используемые торцевые кромки.</li>
</ul>
<p>Невысокая цена по сравнению с природным материалом делает стол из жидкого камня покупкой, доступной для людей с любым уровнем достатка.</p>
<p>Вы можете ознакомиться с прайсом на нашем сайте, а также воспользоваться специальным <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html">калькулятором</a> для удобства расчётов.</p>
<h2>Как заказать стол</h2>
<p>Купить стол из жидкого камня у нас достаточно выгодно. Если вы уже определились с размерами и цветом будущего предмета мебели, сообщите нам об этом и сделайте заказ.</p>
<hr>
<CallBackInPage/>
</div>
<div class="col-sm-12">
<p>Наши специалисты разработают эскиз, соответствующий всем вашим требованиям, и изготовят изделие. Мы также предлагаем своим клиентам услуги доставки.</p>
<h3>Почему у Стильного камня?</h3>
<p>Причин обращения именно в нашу компанию несколько:</p>
<ul>
     <li>Мы работаем качественно, оперативно и недорого.</li>
     <li>Помимо изготовления и доставки осуществляем постпродажный ремонт и обслуживание своих изделий.</li>
     <li>На стол из жидкого камня и другую продукцию компании предоставляется 3-летняя гарантия.</li>
     <li>Все товары «Стильного камня» имеют сертификаты безопасности и гигиеничности.</li>
     <li>Благодаря наличию собственного производства мы не оплачиваем услуги посредников и не включаем эти суммы в цену готовой продукции.</li>
     <li>Помимо розничной продажи «Стильный камень» предлагает партнерство с дополнительными выгодами, информационную и маркетинговую поддержку, а также индивидуальные программы сотрудничества.</li>
     <li>Мы рады помочь в создании собственного выставочного зала с предоставлением всех необходимых образцов.</li>

</ul>
<h2>Охват городов</h2>
<p class="proximait">«Стильный камень» устанавливает свои изделия на территории Москвы, Московской области, где расположено 10 представительств нашей компании.
Кроме этого, мы работаем в Рязани, Владимире и их областях.</p>
</div>
               </div>
            </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
export default {
  head() {
    return{
      title:"Заказать стол из жидкого камня в Москве и области",
      meta: [
        { name: 'description', hid: 'description', content: 'Столы из жидкого камня от производителя на заказ. Большой выбор текстуры, различные ценовые категории.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столы/столы-из-жидкого-камня.html'},
      ]
    };
  },
  components: {
    Proizvodim,
    ModalCallBack,
    CallBackInPage,
  },
    data() {
        return {
          page_name:"Столы из жидкого гранита",
          page_full_name:"Столы из жидкого камня",
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
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stol_granit`
            )
            .then(arr => {
                return {
                    arr:arr,
                    longArr:arr.length,
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
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
