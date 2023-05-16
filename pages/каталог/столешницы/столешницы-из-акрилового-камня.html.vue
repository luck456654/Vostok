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
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01_akril.webp"  alt="Светлая столешница из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01_akril.jpg"  alt="Светлая столешница из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01_akril.jpg"  alt="Светлая столешница из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02_akril.webp"  alt="Бежевая П-образная столешница">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02_akril.jpg"  alt="Бежевая П-образная столешница">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02_akril.jpg"  alt="Бежевая П-образная столешница">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03_akril.webp"  alt="Серая прямая столешница">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03_akril.jpg"  alt="Серая прямая столешница">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03_akril.jpg"  alt="Серая прямая столешница">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04_akril.webp"  alt="Серая столешница и подоконник">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04_akril.jpg"  alt="Серая столешница и подоконник">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04_akril.jpg"  alt="Серая столешница и подоконник">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/столешницы/галерея-работ-столешниц-из-акрилового-камня.html" append rel="nofollow">
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
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">

<p>Прочный, красивый, неприхотливый в уходе – именно так можно охарактеризовать акриловый камень. Этот материал недавно появился на рынке, но уже успел завоевать большую популярность благодаря внушительному количеству преимуществ. Он изготавливается на основе натурального камня и акриловых смол с добавлением пигментов, поэтому отличается экологичностью и достойным эксплуатационным сроком.</p>
<p>Благодаря уникальным свойствам акриловый камень идеально подходит для отделки бытовых и коммерческих помещений. Его красота обеспечивает привлекательный вид любому интерьеру, повышая уровень его практичности. Ещё один важный нюанс – возможность восстановления в случае повреждения, что характерно далеко не для всех искусственных материалов.</p>
<KamenAkril />
<h2>Акриловый камень: главные преимущества</h2>
<p>Основными преимущественными характеристиками материала являются:</p>
<ul>
    <li>Податливость, позволяющая изготавливать изделия абсолютно любой формы (в том числе и трёхмерные).</li>
    <li>Непористая структура, благодаря которой продукцию из акрилового композита можно эксплуатировать в разных условиях. Материал не впитывает жидкости и ничего не выделяет в окружающую среду, поэтому абсолютно безопасен.</li>
    <li>Устойчивость к агрессивным факторам. Акриловому камню не страшны вода, перепады температуры, плесень. Бактерии не могут проникнуть внутрь материала, поэтому в отношении гигиеничности он превосходит многие другие аналоги.</li>
    <li>Неприхотливость в уходе. Любые загрязнения легко удаляются с поверхности столешниц, не оставляя пятен и желтизны. Достаточно использовать губку и неагрессивные моющие средства, чтобы придать изделиям идеальный вид.</li>
    <li>Возможность ремонта. Если на поверхности акрилового камня появились сколы, трещины, потёртости или царапины, их можно устранить без следа.</li>
    <li>Отсутствие швов между деталями, что позволяет создавать единые пространства со встроенными элементами (подсветкой, декором и т. д.).</li>
    <li>Большой выбор расцветок и фактур. Покупателям доступно около 700 образцов, многие из которых привлекают имитацией натуральных материалов. Благодаря этому можно купить столешницу из камня или другие изделия, которые внешне ничем не будут отличаться от аналогов, изготовленных из мрамора, гранита, дерева, пластика и т. д.</li>
    <li>Приятные тактильные ощущения. Материал принимает температуру окружающей среды, поэтому на ощупь кажется тёплым.</li>
    <li>Гарантия от 10 до 15 лет!</li>
