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



<p><br>Натуральный камень, используемый в оформлении мебели, способствует элитарности интерьеров. Барные стойки со столешницами из природного материала свидетельствуют о респектабельности коммерческого заведения и говорят о хорошем вкусе владельцев жилой недвижимости. Данный предмет интерьера в первую очередь обеспечивает функциональность пространства, предназначенного для подачи различных видов напитков и закусок. Однако стойка неизменно притягивает внимание посетителей и является главным украшением помещений, поэтому её декоративным свойствам уделяется особое внимание.</p>

<h2>Преимущества барных стоек из натурального камня</h2>

<p style="margin-bottom: 0;">Корпус стойки обычно изготавливается из массива дерева или из высококачественных древесноволокнистых материалов. Только рабочая поверхность выполняется из природного камня. И она обладает целым рядом достоинств:</p>
<ul style="margin-top: 5px;">
    <li>презентабельным внешним видом, свидетельствующим о высоком статусе владельцев;</li>
    <li>красивой текстурой, привлекательным рисунком и цветом, свойственными только природным материалам;</li>
    <li>плотной структурой, обеспечивающей долговечность изделия;</li>
    <li>устойчивостью к воздействию воды, алкогольных напитков, масел, красящих веществ и других видов жидкостей и веществ органического и неорганического происхождения;</li>
    <li>экологической чистотой – качеством, особо важным для рабочих поверхностей, контактирующих с продуктами питания;</li>
    <li>удобством и простотой в уходе: поверхность можно очищать любыми видами бытовой химии, мыльными растворами, влажными и сухими салфетками.</li>

</ul>
<p>Полированная поверхность способна преломлять свет и эффектно отражать окружающие предметы интерьера. Она может увеличивать пространство и придавать ему таинственную загадочность.</p>
<h2>Из чего складывается цена на барную стойку из натурального камня</h2>

<p style="margin-bottom: 0;">Барная стойка может иметь различные размеры, конфигурацию и изготавливаться из разнообразных материалов. Поэтому её стоимость зависит от множеств факторов, в числе которых:</p>
<ul style="margin-top: 5px;">
    <li>Площадь используемого камня. Доля природного материала значительно влияет на общую стоимость конструкции. Поэтому размеры столешницы являются главным фактором, определяющим цену готового изделия.</li>
    <li>Выбранная палитра. Натуральный камень относится к числу наиболее дорогих материалов. Однако его стоимость зависит во многом от декоративных свойств. Принято считать, что мрамор, гранит и оникс – элитные виды. Однако существуют более редкие камни, способные придать интерьерам уникальность. Например ‒ лабрадорит, обладающий благородными сине-голубыми оттенками. В нашей палитре он представлен как LEMURUAN SURREME. Воспользовавшись разделом <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">«Палитра»</a>, заказчики могут выбрать цвет с декоративными характеристиками, соответствующими вкусовым предпочтениям.
</li>
    <li>Торцевые кромки. Завершённость изделиям придаёт обработка профиля. Заказчики могут выбрать предпочитаемые варианты.</li>
</ul>
<h2>Как заказать барную стойку</h2>
<p>Купить барную стойку из натурального камня у нас достаточно выгодно, поскольку можно выбрать наиболее оптимальный вариант, воспользовавшись сервисом <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html">«Калькулятор»</a>. Определившись с размерами, видом камня и другими параметрами, можно разместить заказ онлайн.</p>
<div class="to-work">
  <div class="row">
    <h3>Как мы работаем</h3>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="to-work_block" v-for="(item,index) in to_work" :key="index" >
        <picture>
                          <source type="image/webp" :srcset="item.img+'.webp'" :alt="item.disc">
                          <source type="image/png" :srcset="item.img+'.png'" :alt="item.disc">
                          <img :src="item.img+'.jpg'" :alt="item.disc">
                      </picture>
        <p> <span v-html="item.name"></span> </p>
      </div>
    </div>
  </div>
</div>
<hr>
   <CallBackInPage />
</div>
</div>
<div class="row">
<div class="col-sm-12">
<h3>Преимущества заказа изделия в «Стильный камень»</h3>
<p>Наша компания заботится об интересах заказчиков, поэтому предлагает воспользоваться рядом преимуществ.</p>
<Pochemu/>
<h3>Охват городов</h3>
<p class="proximait">Наша компания изготавливает высококачественные изделия и оказывает услуги по их установке на территории Москвы, Рязани, Владимира и соответствующих областей.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import Pochemu from "~/components/Pochemu.vue";
export default {
  head() {
    return{
      title:"Барные стойки из натурального камня под заказ",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготавливаем и устанавливаем барные стойки из натурального камня в Москва, Рязани, Владимире'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/барные-стойки/барная-стойка-из-натурального-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
      CallBackInPage,
      Pochemu,
    },
    data() {
        return {
          page_name:"Барные стойки из натурального камня",
          page_full_name:"Барная стойка из натурального камня",
          to_work:[
            {name:"Вы <br>звоните нам",disc:"Вы звоните нам",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_03"},
            {name:"Выезд <br>замерщика",disc:"Выезд замерщика",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_04"},
            {name:"Подписание <br>договора",disc:"Подписание договора",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_05"},
            {name:"Проведение <br>работ",disc:"Проведение работ",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_06"},
            {name:"Мы <br>монтируем",disc:"Мы монтируем",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_07"},
          ],
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
