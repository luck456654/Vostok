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
<h2>Барные стойки из кварца</h2>

<p>Кварцевый агломерат – материал, наиболее приближенный по свойствам
и внешнему виду к натуральному камню за счет присутствия в сырье большого
количества минеральных компонентов. Специальные красители придают полотну
нужный оттенок и текстуру. В коллекции нашего магазина представлены около 200 образцов камня.</p>
<p>Барные стойки, выполненные из искусственного кварцевого камня, вписываются в любой интерьер,
будь то ресторан, кофейня, кафе быстрого питания. Гигиеничное и практичное монолитное полотно,
отполированное до зеркального блеска, украшает заведение. За такой стойкой бара неизменно собирается множество посетителей.</p>

<h2>Выгодные предложения для клиентов</h2>

<p>У нас можно купить барные стойки из кварцевого агломерата с установкой под ключ. Чтобы заказать изделие,
предоставьте нам эскиз и размеры или пригласите профессионального замерщика. В каталоге магазина можно выбрать
готовые решения для барных стоек, а также подобрать нужный цвет и текстуру.</p>
<p style="margin-bottom: 0px;">Мы гарантируем клиентам:</p>
<ul style="margin-top: 5px;">
  <li>Высокое качество изделий и услуг по установке – на все барные стойки из кварца даем гарантию 3 года.</li>
  <li>Качественную доставку по регионам РФ.</li>
  <li>Применение сертифицированных материалов в производстве: мы сотрудничаем с известными брендами <strong>Santa Margeritha, Avant Quartz, Caesarstone, Silestone</strong>.</li>
  <li>Разумные цены на изделия по индивидуальным проектам и невысокую стоимость готовых решений.</li>
  <li>Сервисное обслуживание смонтированных изделий в городах Москва, Рязань, Владимир.</li>
</ul>
<h2>Свойства кварцевого агломерата</h2>

<p>С точки зрения гигиены кварцевые барные стойки – лучшее решение для заведений общественного питания.
Это надежные, монолитные отполированные плиты, не оставляющие шанса микробам и грязи. За ними просто ухаживать,
поверхность не притягивает пыль, не боится влаги. Алкоголь, жир, другие жидкости легко очищаются влажной салфеткой.
Ежедневная уборка барной стойки из кварца заключается в обработке поверхности антимикробными средствами и сухой полировке.</p>
<p style="margin-bottom: 0px;">Свойства барных стоек из кварцевого агломерата:</p>
<ul style="margin-top: 5px;">
  <li>простой уход;</li>
  <li>устойчивость к физическим воздействиям: так же как натуральный камень, кварцевую поверхность трудно поцарапать или сделать на ней вмятину;</li>
  <li>ремонтопригодность – поверхность восстанавливают путем заполнения сколов и трещин клеевой основой под цвет агломерата;</li>
  <li>инертность к воде, химикатам и другим жидкостям;</li>
  <li>не выделяют и не поглощают запахов;</li>
  <li>пожаробезопасные;</li>
  <li>не содержат вредных для человека веществ.</li>
</ul>
<p>Изготовление кварцевых барных стоек проходит с соблюдением требований безопасности и экологичности, принятых в РФ.</p>

<p class="proximait">Мы изготавливаем и устанавливаем барные стойки из кварца на территории Московской, Рязанской и Владимирской областях.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Изготовление барных стоек для кухни из кварца на заказ в Москве, Рязани и Владимире - Барные стойки из кварцевого агломерата.",
      meta: [
        { name: 'description', hid: 'description', content: 'Барные стойки из кварца на заказ. Подробности на сайте.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/барные-стойки/барные-стойки-из-кварца.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Барная стойка из кварцевого агломерата",
          page_full_name:"Барная стойка из кварца",
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
