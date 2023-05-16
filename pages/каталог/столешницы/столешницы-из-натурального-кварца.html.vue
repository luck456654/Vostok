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
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать столешницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12 main-content">
               <div class="row">
                 <div  class="top-img-row">
                    <div class="col-xs-6 col-sm-6 col-md-3">
                       <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit.webp"  alt="Светло-серая столешница из натурального кварца">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit.jpg"  alt="Светло-серая столешница из натурального кварца">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit.jpg"  alt="Светло-серая столешница из натурального кварца">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit2.webp"  alt="Зеленая столешница из натурального кварца">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit2.jpg"  alt="Зеленая столешница из натурального кварца">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit2.jpg"  alt="Зеленая столешница из натурального кварца">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit3.webp"  alt="Белая столешница из натурального кварца">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit3.jpg"  alt="Белая столешница из натурального кварца">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit3.jpg"  alt="Белая столешница из натурального кварца">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit4.webp"  alt="Темно-серая столешница из натурального кварца">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit4.jpg"  alt="Темно-серая столешница из натурального кварца">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/naturalnyi-kvarcit4.jpg"  alt="Темно-серая столешница из натурального кварца">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/столешницы/галерея-работ-столешниц-из-кварца.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
       </div>
      </div>
                    <p>На кухне мы проводим значительную часть своей жизни. Глава семьи всегда позаботится о качественной кухонной мебели - это будет отражаться на качестве
                      блюд и элементарной безопасности. Основа любой кухни - столешница. Банальным деревом уже никого не удивить. Многие граждане отдают предпочтение
                      солидным версиям, которые отличаются не только практичностью, но и шикарным внешним видом. Отличным выбором нашего времени считается натуральный кварц.</p>
                    <p>Столешница из кварцита характеризуется эстетичностью, привлекательностью, элегантностью. Любая кухарка будет счастлива при работе на подобной плоскости.
                      Это один из самых твёрдых материалов, которые уместно задействовать для изготовления мебели. Дизайнеры высоко оценивают богатую цветовую гамму, позволяющую
                      создавать реальные шедевры. Сама природа позаботилась о нашем уюте, придумывая естественные узоры с фантастическим рисунками.</p>
                    <p>Можно легко получить матовую поверхность, подобрать оптимальный вариант под цвет стен, потолка, прочих предметов. Кварц не боится пищевых реагентов,
                      механических повреждений. Вы можете смело резать овощи и фрукты без доски. Столешница не впитывает влагу и бактерии. Для ухода будет достаточно мокрой
                      тряпки, сырьё отличается экологичностью, не имеет радиационного фона. Обязательно внимательно изучите несколько представленных фотографий ниже.</p>
                       <div style="clear:both;"></div>
                       <h3>Прямые столешницы: для малогабаритной кухни</h3>
            <div >
              <div v-if="$store.state.ismobile == 'smartphone'">
                  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div v-for="(item, index) in arr" :key="index"  >
                              <div  class="catalog-preview_block col-sm-4" v-if="index+1<=firstIndex" >
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                                  <div class="row modal-stone-row">
                                    <div class="modal-stone-prev" style="color: transparent;">&#8592;</div>
                                    <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url" class="modal-stone-img"></div>
                                    <div class="modal-stone-next"  style="color: transparent;" >&#8594;</div>
                                  </div>
                                  <span class="title-modal-stone"> {{item.name}}</span>
                              </div>
                            </div>
                        </div>
                    </div>
                     <div class="open2" @click="changeFirstIndex()" v-if="firstIndex==6&&arr.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnFirstIndex()" v-else-if="firstIndex>6&&arr.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
     </div>
     <div v-else>
                  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr" :key="index" v-show="index+1<=firstIndex">
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                                  <div class="row modal-stone-row">
                                    <div class="modal-stone-prev" style="color: transparent;">&#8592;</div>
                                    <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url" class="modal-stone-img"></div>
                                    <div class="modal-stone-next"  style="color: transparent;" >&#8594;</div>
                                  </div>
                                  <span class="title-modal-stone"> {{item.name}}</span>
                              </div>
                        </div>
                    </div>
                     <div class="open2" @click="changeFirstIndex()" v-if="firstIndex==6&&arr.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnFirstIndex()" v-else-if="firstIndex>6&&arr.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
     </div>
                <h2>Разница между кварцем и кварцевым агломератом</h2>
                <div>
                  <p>Обилие предложений по материалам вынуждает потребителя заниматься изучением исходного сырья для производства. Купить столешницу из кварца не всегда просто.
                    Основная масса людей старается иметь дело с натуральным изделием (столешницей из кварца), в составе которого на самом деле имеется не только кварц, но и
                    натуральный полевой шпат, слюда, тальк и ряд минералов.</p>
                  <p class="another-article"> Но кварцевый агломерат на 95% повторяет все свойства природного кварца. Наличие полиэфирной смолы и красителей не навредят нашему
                    организму. Зато декоративные добавки повышают эстетичность продукции, удовлетворят любые вкусовые запросы.</p>
                  <p>Столешница из кварцевого агломерата выгоднее по стоимости! Срок службы, прочность, простота обслуживания, антибактериальные свойства не уступают
                    естественному кварцу.</p>
                </div>
                <h2>Правильный заказ столешницы из кварца от производителя</h2>
                  <p>Мудрый выбор исполнителя и материала - это не только сэкономленные средства, но долгий срок службы, комфорт, позитивная атмосфера. У Вас два
                     пути решения задачи:</p>
                     <ul>
                       <li>Вы звоните нам или заказываете обратный звонок специалиста. Он внимательно выслушивает Вас и делает предварительный расчёт с учётом всех запросов,
                         пожеланий, условий и нюансов.</li>
                     </ul>

    <CallBackInPage />
     <div class="row">
                  <div class="col-xs-12 col-sm-12">
                  <ul>
                       <li>Вы производите самостоятельный расчёт с помощью онлайн-калькулятора на сайте: <a  href="https://стильный-камень.рф/цена-за-метр-столешницы.html">калькулятор стоимости </a>столешницы. Такой подход
                       удобен, если Вы ещё только думаете о будущей покупке, взвешиваете свои финансовые возможности, просматриваете различные варианты благоустройства личного
                       жилища.</li>
                  </ul>
                  <p>Если Вы твёрдо намерены сделать свою кухню идеальной и безупречной - оформляйте заказ, приглашайте специалиста на дом. Вам только нужно внести предоплату и
                    определиться с потребностями. Всё остальное выполнят профи. Мы гарантируем оперативное изготовление. Квалифицированные мастера доставят продукт, сделают
                    качественный монтаж. Мы имеем возможность обслуживать не только столицу, но и всё Подмосковье.</p>
                  <p>Вы всё ещё в раздумьях какой материал от производителя выбрать для будущей столешницы? В эпоху экономии и бережного отношения к финансам принято выбирать
                    кварцевый агломерат. И в этом поможет раздел <nuxt-link to="/столешницы-из-кварца.html">столешницы из кварцевого агломерата</nuxt-link>. Он ничем не хуже
                    натурального сырья.</p>
                </div>
        </div>
                   <div class="col-xs-12 col-sm-8 col-md-8 kvarc-condition  pull-right" v-if="showElement">
               <span><b>Поделиться:</b></span>
