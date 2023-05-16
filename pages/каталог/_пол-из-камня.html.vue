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
  <a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать пол</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<p>С давних времён каменные полы в домах были обычным явлением, пока их не заменило дерево, но сегодня они снова возвращаются в современное жильё. Укладывая природный и искусственный камень на пол, люди придают интерьерам неповторимый вид, поскольку этот материал облагораживает окружающее пространство. Особенно красиво смотрится пол из кварца – практически пол из натурального камня (на 95 %). Можно смело сказать, что для пола это абсолютно беспроигрышный вариант.</p>
<h2>Пол из кварцевого агломерата</h2>
<p>Пол из кварцевого камня превосходно смотрится как в квартире или коттедже, так и в холле серьёзной коммерческой компании. Также он отлично подходит для музеев, гостиниц, медицинских учреждений и развлекательных заведений. Кварцевый агломерат обладает большим списком преимуществ, которые делают его идеальным напольным покрытием, а именно:</p>
<ul>
<li>обладает хорошей твёрдостью;</li>
<li>устойчив к царапинам и сколам;</li>
<li>не имеет пор, поэтому не впитывает воду и другие жидкие вещества;</li>
<li>не прихотлив в уходе;</li>
<li>устойчив к высоким температурам;</li>
<li>не боится щелочных растворов и кислот;</li>
<li>легко очищается от загрязнений;</li>
<li>не имеет среды, благоприятной для размножения плесени и грибков.</li>
</ul>
<p>Кварцевая плитка на пол укладывается с соблюдением нескольких требований. В первую очередь речь идёт о зазорах, которые необходимо оставлять между плитками, как при укладке других подобных материалов. Ещё одно требование заключается в том, что для фиксации плитки на полу следует использовать клей на латексной или эпоксидной основе, поскольку агломерат не пропускает воду.</p>
<h2>Цвета пола из камня</h2>
<p>Наиболее популярными цветами камня, используемого для оформления пола, являются:</p>
<ul>
<li> Чёрный – очень оригинальный вариант, с которым превосходно сочетаются стены, окрашенные в бежевый, кипельно, белый, серый, лавандовый, голубой цвет.</li>
<li> Белый – зрительно расширяет любое помещение, придаёт ему более нарядный, светлый вид. Однако на белом камне будут хорошо заметны все загрязнения, поэтому его придётся постоянно поддерживать в идеальной чистоте.</li>
<li> Серый – придаёт помещению респектабельный и элегантный вид.</li>
<li> Узор натурального камня – самый благородный вариант, поскольку рисунок природного камня выглядит максимально дорого и роскошно. Такая расцветка подойдёт для богатых интерьеров, в которых всё подчёркивает состоятельность владельцев.</li>
</ul>
<p>Помимо перечисленных расцветок дизайнеры часто выбирают камень бежевый, сапфировый, красный, с оттенком шоколада, песчаный, кремовый, зелёный.</p>
<h2>Заказать пол для квартиры</h2>
<p>Если вас интересует качественный пол из кварцита, компания «Стильный-камень.рф» – то, что вам нужно! Мы работаем в Москве, Рязани, Владимире и других городах. Помимо качественного облицовочного материала мы предлагаем и ряд услуг: установку готовых изделий, ремонт, обслуживание. Узнать стоимость ремонта пола и цену на другие услуги вы можете у наших специалистов. Обращайтесь!</p>
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
      title:"Пол из кварца для жителей Москвы, Рязани, Владимира. Недорого и качественно.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка пола из кварца по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/пол-из-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Пол из кварцевого агломерата",
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
