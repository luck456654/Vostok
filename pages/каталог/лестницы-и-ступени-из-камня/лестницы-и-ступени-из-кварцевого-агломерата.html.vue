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
<h2>Лестницы из кварца</h2>
<p>Кварцевый агломерат – популярный материал, используемый для изготовления многих изделий. И лестницы тоже не стали исключением. Он обеспечивает лестничным конструкциям невероятно красивый вид, который невольно обращает на себя внимание.</p>
<p>Агломерат представляет собой смесь очищенного кварца, мраморной, гранитной крошки, минерального пигмента и полиэфирной смолы. В период кратковременного воздействия высокой температуры этот состав спекается и затвердевает. В итоге получается прочный материал, обладающий целым рядом важных преимуществ.</p>
<h2>Ступени из кварцевого агломерата</h2>
<p style="margin-bottom: 0;">Кварцевый камень отлично подходит для изготовления ступеней, потому что:</p>
<ul style="margin-top: 5px;">
<li>Обладает повышенной прочностью. Ступени переносят во время эксплуатации большую нагрузку, но если они изготовлены из агломерата, состоящего из натурального камня на 95 %, то легко справляются со своей функцией.</li>
<li>Не боится воздействия химических веществ. Если на ступеньки из кварцевого агломерата пролить кислоту или щелочной раствор, их внешний вид от этого не испортится.</li>
<li>Не имеет швов. Все ступени идеально ровные, отполированные, на них не видно швов, что является большим плюсом в эстетическом отношении.</li>
<li>Хорошо переносит ударные нагрузки. Агломерат довольно сложно поцарапать или расколоть, поэтому ступеньки долгое время сохраняют свой привлекательный вид.</li>
<li>Имеет богатую цветовую палитру. За счёт добавления минерального пигмента удаётся получить агломерат самых разных оттенков, а значит, и ступени могут быть разнообразными по окрасу.</li>
<li>Не впитывает влагу и имеет монолитную структуру. Эти качества обеспечивают ступеням устойчивость к грибкам, плесени, размоканию. Их можно мыть в любое время, когда это необходимо.</li>
</ul>
<h2>Цены</h2>
<p>Желаете заказать качественные ступени и лестницы из кварцевого агломерата по доступной стоимости? Обращайтесь в компанию «Стильный-камень.рф». У нас можно купить изделия самого разного размера, любой формы и расцветки. Мы самостоятельно изготавливаем свою продукцию на современном инновационном оборудовании, что позволяет нам предлагать товар по лояльным ценам. Узнать расценки вы всегда можете из нашего прайс-листа. Специалисты компании всегда готовы помочь вам с выбором товара и будут рады ответить на ваши вопросы.</p>
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
      title:"Заказать лестницу из кварца в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка лестниц из кварца по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/лестницы-и-ступени-из-камня/лестницы-и-ступени-из-кварцевого-агломерата.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Лестницы из кварцевого агломерата",
          page_full_name:"Лестницы и ступени из кварцевого агломерата",
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
