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
<h2>Барные стойки из акрила</h2>

<p>Барные стойки из акрилового агломерата – роскошный и практичный элемент любого кафе, ресторана и для квартиры. Изделия отличаются износостойкостью,
не боятся влаги. За глянцевой поверхностью легко ухаживать: жир, остатки пищи и алкоголя смываются обычным моющим средством. Акриловые поверхности
гигиеничны и безопасны для человека. Мы изготовим по вашим эскизам и установим барную стойку в короткие сроки и по приемлемым ценам. На ваш выбор –
14 коллекций акрилового камня разных оттенков, текстур и структуры.</p>

<h2>Преимущества для клиентов</h2>

<p>Изготавливаем барные стойки из акрилового агломерата без ограничений размеров и количества экземпляров. В нашем каталоге можно
выбрать готовые решения по сниженным ценам.</p>
<p>Мы используем в производстве только сертифицированное сырье и передовую технологию, которая позволяет экономить на процессе изготовления
полотна без потери качества.</p>
<p style="margin-bottom: 0px;">Своим клиентам мы предоставляем:</p>
<ul style="margin-top: 5px;">
  <li>высокое качество изделий и монтажа;</li>
  <li>доставку в регионы РФ;</li>
  <li>гарантию на все изделия – 3 года;</li>
  <li>полную информационную поддержку;</li>
  <li>сервисное обслуживание и ремонт установленных нашей компанией изделий.</li>
</ul>
<h2>Свойства акрилового камня</h2>

<p style="margin-bottom: 0px;">В отношении изготовления барных стоек акриловый камень – лучшее решение с точки зрения практичности и гигиены.
Свойства искусственного камня таковы:</p>
<ul style="margin-top: 5px;">
  <li>он легко очищается обычными моющими средствами;</li>
  <li>не впитывает влагу и запахи;</li>
  <li>не реагирует на хлорку и другие антибактериальные вещества;</li>
  <li>не окрашивается пищевыми и другими красителями;</li>
  <li>покрытие устойчиво к истиранию и физическим воздействиям;</li>
  <li>поддается ремонту: сколы, трещины, царапины просто заполняют составом и шлифуют до исчезновения неровности;</li>
  <li>устойчив к физическим воздействиям;</li>
  <li>отличается эстетичным внешним видом: за роскошной барной стойкой неизбежно будут собираться посетители.</li>
</ul>
<p>Акриловый агломерат изготавливается из безвредных для человека полиэфирных гранул и природной каменной крошки.
Материал соответствует стандартам безопасности и экологичности, принятым в РФ.</p>
<p>Мы подготовим рабочее место бармена в полном объеме: вырежем отверстия для установки раздаточных аппаратов для напитков
и другого оборудования, отполируем поверхность для хорошего скольжения кружек, ниши для размещения посуды и электроприборов.</p>
<p class="proximait">Мы изготавливаем и устанавливаем барные стойки из акрила на территории Московской, Рязанской и Владимирской областях.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Изготовление барных стоек для кухни из акрила на заказ в Москве, Рязани и Владимире - Барные стойки из акрилового камня.",
      meta: [
        { name: 'description', hid: 'description', content: 'Барные стойки из акрилового камня на заказ. Подробности на сайте.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/барные-стойки/барные-стойки-из-акрила.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Барные стойки из акрилового камня",
          page_full_name:"Барная стойка из акрила",
          showModalCallBack:false,
          showBreadcrumbsMobile:false,
        }
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

@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
