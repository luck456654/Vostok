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
                <nuxt-link to="/каталог/подоконники.html" append itemprop="item">
                  <span itemprop="name">Подоконники из камня</span>
                </nuxt-link>
                <meta itemprop="position" content="3" />
            </li>
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="4" />
            </li>
          </ol>
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать подоконник</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">


<p>Акриловый камень состоит из природных компонентов: минеральных наполнителей различной фракции, акриловых смол и пигментных добавок. Он относится к числу искусственных композитных материалов, так как производится в специальных условиях, а не формируется естественным путём. Благодаря отличным эстетическим и эксплуатационным свойствам, подоконники из акрилового камня пользуются высокой популярностью. Особенно актуальны они в оформлении оконных проёмов со сложными формами и значительными размерами.</p>


<h2>Преимущества и минусы акриловых подоконников</h2>

<p>Владельцы помещений, ценящие эстетику в сочетании с практичностью, останавливают свой выбор на изделиях из искусственного камня. Акриловые подоконники обладают целым рядом достоинств:</p>
<ul>
    <li>Из акрилового камня могут изготавливаться подоконники любых форм и размеров, в том числе с изогнутыми контурами, сложными элементами, резной кромкой, объединённые с мебельными столешницами и другие.</li>
    <li>Структура материала может имитировать натуральный камень или обладать уникальной текстурой благодаря включению различных минеральных наполнителей с неоднородной фракцией и смешиванию пигментов.</li>
    <li>Акриловые смолы способствуют формированию непористой поверхности. Влага не проникает внутрь подоконника и не разрушает его целостность. На идеально гладкой плите не скапливается грязь, и не размножаются микроорганизмы.</li>
    <li>Изделия из акрила, предназначенные для оформления оконных проёмов, устойчивы к негативному воздействию внешних факторов. Они не теряют своих свойств от перепада температур, ультрафиолетовых лучей и при попадании влаги. Хорошо переносят нагрузки и не деформируются под влиянием агрессивных сред.</li>
    <li>Пользователи не обременены сложным уходом. Достаточно протереть поверхность влажной губкой. С целью достижения идеальной чистоты могут использоваться мягкие моющие средства.</li>
    <li>Акриловые подоконники обладают высоким уровнем ремонтопригодности. Трещины, сколы и другие дефекты легко устраняются путём склеивания, нанесения состава с аналогичными составляющими, шлифования и полировки.</li>
    <li>Поверхности подоконников могут быть матовыми, глянцевыми или полуглянцевыми, они хорошо сочетаются с оконными конструкциями с любым оформлением.</li>
</ul>
<p>Подоконники из акрилового камня практически не имеют недостатков. Однако следует учитывать технологические особенности: необходимо использовать подложку из влагостойких материалов. Изделия, предназначенные для установки внутри помещений, не рекомендуется эксплуатировать под открытым небом.</p>
<h2>Из чего складывается цена на подоконник из акрилового камня</h2>
<p>Стоимость конструкций зависит от нескольких основополагающих параметров:</p>
<div class="check-list">
<ul>
    <li> <span>ширины, длины, толщины;</span>
    <img src="https://стильный-камень.рф/calc/img/sill.jpg" />
    <div style="clear:both;"></div>
    <hr>
    </li>
<KamenAkril2 />

    <li> <span>конфигурации кромки.</span>
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
    <hr></li>


</ul>
</div>
<p>В нашей компании можно заказать подоконники из акрилового камня достаточно дёшево – ниже среднерыночного уровня цен.</p>
<h2>Как заказать подоконник</h2>
<p>Чтобы выгодно купить подоконник из акрилового камня у нас, необходимо разместить заявку, пригласить специалиста на объект для проведения замеров, заказать изготовление, воспользоваться услугой установки и порадоваться успешному результату.</p>
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
<h2>Преимущества заказа изделия у «Стильного камня»</h2>
<p>Компания «Стильный камень» осуществляет деятельность на рынке в течение многих лет и накопила значительный опыт, поэтому может предложить выгодные условия и продукцию, соответствующую наиболее
притязательным требованиям покупателей.</p>
<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» реализует свою продукцию на территории Москвы, Рязани, во Владимире и прилегающих
областях.</p>

</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import KamenAkril2 from "~/components/KamenAkril2.vue";
export default {
   head() {
      return{
        title:"Изготовление и установка подоконников из акрилового камня в Москве, Рязани и Владимире",
        meta: [
          { name: 'description', hid: 'description', content: 'Подоконники из акрила от производителя на заказ. Подробности на сайте.'}
        ],
        link: [
        { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/подоконники/подоконники-из-акрила.html'},
        ]
      };
    },
     components: {
      Proizvodim,
      ModalCallBack,
      CallBackInPage,
      KamenAkril2,
    },
    data() {
        return {
          page_name:"Подоконники из кварцевого агломерата",
          page_full_name:"Подоконники из кварца",
          showModalCallBack:false,
          to_work:[
            {name:"Вы <br>звоните нам",disc:"Вы звоните нам",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_03"},
            {name:"Выезд <br>замерщика",disc:"Выезд замерщика",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_04"},
            {name:"Подписание <br>договора",disc:"Подписание договора",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_05"},
            {name:"Проведение <br>работ",disc:"Проведение работ",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_06"},
            {name:"Мы <br>монтируем",disc:"Мы монтируем",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_07"},
          ],
          kromka :[],
          slide1Slider:0,
          slide2Slider:1,
          slide3Slider:2,
          long1:null,
          showBreadcrumbsMobile:false,
        }
    },
    async mounted() {
        const kr = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_plintus_kromka.php?data=kromka_acril_new`
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

    },
}
</script>
<style scoped>
h2, .h2, h3, .h3 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.check-list ul li:before {content: "\2713"; color: #f90;}
.send-button {float: left;margin-top: 15px;}
.bottom-box-img {left: -15px;position: relative;}
.send-button {float: left;margin-top: 15px;}
.to-form {
  margin-bottom: 40px;
  margin-top: -20px;
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
  background: #000000bb;
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
  color:#fff;
  display: inline-block;
  z-index: 11;
}
.close-modal-gallery, .modal-gallery-count {float: right;}
.close-modal-gallery{
  float: right;
  margin-top: 50px;
  padding: 10px;
  font-size: 30px;
  cursor:pointer;
}
.modal-gallery-name, .modal-gallery-count {padding-top: 5px;}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .curousel-palitra-slider {margin-right: 0;margin-bottom: 10px;}
  .curousel-palitra-slider .slider-button-right {
    left: calc(100% - 15px);
  }
  .content-zakaz {padding: 5px 20px;font-size: 12px;margin-bottom: 10px;margin-top: 10px;min-width: 128px;}
  .curousel-palitra .item a span {font-size: 12px}
  a.link-gal {margin-bottom: 10px;}
  .slider-button-left {left: -10%;}
  .no-mobile {display: none;}
}
@media (max-width: 380px){
  .content-zakaz {padding: 5px 15px;}
}
</style>
