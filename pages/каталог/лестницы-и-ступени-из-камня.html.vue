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
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="3" />
            </li>
          </ol>
            <button class="breadcrumbs-show-mobile" v-if="!showBreadcrumbsMobile" @click="showBreadcrumbsMobile = !showBreadcrumbsMobile" title="Показать подробнее"><span>...</span></button>
            <h1>{{page_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать лестницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<h2>Лестница из камня для дома</h2>
<p>Каменные лестницы – отличное решение для жилых и офисных зданий. Они придают помещениям особую красоту с оттенком благородства. Такие лестницы можно использовать и как предметы интерьера, и как экстерьерные конструкции – в любом случае прогадать невозможно. И многочисленные положительные отзывы это не раз доказали.</p>
<p>Однако лестницы из камня выбирают не только за красоту – они обладают и многими другими весомыми преимуществами, в числе которых:</p>
<ul>
<li>Прочность. Камень выдерживает колоссальные нагрузки, поэтому лестницы на протяжении многих десятилетий сохраняют свой безупречный вид.</li>
<li>Огнеупорность. Такие лестницы, в отличие от деревянных, не горят. Следовательно, они повышают уровень пожаробезопасности любого строения.</li>
<li>Устойчивость к влаге. Каменную лестницу можно мыть хоть каждый день. Она от этого не разбухнет и не испортится.</li>
<li>Устойчивость к плесени и грибкам. Если дерево часто подвергается подобным напастям, то камню это не грозит: его монолитная структура не позволяет бактериям размножаться.</li>
<li>Неприхотливость в уходе. Все загрязнения легко смываются с поверхности камня, поэтому поддерживать лестницу в постоянной чистоте не составляет труда.</li>
<li>Бесшумность. Камень глушит звук лучше, чем другие материалы, используемые для изготовления лестниц.</li>
<li>Устойчивость к химическим веществам. Если на каменную лестницу попадёт щёлочь или кислота, она от этого не пострадает.</li>
</ul>
<h2>Ступени для лестниц из камня</h2>
<p>Современные каменные ступени изготавливаются разной формы и различного размера. Они несут функциональную и эстетическую нагрузку, поэтому к их выбору нужно подходить крайне ответственно. Главное – высокое качество и тщательно продуманный дизайн, поскольку от этих показателей зависит дальнейшая эксплуатация ступеней. Чтобы не прогадать, стоит покупать ступени или заказывать их изготовление у профессионалов.</p>
<h2>Цены на лестницы из камня</h2>
<p>В компании «Стильный-камень.рф» можно заказать ступени по привлекательной стоимости. Все клиенты, пожелавшие купить нашу продукцию, остаются довольны, поскольку мы предлагаем только качественный товар. Мы готовы вам помочь с установкой лестниц, ступеней, с их ремонтом и обслуживанием на территории Москвы, Рязани, Владимира и других населенных пунктов их областей. Наша компания всегда придерживается адекватной ценовой политики, поэтому вам не придётся тратить с трудом накопленные сбережения. Остались вопросы? Не можете найти нужный вам товар? Обращайтесь к нашим специалистам, и помощь не заставит себя ждать.</p>
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
      title:"Заказать лестницу из камня в Москве, Владимире и Рязани.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка лестниц из камня по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/лестницы-и-ступени-из-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Лестницы и ступени из камня",
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
.main-content ul li {margin-bottom: 5px;}
.send-button {float: left;margin-top: 15px;}
.content-zakaz {margin-bottom: 0px;}
h2, .h2 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>
