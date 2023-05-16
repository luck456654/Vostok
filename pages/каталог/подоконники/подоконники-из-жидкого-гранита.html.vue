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


<p>Роскошные подоконники из жидкого гранита станут великолепным украшением вашего интерьера и обеспечат высокий уровень гигиеничности. Этот инновационный материал обладает неоспоримыми достоинствами, главными из которых являются неограниченный срок эксплуатации и безупречный внешний вид. Наша компания предлагает полный спектр услуг по изготовлению подоконников из жидкого гранита на заказ в регионе городов Москва, Владимир, Рязань.</p>

<h2>Преимущества подоконников из жидкого камня</h2>

<p>Благородный вид и высокие эксплуатационные характеристики определяют широкую сферу применения жидкого гранита. Благодаря своим свойствам он активно используется для отделки помещений, изготовления кухонной мебели, подоконников и столешниц. Главные достоинства материала в том, что он:</p>

<ul>
<li>абсолютно безопасен для человека;</li>
<li>инертен к большинству видов химических и биологических веществ, в том числе к пищевым красителям;</li>
<li>влагоустойчив;</li>
<li>прочен и устойчив к физическим воздействиям;</li>
<li>выдерживает широкий диапазон температур;</li>
<li>сохраняет безупречный внешний вид до конца срока эксплуатации.</li>
</ul>
<p>При нарушении целостности изделия, появлении сколов, глубоких царапин подоконник можно быстро восстановить, используя специальную мастику и шлифовальный ручной станок.</p>
<p>Столешницы из жидкого гранита гигиеничны за счёт гладкой монолитной поверхности, с которой пыль, жир и другие загрязнения удаляются без следа. Это свойство материала используется при отделке медицинских учреждений и помещений с повышенными требованиями к чистоте.</p>
<h2>Цена подоконников из жидкого гранита</h2>
<p>На стоимость готового подоконника из жидкого камня влияют следующие факторы:</p>
<ul>
<li><span>Цветовая палитра. На выбор заказчика в каталоге компании представлены 9 разных серий с набором холодных и тёплых оттенков в каждой из них. Клиент может выбрать любой цвет из понравившейся коллекции, посетив раздел «Палитра».</span>
  <div style="margin-top: 10px;">
    <KamenGranit />
    <div class="btn-center" style="margin-top: -20px;">
      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
        <button class="content-zakaz">Смотреть всю палитру</button>
      </a>
    </div>
  </div>
        <hr>
</li>
<li><span>Форма торцевых кромок. Вы можете выбрать лаконичный стиль с простыми кромками или использовать в интерьере более сложные варианты, которые обойдутся несколько дороже.</span>
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
<hr>
</li>

<li><span>Размер столешницы – длина, ширина, толщина материала.</span>
<img src="https://стильный-камень.рф/calc/img/sill.jpg" />
    <div style="clear:both;"></div>
    <hr>
</li>


</ul>


<h2>Как заказать подоконник</h2>
<p>Покупка подоконника из жидкого камня у нас максимально выгодна, поскольку мы предлагаем не только приятные цены, но и безупречное качество продукции. Чтобы заказать такой подоконник, позвоните в один из офисов нашей компании и пригласите мастера для замера.</p>
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
<h2>Преимущества заказа в компании «Стильный камень»</h2>
<p>Мы уделяем большое внимание не только качеству производимых изделий, но и организации работы с клиентами. Многолетний опыт и высокая конкуренция научили нас ценить каждого заказчика, активно работать над расширением ассортимента и гибко реагировать на изменения потребительского спроса.</p>
<Pochemu/>
<h2>Охват городов</h2>
<p class="proximait">Офисы компании расположены в Москве, Рязани и Владимире. Жители этих городов и прилегающих областей могут без ограничений пользоваться нашими услугами и заказывать подоконники из жидкого гранита по самым привлекательным ценам. </p>

</div></div></div>
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
        { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/подоконники/подоконники-из-жидкого-гранита.html'},
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
          page_name:"Подоконники из жидкого гранита",
          page_full_name:"Подоконники из жидкого камня",
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

    },
}
</script>
<style scoped>
h2, .h2, h3, .h3 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.curousel-palitra-slider {margin-top: 10px;}
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