</ul>
</div>
</div>
</div>
<div class="col-xs-12 col-sm-12 col-md-12">
               <div class="row">
                   <div class="col-xs-12 col-sm-8 col-md-9 pull-right">
                       <hr class="blue-line">
                   </div>
                   <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6" itemscope itemtype="http://schema.org/ImageObject" v-for="(item,index) in gallery" v-bind:key="index">
                      <a itemprop="contentUrl" @click.prevent="modalMiniGallery(index)" :href="'https://стильный-камень.рф/assets/images/resources/750/'+item.img+'.jpg'">
                        <img :src="'https://стильный-камень.рф/assets/images/resources/750/360x270/'+item.img+'.jpg'" class="img-responsive hover-effect" :alt="item.name">
                        <span itemprop="caption description" style="display:none;">{{item.name}}</span>
                      </a>

                      <div class="modal-gallery" v-if="modalMiniGalleryBlock&&index==showSlide">
                        <div class="modal-content" >
                          <span class="close-modal-gallery" @click="modalMiniGalleryBlock=!modalMiniGalleryBlock">x</span>
                          <img :src="'https://стильный-камень.рф/assets/images/resources/750/'+item.img+'.jpg'" :alt="item.name">
                          <span class="modal-gallery-name">{{item.name}}</span>
                          <span class="modal-gallery-count">{{index+1}} из 6</span>
                          <button class="slider-button slider-button-left"  @click="prevSlide()"><span>&lt;</span></button>
                          <button class="slider-button slider-button-right" @click="nextSlide()"><span>&gt;</span></button>
                        </div>
                      </div>
                    </div>
                   </div>
                   <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
                   </div>
                  <a href="https://стильный-камень.рф/каталог/столешницы/галерея-работ.html" rel="nofollow" class="link-gal">смотреть всю галерею &gt;</a>

        </div></div>
<div class="col-xs-12 col-sm-12 col-md-12">
               <div class="row">
                  <div class="col-xs-12 kvarc-condition  main-content">
                      <h2>Сфера применения материала</h2>
<p>Акриловый камень чаще всего используется для изготовления изделий, которые применяются на кухне и в ванной комнате, таких как:</p>
<ul>
    <li>столешницы;</li>
    <li>поддоны для душевых кабин;</li>
    <li>мойки и раковины;</li>
    <li>стеновые панели и «фартуки» для кухни;</li>
    <li>подоконники;</li>
    <li>ванны;</li>
    <li>обеденные столы и барные стойки;</li>
    <li>полки и фасады для мебели;</li>
    <li>световые инсталляции;</li>
    <li>различные аксессуары.</li>
</ul>
<h2>Подробнее о столешницах из акрилового камня</h2>
<p>Современные столешницы, созданные из акрилового камня, способны украсить любое помещение. Они выглядят стильно и утончённо, поэтому добавляют в интерьер нотки изящества и благородства.</p>



<p>Благодаря пластичности материала можно изготовить столешницы любой формы и размера. А это обеспечивает большой простор для дизайнерской мысли. Внушительный перечень преимуществ сделал востребованными такие изделия не только в жилых домах, но и в общественных учреждениях. Речь идёт о больницах, лабораториях, школах, столовых и других местах, где строго соблюдаются санитарные нормы.</p>
<h2>Что еще нужно выбрать при заказе столешницы из акрилового камня</h2>
        <h3>Кромки для акрилового камня</h3>
             <div class="row curousel-palitra curousel-palitra-slider" v-if="$store.state.ismobile == 'smartphone'">
                <div class="col-xs-6 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                  <div  v-if="index==slide1Slider1Mob">
                    <a>
                      <picture>
                          <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span>{{item.name}}</span>
                    </a>
                    </div>
                </div>
                <div class="col-xs-6 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                    <div v-if="index==slide2Slider1Mob">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2"  :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                    </div>
                </div>
                <button class="slider-button slider-button-left"  @click="prevSlideSliderMob1()"><span>&lt;</span></button>
                <button class="slider-button slider-button-right" @click="nextSlideSliderMob1()"><span>&gt;</span></button>
              </div>
              <div class="row curousel-palitra curousel-palitra-slider" v-else>
                <div class="col-xs-4 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                  <div  v-if="index==slide1Slider1">
                    <a>
                      <picture>
                          <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span>{{item.name}}</span>
                    </a>
                    </div>
                </div>
                <div class="col-xs-4 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                    <div v-if="index==slide2Slider1">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2"  :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                    </div>
                </div>
                <div class="col-xs-4 item" style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
                  <div  v-if="index==slide3Slider1">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                   </div>
                </div>
                <button class="slider-button slider-button-left"  @click="prevSlideSlider1()"><span>&lt;</span></button>
                <button class="slider-button slider-button-right" @click="nextSlideSlider1()"><span>&gt;</span></button>
              </div>
              <div class="btn-center">
                <a href="https://стильный-камень.рф/каталог/каталог-кромок.html">
                  <button class="content-zakaz">Смотреть все кромки</button>
                </a>
              </div>
              <h3>Мойки из акрилового камня</h3>
            <div class="row curousel-palitra curousel-palitra-slider" v-if="$store.state.ismobile == 'smartphone'">
                <div class="col-xs-6 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in moyka" :key="index">
                  <div  v-if="index==slide1Slider2Mob">
                    <a>
                      <picture>
                          <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span>{{item.name}}</span>
                    </a>
                    </div>
                </div>
                <div class="col-xs-6 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in moyka" :key="index">
                    <div v-if="index==slide2Slider2Mob">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2"  :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                    </div>
                </div>
                <button class="slider-button slider-button-left"  @click="prevSlideSliderMob2()"><span>&lt;</span></button>
                <button class="slider-button slider-button-right" @click="nextSlideSliderMob2()"><span>&gt;</span></button>
              </div>
              <div class="row curousel-palitra curousel-palitra-slider" v-else>
                <div class="col-xs-4 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in moyka" :key="index">
                  <div  v-if="index==slide1Slider2">
                    <a>
                      <picture>
                          <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span>{{item.name}}</span>
                    </a>
                    </div>
                </div>
                <div class="col-xs-4 item"  style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in moyka" :key="index">
                    <div v-if="index==slide2Slider2">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2"  :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                    </div>
                </div>
                <div class="col-xs-4 item" style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in moyka" :key="index">
                  <div  v-if="index==slide3Slider2">
                      <a>
                        <picture>
                            <source type="image/webp" :srcset="item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                            <source type="image/jpg" :srcset="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                            <img :src="item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                        </picture>
                          <span>{{item.name}}</span>
                      </a>
                   </div>
                </div>
                <button class="slider-button slider-button-left"  @click="prevSlideSlider2()"><span>&lt;</span></button>
                <button class="slider-button slider-button-right" @click="nextSlideSlider2()"><span>&gt;</span></button>
              </div>
              <div class="btn-center">
                <a href="https://стильный-камень.рф/каталог/интегрированные-мойки.html">
                  <button class="content-zakaz">Смотреть все мойки</button>
                </a>
              </div>

