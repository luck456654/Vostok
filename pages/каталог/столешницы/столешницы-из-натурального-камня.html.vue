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
<div class="col-xs-12 main-content">
              <div class="row">
                 <div  class="top-img-row">
                    <div class="col-xs-6 col-sm-6 col-md-3">
                       <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya4.webp"  alt="Светлая столешница из натурального камня с узором">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya4.jpg"  alt="Светлая столешница из натурального камня с узором">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya4.jpg"  alt="Светлая столешница из натурального камня с узором">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya3.webp"  alt="Столешница из натурального камня с дорогим узором">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya3.jpg"  alt="Столешница из натурального камня с дорогим узором">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya3.jpg"  alt="Столешница из натурального камня с дорогим узором">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya2.webp"  alt="Темная столешница из натурального камня с разноцветными вкраплениями">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya2.jpg"  alt="Темная столешница из натурального камня с разноцветными вкраплениями">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya2.jpg"  alt="Темная столешница из натурального камня с разноцветными вкраплениями">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya1.webp"  alt="Светлая столешница из натурального камня с двумя цветовыми решениями">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya1.jpg"  alt="Светлая столешница из натурального камня с двумя цветовыми решениями">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshnica-iz-naturalnogo-kamnya1.jpg"  alt="Светлая столешница из натурального камня с двумя цветовыми решениями">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/столешницы/галерея-работ.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
       </div>
              <div>

                   <p> Если нужна столешница, способная выдерживать долгую эксплуатацию, то вариант, изготовленный из натурального камня, подходит как нельзя лучше. В настоящее время для создания таких изделий используется несколько материалов:
                </p><br>
                <h2>Из мрамора</h2>
                <p>
               Этот природный камень ‒ практичное решение для оформления кухонь и других помещений. Он отличается богатым выбором расцветок, и если не хочется использовать белый (классический) мрамор, то можно выбрать материал розового, серого, зелёного и других оттенков. Благодаря этому доступно воплощение самых оригинальных дизайнерских идей.
                </p>
                <h2>Из гранита</h2>
                <p>Очень износостойкий материал, издавна используемый для производства столешниц. В отличие от мрамора он не обладает богатой палитрой оттенков, но при этом считается более твёрдым и износоустойчивым. Столешница из натурального камня для кухни, выполненная с использованием гранита, выглядит красиво и не требует особого ухода. Влажной уборки достаточно, чтобы поддерживать её в идеальной чистоте.</p>
                <h2>Из оникса</h2>
                <p>Среди натуральных камней оникс занимает особое место, поскольку сочетает всевозможные оттенки и фактуры и способен украсить любой интерьер. Однако самое главное его преимущество ‒ способность пропускать свет на глубину 5 см. Поэтому создаётся ощущение, что он имеет приглушённую подсветку.</p>

            <div class="main-content">
                <h2>Почему мы</h2>
                <Pochemu/>
                </div>
<div class="zero"></div>
                <h2>Свойства натурального камня</h2>
                <div class="main-content">
                        <div class="clearfix ossobennosti osqwst icons-row">
                          <div class="row">
                            <div class="item" v-for="(item,index) in osob" :key="index">
                                <div class="img" :class="'img-'+item.idx"></div>
                                <span>{{item.name}}</span>
                           </div>
                            </div>
                        </div>
                    </div>
                <p>Сегодня из природного камня изготавливается много практичных изделий, и столешницы в том числе. Это вовсе не удивительно, ведь такой материал обладает массой положительных характеристик, в числе которых:</p>
                <ul>
                    <li>Высокий уровень прочности. Натуральный камень способен выдерживать большие нагрузки. Он устойчив к царапинам, перепадам температуры и не боится влаги. При бережном отношении поверхность каменных изделий на протяжении многих лет сохраняет свой презентабельный вид.</li>
                    <li>Неповторимая фактура и богатый выбор расцветок. Слоистая структура камня смотрится очень красиво. А когда этот материал правильно обработан, он может стать украшением даже самого роскошного интерьера.</li>
                    <li>Влагоустойчивость. Пролитый на каменную столешницу кофе, чай или сок не впитается и не приведёт к деформации материала.</li>
                    <li>Простота в уходе. Поддерживать камень в чистоте несложно. Достаточно воды, губки и немного моющего средства, чтобы убрать любые загрязнения.</li>
                    <li>Устойчивость к высоким температурам. Камень не горит и не разрушается, если на него поставить кастрюлю с горячей водой или сковороду, снятую с плиты.</li>
                </ul>

                <h2>Установка</h2>
                <p>Если вы хотите купить и установить столешницу из натурального камня от производителя, обращайтесь в компанию «Стильный камень». Здесь вы сможете выбрать изделие, которое будет полностью отвечать вашим запросам. Мы предлагаем столешницы, изготовленные из качественного мрамора, гранита, оникса. Все варианты отличаются долгим эксплуатационным сроком, презентабельным внешним видом и адекватной стоимостью. Помимо предоставления большого ассортимента наша компания оказывает услуги по доставке и установке столешниц. Монтаж выполняется специалистами с большим опытом, поэтому вам ничего не придётся переделывать.</p>
                <hr class="blue-line no-mobile">
                <div class="row">
                <div class="col-xs-12 col-sm-12 to-form">
                  <h3>Заказать консультацию</h3>
    <CallBackInPage />
                  <br>
                  </div>
                </div>
              <div class="row">
                 <div class="col-xs-0 left-box-icons left-box-icons-pages">
                       <div class="left-menu-icon">
                           <a class="zakaz-kamen" @click.prevent="showModalCallBack = !showModalCallBack"><img class="ugol-left" src="https://стильный-камень.рф/assets/newdisign/img/ugol-left-menu.png">
                           <span class="text-calc">ОСТАЛИСЬ ВОПРОСЫ?</span>
                           <img class="icon-other" src="https://стильный-камень.рф/assets/newdisign/img/vopros-icon.png"></a>
                       </div>
                <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
                   </div>

                <div class="col-sm-12">
                  <h2>Как заказать столешницу из натурального камня</h2>
                  <p>Изготовление столешниц на заказ ‒ ещё одна услуга компании «Стильный камень», которой вы можете воспользоваться уже сегодня. Опытные мастера создадут красивое изделие по вашим чертежам; если вы не можете предоставить чертёж, вам на помощь придут наши дизайнеры.</p>
                  <p>Прежде чем оформлять индивидуальный заказ, определитесь с выбором натурального камня, формой изделия, его размерами. Эти параметры очень важны, поскольку от них зависит удобство эксплуатации столешницы. При необходимости задайте интересующие вас вопросы нашим консультантам.</p>
                  <p class="proximait">Мы изготавливаем и устанавливаем столешницы из натурального камня на территории Московской, Рязанской и Владимирской областях.</p>
                </div>
               <div class="row" v-if="showElement">
                 <div class="col-xs-12 kvarc-condition  pull-right">
               <span><b>Поделиться:</b></span>
