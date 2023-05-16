<template>
<div>
<Proizvodim/>
<div class="col-xs-12 nav-content offset-40">
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
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <nuxt-link to="/каталог/интегрированные-мойки.html" itemprop="item" append>
                  <span itemprop="name">Интегрированные мойки</span>
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
            <h1>{{page_name}}</h1>
      </div>
  </div>
            <div  class="col-xs-12 standart-palitra">
              <div class="row">
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog"  v-for="(item, index) in arr" :key="index">
                  <nuxt-link :to="item.url" exact>
                    <div class="img katalog">
                       <picture>
                        <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                        <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                        <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                    </div>
                      {{item.name}}
                  </nuxt-link>
                </div>
              </div>
      </div>
    <div style="clear:both;"></div>
    <div class="col-xs-12">
        <h2>Интегрированные мойки из акрила</h2>

        <p>Новейший тренд в современном интерьерном дизайне – интегрированные мойки из искусственного акрилового камня. Это изделия высокой прочности, с отличными эксплуатационными характеристиками, которые прослужат без изменения формы и внешнего вида много лет. Мойку из акрила можно изготовить как отдельный элемент или как продолжение кухонной столешницы. На усмотрение клиента – цвет, форма, размеры, дополнительные элементы мойки: канавки для отвода воды, сушилка, ниши для мыла и других принадлежностей.</p>

        <h2>Выгодные условия для клиентов</h2>

        <p>При производстве акриловых моек используется новейшая технология «спрей-гранит», благодаря которой происходит существенная экономия сырья и, как следствие, снижение стоимости конечного продукта. В основе материала – полиэфирная смола и крошка натурального камня, которая придает изделию естественный вид. В 14 коллекциях представлены более 500 образцов искусственного камня разных расцветок и фактур.</p>
        <p style="margin-bottom: 5px;">Своим клиентам мы обеспечиваем:</p>
          <ul style="margin-top: 0px;">
                <li>Высокое качество изделий и услуг.</li>
                <li>Гарантию на акриловые мойки 3 года.</li>
                <li>Качественную доставку во все города РФ.</li>
                <li>Полную информационную поддержку.</li>
                <li>Точное соблюдение сроков изготовления по договору.</li>
          </ul>
        <h2>Свойства акриловой мойки</h2>

        <p>Акриловая мойка изготавливается без швов, поэтому протечки в процессе эксплуатации точно не произойдет. Полированная поверхность камня не задерживает жирного налета и остатков пищи. Акриловый агломерат не окрашивается под действием сока, кофе, чая и других пищевых красителей. Постоянное воздействие горячей и холодной воды не оказывает на изделие никакого влияния – коррозия и разрушение структуры исключены.</p>
        <p style="margin-bottom: 5px;">Характеристика акриловой мойки:</p>
          <ul style="margin-top: 0px;">
                <li>простой уход – изделие легко очищается хлорсодержащими и другими антибактериальными средствами;</li>
                <li>простой уход – изделие легко очищается хлорсодержащими и другими антибактериальными средствами;</li>
                <li>сохраняет на всем протяжении эксплуатации эстетичный вид и форму;</li>
                <li>устойчивость к физическим воздействиям;</li>
                <li>долговечность;</li>
                <li>низкий вес по сравнению с керамическими изделиями и мойками из натурального камня;</li>
                <li>ремонтопригодность – сколы и царапины заполняют агломератом, зачищают и полируют до полного
        восстановления.</li>
          </ul>

        <p>Материал не содержит вредных компонентов и соответствует требованиям безопасности, принятым в РФ.</p>

        <p class="proximait">Мы изготавливаем и устанавливаем интегрированные мойки из акрила на территории Московской, Рязанской и Владимирской областях.</p>
  </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Изготовление акриловых моек для кухни на заказ в Москве, Рязани и Владимире",
      meta: [
        { name: 'description', hid: 'description', content: 'Кухонные мойки из акрилового камня от производителя по доступным ценам. Широкий ассортимент.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/интегрированные-мойки/мойки-из-акрила.html'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
          page_name:"Кухонные мойки из акрилового камня",
          arr:[
            {name:"Модель №388",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_388_new",url:"мойки-из-акрила/модель-№388.html"},
            {name:"Модель №422",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_422_new",url:"мойки-из-акрила/модель-№422.html"},
            {name:"Модель №500",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_500_new",url:"мойки-из-акрила/модель-№500.html"},
            {name:"Модель №413",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_413_new",url:"мойки-из-акрила/модель-№413.html"},
            {name:"Модель №362",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_362_new",url:"мойки-из-акрила/модель-№362.html"},
            {name:"Модель №304",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_304_new",url:"мойки-из-акрила/модель-№304.html"},
            {name:"Модель K",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_K_new",url:"мойки-из-акрила/модель-№k.html"},
          ],
          showBreadcrumbsMobile:false,
        }
    },
}
</script>
<style scoped>
  .h2-category {margin-left: -15px;}
  h2, .h2, h3, .h3  {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.katalog img {max-width: 100%;}
.adap-katalog a {
    color: #c8601b;
    text-decoration: underline;
}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>