<h2>Вид столешницы</h2>
<h3>Односторонняя</h3>
<p>Односторонние столешницы подоходят больше для малогабаритных кухонь. У такого изделия мало зон для готовки.</p>
 <div v-if="$store.state.ismobile == 'smartphone'">
   <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
    <div class="row">
      <div v-for="(item, index) in arr.straight" :key="index"  >
        <div  class="catalog-preview_block col-sm-4" v-if="index+1<=firstIndex" >
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
    <div class="open2" @click="changeFirstIndex()" v-if="firstIndex==6&&arr.straight.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
    <div class="open2" @click="returnFirstIndex()" v-else-if="firstIndex>6&&arr.straight.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
    <div class="open2" v-else></div>
  </div>
</div>
<div v-else>
  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
    <div class="row">
      <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr.straight" :key="index"  v-show="index+1<=firstIndex">
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
      <div class="open2" @click="changeFirstIndex()" v-if="firstIndex==6&&arr.straight.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
      <div class="open2" @click="returnFirstIndex()" v-else-if="firstIndex>6&&arr.straight.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
      <div class="open2" v-else></div>
  </div>
 </div>

<h3>Двухсторонняя</h3>
<p>Двухстороняя столешница позволяет разбить и добавить зоны для приготовления на две стороны - это дает больше комфорта хозяйке и возможность свободно готовить двум людям.</p>
<div v-if="$store.state.ismobile == 'smartphone'">
  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div  v-for="(item, index) in arr.corner" :key="index"  >
                              <div class="catalog-preview_block col-sm-4" v-if="index+1<=secondIndex">
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
                     <div class="open2" @click="changeSecondIndex()" v-if="secondIndex==6&&arr.corner.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnSecondIndex()" v-else-if="secondIndex>6&&arr.corner.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
</div>
<div v-else>
  <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                      <div class="row">
                            <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr.corner" :key="index"  v-show="index+1<=secondIndex">
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
                     <div class="open2" @click="changeSecondIndex()" v-if="secondIndex==6&&arr.corner.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnSecondIndex()" v-else-if="secondIndex>6&&arr.corner.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
