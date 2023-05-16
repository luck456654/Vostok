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
                <nuxt-link to="/каталог/подоконники.html" append itemprop="item">
                  <span itemprop="name">Подоконники из камня</span>
                </nuxt-link>
                <meta itemprop="position" content="3" />
            </li>
            <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
              itemtype="http://schema.org/ListItem">
                <span itemprop="name">{{page_name}}</span>
                <meta itemprop="position" content="4" />
            </li>
          </ol>
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать подоконник</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 main-content kvarc-condition">
<h2>Подоконники кварцевые</h2>

<p>Подоконники из кварцевого агломерата обладают прочностью, практичностью, органично вписываются в любой интерьер. На выбор клиента – около 200 оттенков искусственного камня, кромки разной геометрии. Вы можете заказать подоконник любой длины и ширины, в неограниченном количестве. Мы осуществляем замер и монтаж изделий из кварцевого агломерата в короткие сроки, в удобное для клиента время.</p>

<h2>Выгоды для покупателей</h2>

<p>Мы изготавливаем качественные кварцевые подоконники из сертифицированного материала. Производим и устанавливаем изделия по стандартам качества и безопасности, принятым в РФ.</p>
<p>Своим клиентам мы гарантируем:</p>
<ul>
  <li>Быструю доставку по регионам РФ.</li>
  <li>Профессиональный замер и монтаж: гарантия на установленные изделия – до 3 лет.</li>
  <li>Четкое соблюдение сроков изготовления – от 3 до 15 рабочих дней.</li>
  <li>Полную информационную поддержку.</li>
  <li>Применение качественного сырья и материалов в производстве.</li>
</ul>

<h2>Свойства кварцевого подоконника</h2>

<p>Кварцевый подоконник является аналогом натурального камня. По внешнему виду отличить искусственный
материал от природного трудно. Подоконник из кварцевого агломерата обладает следующими качествами:</p>
<ul>
  <li>Поддается ремонту. Сколы, трещины заполняют клеевой массой под цвет подоконника. В результате поверхность полностью восстанавливается.</li>
  <li>Легко очищается от загрязнений с помощью моющих средств.</li>
  <li>Не впитывает запахов</li>
  <li>Не окрашивается пищевыми и химическими красителями.</li>
  <li>Выдерживает температуру до 200 °С и вес до 150–180 кг.</li>
  <li>Не поддается коррозии.</li>
</ul>

<p>Кварцевый агломерат остается стабильным в любых условиях, поэтому подоконники долговечные, не деформируются и сохраняют эстетичный внешний вид долгое время.</p>

<h2>Особенности монтажа кварцевых подоконников</h2>

<p>Правильный замер и установка определяют дальнейшую эксплуатацию подоконника. Размеры выбирают с учетом расстояния до середины батареи, чтобы избежать неправильной конвекции теплого воздуха. Подоконник будет смотреться лучше, если предусмотреть «ушки» на 2–5 см справа и слева. Устанавливают полотно в большинстве случаев под раму.</p>
<p>Монтаж кварцевого подоконника – трудоемкий процесс, требующий профессионализма и специальных инструментов. Поэтому самостоятельно должным образом установить изделие вряд ли получится.</p>
<p>У нас можно заказать профессиональный монтаж кварцевых подоконников под любое окно.</p>
<p class="proximait">Мы изготавливаем и устанавливаем подоконники из кварца на территории Московской, Рязанской и Владимирской областях.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
      return{
        title:"Производство подоконников из кварца в любых объемах в Москве, Рязани и  Владимире - Подоконники из кварцевого камня.",
        meta: [
          { name: 'description', hid: 'description', content: 'Подоконники из кварца от производителя на заказ. Через сайт дешевле.'}
        ],
        link: [
        { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/подоконники/подоконники-из-кварца.html'},
        ]
      };
    },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Подоконники из кварцевого агломерата",
          page_full_name:"Подоконники из кварца",
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
/*h1, .h1 {
    font-size: 1.3em;
    text-align: center;
    }*/
.send-button {float: left;margin-top: 15px;}
h2, .h2 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}

@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
