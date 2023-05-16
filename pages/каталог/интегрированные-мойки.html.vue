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
<div class="col-xs-12">
<div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition adap-katalog">
<h2 class="h2-category">Мойки из жидкого гранита</h2>
<div class="row">
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog" v-for="(item, index) in granit_arr" :key="index">
    <div v-if="publish_moyka">
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
    <div v-else>
      <a :href="'https://стильный-камень.рф/каталог/'+item.url">
        <div class="img katalog">
          <picture>
            <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
            <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
            <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
          </picture>
        </div>
        {{item.name}}
      </a>
    </div>
  </div>
</div>
<div style="clear:both;"></div>
<h2 class="h2-category">Мойки из акрилового камня</h2>
<div class="row">
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog" v-for="(item, index) in akril_arr" :key="index">
    <div v-if="publish_moyka">
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
    <div v-else>
      <a :href="'https://стильный-камень.рф/каталог/'+item.url">
        <div class="img katalog">
          <picture>
            <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
            <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
            <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
          </picture>
        </div>
        {{item.name}}
      </a>
    </div>
  </div>
</div>
 <div style="clear:both;"></div>
 <h2 class="h2-category">Мойки из кварцевого камня</h2>
<div class="row">
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog" v-for="(item, index) in kvartz_arr" :key="index">
    <div v-if="publish_moyka">
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
    <div v-else>
      <a :href="'https://стильный-камень.рф/каталог/'+item.url">
        <div class="img katalog">
          <picture>
            <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
            <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
            <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
          </picture>
        </div>
        {{item.name}}
      </a>
    </div>
  </div>
</div>
 <div style="clear:both;"></div>
<h2 class="h2-category">Мойки из нержавеющей стали</h2>
<div class="row">
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3 adap-katalog" v-for="(item, index) in nerhz_arr" :key="index">
    <div v-if="publish_moyka">
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
    <div v-else>
      <a :href="'https://стильный-камень.рф/каталог/'+item.url">
        <div class="img katalog">
          <picture>
            <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
            <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
            <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
          </picture>
        </div>
        {{item.name}}
      </a>
    </div>
  </div>
</div>
 <div style="clear:both;"></div>
<h2>Производство интегрированных моек</h2>
<p>Такое новшество, как интегрированная мойка, вызывает массу вопросов. Какие плюсы у данного изделия и есть ли недостатки?
Как выбрать и какого производителя предпочесть? Расскажем обо всем по порядку.</p>
<p>Что касается производителей, изготовление моек за рубежом не подразумевает их превосходства над отечественными изделиями.
Сегодня российские компании выпускают модели, на равных конкурирующие с импортными аналогами. Доказательством этому служит продукция компании
«Стильный камень». У нас производство интегрированных моек выполняется на современном оборудовании с применением новейших технологий, поэтому
наша продукция обладает высоким качеством и гораздо меньшей стоимостью по сравнению с предложениями заграничных брендов (фото моделей вы можете
найти в нашем каталоге).</p>
<h2>Тонкости выбора</h2>
<p style="margin-bottom: 5px;">Сегодня кухонные мойки выпускаются в таком разнообразии, что покупателю порой трудно сориентироваться и сделать правильный выбор.
Наша компания предлагает обратить внимание на мойки из искусственного камня, рассмотрев их плюсы и минусы. К достоинствам можно отнести:</p>
<ul style="margin-top: 0px;">
  <li>- электробезопасность. На первый взгляд кажется, что электричество к мойке не имеет никакого отношения, но если учесть количество приборов на
кухне и вероятность соприкосновения кабелей и воды, низкую степень электропроводности камня сложно переоценить;</li>
  <li>- надежность и прочность – качества, незаменимые для кухни. Сколько всего падает в раковину, воздействию каких температур она подвергается!
Поэтому каменные мойки, устойчивые к деформации (никаких вмятин и царапин), очень ценны в столь экстремальных условиях эксплуатации;</li>
  <li>- хорошее поглощение звуков. Вам надоело слушать лязг и скрежет посуды о дно раковины? Вы можете легко решить эту проблему и заказать в нашей
компании литую мойку из искусственного камня. При этом вы сами решаете, какой формы она будет: круглая, квадратная, прямоугольная и т. д</li>
</ul>

<p>К другим достоинствам интегрированных моек из искусственного камня причисляются удобство обслуживания (грязь и жир не впитываются,
при необходимости легко удаляются с поверхности), богатство цветовой гаммы, хорошая ремонтопригодность. Из возможных минусов таких изделий
можно отметить необходимость замены всей столешницы в случае сильного повреждения чаши.</p>
<p>Компания «Стильный камень» подготовила для вас эксклюзивные предложения. Не упустите возможность приобрести нашу продукцию по выгодным ценам
с возможностью установки по указанному вами адресу.</p>
<p class="proximait">Изготавливаем и устанавливаем интегрированные мойки и раковины из камня на территории Московской, Рязанской и Владимирской областях.</p>
</div>
</div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Интегрированные мойки и раковины из камня",
      meta: [
        { name: 'description', hid: 'description', content: 'Каталог интегрированных моек и раковин из камня.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/интегрированные-мойки.html'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
          page_name:"Интегрированные мойки",
          page_full_name:"Интегрированные мойки и раковины из камня",
          granit_arr:[
            {name:"Угловые",img:"https://стильный-камень.рф/pictures/katalog/slider/Uglovaya-1",url:"интегрированные-мойки/угловые/"},
            {name:"Modern",img:"https://стильный-камень.рф/pictures/katalog/slider/Modern-1",url:"интегрированные-мойки/modern/"},
            {name:"Classic",img:"https://стильный-камень.рф/pictures/katalog/slider/classic-1",url:"интегрированные-мойки/classic/"},
            {name:"Для ванной",img:"https://стильный-камень.рф/pictures/katalog/slider/Rakovina-1",url:"интегрированные-мойки/для-ванной/"}
          ],
          akril_arr:[
            {name:"Кухонные мойки",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_388_new",url:"интегрированные-мойки/мойки-из-акрила.html"},
            {name:"Мойки для ванной",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/akril_201_new",url:"интегрированные-мойки/мойки-из-акрилового-камня-для-ванной/"}
          ],
          kvartz_arr:[
            {name:"Кухонные мойки",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvartz_techno-1",url:"интегрированные-мойки/мойки-из-кварца.html"},
            {name:"Мойки для ванной",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/kvarz_slide",url:"интегрированные-мойки/мойки-из-кварцевого-камня-для-ванной.html"}
          ],
          nerhz_arr:[
            {name:"Мойки",img:"https://стильный-камень.рф/pictures/каталогстмоек/slider/AlveusDUO30Lux",url:"интегрированные-мойки/мойки-из-нержавеющей-стали/"}
          ],
          showBreadcrumbsMobile:false,
          publish_moyka:true,
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