</div>
<h3>Трехсторонние и более</h3>
<p>Такие столеншницы хорошо подойдут для нестандартных размеров кухонь. Благодаря большой полезной площади нередко на одной стороне размещают барную стойку.</p>
 <div v-if="$store.state.ismobile == 'smartphone'">
   <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                    <div class="row">
                            <div v-for="(item, index) in arr.p_type" :key="index"  >
                              <div class="catalog-preview_block col-sm-4" v-if="index+1<=thirdIndex">
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal3=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal3 == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal3=0" class="close-modal-stone">X</span>
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
                    <div class="open2" @click="changeThirdIndex()" v-if="thirdIndex==6&&arr.p_type.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnThirdIndex()" v-else-if="thirdIndex>6&&arr.p_type.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
</div>
<div v-else>
    <div class="col-sm-12 i-tab owl-paltra_wrapper exampels_photo">
                    <div class="row">
                            <div class="catalog-preview_block col-sm-4" v-for="(item, index) in arr.p_type" :key="index"  v-show="index+1<=thirdIndex">
                                <a
                                    data-fancybox
                                    :href="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url"
                                    class="catalog-preview_wrapper"
                                    :style="{'background-image':'url(https://стильный-камень.рф/assets/images/resources/'+item.id+'/360x270/'+item.url+')'}"
                                    exact
                                    @click.prevent="openSuperModal3=index+1"
                                >
                                    <div class="catalog-preview_title photo_preview_title">
                                        <h4>{{item.name}}</h4>
                                    </div>
                                    <img src="https://стильный-камень.рф/assets/img/zoom.png"  class="view-zoom">
                                </a>
                                <div v-if="openSuperModal3 == index+1"  class="modal-stone" >
                                  <span @click="openSuperModal3=0" class="close-modal-stone">X</span>
                                  <div class="row modal-stone-row">
                                    <div class="modal-stone-prev" style="color: transparent;">&#8592;</div>
                                    <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/assets/images/resources/'+item.id+'/'+item.url" class="modal-stone-img"></div>
                                    <div class="modal-stone-next"  style="color: transparent;" >&#8594;</div>
                                  </div>
                                  <span class="title-modal-stone"> {{item.name}}</span>
                              </div>
                        </div>
                    </div>
                    <div class="open2" @click="changeThirdIndex()" v-if="thirdIndex==6&&arr.p_type.length>6"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
                    <div class="open2" @click="returnThirdIndex()" v-else-if="thirdIndex>6&&arr.p_type.length>6"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
                    <div class="open2" v-else></div>
                </div>
</div>
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

                    <div class="col-xs-12">
<h2>Акриловые столешницы: главные качества</h2>
<p>В числе основных особенностей изделий:</p>
<ul>
    <li><em style="color:#c8601b;">Абсолютная гигиеничность.</em> Каменная столешница изготавливается по бесшовной технологии и не имеет пор. А значит, скопление бактерий в её структуре исключается. Кроме того, можно заказать интегрированную мойку из этого же материала, что обеспечивает отсутствие щелей, в которых скапливается грязь.</li>
    <li><em style="color:#c8601b;">Экологичность и безопасность.</em> Акриловый композит не содержит опасных примесей, не выделяет в окружающую среду вредных веществ и при контакте с пищей не влияет на её вкусовые качества.</li>
    <li><em style="color:#c8601b;">Ремонтопригодность.</em> Даже если столешницам нанесены серьёзные повреждения, во многих случаях их можно восстановить без демонтажа.</li>
    <li><em style="color:#c8601b;">Устойчивость к воздействию окружающей среды.</em> Изделия не боятся влаги, ультрафиолета, кислот, щелочей. Поэтому при долгой эксплуатации они сохраняют свой презентабельный вид.</li>
    <li><em style="color:#c8601b;">Около 700 оттенков.</em> Сегодня на выбор покупателям предлагаются столешницы не только однородные по цвету, но и светопрозрачные и имитирующие различные материалы.</li>
</ul>
<h2>Изготовление: стоимость и сроки</h2>
<p>Желаете заказать столешницу из акрилового камня по доступной цене в Москве или Московской области? Добро пожаловать в компанию «Стильный камень»! Мы можем изготовить изделие, которое будет полностью соответствовать размерам вашей кухни и вашим предпочтениям. Цена заказа зависит от габаритов столешницы, вида выбранного камня и других нюансов. Вы можете рассчитать стоимость уже сейчас с помощью нашего калькулятора. Срок изготовления с обработкой кромок, оформлением бордюров и созданием подставок под горячее – от 3 до 15 дней. Кроме этого, у нас вы можете заказать доставку и установку готового изделия.</p>
       <hr class="blue-line no-mobile"><br>
                <div class="col-sm-12 to-form">
                  <h3>Заказать консультацию</h3>
    <CallBackInPage />
                </div><br>
