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
                <nuxt-link to="/каталог/ресепшн.html" itemprop="item">
                  <span itemprop="name">Ресепшн из камня</span>
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
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать ресепшн</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
<h2>Ресепшн кварцевый</h2>

<p>Составляющая имиджа компании – это общее оформление интерьера кабинетов и офиса, мелкие аксессуары и униформа работников, а также ресепшен на входе, где встречают важных клиентов и деловых партнеров. Предлагаем услуги изготовления и монтажа стоек из кварцевого агломерата в любом количестве по вашим эскизам. На выбор заказчика – коллекции искусственного камня разных оттенков и текстуры.</p>

<h2>Выгодные предложения для клиентов</h2>

<p>В производстве ресепшен из кварцевого агломерата используются материалы ведущих мировых брендов: <strong>Santa Margeritha, Avant Quartz, Caesarstone, Sileston</strong>.
В короткие сроки мы изготовим и установим стойки самой сложной геометрии, без ограничений в количестве и размерах.</p>
<p style="margin-bottom: 0px;">Мы гарантируем:</p>
<ul style="margin-top: 5px;">
  <li>Высокий уровень обслуживания и четкое исполнение сроков в городах Москве, Рязани, Владимире.</li>
  <li>Отменное качество продукции и полное ее соответствие утвержденным эскизам.</li>
  <li>Профессиональную доставку по регионам РФ.</li>
  <li>Гарантию 3 года на все изделия.</li>
  <li>Разумные цены на индивидуальные заказы и низкую стоимость готовых решений.</li>
</ul>
<h2>Свойства кварцевого агломерата</h2>

<p>Кварцевый агломерат – это тот материал, который искали дизайнеры много лет. Сочетание свойств натурального камня, с доступной ценой, эстетичностью делают его универсальным сырьем для создания роскошных элементов интерьера. Кварцевый ресепшен в приемной не просто украсит офис, а создаст имидж успешной и надежной компании.</p>
<p style="margin-bottom: 0px;">Достоинства кварцевого агломерата:</p>
<ul style="margin-top: 5px;">
  <li>эстетичный внешний вид: четкая геометрия, идеально ровная поверхность, естественный узор натурального камня, однородный цвет придают особый шарм помещению;</li>
  <li>ремонтопригодность: сколы, трещины, царапины заливают клеем одного цвета со стойкой;</li>
  <li>простой уход: с гладкой поверхности легко удаляются загрязнения и пыль;</li>
  <li>долговечность: ресепшен из кварцевого агломерата, как и природный камень, не имеет срока годности;</li>
  <li>химическая и биологическая инертность: кварцевая поверхность не боится влаги, чернил, грибковых образований и плесени.</li>
</ul>

<p>По нашим каталогам вы можете выбрать любой оттенок и текстуру камня, а также идею дизайна для ресепшен. Позвоните и пригласите замерщика
– мы вычислим стоимость по вашим эскизам, быстро изготовим и смонтируем конструкцию.</p>
<p class="proximait">Мы изготавливаем и устанавливаем ресепшн из кварца на территории Московской, Рязанской и Владимирской областях.</p>
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
      title:"Изготовление и установка стоек ресепшн из кварца на заказ в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Ресепшн из кварца на заказ от производителя. Подробности на сайте.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/ресепшн/ресепшн-из-кварца.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Ресепшн из кварцевого агломерата",
          page_full_name:"Ресепшн из кварца",
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
