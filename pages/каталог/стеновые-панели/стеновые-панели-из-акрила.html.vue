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
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-01.webp"  alt="Светлая стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-01.jpg"  alt="Светлая стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-01.jpg"  alt="Светлая стеновая панель из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-02.webp"  alt="Черная стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-02.jpg"  alt="Черная стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-02.jpg"  alt="Черная стеновая панель из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-03.webp"  alt="Коричневаял стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-03.jpg"  alt="Коричневаял стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-03.jpg"  alt="Коричневаял стеновая панель из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-04.webp"  alt="Бежевая стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-04.jpg"  alt="Бежевая стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-04.jpg"  alt="Бежевая стеновая панель из акрилового камня">
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
<p>В последние годы появилось много новых элементов, которые дизайнеры с успехом используют для создания современных, стильных интерьеров. Стеновые панели из акрилового камня можно смело отнести к таковым. Монолитные полированные или матовые, они создают в помещении особую, изысканную атмосферу. Из них также получается красивый фартук для кухни.</p>
<p>Материал производится из нескольких составляющих, среди которых порошок - основа, цветовой пигмент и связующее вещество – акриловая смола. Из смеси компонентов изготавливают листы определённых размеров, которые имеют однородную непористую структуру и гладкую поверхность. Кроме этого, в качестве наполнителя для имитации натурального минерала добавляют небольшие кусочки и крошку разного размера. Из таких листов и делают стеновые панели и кухонные фартуки.</p>

<h2>Плюсы и минусы стеновой панели из акрилового камня</h2>

<p style="margin-bottom: 0;">Стеновые панели из акрилового камня отлично подходят для декора жилых пространств, особенно помещений с повышенной влажностью. Помимо своих потрясающих эстетических качеств материал обладает и другими не менее важными свойствами и характеристиками, такими как:</p>
<ul style="margin-top: 5px;">
    <li>лёгкая обработка и шлифовка;</li>
    <li>бесшовная технология соединения;</li>
    <li>оптимальная толщина (12 мм);</li>
    <li>небольшой вес;</li>
    <li>гигиеничность;</li>
    <li>практичность;</li>
    <li>долговечность.</li>
</ul>
<p>При таком количестве плюсов акриловый камень имеет лишь один недостаток. Его производство требует применения специальной подложки из прессованного материала (древесной стружки или опилок). Она должна быть устойчива к влаге, чтобы будущие стеновые панели или фартук не деформировались в процессе эксплуатации. Кроме того, специалисты не рекомендуют монтировать изделие под открытым небом.</p>
<h2>Как рассчитать стоимость стеновой панели</h2>
<p style="margin-bottom: 0;">Цену стеновой панели и фартука зависит от:</p>
<ul style="margin-top: 5px;">
    <li>ширины, длины, толщины;</li>
    <li>выбранного производителя;</li>
    <li>цветовой палитры (все возможные цвета и оттенки вы можете посмотреть в разделе <a href="https://стильный-камень.рф/цвет-столешницы/">«Палитра»</a>;</li>
    <li>формы торцевых кромок.</li>
</ul>
<p>Для удобства расчёта стоимости вы можете воспользоваться удобным <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html">онлайн-калькулятором</a> на нашем сайте.</p>
<h2>Как заказать стеновую панель</h2>
<p>Купить стеновую панель из акрилового камня у нас достаточно выгодно и просто. Если вы уже определились с выбором и готовы сделать заказ, вам остаётся лишь связаться с нами и озвучить свои пожелания.</p>
<p>Наши специалисты разработают эскиз и технический проект с учётом ваших требований, а мастера изготовят по ним фартук или стеновые панели.</p>
 <hr>
 <h3>Заказать консультацию</h3>
  <CallBackInPage/>
</div>
<h3>Почему у Стильного камня?</h3>
<p style="margin-bottom: 0;">Сотрудничество с нами выгодно по следующим причинам:</p>
<ul style="margin-top: 5px;">
    <li>1.	У нас есть собственное производство, и мы не используем услуги посредников, что отражается на конечной стоимости изделия.</li>
    <li>2.	Мы работаем быстро и без потери качества.</li>
    <li>3.	Предоставляем 3-летнюю гарантию на стеновые панели из акрилового камня, фартуки и другую продукцию.</li>
    <li>4.	Все товары нашей компании имеют сертификаты безопасности и гигиеничности.</li>
    <li>5.	Мы оказываем дополнительные услуги по установке конструкций, осуществляем их ремонт и обслуживание.</li>
    <li>6.	Своим постоянным партнёрам «Стильный камень» предлагает выгодные условия, информационную и маркетинговую поддержку, а также индивидуальные программы сотрудничества.</li>
</ul>
<p>Мы готовы оказать помощь в создании собственного выставочного зала с предоставлением всех необходимых образцов.</p>

<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» устанавливает свои изделия на территории Москвы, Московской области, где расположено 10 представительств нашей компании. Здесь вы можете заказать панели, фартуки и другую нашу продукцию.
Кроме этого, мы работаем в Рязани, Владимире и их областях.</p>


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
      title:"Изготовление акриловых стеновых панелей в Москве, Рязани и Владимире - Кухонные фартуки из акрила",
      meta: [
        { name: 'description', hid: 'description', content: 'Стеновые панели из акрила на заказ. Цены производителя.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/стеновые-панели/стеновые-панели-из-акрила.html'},
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
          page_name:"Стеновые панели из акрилового камня",
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