<p>Выбирая столешницу из акрила, вы выбираете превосходный товар, позволяющий реализовать самые смелые дизайнерские решения при оформлении кухонь, ванных комнат, баров и других помещений!</p>
<p class="proximait">Мы изготавливаем и устанавливаем столешницы из акрилового камня на территории Московской, Рязанской и Владимирской областях.</p>
    <span v-if="showElement"><b>Поделиться:</b></span>
<script type="text/javascript" v-if="showElement">(function(w,doc) {
if (!w.__utlWdgt ) {
    w.__utlWdgt = true;
    var d = doc, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == w.location.protocol ? 'https' : 'http')  + '://w.uptolike.com/widgets/v1/uptolike.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
}})(window,document);
</script>
<div v-if="showElement" data-background-alpha="0.0" data-buttons-color="#607e7e" data-counter-background-color="#ffffff" data-share-counter-size="12" data-top-button="false" data-share-counter-type="disable" data-share-style="0" data-mode="share" data-like-text-enable="false" data-mobile-view="true" data-icon-color="#ffffff" data-orientation="horizontal" data-text-color="#000000" data-share-shape="round-rectangle" data-sn-ids="fb.vk.tw.ok.gp." data-share-size="30" data-background-color="#ffffff" data-preview-mobile="false" data-mobile-sn-ids="fb.vk.tw.wh.ok.vb." data-pid="1633478" data-counter-background-alpha="1.0" data-following-enable="false" data-exclude-show-more="true" data-selection-enable="true" class="uptolike-buttons" ></div>
                    </div>

</div>
</div>
</div>

