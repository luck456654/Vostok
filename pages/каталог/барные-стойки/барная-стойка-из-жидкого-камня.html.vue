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
                <nuxt-link to="/каталог/барные-стойки.html" append itemprop="item">
                  <span itemprop="name">Барные стойки</span>
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
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать барную стойку</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
                  <div  class="top-img-row">
                    <div class="col-xs-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg1.webp"  alt="Светло-коричневая барная стойка">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg1.jpg"  alt="Светло-коричневая барная стойка">
                        <img src="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg1.jpg"  alt="Светло-коричневая барная стойка">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg2.webp"  alt="Стильный серая барная стойка">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg2.jpg"  alt="Стильный серая барная стойка">
                        <img src="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg2.jpg"  alt="Стильный серая барная стойка">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg3.webp"  alt="Барная стойка песочного цвета">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg3.jpg"  alt="Барная стойка песочного цвета">
                        <img src="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg3.jpg"  alt="Барная стойка песочного цвета">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg4.webp"  alt="Белая барная стойка изогнутой формы">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg4.jpg"  alt="Белая барная стойка изогнутой формы">
                        <img src="https://стильный-камень.рф/pictures/bar/barnaya-stoika-zg4.jpg"  alt="Белая барная стойка изогнутой формы">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/барные-стойки/галерея-барных-стоек.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
       </div>
<p>Жидкий камень относится к числу наиболее востребованных композитных материалов, используемых в оформлении предметов интерьера. Высокую популярность он завоевал благодаря хорошим декоративным и эксплуатационным свойствам в сочетании с доступной стоимостью. Собственно, термин «жидкий камень» подразумевает не конечный продукт, а технологию изготовления. Жидкая масса, включающая львиную долю минеральных компонентов и немного смол и пигментов, наносится на матрицу.</p><p>В результате получается изделие, по своим декоративным свойствам напоминающее натуральный камень. Достаточно часто используются мелкие фракции гранита, поэтому синонимом выступает термин «жидкий гранит». Эстетичный внешний вид, отличные эксплуатационные характеристики, возможность создания изделий со сложными геометрическими формами определили востребованность материала в оформлении мебели. Требования к дизайну барных стоек очень высоки, а жидкий камень относится к числу немногих материалов, способных удовлетворить запросы наиболее притязательных эстетов.</p>

<h2>Преимущества барных стоек из жидкого камня</h2>

<p style="margin-bottom: 0;">Жидкий камень позволяет создавать изделия, не уступающие по эксплуатационным характеристикам и декоративным свойствам природным аналогам. Барные стойки с рабочей поверхностью, выполненной по технологии нанесения композитного состава на рабочую плоскость, обладают целым рядом достоинств:</p>
<ul style="margin-top: 5px;">
    <li>оригинальной текстурой и цветом;</li>
    <li>устойчивостью к влаге и химическим веществам;</li>
    <li>сохранением свойств под воздействием перепада температур;</li>
    <li>неизменностью цветовых характеристик под влиянием ультрафиолетовых лучей;</li>
    <li>высокой механической прочностью;</li>
    <li>ремонтопригодностью;</li>
    <li>значительным сроком эксплуатации;</li>
    <li>простотой в уходе и др.</li>
</ul>
<p>Изделия из жидкого камня приспособлены к сложным условиям эксплуатации. Барные стойки относятся к числу предметов интерьера, подвергающихся риску порчи в силу разных причин. Случайно пролитые напитки, значительные нагрузки в результате воздействия посетителей, обилие располагаемых предметов с острыми гранями – лишь краткий перечень этих рисков. Однако прочные поверхности из композитного материала способны вынести любые «экстримы».</p>
<h2>Из чего складывается цена на барную стойку из жидкого камня</h2>

