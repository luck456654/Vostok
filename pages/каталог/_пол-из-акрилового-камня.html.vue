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
  <a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать пол</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content"><br>
<p>Пол из акрилового камня – это техника авангарда и почти бесконечные возможности. Он преображает помещение, делает его ослепительным и презентабельным.</p>
<h2>Плюсы и минусы пола из акрилового камня</h2>
<p>Чем хорошо такое покрытие помимо эстетической составляющей? У пола из акрилового камня много достоинств. Среди них:</p>
<ul>
    <li>хорошая устойчивость к царапинам;</li>
    <li>непористая структура, обеспечивающая гигиеничность поверхности;</li>
    <li>простое обслуживание;</li>
    <li>влагостойкость и устойчивость к таким продуктам, как вино, масло, фруктовые соки, кофе и т. п.;</li>
    <li>термостойкость (пол выдерживает температуру до 90 °С);</li>
    <li>широкий выбор цветов и оттенков;</li>
    <li>отсутствие видимых швов.</li>
</ul>
<p>Практичное и стильное покрытие имеет много областей применения. Оно зарекомендовало себя с лучшей стороны не только в дизайне домашних интерьеров (кухонь, холлов, спален), но и в магазинах, клиниках, лабораториях, стоматологических кабинетах, салонах красоты с достаточно большой проходимостью.</p>
<p>Хотим сразу предвосхитить вопрос относительно того, насколько скользкий этот пол. Он имеет антискользящее покрытие. Ощущение того, что на нём можно поскользнуться, появляется за счёт его зеркально глянцевой поверхности, где отражается свет люстр и ламп.</p>
<h2>Как рассчитать стоимость пола</h2>
<p>Чтобы опередлить стоимость пола из акрилового камня, вы можете воспользоваться удобным онлайн-калькулятором. Сумма будет зависеть от нескольких параметров:</p>
<ul>
    <li>ширины, длины, толщины;</li>
    <li>производителя материала;</li>
    <li>выбранной палитры (большой выбор цветов и всевозможных оттенков можно увидеть в разделе «<a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a>»);</li>
    <li>используемых торцевых кромок.</li>
</ul>
<p>Приемлемая стоимость красивого материала делает его прекрасной альтернативой дорогостоящему покрытию из натурального камня.</p>
<h2>Как заказать пол</h2>
<p>Купить пол из акрилового камня у нас достаточно выгодно и просто. Если вы знаете размеры помещения и выбрали цвет, вам нужно связаться с нами и сделать заказ. Наши специалисты сделают точные расчёты, разработают эскиз, соответствующий всем вашим пожеланиям. Затем мастера компании произведут монтаж на объекте.</p>
<h3>Почему у Стильного камня?</h3>
<p>Благодаря наличию собственного производства, мы не используем услуги посредников. Это положительно влияет на итоговую сумму заказа.</p>
<p>Мы работаем быстро и без потери качества. Предоставляем 3-летнюю гарантию на полы из акрилового камня и другую продукцию. Все изделия «Стильного камня» имеют сертификаты безопасности и гигиеничности.</p>
<p>Мы оказываем целый ряд дополнительных услуг, в том числе осуществляем ремонт и постпродажное обслуживание.</p>
<p>Своим постоянным партнёрам «Стильный камень» предлагает интересные условия, информационную и маркетинговую поддержку, а также индивидуальные программы сотрудничества.</p>
<p>Мы готовы оказать помощь в создании собственного выставочного зала с предоставлением всех необходимых образцов.</p>
<h3>Охват городов</h3>
<p class="proximait">Компания «Стильный камень» работает на территории Москвы, Московской области. На данный момент здесь расположено 10 наших представительств. Готовые изделия можно посмотреть более чем в 50 столичных мебельных магазинах.</p>
<p class="proximait">Кроме этого, мы принимаем заказы в Рязани, Владимире и их областях.</p>
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
      title:"Пол из акрилового камня для жителей Москвы, Рязани, Владимира. Недорого и качественно.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка пола из акрилового камня по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/пол-из-акрилового-камня.html'},
      ]
    };
  },
    components: {
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Полы из акрилового камня",
          page_full_name:"Пол из акрилового камня",
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
h2, .h2, h3, .h3  {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>
