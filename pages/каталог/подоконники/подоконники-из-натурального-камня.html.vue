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
            <h1>{{page_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать подоконник</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">


<p>Изделия из натурального камня обладают рядом достоинств, главными из которых являются долговечность, благородная роскошь и высокие эксплуатационные свойства. В качестве материала для столешниц и подоконников используются цельные пласты природного мрамора, оникса, гранита. Эти породы хорошо поддаются обработке и обеспечивают изделиям безупречный внешний вид. Наша компания предлагает весь спектр услуг по изготовлению подоконников и столешниц из натурального камня. Мы производим конструкции любой сложности по доступным ценам с гарантией качества не менее 3 лет.</p>

<h2>Преимущества подоконников из натурального камня</h2>

<p>Новые технологии обработки и современное оборудование позволяют изготавливать из природного камня изделия любой сложности. В производстве учитывают свойства материала, поэтому подоконники и столешницы получаются без изъянов. Наша компания уделяет особое внимание качеству сырья, что априори исключает производственный брак.</p>
<p>Натуральный камень издревле известен как долговечный и надёжный материал, обладающий неоспоримыми достоинствами:</p>
<ul>
<li>очень прочный ‒ даже тонкая пластина способна выдержать солидный вес;</li>
<li>инертный к любым химикатам и органике;</li>
<li>экологически чистый, не влияющий на здоровье человека;</li>
<li>выдерживает резкие температурные перепады;</li>
<li>влагоустойчивый;</li>
<li>гармонично вписывается в интерьер, привносит в помещение элемент роскоши и элитарности.</li>
</ul>
<p>Уход за натуральным камнем максимально прост – достаточно регулярно протирать пыль, а при необходимости обрабатывать поверхность антибактериальными моющими средствами.</p>
<h2>Цена подоконников из натурального камня</h2>
<p>При расчёте стоимости столешницы или подоконника учитывают:</p>
<ul>
<li>1.	Размер изделия – длину, ширину, толщину материала.</li>
<li>2.	Имя производителя. Заказчику следует определиться с видом материала для планируемого изделия. Бюджетный вариант представлен моделями из гранита, а самый дорогой подоконник изготавливается из оникса или мрамора.</li>

<li>3.	Цветовую палитру. Клиенту предоставляется 9 коллекций, в каждой из которых имеется не менее 10 оттенков. Подобрать подходящую гамму для своего интерьера вы можете в разделе «Палитра».</li>
<li>4.	Форму торцевых кромок. В офисе компании вам предложат несколько вариантов оформления подоконника или столешницы, из которых вы сможете выбрать оптимальный по стоимости.</li>

</ul>


<h2>Как заказать подоконник</h2>
<p>Заказ на подоконник или кухонную столешницу из натурального камня можно оформить в любом офисе компании. Мы изготавливаем изделия любой сложности – от единичных экземпляров до больших партий. Покупка подоконника из натурального камня у нас достаточно выгодна – мы получаем высококачественное сырьё напрямую от производителей, что позволяет формировать максимально низкие цены.</p>
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
<p>В условиях высокой конкуренции наша компания способна удовлетворить требования самого взыскательного покупателя. Помимо широкого ассортимента и отменного качества изделий мы предлагаем безупречный сервис и оперативное обслуживание независимо от объёма партии.</p>
<h2>Охват городов</h2>
<p>Желающие сделать заказ на изготовление столешниц и подоконников из натурального камня могут посетить любой из офисов, расположенных в Москве, Рязани и Владимире. </p>
<p class="proximait">Мы без ограничений обслуживаем всю территорию Московской, Владимирской, Рязанской областей, предлагая частным лицам и коммерческим организациям лучшее сочетание цены и качества.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
export default {
   head() {
      return{
        title:"Изготовление и установка подоконников из натурального камня в Москве, Рязани и Владимире",
        meta: [
          { name: 'description', hid: 'description', content: 'Подоконники из натурального камня от производителя на заказ. Цены, палитра, наши работы на сайте.'}
        ],
        link: [
        { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/подоконники/подоконники-из-натурального-камня.html'},
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
          page_name:"Подоконники из натурального камня",
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
