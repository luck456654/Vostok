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
                <a href="https://стильный-камень.рф/каталог/столешницы.html" itemprop="item">
                  <span itemprop="name">Столешницы из камня</span>
                </a>
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
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
                  <div  class="top-img-row">
                    <div class="col-xs-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01.webp"  alt="Темная столешница из жидкого камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01.jpg"  alt="Темная столешница из жидкого камня">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01.jpg"  alt="Темная столешница из жидкого камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02.webp"  alt="Белая столешница из жидкого камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02.jpg"  alt="Белая столешница из жидкого камня">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02.jpg"  alt="Белая столешница из жидкого камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03.webp"  alt="Зеленая столешница из жидкого камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03.jpg"  alt="Зеленая столешница из жидкого камня">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03.jpg"  alt="Зеленая столешница из жидкого камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04.webp"  alt="Коричневая столешница из жидкого камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04.jpg"  alt="Коричневая столешница из жидкого камня">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04.jpg"  alt="Коричневая столешница из жидкого камня">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/столешницы/галерея-работ-столешниц-из-жидкого-гранита.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
       </div>
<p>Каменная столешница способна придать любому интерьеру элитарный вид. Технологии, позволившие создавать искусственные изделия, имитирующие натуральный камень, открыли перед ценителями эстетики широкие возможности для оформления кухонь, ванных комнат и других помещений. Жидкий гранит обладает отличными технико-эксплуатационными и эстетическими свойствами. Это композитный материал, включающий минеральные или синтетические наполнители и пигменты. Столешницы изготавливаются методом литья или с помощью напыления на матрицу. После финишной обработки их поверхность полностью передаёт красоту натуральных камней.</p>
<div v-if="$store.state.visitedQuartz==1">
  <h3 id="h3Color">Спросить у менеджера различия жидкого гранита и кварцевого агломерата</h3>
  <Difference />
  <br>
</div>
<h3>Палитра камня</h3>
    <KamenGranit />
         <div class="btn-center">
                <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                  <button class="content-zakaz">Смотреть всю палитру</button>
                </a>
              </div>
<h3>Кромки для жидкого камня</h3>
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
              <h3>Мойки из жидкого камня</h3>
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
<h2>Достоинства изделий из жидкого камня</h2>
<p>Технология «спрей-гранит» позволяет создавать поверхности столешниц с текстурой гранита. Благодаря разнообразию цветовой гаммы можно реализовать любые дизайнерские решения. Жидкий гранит позволяет создавать изделия сложной формы.</p>
<p>Столешница из жидкого камня обладает целым рядом достоинств:</p>
<ul>
    <li>привлекательным внешним видом;</li>
    <li>антибактериальными свойствами;</li>
    <li>устойчивостью к высоким температурам и влаге;</li>
    <li>высокой прочностью и долговечностью;</li>
    <li>простотой в уходе.</li>
