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
<h2>Ресепшн кварцевый</h2>

<p>Ресепшен, или стойка регистрации, из натурального камня – это роскошно. Гладкая каменная поверхность создаёт хорошее впечатление у ваших настоящих и будущих клиентов, её качества проецируются на имидж компании в целом.</p>
<p>Психологи давно обратили внимание на этот факт. Клиенты, впервые попавшие в организацию, на подсознательном уровне соотносят оформление интерьера с качеством предоставляемых ею услуг. Ставя такой знак равенства, они из случайно зашедших становятся потенциальными.</p>
<p>Такая функциональная деталь украсит любое заведение. В соседстве с водой, например в спа-салоне, камень создаёт идеальное, успокаивающее сочетание, подходящее именно для оздоровительного зала, а когда на каменную поверхность попадает непрямой рассеянный свет, формируется уютная атмосфера, свойственная гостиной. Нужно лишь уметь воспользоваться всеми чудесными свойствами, которыми обладает этот природный материал. И мы готовы в этом помочь.</p>



<h2>Преимущества ресепшен из натурального камня</h2>

<p>Натуральный камень имеет массу преимуществ по сравнению с древесиной и другими традиционными материалами. Он универсален, прочен, прост в обслуживании, гигиеничен и экологичен, устойчив к воздействию температуры и влаги. Тона и структуры рисунков бесчисленны.</p>


<p>Этот природный материал придаёт характер всему интерьеру в целом. С его участием получаются самые передовые и эстетически интересные решения оформления помещений.</p>
<p>Не стоит забывать и ещё об одном немаловажном моменте: камень универсален с дизайнерской точки зрения. Он легко интегрируется практически в любой интерьерный стиль. Но возможен и другой вариант – всё окружающее пространство можно обыграть и построить вокруг одного главного элемента – ресепшен из природного камня. И это не будет скучно. Получится достойно и изысканно.</p>
<p>Из чего складывается цена на ресепшен из натурального камня</p>
<p>Стоимость ресепшен зависит от нескольких ключевых факторов. В первую очередь на цену готового изделия влияют площади используемого камня. Выбранная цветовая гамма также отражается на цене (в разделе «Палитра» можно посмотреть все возможные образцы). Кроме того, на окончательную стоимость конструкции влияет качество используемых торцевых кромок.</p>
<h2>Как заказать ресепшн</h2>
<p>Купить ресепшен из натурального камня у нас ‒ выгодно и легко. Вам нужно позвонить или заказать онлайн-консультацию и озвучить свои вкусы, пожелания, предпочтения и планируемый бюджет. Замеры, спецификация, эскиз, проект и изготовление ‒ наша работа.</p>
<p>Наши специалисты могут не только изготовить каменную стойку, но и установить её на месте. В этом случае мы даём гарантию и на изделие, и на монтаж.</p>
<p>Мы приступаем к выполнению заказа только после окончательного согласования с клиентом всех нюансов.</p>
<h2>Преимущества заказа изделия в «Стильном камне»</h2>
<p style="margin-bottom: 0px;">Всем своим клиентам мы предлагаем:</p>
<ul style="margin-top: 5px;">
    <li>демократичные, конкурентные цены;</li>
    <li>обширный ассортимент;</li>
    <li>чёткие сроки исполнения заказа;</li>
    <li>профессиональный подход;</li>
    <li>качественный монтаж;</li>
    <li>гарантийное обслуживание.</li>
</ul>
<h2>Охват городов</h2>
<p class="proximait">«Стильный камень» осуществляет установку своих изделий в Москве, Рязани, Владимире и в населённых пунктах соответствующих областей.</p>
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
      title:"Изготовление и установка стоек ресепшн из натурального камня на заказ в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Ресепшн из натурального камня на заказ от производителя. Подробности на сайте.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/ресепшн/ресепшн-натуральный-камень.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Ресепшн из натурального камня",
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
