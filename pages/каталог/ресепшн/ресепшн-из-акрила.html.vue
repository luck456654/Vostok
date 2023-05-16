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
            <h1>{{page_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать ресепшн</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
<h2>Ресепшн акриловый</h2>

<p>Предлагаем гостиницам, отелям и учреждениям РФ стильные и практичные акриловые
ресепшен-стойки для административных работников. Качественно изготовим по вашим эскизам
и установим в короткие сроки любое количество экземпляров. На выбор заказчика – более 14 коллекций
искусственного камня различных оттенков и текстуры.</p>

<h2>Гарантии для клиентов</h2>

<p>Для производства ресепшен мы используем оригинальную технологию, благодаря которой качество остается высоким, а затраты снижаются. Поэтому мы предлагаем низкую стоимость изделий для своих клиентов.</p>
<p style="margin-bottom: 0px;">Каждый покупатель априори получает:</p>
<ul style="margin-top: 5px;">
  <li>Высокое качество товара.</li>
  <li>Доставку по регионам РФ.</li>
  <li>Гарантию 3 года на изготовление и монтаж изделий.</li>
  <li>Четкое соблюдение сроков изготовления по договору.</li>
  <li>Профессионализм наших работников – от дизайнера до монтажника.</li>
</ul>
<h2>Свойства акрилового камня</h2>

<p style="margin-bottom: 0px;">Внешний вид акрилового ресепшен весьма впечатляет: гладкая зеркальная поверхность без швов, идеальная геометрия, солидная толщина плиты и текстура благородного камня. Материал выглядит дорого и представительно при любом освещении. Помимо эстетических свойств акриловый искусственный камень обладает массой других достоинств:</p>
<ul style="margin-top: 5px;">
  <li>легко очищается от загрязнений и полируется;</li>
  <li>выдерживает большие нагрузки и вес;</li>
  <li>не царапается, не истирается;</li>
  <li>пригоден для ремонта – сколы и трещины заполняют агломератом под цвет ресепшен и полируют;</li>
  <li>биологически и химически инертный материал;</li>
  <li>не подвержен коррозии;</li>
  <li>не боится влаги;</li>
  <li>имеет относительно низкий вес (по сравнению с натуральным камнем);</li>
  <li>не окрашивается чернилами и другими химическими красителями.</li>
</ul>
<p>Главным преимуществом акрилового ресепшен является его долговечность.
Искусственный камень сохраняет свои свойства неограниченное количество времени.</p>

<h2>Размеры и дизайн ресепшен из акрилового камня</h2>

<p>Будучи визитной карточкой вашей компании, ресепшен должен быть удобным и функциональным, с идеальной геометрией. Цвет стойки выбирают по стилевому оформлению помещений. Обычно в крупных компаниях используют корпоративные оттенки. Для административных учреждений подойдут спокойные и холодные тона; в отелях, салонах красоты и увеселительных заведениях предпочитают яркие или темные цвета.</p>
<p class="proximait">Мы изготавливаем и устанавливаем ресепшн из акрила на территории Московской, Рязанской и Владимирской областях.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Изготовление и установка стоек ресепшн из акрила на заказ в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Ресепшн из акрилового камня на заказ от производителя. Подробности на сайте.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/ресепшн/ресепшн-из-акрила.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Ресепшн из акрилового камня",
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