</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import KamenAkril from "~/components/KamenAkril.vue";
export default {
   head() {
     return{
      title:"Купить или заказать столешницу из акрилового камня в Москве, Рязани и Владимире",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка столешниц из акрилового камня на заказ. Регионы доставки и монтажа: Москва, Рязань, Владимир.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-акрилового-камня.html'},
      ]
    }
   },
    components: {
      ModalCallBack,
      CallBackInPage,
      KamenAkril,
      Proizvodim,
    },
    data() {
        return {
          page_name:"Столешницы из акрилового камня",
          page_full_name:"Столешница из акрилового камня",
           osob:[{name:"Не оставляет пятен",img:"https://стильный-камень.рф/assets/img/osobennost-01.jpg)"},{name:"Простой уход",img:"https://стильный-камень.рф/assets/img/osobennost-02.jpg)"},
                {name:"Износостойкость",img:"https://стильный-камень.рф/assets/img/osobennost-03.jpg)"},{name:"Высокая прочность",img:"https://стильный-камень.рф/assets/img/osobennost-04.jpg)"},
                {name:"Жаростойкость",img:"https://стильный-камень.рф/assets/img/osobennost-05.jpg)"},{name:"Экологичность",img:"https://стильный-камень.рф/assets/img/osobennost-06.jpg)"},
                {name:"Натуральность",img:"https://стильный-камень.рф/assets/img/osobennost-07.jpg)"}],
          gallery:[
            {name:'',img:'e-604-taj-mahal-grandex'},
            {name:'',img:'fs115-shell-staron2'},
            {name:'',img:'a-403-asphalt-material-grandex'},
            {name:'',img:'20180616-155942'},
            {name:'',img:'20180622-155459'},
            {name:'',img:'20180328-145614'}
          ],
          firstIndex:6,
          secondIndex:6,
          thirdIndex:6,
          kromka :[],
          moyka:[],
          showModalCallBack:false,
          slide1Slider1:0,
          slide2Slider1:1,
          slide3Slider1:2,
          slide1Slider2:0,
          slide2Slider2:1,
          slide3Slider2:2,
          slide1Slider1Mob:0,
          slide2Slider1Mob:1,
          slide1Slider2Mob:0,
          slide2Slider2Mob:1,
          long1:null,
          long2:null,
          openSuperModal1:0,
          openSuperModal2:0,
          openSuperModal3:0,
          showElement:false,
          modalMiniGalleryBlock:false,
          showSlide:-1,
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
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stolishnitsa_acril`
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
    async mounted() {
        const kr = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_plintus_kromka.php?data=kromka_acril_new`
            )
            .then(arr => {
                this.kromka  = arr;
                this.long1 = arr.length;
            })
            .catch(err => {
                error(err);
            });
        const mk = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_moyki.php?data=acril_moyka`
            )
            .then(arr => {
                this.moyka  = arr;
                this.long2 = arr.length;
            })
            .catch(err => {
                error(err);
            });
    },
    methods: {
      closeModalCallBack() {
          this.showModalCallBack = false;
        },
        changeFirstIndex() {
            this.firstIndex = 1000;
        },
        returnFirstIndex() {
            this.firstIndex = 6;
        },
        changeSecondIndex() {
            this.secondIndex = 1000;
        },
        returnSecondIndex() {
            this.secondIndex = 6;
        },
        changeThirdIndex() {
            this.thirdIndex = 1000;
        },
        returnThirdIndex() {
            this.thirdIndex = 6;
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
        prevSlideSlider1() {
          const long=this.long1;
          this.slide1Slider1 = ((this.slide1Slider1 + long - 1)%long);
          this.slide2Slider1 = ((this.slide2Slider1 + long - 1)%long);
          this.slide3Slider1 = ((this.slide3Slider1 + long - 1)%long);
        },
        nextSlideSlider1() {
          const long=this.long1;
          this.slide1Slider1 = ((this.slide1Slider1 + 1)%long);
          this.slide2Slider1 = ((this.slide2Slider1 + 1)%long);
          this.slide3Slider1 = ((this.slide3Slider1 + 1)%long);
        },
        prevSlideSlider2() {
          const long=this.long2;
          this.slide1Slider2 = ((this.slide1Slider2 + long - 1)%long);
          this.slide2Slider2 = ((this.slide2Slider2 + long - 1)%long);
          this.slide3Slider2 = ((this.slide3Slider2 + long - 1)%long);
        },
        nextSlideSlider2() {
          const long=this.long2;
          this.slide1Slider2 = ((this.slide1Slider2 + 1)%long);
          this.slide2Slider2 = ((this.slide2Slider2 + 1)%long);
          this.slide3Slider2 = ((this.slide3Slider2 + 1)%long);
        },
        prevSlideSliderMob1() {
          const long=this.long1;
          this.slide1Slider1Mob = ((this.slide1Slider1Mob + long - 1)%long);
          this.slide2Slider1Mob = ((this.slide2Slider1Mob + long - 1)%long);
        },
        nextSlideSliderMob1() {
          const long=this.long1;
          this.slide1Slider1Mob = ((this.slide1Slider1Mob + 1)%long);
          this.slide2Slider1Mob = ((this.slide2Slider1Mob + 1)%long);
        },
        prevSlideSliderMob2() {
          const long=this.long2;
          this.slide1Slider2Mob = ((this.slide1Slider2Mob + long - 1)%long);
          this.slide2Slider2Mob = ((this.slide2Slider2Mob + long - 1)%long);
        },
        nextSlideSliderMob2() {
          const long=this.long2;
          this.slide1Slider2Mob = ((this.slide1Slider2Mob + 1)%long);
          this.slide2Slider2Mob = ((this.slide2Slider2Mob + 1)%long);
        },
    },
}
</script>
<style scoped>
.main-content {margin-top: 20px;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
.float-images {float: left;padding-right: 20px;}
.bottom-box-img {left: -15px;position: relative;}
.send-button {float: left;margin-top: 15px;}
.to-form {
  margin-bottom: 40px;
  margin-top: -20px;
}
hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
}

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
  width: auto;
  max-width: 100%;
  padding-top: 120px;
  margin-left: auto;
  display: block;
  margin-right: auto;
  max-height: 90vh;
}
.modal-gallery span{
  display: inline-block;
  z-index: 11;
}
.close-modal-gallery, .modal-gallery-count {float: right;}
.close-modal-gallery:hover, .modal-gallery-count,.modal-gallery-name {color: #fff;}
.slider-button {color: #ababab !important;}
.slider-button:hover {color: #fff !important;}
.close-modal-gallery{
  float: right;
  margin-top: 50px;
  padding: 10px;
  font-size: 30px;
  cursor:pointer;
  color: #ababab;
}
.modal-gallery-name, .modal-gallery-count {padding-top: 5px;}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
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