</ul>
<p>Жидкий гранит соответствует санитарным и экологическим требованиям, он не способен нанести вред здоровью человека. Столешницы имеют гладкую поверхность, легко очищаемую от жира, пятен, остатков пищи и других загрязнений. В случае возникновения деформаций материал легко восстанавливается методом шлифовки и полировки.</p>
<h2>Изготовление и монтаж столешниц</h2>
<p>В нашей компании можно заказать изготовление столешниц любой формы с различной текстурой и в разной цветовой гамме или купить готовые изделия. Специалист произведёт замеры на объекте и предложит оптимальные варианты решений. Предварительно создаётся эскиз, затем разрабатывается технический проект. После того как заказчик его утвердит, осуществляется изготовление столешницы. Изделие может быть оснащено кромками, бортиками, мойкой, подставками, выемками для отвода воды и другими конструктивными элементами, обеспечивающими удобство эксплуатации. Поверхность столешницы ровная и гладкая, стыки невидимы.</p>
<div class="stapwork-wrapper">
    <h3>Этапы монтажа столешницы из жидкого гранита</h3>
    <div class="stapwork-block" v-if="$store.state.ismobile == 'smartphone'">
        <div class="stapwork-item-block" itemscope="" itemtype="http://schema.org/ImageObject" v-for="(item,index) in arr.step" :key="index" v-show="index+1<=stepIndex">
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/assets/newdisign/img/montazh/mob/'+item.url+'.webp'" style="margin-bottom:10px;" class="img-responsive" itemprop="contentUrl" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/assets/newdisign/img/montazh/mob/'+item.url+'.jpg'" style="margin-bottom:10px;" class="img-responsive" itemprop="contentUrl" :alt="item.name">
              <img :src="'https://стильный-камень.рф/assets/newdisign/img/montazh/mob/'+item.url+'.jpg'" style="margin-bottom:10px;" class="img-responsive" itemprop="contentUrl" :alt="item.name">
            </picture>
            <div itemprop="caption description" class="decription-picture">{{item.name}}</div>
        </div>
    </div>
    <div class="stapwork-block" v-else>
        <div class="stapwork-item-block" itemscope="" itemtype="http://schema.org/ImageObject" v-for="(item,index) in arr.step" :key="index" v-show="index+1<=stepIndex">
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/assets/newdisign/img/montazh/'+item.url+'.webp'" style="margin-bottom:10px;" class="img-responsive" itemprop="contentUrl" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/assets/newdisign/img/montazh/'+item.url+'.jpg'" style="margin-bottom:10px;" class="img-responsive" itemprop="contentUrl" :alt="item.name">
              <img :src="'https://стильный-камень.рф/assets/newdisign/img/montazh/'+item.url+'.jpg'" style="margin-bottom:10px;" class="img-responsive" itemprop="contentUrl" :alt="item.name">
            </picture>
            <div itemprop="caption description" class="decription-picture">{{item.name}}</div>
        </div>
    </div>
    <div class="open2" @click="changeStep1()" v-if="stepIndex==1"><button>Показать этап нанесения контактной пены &gt; </button></div>
    <div class="open2" @click="changeStep2()" v-else-if="stepIndex==3" ><button>Показать этап установки и регулировки частей столешницы друг относительно друга &gt; </button></div>
    <div class="open2" @click="changeStep3()" v-if="stepIndex==5"><button>Показать этап подготовки стыков и нанесения жидкого гранита &gt; </button></div>
    <div class="open2" @click="changeStep4()" v-if="stepIndex==8"><button>Показать этап твердения жидкого камня &gt; </button></div>
    <div class="open2" @click="changeStep5()" v-if="stepIndex==9"><button>Показать этап шлифовки стыка &gt; </button></div>
    <div class="open2" @click="changeStep6()" v-if="stepIndex==11"><button>Показать результаты обработки стыков &gt;</button></div>
    <div class="open2" @click="changeStep7()" v-if="stepIndex==13"><button>Свернуть <span class="roto_span">&gt;</span></button></div>
    <div class="open2" v-else></div>

 <hr class="blue-line no-mobile">
  <div v-if="$store.state.visitedQuartz==0" class="col-sm-12 to-form" >
    <h3>Заказать консультацию</h3>
    <CallBackInPage />
  </div><br>
 </div>
<p>Мастера с высокой квалификацией могут выполнить монтаж столешницы. Профессиональная установка обеспечивает возможность полноценной эксплуатации кухонной мебели и сохранение эстетических свойств изделия.</p>
<h2>Преимущества компании</h2>
<p>Обратившись в нашу компанию, заказчики могут воспользоваться целым рядом преимуществ. Мы предлагаем:</p>
<ul>
    <li>конкурентоспособные цены;</li>
    <li>оперативное изготовление столешниц;</li>
    <li>программы лояльности для постоянных клиентов;</li>
    <li>широкий выбор материалов;</li>
    <li>профессиональную разработку проекта;</li>
    <li>сервисное обслуживание эксплуатируемых изделий;</li>
    <li>гарантию на изделия и монтаж.</li>
</ul>
<p>Срок изготовления не превышает 15 дней. Он зависит от сложности формы, размера изделия или количества одновременно изготавливаемых предметов. Выполняется оперативная доставка готовой продукции в Москве, Московской, Рязанской и Владимирской областях.</p>
<h2>Стоимость</h2>
<p>Цену изделий из жидкого камня можно рассчитать с помощью специального <a title="Калькулятор стоимости столешницы" rel="nofollow" href="https://стильный-камень.рф/цена-за-метр-столешницы.html">калькулятора</a>. Необходимо выбрать тип столешницы и материал, указать размеры и желаемые дополнительные конструктивные элементы. Сервис мгновенно рассчитает предварительную сумму. Окончательная стоимость определяется после визита специалиста и разработки проекта.</p>
 <h3>Готовые работы с ценами</h3>
