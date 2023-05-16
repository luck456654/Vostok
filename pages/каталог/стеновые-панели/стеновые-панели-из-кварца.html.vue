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
                <nuxt-link to="/каталог/стеновые-панели.html" append itemprop="item">
                  <span itemprop="name">Стеновые панели и фартуки </span>
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
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать панель</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
<br>

<p>Кварцевые монолитные панели – быстрый способ эстетично оформить неровные и неоштукатуренные стены.
Изделия изготавливают из искусственного камня, который состоит из натуральной кварцевой крошки и полиэфирной смолы.
Модифицированные полимеры в составе агломерата придают материалу пластичность наряду со стабильной жесткостью,
что обуславливает его практичность и долговечность в эксплуатации.</p>
<p>Кварцевые стеновые панели отлично вписываются в любой интерьер – это роскошный материал для отделки горизонтальных
и вертикальных поверхностей. На выбор клиента – около 200 образцов искусственного камня, представленных в коллекциях.</p>

<h2>Предложения для покупателей</h2>

<p>Стеновые панели из кварцевого агломерата можно заказать в неограниченном количестве и любых размеров.
Клиент может выбрать изделия из сертифицированного кварца мировых брендов, таких как <strong>Santa Margeritha, Avant Quartz, Caesarstone, Silestone</strong>.</p>
<p style="margin-bottom: 0;">Каждый покупатель нашего магазина получает:</p>
<ul style="margin-top: 5px;">
  <li>Гарантию 3 года на все изделия.</li>
  <li>Качественную доставку по регионам РФ.</li>
  <li>Точное соблюдение сроков изготовления по договору.</li>
  <li>Профессиональное выполнение замеров и монтажа.</li>
  <li>Сервисное обслуживание установленных нашей компанией изделий.</li>
</ul>
<h2>Свойства кварцевых стеновых панелей</h2>

<p>Большое количество минеральных компонентов в кварцевом агломерате обуславливает высокие
эстетические качества стеновых панелей. Материал по внешнему виду трудно отличить от натурального.
Мы можем изготовить панель во всю стену без видимых швов или отдельные элементы, которые используют
в интерьере для акцентирования ниш, отделки кухонного фартука и др. Толщина изделий составляет 10-12 мм.</p>
<p style="margin-bottom: 0;">Свойства стеновых кварцевых панелей:</p>
<ul style="margin-top: 5px;">
  <li>простой уход – панели моют водой, чистят абразивными средствами, обрабатывают антимикробными и хлорсодержащими веществами без последствий;</li>
  <li>эстетичность – фактура натурального камня придает особый шарм помещению;</li>
  <li>прочность и долговечность;</li>
  <li>ремонтопригодность – трещины, сколы устраняются заполнением специальным клеем.</li>
</ul>
<p>Чтобы сделать стены абсолютно ровными, достаточно установить панели из кварца по аналогии с монтажом гипсокартонных листов, но без утомительной
затирки швов и регулярного окрашивания. Кварцевые панели только моют.</p>

<p class="proximait">Мы изготавливаем и устанавливаем стеновые панели из кварца на территории Московской, Рязанской и Владимирской областях.</p>
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
      title:"Изготовление стеновых панелей их кварца в Москве, Рязани и Владимире - Кухонный фартук из кварцевого агломерата.",
      meta: [
        { name: 'description', hid: 'description', content: 'Стеновые панели из кварца от производителя на заказ.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/стеновые-панели/стеновые-панели-из-кварца.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Стеновая панель из кварцевого агломерата",
          page_full_name:"Стеновые панели из кварца",
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
.content-zakaz {margin-bottom: 0px;}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
