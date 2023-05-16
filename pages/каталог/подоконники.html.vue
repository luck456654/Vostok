<template>
<div>
    <Proizvodim/>
<div class="col-xs-12 nav-content offset-40">
      <div class="crumbs">
          <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb">
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
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать подоконник</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<h2>Заказать подоконник из камня. Зачем?</h2>
<p>На сегодняшний день подоконник в квартире играет куда более важную роль, чем несколько лет назад. С его помощью можно существенно увеличить полезную площадь рабочего пространства, к примеру, сделав продолжением столешницы в комнате или на кухне. Поэтому к его выбору следует подойти основательно, ведь вряд ли кому-то захочется заниматься заменой конструкции через три-четыре года после установки.</p>
<h2>Изготовление и установка подоконников из камня</h2>
<p>При изготовлении подоконников применяются различные материалы, однако особого внимания заслуживают изделия из натурального и искусственного камня. Если первые обладают естественными трещинами в структуре поверхности и отличаются не самой низкой ценой, их искусственные аналоги обладают массой преимуществ и по стоимости доступны для людей с любым достатком.</p>
<p>К достоинствам подоконников из искусственного камня относятся:</p>
<p>* долговечность и практичность. Изделия устойчивы к повреждениям механического характера (царапинам, сколам), к воздействию химических веществ (чистящих средств), не боятся влаги, на них не видны следы грязи и подтеки (в отличие от конструкций из ПВХ);</p>
<p>* красивый внешний вид. Искусственный камень очень похож на природный, за гладкой поверхностью легко ухаживать, она быстро чистится, не впитывает неприятные запахи, долго сохраняет блеск;</p>
<p>* многообразие форм и расцветок. Современное производство делает возможным изготовление подоконников самых разных конфигураций. При этом изделия из искусственного камня отличаются меньшим весом по сравнению со своими натуральными собратьями. Богатая цветовая палитра позволяет купить конструкцию, идеально подходящую к вашему интерьеру.</p>
<h2>Как заказать подоконник из камня</h2>
<p>Заказать подоконник из искусственного камня вы можете на нашем сайте. В ассортименте представлены изделия, способные подчеркнуть индивидуальность вашего интерьера и даже стать его изюминкой. Оценить красоту моделей вас помогут фото, представленные в нашем каталоге.</p>
<p>Мы принимаем заказы по телефону и готовы перезвонить вам, если вы оставите нам свой номер. Мы практикуем индивидуальный подход к каждому клиенту. Ждем ваших заявок – мы уверены, что сможем порадовать вас не только высоким качеством нашей продукции, но и ее доступной стоимостью!</p>
<p class="proximait">Изготавливаем и устанавливаем подоконники из камня на территории Московской, Рязанской и Владимирской областях.</p>
</div></div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Производство, установка и продажа подоконников из камня| Москва, Рязань, Владимир. Цена, стоимость, купить",
      meta: [
        { name: 'description', hid: 'description', content: 'Компания &quot;Стильный камень&quot; изготавливает и уставливает подоконники из искусственного камня на заказ в Москве, Рязани и Владимире'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/подоконники.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Подоконники",
          page_full_name:"Подоконники из камня",
          showModalCallBack:false,
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