<div class="row work-carousel" v-if="$store.state.ismobile == 'smartphone'">
  <div class="col-xs-12 col-sm-12 col-md-4 item" v-for="(item,index) in arr.works" :key="index" v-show="index==slideSlider3Mob">
    <div class="fwork-wrapper">
      <a :href="item.url" rel="nofollow" target="_blank">
        <picture>
          <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/recources/mobSlider/'+item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
          <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/recources/mobSlider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
          <img :src="'https://стильный-камень.рф/pictures/recources/mobSlider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
        </picture>
        <div class="fwork-title">
          <h4>{{item.name}}</h4>
          <p><span>Материал:</span> жидкий камень</p>
          <p><span>Производитель:</span> {{item.vendor}}</p>
          <p><span>Оттенок:</span><span class="color-block" :style="'background:'+item.color"></span> </p>
          <p><span>Цена:</span> <b>{{item.price}}</b></p>
        </div>
      </a>
    </div>
  </div>
  <div class="row">
    <button class="slider-button slider-button-left"  @click="prevSlideSliderMob3()"><span>&lt;</span></button>
    <button class="slider-button slider-button-right" @click="nextSlideSliderMob3()"><span>&gt;</span></button>
    <div class="btn-center">
      <a href="https://стильный-камень.рф/готовые-проекты/">
        <button class="content-zakaz">Смотреть все работы</button>
      </a>
    </div>
  </div>
</div>
<div class="row work-carousel" v-else>
  <div class="col-xs-12 col-sm-12 col-md-4 item" v-for="(item,index) in arr.works" :key="index" v-show="index+1<=secondIndex">
    <div class="fwork-wrapper">
      <a :href="item.url" rel="nofollow" target="_blank">
        <picture>
          <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
          <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
          <img :src="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
        </picture>
        <div class="fwork-title">
          <h4>{{item.name}}</h4>
          <p><span>Материал:</span> жидкий камень</p>
          <p><span>Производитель:</span> {{item.vendor}}</p>
          <p><span>Оттенок:</span><span class="color-block" :style="'background:'+item.color"></span> </p>
          <p><span>Цена:</span> <b>{{item.price}}</b></p>
        </div>
      </a>
    </div>
  </div>
  <div class="row">
    <div class="open2" @click="changeSecondIndex()" v-if="secondIndex==3&&arr.works.length>3"><button>Показать&nbsp;еще&nbsp;&gt;</button></div>
    <div class="open2" @click="returnSecondIndex()" v-else-if="secondIndex>3&&arr.works.length>3"><button>Скрыть&nbsp;<span class="roto_span">&gt;</span></button></div>
    <div class="open2" v-else></div>
    <div class="btn-center">
      <a href="https://стильный-камень.рф/готовые-проекты/">
        <button class="content-zakaz">Смотреть все работы</button>
      </a>
    </div>
  </div>
</div>

<div class="for-table">
    <h3 style="margin:10px;">Распределение ценовых категорий</h3>
                        <table class="table table-article">
                        <thead>
                        <tr class="tr-grey">
                          <th>Ценовая категория</th>
                          <th>Минимальная цена за кв. метр</th>
                          <th>Максимальная цена за кв. метр</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td class="first-td">Первая ценовая категория</td>
                              <td>13680 руб.</td>
                              <td>16720 руб.</td>
                            </tr>
                            <tr>
                              <td class="first-td">Вторая ценовая категория</td>
                              <td>16420 руб.</td>
                              <td>20070 руб.</td>
                            </tr>
                            <tr>
                              <td class="first-td">Третья ценовая категория</td>
                              <td>17790 руб.</td>
                              <td>21740 руб.</td>
                            </tr>
                         </tbody>
                        </table>

                        <div style="clear:both;"></div>
                    <div class="bottom-box-img"><img class="bottom-left-ugol" src="https://стильный-камень.рф/assets/newdisign/img/back-first-h2-bottom.png"></div>
                </div>

