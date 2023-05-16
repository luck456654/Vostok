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
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать стол</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12  offset-40">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
<h2>Кухонные столы из искусственного камня</h2>
<p>Стол в кухне является центром интерьерной композиции. При условии правильного подбора он не только будет служить по своему прямому назначению,
но и станет достойным украшением помещения.</p>
<p>Именно таким является стол из искусственного камня. Популярность материала растет, поскольку его невероятные декоративные
свойства идеально сочетаются с высокими эксплуатационными характеристиками и отличной функциональностью.</p>
<h2>Достоинства стола с каменной поверхностью</h2>
<p>Стол для кухни с каменной верхней панелью имеет множество достоинств. Среди них:</p>
<p>1. <strong>Эстетичный внешний вид</strong>. Красивая поверхность камня в сочетании с разнообразием цветовых решений и структур позволяет
выбрать изделие на любой вкус. Современное производство обладает возможностью выпускать каменные столешницы различных форм, в том числе нестандартных.
Особенно удобны в этом отношении изделия из акрилового камня, легко поддающегося обработке. Компания «Стильный камень» изготавливает столы на заказ
в согласии с пожеланиями клиента. У нас вы можете купить конструкцию в нужном вам цвете с узором, вкраплениями или однотонное либо отдать предпочтение
полированной или матовой поверхности.</p>
<p>2. <strong>Стоимость</strong>. Не сочтите данный пункт за недостаток изделия, даже если цена каменных столов кажется вам завышенной. Их долговечность
и привлекательный внешний вид в течение всего периода эксплуатации окупает все затраты.</p>
<p>3. <strong>Легкость в уходе</strong>. Обеденный стол – место, которое должно всегда оставаться чистым. Ухаживать за гладкой каменной
поверхностью просто. Однородная структура не позволяет воде, жиру или грязи проникать внутрь материала, поэтому развитие плесени и опасных
микроорганизмов исключено.</p>
<p>К прочим преимуществам данных изделий можно отнести стабильность формы (материал невосприимчив к влаге) устойчивость к механическим повреждениям
(не боится царапин), возможность быстрого ремонта методом шлифовки поверхности.</p>
<h2>Столы из кварцевого агломерата</h2>
<p>Мы производим искусственный камень нескольких разновидностей. Самая доступная из них – это обычный акриловый жидкий камень.
Однако он может удовлетворить далеко не всех наших заказчиков. Тем, кто хочет видеть на кухне что-то более основательное, мы предлагаем стильные
столы из кварцевого агломерата. Этот материал с содержанием большого количества
минеральных гранул будет смотреться не хуже натурального камня. Стол из искусственного
кварца будет легко мыться и отлично противостоять химическим и механическим воздействиям.</p>
<h2>Где заказать и купить</h2>
<p>Изготовление столов из искусственного камня – сфера деятельности нашей кампании. На страницах нашего каталога
вы можете увидеть фото выпускаемой нами продукции, прочесть отзывы о ее качестве. Вы можете воспользоваться пакетом дополнительных услуг,
в который входят доставка и установка изделия.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
    head() {
        return {
      title:"Красивые и надежные столы из акрилового искусственного камня | Производство столов, обеденный столик.Угловой, кухонный стол, купить, продажа, цена, стоимость.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовим и установим кухонные и обеденные столы из искусственного камня по выгодным ценам. Компания Стильный Камень.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столы.html'},
      ]
      }
    },
    components: {
      ModalCallBack,
      Proizvodim,
    },
    data() {
        return {
          page_name:"Столы",
          page_full_name:"Столы из камня",
          showModalCallBack:false,
          showElement:false,
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
.offset-40 {padding-left: 30px;}

@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  p, li {margin-block-start: 0;}  

}
@media (max-width: 420px){
  .slider-button-right {
    left: 95%;
  }
  .offset-40 {padding-left: 10px;}
}
</style>
