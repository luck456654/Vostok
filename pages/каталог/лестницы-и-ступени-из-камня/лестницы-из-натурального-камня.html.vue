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
            <h1>{{page_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать лестницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<br>
<p>Лестничные марши – конструктивные элементы, на которые обычно обращают мало внимания. А ведь они могут украсить старый дом или оживить современный интерьер. И совсем не обязательно, чтобы они были изготовлены из привычного материала – дерева.</p>
<p>Лестница из натурального камня способна преобразить пространство, придать ему глубину, респектабельность. Внося в домашнюю атмосферу роскошь, природный минерал не вступает в противоречие с остальным декором помещения, а органично вписывается в окружающую обстановку. Самое главное – правильно выбрать форму и цветовое сочетание, в чём мы и предлагаем вам помочь.</p>
<h2>Плюсы и минусы лестницы из натурального камня</h2>
<p style="margin-bottom: 0;">Мрамор, гранит, оникс – какой бы из этих натуральных минералов вы ни выбрали, ваша лестница будет обладать большим количеством достоинств и преимуществ, в числе которых:</p>
<ul style="margin-top: 5px;">
    <li>высокий уровень прочности и надёжности;</li>
    <li>изысканная, приятная на ощупь фактура и выбор оттенков естественной палитры;</li>
    <li>влаго- и износостойкость;</li>
    <li>устойчивость к высоким температурам;</li>
    <li>простой уход.</li>
</ul>
<h2>Как рассчитать стоимость лестницы</h2>
<p style="margin-bottom: 0;">Для определения цены нужно знать следующие особенности:</p>
<ul style="margin-top: 5px;">
    <li>•	ширину, длину, толщину;</li>
    <li>•	имя производителя;</li>
    <li>•	цветовую палитру (со всеми возможными цветами, в которых может быть выполнена лестница из натурального камня, можно ознакомиться в разделе «<a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a>»);</li>
    <li>•	форму торцевых кромок.</li>
</ul>
<h2>Как заказать лестницу</h2>
<p>Купить лестницу из натурального камня у нас достаточно выгодно, поскольку мы не работаем с посредниками и, соответственно, не закладываем в финишную стоимость дополнительные расходы.</p>
<p>Если вы уже определились с выбором, вам нужно связаться с нами. Всю дальнейшую работу выполнят наши специалисты. Они подготовят и согласуют с вами эскиз и технический проект. Затем мастера изготовят заказ, доставят и установят конструкцию непосредственно на объекте.</p>
<h3>Почему у Стильного камня?</h3>
<p>Благодаря большому ассортименту натурального камня и возможностям собственного производства, у нас вы всегда сможете заказать ту лестницу, которая будет полностью отвечать вашим пожеланиям</p>
<p>Мы предлагаем только качественный натуральный камень (мрамор, гранит, оникс), отличающийся долгим сроком эксплуатации и приемлемой стоимостью. Наша компания осуществляет не только доставку и установку лестницы из натурального камня, но и последующие ремонтные, реставрационные работы и обслуживание своих изделий.</p>
<p>У нас трудятся опытные специалисты и мастера, знающие и любящие своё дело. Мы даём 3 года гарантии на изделия, произведённые нашей компанией. Абсолютно вся изготовленная нами продукция имеет сертификаты безопасности и гигиеничности.</p>
<p>Мы работаем быстро и без потери качества. Срок самого сложного заказа не превышает 15 дней.</p>
<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» устанавливает лестницы из натурального камня и другие конструкции на территории Москвы, Рязани, Владимира и их областей.</p>
<p class="proximait">В Московском регионе наша компания представлена большой дилерской сетью, которая включает в себя 10 представительств и выставочные залы более чем в 50 мебельных магазинах, где можно ознакомиться с нашими возможностями и ассортиментом.</p>
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
      title:"Заказать лестницу из натурального камня в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка лестниц из натурального камня по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/лестницы-и-ступени-из-камня/лестницы-из-натурального-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Лестницы из натурального камня",
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