<h2>Сравнение жидкого и натурального камня</h2>
<p>Природные минералы обладают красивой текстурой и привлекательным цветом. Изделия из жидкого камня полноценно имитируют эстетические свойства натуральных камней. Кроме того, они обладают ещё целым рядом преимуществ:</p>
<ul>
    <li>Возможность сочетания минералов или синтетических гранул различного размера и цвета, а также включения разнообразных пигментов расширяет палитру.</li>
    <li>Показатели прочности искусственных материалов часто превышают аналогичные параметры натуральных камней.</li>
    <li>Благодаря эластичности исходного состава можно создавать сложные формы и осуществлять любую отделку, в то время как гранит и мрамор требуют сложных технологий обработки.</li>
    <li>Стоимость жидкого камня существенно ниже. Изделия доступны людям с любым уровнем благосостояния. А натуральные каменные столешницы – это предметы роскоши.</li>
    <li>Изделия из жидкого камня гигиеничны. Они не обладают порами и не способствуют размножению микробов. Поверхность не впитывает влагу и запахи.</li>
    <li>Расколовшийся гранит или мрамор уже не подлежит восстановлению. Изделия из жидкого камня легко реставрируются.</li>
    <li>Столешницы из жидкого камня имеют меньший вес в сравнении с натуральным материалом. Потенциальные пользователи могут экономить на транспортных расходах и не заботиться о прочности опорной конструкции.</li>
</ul>
<p>Рабочие поверхности из искусственного камня – это прогрессивный и практичный подход к организации пространства на кухне.</p>
<p class="proximait">Мы изготавливаем и устанавливаем столешницы из жидкого гранита на территории Московской, Рязанской и Владимирской областях.</p>
<div class="row">
  <div class="col-xs-12 cross-link-footer">
    <span>Сравнить со
      <nuxt-link to="../столешницы-из-кварца.html" append @click="ym(29428070,'reachGoal','tokvarc')">
        cтолешницей из кварцевого агломерата
      </nuxt-link>.
    </span>
  </div>
</div>
    <span v-if="showElement"><b>Поделиться:</b></span>
