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
            <h1>{{page_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать панель</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
                  <div  class="top-img-row">
                    <div class="col-xs-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/gal-01_nat_panel.webp"  alt="Cтеновая панель из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/gal-01_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/wall/gal-01_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/gal-02_nat_panel.webp"  alt="Cтеновая панель из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/gal-02_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/wall/gal-02_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/gal-03_nat_panel.webp"  alt="Cтеновая панель из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/gal-03_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/wall/gal-03_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/gal-04_nat_panel.webp"  alt="Cтеновая панель из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/gal-04_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/wall/gal-04_nat_panel.jpg"  alt="Cтеновая панель из натурального камня">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/стеновые-панели/галерея-стеновых-панелей.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
       </div>

</div>
<div class="col-xs-12">
<p>Современный дизайн интерьеров сочетает в себе традиции и новаторские технологии. Стеновые панели из оникса, мрамора, гранита – самое яркое тому подтверждение. Эти природные материалы с древности используются в отделке помещений благодаря своей практичности, надёжности и благородному, достойному внешнему виду.</p>
<p>Технологии обработки натурального камня сильно усовершенствовались. Расширилась и зона применения. На Западе, а теперь и у нас, безопасность для окружающей среды становится важным и популярным фактором при выборе сырья. Панели из натурального камня с этой точки зрения являются предпочтительными.</p>

<h2>Плюсы и минусы стеновой панели из натурального камня</h2>

<p style="margin-bottom: 0;">Первый и очень значительный, хоть и не практический, плюс – естественная, природная красота материала, его элитность и изысканность. А кроме этого:</p>

<ul style="margin-top: 5px;">
    <li>высокий уровень прочности и способность выдерживать серьёзные нагрузки;</li>
    <li>практичность, износостойкость и влагостойкость;</li>
    <li>устойчивость к высоким температурам: панели из натурального камня абсолютно пожаробезопасны;</li>
    <li>роскошная фактура;</li>
    <li>богатая цветовая палитра (особенно это касается натурального мрамора и оникса);</li>
    <li>простота ухода.</li>

</ul>
<h2>Как рассчитать стоимость стеновой панели</h2>
<p style="margin-bottom: 0;">Цена готового изделия из натурального камня будет зависеть от следующих показателей:</p>
<ul style="margin-top: 5px;">
    <li>ширины, длины, толщины стеновой панели;</li>
    <li>выбранного камня;</li>
    <li>цветовой палитры (всю гамму оттенков натурального камня – оникса, мрамора, гранита – можно изучить и выбрать в разделе <a href="https://стильный-камень.рф/цвет-столешницы/">«Палитра»</a>);</li>
    <li>оформления торцевых кромок.</li>
</ul>
<p>Цены вы можете уточнить, изучив прайс на нашем сайте. Воспользуйтесь специальным <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html">калькулятором</a> для расчёта стоимости.</p>
<hr>
<h3>Заказать консультацию</h3>
  <CallBackInPage/>
</div>
<div class="col-sm-12">
<h2>Как заказать натуральную стеновую панель </h2>
<p>Купить стеновую панель из натурального камня у нас достаточно выгодно.</p>
<p>В каталоге на сайте компании вы можете подробно ознакомиться с предлагаемым ассортиментом, сделать выбор и связаться с нами любым удобным способом. Наши специалисты проконсультируют вас, разработают эскиз и осуществят монтаж готовых изделий на объекте.</p>
<h3>Почему у Стильного камня?</h3>
<p>Благодаря большому ассортименту, у нас вы всегда найдёте стеновые панели, полностью соответствующие вашим запросам. Мы предлагаем только качественный натуральный камень (мрамор, гранит, оникс), которые отличают долгий срок эксплуатации и приемлемая стоимость.</p>
<p>«Стильный камень» берёт на себя услуги по доставке и монтажу изделий. У нас трудятся только опытные специалисты, работа которых не вызывает нареканий.</p>
<p>Мы даём 3 года гарантии на продукцию нашей компании. Наличие собственного производства позволяет нам не переплачивать посредникам, тем самым снижая цену готового товара.</p>
<p>Мы осуществляем не только установку, но и последующий ремонт всех видов продукции. Всегда работаем быстро и без потери качества.</p>
<p>Безопасность и гигиеничность используемых нами материалов подтверждается соответствующими сертификатами.</p>
<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» устанавливает свои изделия на территории Москвы, Рязани, Владимира и их областей.</p>
<p class="proximait">В Московском регионе наша компания представлена большой дилерской сетью, благодаря которой изучить ассортимент и заказать нашу продукцию можно более чем в 50 мебельных магазинах.</p>
 </div>
</div>
</div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
export default {
  head() {
    return{
      title:"Заказать фартук из натурального камня  в Москве, Рязани и Владимире - Кухонные фартуки от производителя",
      meta: [
        { name: 'description', hid: 'description', content: 'Стеновые панели из натурального камня на заказ. Цены производителя.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/стеновые-панели/стеновая-панель-из-натурального-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
      CallBackInPage
    },
    data() {
        return {
          page_name:"Стеновые панели из натурального камня",
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
h2, .h2, h3, .h3 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.content-zakaz {margin-bottom: 0px;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px; max-width: 120%;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
  .content-zakaz {margin-bottom: 20px;}
}
</style>
