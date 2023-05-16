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
                <nuxt-link to="/каталог/лестницы-и-ступени-из-камня.html" append itemprop="item">
                  <span itemprop="name">Лестницы и ступени из камня</span>
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
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать лестницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<br>
<p>Часто мы рассматриваем этот функциональный элемент дома с точки зрения его практичности. Но разве лестница должна быть банальной? Это могут быть не просто ступеньки, соединяющие два этажа, а стильные, привлекательные лестничные марши, которые украсят внутреннюю архитектуру помещения. Такой материал, как акриловый камень, способен оформить и придать утончённости и шика даже узкой и невзрачной лестнице.</p>
<p>Акриловый камень – это не минерал, существующий в природе, а современное экологичное творение человеческих рук. Листы материала производятся из нескольких составляющих: порошка-основы, колера и акриловой смолы. Для придания схожести с натуральным минералом в качестве наполнителя в смесь добавляют небольшие кусочки и крошку разного размера. Затем листы шлифуют, придают им глянец или, наоборот, матовость.</p>
<h2>Плюсы и минусы лестниц из акрилового камня</h2>
<p style="margin-bottom: 0;">Помимо красивого внешнего вида такая лестница обладает ещё целым рядом неоспоримых преимуществ, таких как:</p>
<ul style="margin-top: 5px;">
    <li>небольшой вес;</li>
    <li>доступная стоимость;</li>
    <li>гигиеничность и безвредность для здоровья человека;</li>
    <li>лёгкая обработка и шлифовка;</li>
    <li>практичность;</li>
    <li>влагостойкость;</li>
    <li>простота ухода;</li>
    <li>долговечность.</li>
</ul>
<p>Есть у материала один недостаток, точнее особенность, которую нужно учитывать, если вы решили заказать лестницу из акрилового камня. Технология его производства предусматривает обязательное наличие подложки из прессованного материала (древесной стружки или опилок). Чтобы готовое изделие, в данном случае лестница, не деформировалось, подложка должна обладать влагостойкостью. Другими словами, акриловый камень предназначен только для применения внутри помещения. Специалисты не рекомендуют монтировать такие конструкции на открытом воздухе.</p>
<h2>Как рассчитать стоимость лестницы</h2>
<p style="margin-bottom: 0;">Вы можете воспользоваться удобным онлайн-калькулятором и самостоятельно определить цену вашей лестницы. Стоимость будет зависеть от нескольких параметров:</p>
<ul style="margin-top: 5px;">
    <li>ширины, длины, толщины;</li>
    <li>производителя материала;</li>
    <li>выбранной палитры (все возможные цвета можно увидеть в разделе «<a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a>»);</li>
    <li>используемых торцевых кромок.</li>
</ul>
<p>Невысокая стоимость лестницы из акрилового камня по сравнению с аналогами из природного материала делает её заказ и установку доступными даже при небольшом бюджете.</p>
<h2>Как заказать лестницу</h2>
<p>Купить лестницу из акрилового камня у нас достаточно выгодно. Если размеры и цвет будущего элемента интерьера известны, вам остаётся лишь связаться с нами и сделать заказ. Наши специалисты разработают эскиз, соответствующий всем вашим требованиям, по которому мастерами компании будет изготовлено изделие. Мы также предлагаем своим клиентам услуги доставки и монтажа на объекте.</p>
<h3>Почему у «Стильного камня»?</h3>
<p>Мы имеем собственное производство и не используем услуги посредников. Это положительно влияет на итоговую сумму заказа.</p>
<p>Мы работаем быстро и без потери качества, предоставляя 3-летнюю гарантию на лестницы из акрилового камня и другую продукцию. Все изделия «Стильного камня» имеют сертификаты безопасности и гигиеничности.</p>
<p>Мы оказываем целый ряд дополнительных услуг, в том числе осуществляем доставку готовых конструкций, их ремонт и постпродажное обслуживание.</p>
<p>Своим постоянным партнёрам «Стильный камень» предлагает интересные условия, информационную и маркетинговую поддержку, а также индивидуальные программы сотрудничества.</p>
<p>Мы готовы оказать помощь в создании собственного выставочного зала с предоставлением всех необходимых образцов.</p>
<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» устанавливает свои изделия на территории Москвы, Московской области, где расположено 10 представительств нашей компании.</p>
<p class="proximait">Кроме этого, мы работаем в Рязани, Владимире и их областях.</p>
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
      title:"Заказать лестницу из жидкого камня в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка лестниц из жидкого гранита по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/лестницы-и-ступени-из-камня/лестницы-из-искусственного-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Лестницы из жидкого гранита",
          page_full_name:"Лестницы из жидкого камня",
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
h2, .h2, h3, .h3 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>