<script type="text/javascript">(function(w,doc) {
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
<div class="col-xs-12 col-sm-12 col-md-12">
               <div class="row">
                   <div class="col-xs-12 col-sm-8 col-md-9 pull-right">
                       <hr class="blue-line no-mobile">
                   </div>
                   <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
                   </div>
                  <a class="link-gal" href="https://стильный-камень.рф/каталог/столешницы/галерея-работ.html">смотреть всю галерею <i class="fa fa-chevron-right" aria-hidden="true"></i></a>

        </div></div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import Difference from "~/components/Difference.vue";
import KamenGranit from "~/components/KamenGranit.vue";
export default {
   head() {
     return{
      title:"Заказать столешницу из жидкого камня в Москве, Владимире, Рязани",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка столешницы из жидкого гранита по доступным ценам от производителя. Качественно и в сроки.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-жидкого-камня.html'},
      ]
      }
    },
    components: {
      ModalCallBack,
      CallBackInPage,
      KamenGranit,
      Difference,
      Proizvodim,
    },
    data() {
        return {
          page_name:"Столешницы из жидкого гранита",
          page_full_name:"Столешницы из жидкого гранита (камня)",
          stepIndex: 1,
          secondIndex: 3,
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
          slideSlider3Mob:0,
          long1:null,
          long2:null,
          showElement: false,
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
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stolishnitsa_granit`
            )
            .then(arr => {
                return {
                    arr:arr,
                    long3:arr.works.length,
                };
            })
            .catch(err => {
                error(err);
            });
    },
    async mounted() {
      this.$store.dispatch('VisitGranit', 1);
      const scene = this.$scrollmagic.scene({
                  triggerElement: '#h3Color',
                  triggerHook: 0.7,
                  duration: 10
              })
                  .setTween('#h3Color', {
                  css: {
                      color: 'rgb(242, 110, 1)'
                  }
            })
            this.$scrollmagic.addScene(scene)
        const kr = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_plintus_kromka.php?data=kromka_acril`
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
        changeStep1() {
            this.stepIndex = 3;
        },
        changeStep2() {
            this.stepIndex = 5;
        },
        changeStep3() {
            this.stepIndex = 8;
        },
        changeStep4() {
            this.stepIndex = 9;
        },
        changeStep5() {
            this.stepIndex = 11;
        },
        changeStep6() {
            this.stepIndex = 13;
        },
        changeStep7() {
            this.stepIndex = 1;
        },
        changeSecondIndex() {
            this.secondIndex = 1000;
        },
        returnSecondIndex() {
            this.secondIndex = 3;
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
        prevSlideSliderMob3() {
          const long=this.long3;
          this.slideSlider3Mob = ((this.slideSlider3Mob + long - 1)%long);
        },
        nextSlideSliderMob3() {
          const long=this.long3;
          this.slideSlider3Mob = ((this.slideSlider3Mob + 1)%long);
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
.send-button {float: left;margin-top: 15px;padding: 10px 40px;}
.to-form {
  margin-bottom: 40px;
  margin-top: -20px;
}
hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
.stapwork-block .decription-picture {
    font-style: italic;
    margin-top: 10px;
    text-align: center;
}
.stapwork-item-block
{margin-bottom: 20px;
    }
.main-content ul li {
    margin-bottom: 10px;
}
/***** Примеры работ *****/
.work-carousel  .item {
    height: auto;
    line-height: 1.4;
    padding: 10px;
}
.fwork-wrapper {
    background: #f1f1f1;
    margin-bottom: 15px;
}
.fwork-wrapper a {
    text-decoration: none !important;
}
.work-carousel img {
  width: 100%;
}
.fwork-title {
    padding: 5px;
}
.fwork-title h4 {
    color: #e95c00;
    font-size: 17px;
    line-height: 1.1;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 36px;
    padding-right: 10px;
    overflow-y: hidden;
}
.fwork-title p {
    color: #777;
    font-size: 12px;
    line-height: 7px;
    font-family: Proxima, Times;
}
.fwork-title span {
    color: #000;
}
.color-block {
    display: inline-block;
    width: 50px;
    height: 10px;
    margin-left: 5px;
}
.fwork-title b {
    color: #e95c00;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.for-table img.bottom-left-ugol {
    position: absolute;
    top: -62px;
    left: 0;
    width: 40px;
}
.cross-link-footer {margin-bottom: 20px;}
.cross-link-footer span {
    font-size: 18px;
    color: #808080;
    font-family: Proxima, Times;
    margin-bottom: 10px;}
.cross-link-footer span a, .cross-link-footer span a:hover {text-decoration: underline;}
@media screen and (max-width: 991px){
  .work-carousel .item{
      line-height: 1.4;
      padding: 10px;
      height: auto;
      line-height: 1.4;
      padding: 10px;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      display: block;
      float: none;
  }
}
@media screen and (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px; max-width: 120%;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
  .curousel-palitra-slider {margin-right: 0;margin-bottom: 10px;}
  .curousel-palitra-slider .slider-button-right {
    left: calc(100% - 15px);
  }
  .content-zakaz {padding: 5px 20px;font-size: 12px;margin-bottom: 10px;margin-top: 10px;min-width: 128px;}
  .curousel-palitra .item a span {font-size: 12px}
  .for-table img.bottom-left-ugol, .no-mobile {display: none;}
  .cross-link-footer {
    position: fixed;
    top: calc(100% - 40px);
    z-index: 9;
    background: #fc7f01;
    left: 0;
    width: 100%;
    height: 40px;
    font-size: 15px;
    padding-top: 10px;
    }
  .cross-link-footer span, .cross-link-footer span a, .cross-link-footer span a:hover {
    color:#fff;font-size: 15px;
  }
  .cross-link-footer span {text-align: center;display: block;}
  .cross-link-footer span a, .cross-link-footer span a:hover {text-decoration: underline;}
  .for-table h3{margin: 10px;
    font-size: 20px;
    text-align: center;
    padding-top: 10px;
  }
  .for-table td.first-td {padding: 12px 4px 12px 4px;}
  .table-article th, .table-article td{font-size: 10px;}
  a.link-gal {margin-bottom: 10px;}
  .work-carousel {position: relative;margin-right: 0px;margin-left: 0px;}
  .work-carousel .item {width: 100%;}
  .slider-button-left {left: -10%;}
  .fwork-wrapper {margin-bottom: 0px;}
  .stapwork-block .decription-picture {
    font-size: 13px;
}
.no-mobile {display: none;}
}
@media (max-width: 380px){
  .for-table {margin-left: -20px;margin-right: -15px;}
  .content-zakaz {padding: 5px 15px;}

}
@media (max-width: 360px){
.cross-link-footer {
    padding-top: 5px;
    }
}
</style>
