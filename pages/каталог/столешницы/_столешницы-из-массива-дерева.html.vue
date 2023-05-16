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
  <div class="col-xs-12">
    <div class="row">
        <div class="col-xs-12 main-content kvarc-condition">
                <p>Дерево было и будет востребованным сырьём для строительства, обустройства нашего быта. Никакие ультрасовременные материалы не заменят его качеств и экологических преимуществ. Изделие отлично впишется в интерьер, это прекрасный вариант для производства столешницы на кухню.</p>

                <div v-if="$store.state.ismobile == 'smartphone'">
                  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div v-for="(item, index) in arr1" :key="index"  >
                              <div  class="catalog-preview_block col-sm-4" v-if="index+1<=firstIndex1" >
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal1=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal1 == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal1=0" class="close-modal-stone">X</span>
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
                    <div class="open2" @click="changeFirstIndex1()" v-if="firstIndex==6&&arr1.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnFirstIndex1()" v-else-if="firstIndex>6&&arr1.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
     </div>
     <div v-else>
                  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr1" :key="index" v-show="index+1<=firstIndex1">
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal1=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal1 == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal1=0" class="close-modal-stone">X</span>
                                  <div class="row modal-stone-row">
                                    <div class="modal-stone-prev" style="color: transparent;">&#8592;</div>
                                    <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url" class="modal-stone-img"></div>
                                    <div class="modal-stone-next"  style="color: transparent;" >&#8594;</div>
                                  </div>
                                  <span class="title-modal-stone"> {{item.name}}</span>
                              </div>
                        </div>
                    </div>
                    <div class="open2" @click="changeFirstIndex1()" v-if="firstIndex==6&&arr1.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnFirstIndex1()" v-else-if="firstIndex>6&&arr1.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
     </div>
                <h2>Столешницы из дерева: огромный ассортимент пород</h2>
                <p>Грамотный выбор исходного материала для изготовления предметов домашнего обихода определит не только стоимость заказа, но и потребительские свойства, уют и атмосферу в жилище.</p>
                <h3>Из дуба</h3>
                <p>Ключевым преимуществом дуба является возможность использовать цельный материал. Хотя и сращённая столешница не будет уступать по качеству. Мастера легко замаскируют место стыка, на прочность и простоту ухода это не повлияет. Долговечность, солидный имидж - малая доля достоинств. Вы сможете заказать продукцию любой формы. Часто люди желают приобрести "состаренную" версию.</p>
                 <div v-if="$store.state.ismobile == 'smartphone'">
                  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div v-for="(item, index) in arr2" :key="index"  >
                              <div  class="catalog-preview_block col-sm-4" v-if="index+1<=firstIndex2" >
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal2=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal2 == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal2=0" class="close-modal-stone">X</span>
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
                     <div class="open2" @click="changeFirstIndex2()" v-if="firstIndex1==6&&arr2.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnFirstIndex2()" v-else-if="firstIndex1>6&&arr2.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
     </div>
     <div v-else>
                  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr2" :key="index" v-show="index+1<=firstIndex2">
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal2=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal2 == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal2=0" class="close-modal-stone">X</span>
                                  <div class="row modal-stone-row">
                                    <div class="modal-stone-prev" style="color: transparent;">&#8592;</div>
                                    <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url" class="modal-stone-img"></div>
                                    <div class="modal-stone-next"  style="color: transparent;" >&#8594;</div>
                                  </div>
                                  <span class="title-modal-stone"> {{item.name}}</span>
                              </div>
                        </div>
                    </div>
                    <div class="open2" @click="changeFirstIndex2()" v-if="firstIndex2==6&&arr2.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnFirstIndex2()" v-else-if="firstIndex2>6&&arr2.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
     </div>
                <h3>Из сосны</h3>
                <p>За тысячелетия использования сосна доказало свою преданность человеку. Оно прекрасно пахнет, подходит для любых конструктивных решений. Заказчик может экспериментировать с формой будущего изделия. Материал легко красить, многие изготовители предлагают бесцветную поставку. А покраску совершает потребитель. Сосна хорошо поддаётся брашированию, замечательно смотрится "состаренный" вариант.</p>
                <h3>Из ясеня</h3>
                <p>Материал характеризуется практичностью и долговечностью. С ним любят иметь дело дизайнеры, это хорошая версия для декорирования. Тепло и уют поселятся в квартире, если Вы решите отдать предпочтение ясеню. Вы сможете покрасить и перекрасить изделие, хозяйка будет испытывать максимальный комфорт при приготовлении обеда и ужина.</p>
                <h3>Из лиственницы</h3>
                <p>Кухонную мебель из данного материала заказывают часто. Листвинница подходит для цельного применения, сращенные варианты также доказали свою состоятельность. Это дерево длительное время будет хранить лоск и шик, оно не боится сырости и температурных перепадов. Не составит труда подобрать бюджетную версию.</p>

                <h2>Основные преимущества столешниц из дерева</h2>
                <p>Дерево предки использовали с давних времён. Именно естественный природный материал даёт максимальный комфорт и душевный уют. Многие стили оформления подразумевают именно дерево в качестве главного компонента. Без него невозможно обустроить кухню "кантри" или итальянский вариант. С деревом легко работать, его можно ремонтировать и перемещать на новую точку. Лёгкость не создаёт дополнительную нагрузку на полы. Всех устраивает цена, экологичность, безупречный внешний вид. Дерево сочетается со всеми компонентами, оно химически инертно и безопасно!</p>

                <h2>Что необходимо для заказа деревянной столешницы</h2>
                <p>Заранее надо изучить свойства породы дерева, сопоставить их с личными пожеланиями. Стоит определиться с размерами и вызвать на дом замерщика. Если возникнут вопросы по характеристикам изделия, Вы всегда можете проконсультироваться у нашего менеджера по телефону <a href="tel:+74994080079">+7 499 408 00 79 </a>. Только после учёта всех тонкостей и условий помещения можно оформлять заказ и узнать точную суму к оплате.</p>

        </div>
    </div>
</div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() { return {
      title:"Деревянные столешницы на заказ",
      meta: [
        { name: 'description', hid: 'description', content: 'Деревянные столешницы на заказ от компании «Стильный камень».'},
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-массива-дерева.html' },
      ]
    }},
    components: {
    Proizvodim,
    },
    data() {
        return {
          page_name:"Столешницы из массива дерева",
          firstIndex1:6,
          firstIndex2:6,
          openSuperModal1:0,
          openSuperModal2:0,
          showBreadcrumbsMobile:false,
        }
    },
    async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stolishnitsa_wood`
            )
            .then(arr => {
                return {
                    arr1:arr.main,
                    arr2:arr.oak,
                };
            })
            .catch(err => {
                error(err);
            });
    },
    methods: {
        changeFirstIndex1() {
            this.firstIndex1 = 1000;
        },
        returnFirstIndex1() {
            this.firstIndex1 = 6;
        },
        changeFirstIndex2() {
            this.firstIndex2 = 1000;
        },
        returnFirstIndex2() {
            this.firstIndex2 = 6;
        },
    },
}
</script>
<style scoped>
@media screen and (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }

 p, li {margin-block-start: 0;}
}
</style>