<p style="margin-bottom: 0;">Стоимость барной стойки зависит от множества параметров. Заказывая такую конструкцию, потенциальные владельцы должны учитывать ряд основополагающих критериев:</p>
<ul style="margin-top: 5px;">
    <li>площадь используемого камня;</li>
    <li>декоративные характеристики (в разделе <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">«Палитра»</a> можно выбрать желаемый декор камня и получить информацию о стоимости материала);
   <KamenGranit />
         <div class="btn-center">
                <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                  <button class="content-zakaz">Смотреть всю палитру</button>
                </a>
              </div>
</li>
    <li>конфигурацию торцевых кромок (ведь завершённость изделию из жидкого камня придаёт финишная обработка профиля).
    <div class="row curousel-palitra curousel-palitra-slider" v-if="$store.state.ismobile == 'smartphone'">
                <div class="col-xs-6 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                  <div  v-if="index==slide1SliderMob">
                    <a>
                      <picture>
                          <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span>{{item.name}}</span>
                    </a>
                    </div>
                </div>
                <div class="col-xs-6 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                    <div v-if="index==slide2SliderMob">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2"  :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                    </div>
                </div>
                <button class="slider-button slider-button-left"  @click="prevSlideSliderMob()"><span>&lt;</span></button>
                <button class="slider-button slider-button-right" @click="nextSlideSliderMob()"><span>&gt;</span></button>
              </div>
              <div class="row curousel-palitra curousel-palitra-slider" v-else>
                <div class="col-xs-4 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                  <div  v-if="index==slide1Slider">
                    <a>
                      <picture>
                          <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span>{{item.name}}</span>
                    </a>
                    </div>
                </div>
                <div class="col-xs-4 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                    <div v-if="index==slide2Slider">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2"  :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                    </div>
                </div>
                <div class="col-xs-4 item" style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                  <div  v-if="index==slide3Slider">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                   </div>
                </div>
                <button class="slider-button slider-button-left"  @click="prevSlideSlider()"><span>&lt;</span></button>
                <button class="slider-button slider-button-right" @click="nextSlideSlider()"><span>&gt;</span></button>
              </div>
              <div class="btn-center">
                <a href="https://стильный-камень.рф/каталог/каталог-кромок.html">
                  <button class="content-zakaz">Смотреть все кромки</button>
                </a>
              </div>
    </li>
</ul>
<h2>Как заказать барную стойку</h2>
<p>Купить барную стойку из жидкого камня у нас достаточно выгодно, поскольку наша компания является производителем, использующим передовые технологии и уделяющим первоочередное внимание оптимизации затрат с целью предоставления покупателям приемлемых условий. Определиться со стоимостью можно в соответствии с параметрами изделия в разделе <a href="[[~757]]">«Калькулятор»</a>. Заказ можно осуществить онлайн.</p>
<div class="to-work">
  <div class="row">
    <h3>Как мы работаем</h3>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="to-work_block" v-for="(item,index) in to_work" :key="index" >
        <picture>
                          <source type="image/webp" :srcset="item.img+'.webp'" :alt="item.disc">
                          <source type="image/png" :srcset="item.img+'.png'" :alt="item.disc">
                          <img :src="item.img+'.jpg'" :alt="item.disc">
                      </picture>
        <p> <span v-html="item.name"></span> </p>
      </div>
    </div>
  </div>
</div>
<hr>
   <CallBackInPage />
</div>
</div>
<div class="row">
<div class="col-sm-12">
<h3>Преимущества заказа изделия в «Стильный камень»</h3>
<p>Наша компания предлагает воспользоваться целым рядом преимуществ.</p>
<Pochemu/>
<h3>Охват городов</h3>
<p class="proximait">Компания «Стильный камень» изготавливает высококачественные изделия из жидкого камня и осуществляет их монтаж на объектах на территории Москвы, Рязани, Владимира и соответствующих областей.</p>
</div></div>
       </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import KamenGranit from "~/components/KamenGranit.vue";
import Pochemu from "~/components/Pochemu.vue";
export default {
  head() {
    return{
      title:"Изготовление и установка подоконников из жидкого камня в Москве, Рязани и Владимире",
      meta: [
        { name: 'description', hid: 'description', content: 'Подоконники из жидкого гранита от производителя на заказ. Цены, палитра, наши работы на сайте.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/барные-стойки/барная-стойка-из-жидкого-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
      CallBackInPage,
      KamenGranit,
      Pochemu,
    },
    data() {
        return {
          page_name:"Барные стойки  из жидкого гранита",
          page_full_name:"Барные стойки  из жидкого камня",
          to_work:[
            {name:"Вы <br>звоните нам",disc:"Вы звоните нам",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_03"},
            {name:"Выезд <br>замерщика",disc:"Выезд замерщика",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_04"},
            {name:"Подписание <br>договора",disc:"Подписание договора",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_05"},
            {name:"Проведение <br>работ",disc:"Проведение работ",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_06"},
            {name:"Мы <br>монтируем",disc:"Мы монтируем",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_07"},
          ],
          showModalCallBack:false,
          kromka :[],
          slide1Slider:0,
          slide2Slider:1,
          slide3Slider:2,
          slide1SliderMob:0,
          slide2SliderMob:1,
          long1:null,
          showBreadcrumbsMobile:false,
        }
    },
    async mounted() {
         const kr = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_plintus_kromka.php?data=kromka_acril`
            )
            .then(arr => {
                this.kromka  = arr;
                this.long1 = arr.length;
            })
            .catch(err => {
                error(err);
            });
    },
    methods: {
      closeModalCallBack() {
          this.showModalCallBack = false;
        },
      prevSlideSlider() {
          const long=this.long1;
          this.slide1Slider = ((this.slide1Slider + long - 1)%long);
          this.slide2Slider = ((this.slide2Slider + long - 1)%long);
          this.slide3Slider = ((this.slide3Slider + long - 1)%long);
        },
        nextSlideSlider() {
          const long=this.long1;
          this.slide1Slider = ((this.slide1Slider + 1)%long);
          this.slide2Slider = ((this.slide2Slider + 1)%long);
          this.slide3Slider = ((this.slide3Slider + 1)%long);
        },
        prevSlideSliderMob() {
          const long=this.long1;
          this.slide1SliderMob = ((this.slide1SliderMob + long - 1)%long);
          this.slide2SliderMob = ((this.slide2SliderMob + long - 1)%long);
        },
        nextSlideSliderMob() {
          const long=this.long1;
          this.slide1SliderMob = ((this.slide1SliderMob + 1)%long);
          this.slide2SliderMob = ((this.slide2SliderMob + 1)%long);
        },

    },
}
</script>
<style scoped>
.send-button {float: left;margin-top: 15px;}
h2, .h2 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px; max-width: 120%;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
}
</style>
