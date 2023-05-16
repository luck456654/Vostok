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
                <nuxt-link to="/каталог/столешницы.html" append itemprop="item">
                  <span itemprop="name">Столешницы из камня</span>
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
  <a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать столешницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 main-content">

                   <p> Вне зависимости от размеров квартиры или дома соотношение площадей кухни и ванной составляет примерно 2 к 1 в пользу первого помещения. Это объясняет, почему заказы на столешницы из камня в ванную делают реже. С другой стороны, изготовление столешниц на заказ позволяет максимально рационально использовать ограниченное пространство ванных комнат и обеспечивает повышенный комфорт пользователям.
                </p>
                <Pochemu/>
                <h2>Ванная комната со столешницей из камня</h2>
                <p>
                Предметы обстановки ванной подвергаются воздействию высокой влажности при ощутимых колебаниях температуры, поэтому столешницы под раковину из обычных материалов довольно быстро приходят в негодность. Очевидное проявление этого процесса – образование плесени и следов гниения, с которыми очень сложно бороться. С этой точки зрения столешницы из искусственного камня или кварцевого агломерата имеют очевидные преимущества:
                </p>
                <ul>
                    <li>абсолютную устойчивость к влаге, перепадам температуры и гниению;</li>
                    <li>высокую прочность, во много раз превосходя по этому параметру МДФ и другие традиционные материалы;</li>
                    <li>отсутствие ограничений в использовании средств санитарной обработки;</li>
                    <li>возможность использования столешниц с интегрированными мойками и т.д.</li>
                </ul>

                <h2>Столешница для ванной из искусственного (акрилового) камня</h2>
                <p>Не каждый производитель столешниц из акрилового камня располагает такими возможностями, как компания «Стильный камень». Мы изготавливаем полный спектр изделий из искусственного камня, начиная с элементов отделки интерьеров (панелей, плинтусов, ступеней, подоконников) и заканчивая предметами обстановки (стойками баров, столами, мойками, раковинами, столешницами). Наш ассортимент столешниц для ванных включает изделия следующих видов:</p>
                <ul>
                    <li>с интегрированными раковинами, в том числе угловые, двойные и поверхности под встроенную бытовую технику;</li>
                    <li>под врезные раковины;</li>
                    <li>под настольные раковины (чаши).</li>
                </ul>
                <h2>Столешница для ванной из кварцевого агломерата</h2>
                <p>Если вас по каким-либо причинам не устраивает акриловый камень, обратите внимание на столешницы из кварца. Кварцевый агломерат – это природный минерал специальной переработки, который используется в качестве наполнителя при изготовлении предметов из искусственного камня. Статус «ведущий производитель кварцевого агломерата» имеют торговые марки Avant Quartz, Caesarstone, Santa Margeritha, Silestone и некоторые другие бренды.</p>
                <p>
                    Естественный наполнитель определяет эксплуатационные характеристики изделий, поэтому кварцевая столешница для ванной имеет практически идентичные свойства в сравнении с аналогами из цельного камня. У неё большой вес и высокая теплоёмкость. Кварцевый агломерат сложнее в обработке, чем акриловый камень, что накладывает некоторые ограничения на изготовление предметов из кварца.
                </p>
                <h2>Столешница из камня в ванную: купить или заказать</h2>
                <p>Для тех, кого не устраивает готовое изделие в ванную, мы предлагаем разные варианты столешниц с мойками. Стоимость таких изделий указана в прайс-листе. В большинстве случаев изготовление столешниц в ванную осуществляется именно так. Наши специалисты проводят замеры, оценивают особенности помещения и его обстановки, после чего предлагают возможные решения поставленной задачи.</p>
                <p>Для желающих купить столешницу из камня на заказ в Москве цена вопроса не будет выше готовых решений, а результат стоит своих денег. Благодаря высокой технической оснащённости производства, компания «Стильный камень» может предложить исключительно выгодные условия изготовления столешниц и других предметов из акрилового камня и кварцевого агломерата. В числе наших преимуществ самые умеренные цены, оперативное исполнение заказов и официальные гарантии качества.</p>

  </div>
            </div>

            </div>

</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import Pochemu from "~/components/Pochemu.vue";
export default {
  head() {
    return{
      title:"Качественные столешницы для ванной от производителя",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка столешниц для ванной по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-камня-в-ванную.html'},
      ]
    };
  },
  components: {
    Proizvodim,
    ModalCallBack,
    Pochemu,
  },
    data() {
        return {
          page_name:"Столешница из камня в ванную",
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
h1, .h1 {
    font-size: 1.3em;
    text-align: center;
    }
.send-button {float: left;margin-top: 15px;}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
