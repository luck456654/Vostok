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
                <nuxt-link to="/каталог/интегрированные-мойки.html" itemprop="item" append>
                  <span itemprop="name">Интегрированные мойки</span>
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
            <div  class="col-xs-12 standart-palitra">
              <div class="row">
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog" v-for="(item, index) in arr" :key="index">
                  <nuxt-link :to="item.url" exact>
                    <div class="img katalog">
                       <picture>
                        <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                        <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                        <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                    </div>
                      {{item.name}}
                  </nuxt-link>
                </div>
              </div>
      </div>
    <div style="clear:both;"></div>
    <div class="col-xs-12">
<h2>Интегрированные мойки из кварца</h2>

<p>Кварцевые мойки – инновация в интерьерном дизайне ванных комнат и кухонь. Это практичный и эстетичный элемент интерьера, отличающийся великолепными эксплуатационными характеристиками. Производится из кварцевого агломерата на основе натуральной каменной крошки и полиэфирной массы. В каталоге магазина вы найдете 14 коллекций искусственного камня разных фактур и оттенков. На выбор клиента более 500 образцов кварца лучших мировых брендов: TechniStone, Caesarstone, Silestone и др.</p>

<h2>Выгодные предложения для клиентов</h2>

<p>В производстве кварцевых моек используется особая технология, которая позволяет значительно экономить сырье и, как следствие, формировать низкие цены на выходе. Мы изготавливаем изделия разных форм и размеров – от одиночной мойки до панели длиной несколько метров для общественных туалетных комнат.</p>
<p style="margin-bottom: 5px;">Своим клиентам мы гарантируем:</p>
  <ul style="margin-top: 0px;">
    <li>Высокое качество изделий и услуг.</li>
    <li>Доставку товара в регионы РФ.</li>
    <li>Полную информационную поддержку.</li>
    <li>Четкое соблюдение сроков изготовления по договору.</li>
    <li>Гарантию 3 года и сервисное обслуживание установленных нашей компанией моек.</li>
  </ul>
<h2>Свойства кварцевой мойки</h2>

<p>Кварцевую мойку можно изготовить как отдельный элемент и как часть кухонной столешницы. Швы заполняют агломератом и полируют. В результате получается монолитная конструкция, в которой протечки исключены.</p>
<p style="margin-bottom: 5px;">Мойки из кварцевого агломерата выглядят естественно, а потому – роскошно и дорого. Но не эстетика – самое привлекательное в этом изделии. Кварцевые мойки обладают следующими достоинствами:</p>
  <ul style="margin-top: 0px;">
    <li>они долговечные и прочные;</li>
    <li>не реагируют на перепады температур, химикаты, длительное воздействие воды;</li>
    <li>на гладкой поверхности не задерживаются жирный налет и остатки пищи;</li>
    <li>подлежат ремонту – сколы, трещины, царапины заполняют агломератом и тщательно полируют;</li>
    <li>безвредны для человека;</li>
    <li>не окрашиваются под действием чая, сока и других красителей;</li>
    <li>не подвергаются коррозии.</li>
  </ul>
<p>Изделия из искусственного камня с успехом применяют в туалетных комнатах общественных заведений. Гладкая поверхность не статична, не притягивает пыли и грязи. Изделие трудно повредить. Уход за кварцевыми мойками достаточно прост: поверхность обрабатывают антибактериальными или хлорсодержащими препаратами и насухо полируют.</p>
<p class="proximait">Мы изготавливаем и устанавливаем интегрированные мойки из кварца на территории Московской, Рязанской и Владимирской областях.</p>
</div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Производство кухонных моек из кварца на заказ в Москве, Рязани и Владимире",
      meta: [
        { name: 'description', hid: 'description', content: 'Мойки из кварцевого агломерата для кухни от производителя. Широкий ассортимент.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/интегрированные-мойки/мойки-из-кварца.html'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
          page_name:"Кухонные мойки из кварца",
          page_full_name:"Кухонные мойки из кварцевого камня",
          arr:[
            {name:"Модель Techno 1",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_techno-1",url:"мойки-из-кварца/модель-techno-1.html"},
            {name:"Модель Techno 1R",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_techno-1r",url:"мойки-из-кварца/модель-techno-1r.html"},
            {name:"Модель Techno 2",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_techno-2",url:"мойки-из-кварца/модель-techno-2.html"},
            {name:"Модель Techno 2R",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_techno-2r",url:"мойки-из-кварца/модель-techno-2r.html"},
            {name:"Модель Twin 1",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_tween-1",url:"мойки-из-кварца/модель-twin-1.html"},
            {name:"Модель Twin 2",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_tween-2",url:"мойки-из-кварца/модель-twin-2.html"},
            {name:"Модель Bowl",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_bowl",url:"мойки-из-кварца/модель-bowl.html"},
          ],
          showBreadcrumbsMobile:false,
        }
    },
}
</script>
<style scoped>
  .h2-category {margin-left: -15px;}
  h2, .h2, h3, .h3  {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.katalog img {max-width: 100%;}
.adap-katalog a {
    color: #c8601b;
    text-decoration: underline;
}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>