<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,viber,telegram"></div>
                  </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import Pochemu from "~/components/Pochemu.vue";
export default {
  head() {
     return{
      title:"Изготовление и установка столешниц из натурального камня в Москве, Рязани и Владимире",
      meta: [
        { name: 'description', hid: 'description', content: 'Заказать или купить столешницу из натурального камня от производителя по доступным ценам. Мрамор, Оникс, Гранит.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-натурального-камня.html'},
      ]
     }
    },
    components: {
      Proizvodim,
      ModalCallBack,
      CallBackInPage,
      Pochemu,
    },
    data() {
        return {
          page_name:"Столешницы из натурального камня",
          link_arr:[
            {name:"Кварцевый агломерат",url:"https://стильный-камень.рф/каталог/изделия-из-кварцевого-агломерата/"},
            {name:"Акриловый камень",url:"https://стильный-камень.рф/каталог/изделия-из-акрилового-камня/"},
            {name:"Жидкий гранит",url:"https://стильный-камень.рф/каталог/изделия-из-жидкого-гранита"},
            {name:"Натуральный камень",url:"https://стильный-камень.рф/каталог/изделия-из-натурального-камня"},
            {name:"Дерево",url:"https://стильный-камень.рф/каталог/столешницы/столешницы-из-массива-дерева.html"},
          ],
           osob:[{name:"Не оставляет пятен",img:"https://стильный-камень.рф/assets/img/osobennost-01.jpg)",idx:"1"},{name:"Простой уход",img:"https://стильный-камень.рф/assets/img/osobennost-02.jpg)",idx:"2"},
                {name:"Износостойкость",img:"https://стильный-камень.рф/assets/img/osobennost-03.jpg)",idx:"3"},{name:"Высокая прочность",img:"https://стильный-камень.рф/assets/img/osobennost-04.jpg)",idx:"4"},
                {name:"Жаростойкость",img:"https://стильный-камень.рф/assets/img/osobennost-05.jpg)",idx:"5"},{name:"Экологичность",img:"https://стильный-камень.рф/assets/img/osobennost-06.jpg)",idx:"6"},
                {name:"Натуральность",img:"https://стильный-камень.рф/assets/img/osobennost-08.jpg)",idx:"8"}],
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
.ossobennosti {padding-left: 15px;}
.send-button {float: left;margin-top: 15px;}
.blue-line {margin-bottom: 0;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
.send-button {float: left;margin-top: 15px;padding: 10px 40px;}
.to-form {
  margin-bottom: 40px;
  margin-top: -20px;
}
@media (min-width: 501px) {
    .osqwst .item {width:33.33333333%;}
    .osqwst .item:last-child {margin-left: 33.33333333%;}
}
@media (min-width: 768px) {
    .osqwst .item {width:25%;}
    .osqwst .item:nth-child(5) {margin-left: 12.5%;}
    .osqwst .item:last-child {margin-left: 0;}
}

@media (min-width: 992px) {
    .osqwst .item {width:20%;}
    .osqwst .item:nth-child(6) {margin-left: 30%;}
    .osqwst .item:nth-child(5) {margin-left: 0;}
}

@media (min-width: 1200px) {
    .osqwst .item {width:fit-content;}
    .osqwst .item:nth-child(6) {margin-left: 0;}
}
@media (max-width: 500px) {
  h1, .h1 {
    font-size: 1.1em;
  }
  .osqwst .item {width:50%;}
  .osqwst .item:last-child {margin-left: 25%;}
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px; max-width: 120%;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
  .item-row span {font-size: 11px;}
  .no-mobile {display:none;}
}
</style>
