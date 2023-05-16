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
                    <h2>Столешницы для кухни на заказ</h2>
                   <p> Натуральный камень в интерьерах смотрится роскошно, но позволить себе этот материал могут далеко не многие. У него есть достойная альтернатива в виде искусственного камня на основе акрила и кварцевого агломерата. При этом по многим эксплуатационным характеристикам искусственные материалы явно превосходят натуральный камень.
                </p>
                <Pochemu/>
                <h2>Кухня со столешницей из камня</h2>
                <p>
                К рабочим поверхностям кухонной мебели предъявляются повышенные требования, что связано с разнообразием и интенсивностью эксплуатационных нагрузок. Обеденный стол, подоконник, столешницы с интегрированными мойками и для встроенной бытовой техники должны обладать следующими характеристиками:
                <ul>
                    <li>высокой механической прочностью;</li>
                    <li>стойкостью к загрязнениям, термическим и агрессивным воздействиям, включая использование активных средств бытовой химии;</li>
                    <li>простотой ухода за поверхностями;</li>
                    <li>обеспечивать санитарную и гигиеническую безопасность пользователей.</li>
                </ul>
                </p>
                <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6" itemscope itemtype="http://schema.org/ImageObject" v-for="(item,index) in gallery" v-bind:key="index">
                      <a itemprop="contentUrl" @click.prevent="modalMiniGallery(index)" :href="'https://стильный-камень.рф/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=800&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F67%2F'+item.img+'.jpg'">
                        <img :src="'https://стильный-камень.рф/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=171&h=141&zc=1&far=C&q=90&src=%2Fassets%2Fgallery%2F67%2F'+item.img+'.jpg'" class="img-responsive hover-effect" :alt="item.name">
                        <span itemprop="caption description" style="display:none;">{{item.name}}</span>
                      </a>

                      <div class="modal-gallery" v-if="modalMiniGalleryBlock&&index==showSlide">
                        <div class="modal-content" >
                          <span class="close-modal-gallery" @click="modalMiniGalleryBlock=!modalMiniGalleryBlock">x</span>
                          <img :src="'https://стильный-камень.рф/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=800&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F67%2F'+item.img+'.jpg'" :alt="item.name">
                          <span class="modal-gallery-name">{{item.name}}</span>
                          <span class="modal-gallery-count">{{index+1}} из 6</span>
                          <button class="slider-button slider-button-left"  @click="prevSlide()"><span>&lt;</span></button>
                          <button class="slider-button slider-button-right" @click="nextSlide()"><span>&gt;</span></button>
                        </div>
                      </div>

                    </div>
                   </div>
                  <a class="link-gal" href="https://стильный-камень.рф/каталог/столешницы/галерея-работ-столешниц-из-кварца.html">смотреть всю галерею <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                   <div style="clear:both;"></div>
                <p>Наши изделия в полной мере отвечают самым высоким требованиям качества и эстетики. Более того, в фотогалерее приведены реальные примеры наших работ, выполненных для заказчиков в Москве и области. Наш каталог также предлагает готовые решения по изготовлению столешниц и других предметов из искусственного камня.</p>
                <h2>Столешница для кухни из искусственного (акрилового) камня</h2>
                <p>Под термином «искусственный камень» по умолчанию понимают продукт на основе акрила с наполнителем из тригидрата алюминия и цветных пигментов. Под определение «ведущий производитель этого материала» попадают торговые марки Granistoun. Изделия из акрилового камня отличают такие достоинства, как:</p>
                <ul>
                    <li>отсутствие ограничений по исполнению столешниц – относительно формы, размеров и проч.;</li>
                    <li>самая широкая цветовая палитра;</li>
                    <li>низкая теплопроводность материала, обеспечивающая изделиям из него тёплые на ощупь поверхности;</li>
                    <li>простота устранения любых повреждений.</li>

                </ul>
                <h2>Столешница для кухни из кварцевого агломерата</h2>
                <p>Если сравнивать столешницы из акрилового камня и из кварца, то второй вариант имеет такую же фактуру поверхности, как изделия из натурального камня. Если вас интересует заслуживающий полного доверия производитель кварцевого агломерата для столешниц и других предметов обстановки, рекомендуем продукцию следующих торговых марок:</p>
                <ul>
                    <li>Caesarstone;</li>
                    <li>Silestone;</li>
                    <li>Avant Quartz;</li>
                    <li>Santa Margeritha.</li>
                </ul>
                <p>В отличие от акрилового камня кварцевая столешница намного тяжелее, почти вдвое устойчивее к термическим воздействиям и является холодной на ощупь из-за высокой теплоёмкости. В состав этого материала входит около 92 % кварцевого агломерата и 8 % полимерных связующих. Его труднее обрабатывать и реставрировать в случае повреждений.</p>
                <h2>Столешница из камня для кухни: купить или заказать</h2>
                <p>Желающих приобрести столешницу из искусственного камня или кварцевого агломерата в первую очередь интересует стоимость изделия. Найти ответ на этот вопрос вам поможет наш прайс-лист, онлайн-калькулятор, а также общение со специалистом по телефону или через электронную почту. Цена столешниц от компании «Стильный камень» – самая выгодная для заказчиков в Москве, а также в Московской, Рязанской и Владимирской областях.</p>
                <p>Хотим напомнить, что установку этих столешниц следует доверять профессионалам с большим опытом работы. Именно такие специалисты работают в нашей компании. Мы предлагаем услуги под ключ, в том числе разработку дизайнерского проекта, изготовление и установку столешниц, подоконников и других предметов из искусственного камня. Мы гарантируем, что они идеально впишутся в интерьер вашего дома.</p>

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
      title:"Качественные столешницы для кухни от производителя",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка столешниц для кухни по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-камня-для-кухни.html'},
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
      page_name:"Столешница из камня на кухню",
      gallery:[
        {name:'Светлая резная столешница для кухни в стиле барокко (оформление мойки)',img:'1906'},
        {name:'Резной черный фартук по индивидуальному заказу со столешницей',img:'1929'},
        {name:'Черная столешница и фартук по индивидуальному заказу для стильной кухни',img:'1922'},
        {name:'Столешница П-образной формы для кухни',img:'1919'},
        {name:'Серая столешница с фартуком для небольшой кухни',img:'1911'},
        {name:'Светлая столешница с фартуком для кухни',img:'1910'}
      ],
      showModalCallBack:false,
      modalMiniGalleryBlock:false,
      showSlide:-1,
      showBreadcrumbsMobile:false,
    }
  },
  methods: {
    closeModalCallBack() {
      this.showModalCallBack = false;
    },
    modalMiniGallery(index) {
      this.modalMiniGalleryBlock = true;
      this.showSlide = index;
    },
    prevSlide() {
      this.showSlide = ((this.showSlide + 5)%6);
    },
    nextSlide() {
      this.showSlide = ((this.showSlide + 1)%6);
    },
  }
}
</script>
<style scoped>
h1, .h1 {
    font-size: 1.3em;
    }
.send-button {float: left;margin-top: 15px;}
.modal-gallery {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background: #000000bb;
}
.slider-button {
    top: 50%;
}
.modal-content{
  position: relative;
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  height: 100vh;
}
.modal-gallery img{
  z-index: 11;
  width: 100%;
  max-width: 100%;
  padding-top: 100px;
  margin-left: auto;
  display: block;
  margin-right: auto;
  max-height: 90vh;
}
.modal-gallery span{
  color:#fff;
  display: inline-block;
  z-index: 11;
}
.close-modal-gallery, .modal-gallery-count {float: right;}
.close-modal-gallery{
  float: right;
  margin-top: 50px;
  padding: 10px;
  font-size: 30px;
  cursor:pointer;
}
.modal-gallery-name, .modal-gallery-count {padding-top: 5px;}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