<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,viber,telegram"></div>
                  </div>
</div>
               </div>
               </div>

</template>

<style scoped>
  .main-content {margin-top: 20px;}
  .top-img-row {margin-top: 20px;margin-bottom: 20px;}
  .top-img-row  img{padding: 5px;margin-bottom: 20px}
  .float-images {float: left;padding-right: 20px;}
  .bottom-box-img {left: -15px;position: relative;}
  .send-button {float: left;margin-top: 15px;}
  hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  p, li {margin-block-start: 0;}
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
  .curousel-palitra-slider {margin-right: 0;margin-bottom: 10px;}
  .curousel-palitra-slider .slider-button-right {
    left: calc(100% - 15px);
  }
  .content-zakaz {padding: 5px 20px;font-size: 12px;margin-bottom: 10px;margin-top: 10px;min-width: 128px;}
  .curousel-palitra .item a span {font-size: 12px}
  a.link-gal {margin-bottom: 10px;}
  .slider-button-left {left: -10%;}
  .no-mobile {display: none;}
}
</style>

<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
export default {
  head() {
    return{
      title:"Столешницы из натурального кварца от «Стильный Камень» для Москвы и Московской области",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка столешниц из натурального кварца по ценам от производителя.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-натурального-кварца.html'},
      ]
    }
    },
    data() {
        return {
          page_name:"Столешницы из натурального кварца",
          page_full_name:"Столешницы из натурального кварца(Кварцита)",
          firstIndex:6,
          openSuperModal:0,
          showModalCallBack:false,
          showElement:false,
          showBreadcrumbsMobile:false,
        }
    },
    components: {
      Proizvodim,
      ModalCallBack,
      CallBackInPage,
    },
    async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stolishnitsa_kvartz_nature`
            )
            .then(arr => {
                return {
                    arr:arr,
                };
            })
            .catch(err => {
                error(err);
            });
    },
    methods: {
        changeFirstIndex() {
            this.firstIndex = 1000;
        },
        returnFirstIndex() {
            this.firstIndex = 6;
        },
        closeModalCallBack() {
          this.showModalCallBack = false;
        },
    },
}
</script>
