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
            <h1>{{page_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать столешницу из камня</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
 <div class="col-xs-12 col-sm-12 col-md-12 main-content offset-40">
    <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
                  <div  class="top-img-row">
                    <div class="col-xs-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01.webp"  alt="Столешница из камня на кухню">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01.jpg"  alt="Столешница из камня на кухню">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-01.jpg"  alt="Столешница из камня на кухню">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02.webp"  alt="Белая столешница из камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02.jpg"  alt="Белая столешница из камня">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-02.jpg"  alt="Белая столешница из камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03.webp"  alt="Оригинальная столешница из камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03.jpg"  alt="Оригинальная столешница из камняя">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-03.jpg"  alt="Оригинальная столешница из камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04.webp"  alt="Коричневая столешница из камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04.jpg"  alt="Коричневая столешница из камня">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/gal-04.jpg"  alt="Коричневая столешница из камня">
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
<h2>Кухонные столешницы из камня</h2>
<p>Столешница из натурального или искусственного камня представляет собой монолитную или составную плиту, которая закрепляется на специальном каркасе – подобная конструкция отлично заменяет как кухонный стол, так и журнальные и косметические столики, которые сегодня можно увидеть во многих квартирах Москвы и области. Такие столешницы можно разделить на два основных вида:</p>
<ul>
    <li>Изделия из натурального камня с красивыми природными узорами, подчеркивают Ваш статус и отличный вкус.</li>
    <li>Столешницы из искусственных материалов имеют меньшую стоимость. Однако их характеристики практически сравнимы и содержат до 95% природных компонентов, которые являются агломератами натуральных камней. Ряд палитры отлично имитируют рисунки мрамора и гранита.</li>
</ul>
<p class="proximait">Каким бы ни был Ваш выбор, в любом случае Вы приобретаете долговечное и красивое изделие – превосходный внешний вид столешницы сделает Ваши хлопоты на кухне более радостными, при этом покрытие способно выдерживать механические нагрузки и воздействие агрессивных веществ.</p>
<div class="to-work">
  <div class="row">
    <h3>Как мы работаем</h3>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="to-work_block" v-for="(item,index) in to_work" :key="index" >
        <picture>
                          <source type="image/webp" :srcset="item.img+'.webp'" :alt="item.disc">
                          <source type="image/png" :srcset="item.img+'.png'" :alt="item.disc">
                          <img :src="item.img+'.jpg'" :alt="item.disc">
                      </picture>
        <p> <span v-html="item.name"></span> </p>
      </div>
    </div>
  </div>
</div>
<div class="gallery-buttons" style="margin-bottom:20px;"> <div class="inner"> <h2>Мы изготавливаем из</h2> </div> </div>
<div  class="standart-palitra">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 catalog-preview_block"  v-for="(item, index) in arr" :key="index">
              <div class="img" v-if="item.n_link>0">
                    <nuxt-link :to="'../каталог/'+item.url" exact>
                      <picture>
                          <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span> {{item.title}}</span>
                    </nuxt-link>
              </div>
              <div class="img" v-else>
                    <a :href="'https://стильный-камень.рф/каталог/'+item.url">
                         <picture>
                          <source type="image/webp" :srcset="item.img+'.webp'" class="hover-effect-2" :alt="item.name">
                          <source type="image/jpg" :srcset="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                          <img :src="item.img+'.jpg'" class="hover-effect-2" :alt="item.name">
                      </picture>
                        <span> {{item.title}}</span>
                    </a>
              </div>
          </div>
      </div>
    </div>

<h2>Стоит ли заказывать столешницу из камня?</h2>
<p>Если Вам требуется столешница камня, то нелишним будет ознакомиться с особенностями того или иного материала, что позволит сделать грамотный выбор с учетом Ваших потребностей:</p>
<ul>
    <li><em style="color:#c8601b;">Жидкий гранит</em> – искусственный материал из гранитовой крошки, которая связывается в монолитную плиту особым составом. Столешницы из жидкого камня имеют 3 ценовые категории, поэтому доступны всем категориям населения. Кроме этого, столешница имеет высокую ремонтопригодность - может быть восстановлена методом литья, что также является серьезным достоинством.
    <div class="another-article"><span style="color: #6c8685;">Полезные материалы:</span>
    <ul >
        <li><nuxt-link style="font-size: 16px;" to="../столешницы/столешницы-из-жидкого-камня.html">столешницы из жидкого камня</nuxt-link></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/миф-о-столешнице-из-камня.html">миф: столешница из жидкого камня - бомба замедленного действия</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/миф-столешница-из-искусственного-камня-лопается.html">миф: столешница из искусственного камня лопается</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/почему-новые-столешницы-из-камня-пахнут.html">почему новые столешницы из искусственного камня пахнут</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/granistone.html">камень GRANISTONE</a></li>
    </ul>
    </div>
    </li>
    <li><em style="color:#c8601b;">Кварцевый агломерат</em> – данный материал имеет искусственное происхождение, однако он на 95% состоит из натуральных компонентов, практически не уступая по свойствам натуральному камню, при этом его стоимость немного ниже.
    <div class="another-article"><span style="color: #6c8685;">Полезные материалы:</span>
    <ul >
        <li><nuxt-link style="font-size: 16px;" to="../столешницы/столешницы-из-кварца.html">столешницы из кварцевого агломерата</nuxt-link></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/silestone.html">камень SILESTONE</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/камень-technistone.html">камень TECHNISTONE</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/ceasarstone.html">камень CEASARSTONE</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/samsung-radianz.html">камень SAMSUNG RADIANZ</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/neomarm.html">камень Neomarm</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/cambria.html">камень CAMBRIA</a></li>
    </ul>
    </div>
    </li>
    <li><em style="color:#c8601b;">Натуральный кварц</em> – имеет способность выдерживать большие механические нагрузки, при этом никаких пятен и разводов на поверхности в процессе эксплуатации не появляется. Столешница из натурального кварца способна преобразить любое помещение, создавая особую атмосферу и уют.
    <div class="another-article"><span style="color: #6c8685;">Полезные материалы:</span>
    <ul >
        <li><nuxt-link append style="font-size: 16px;" to="/каталог/столешницы/столешницы-из-натурального-кварца.html">столешницы из натурального кварца</nuxt-link></li>
    </ul>
    </div>
    </li>
    <li><em style="color:#c8601b;">Акриловый камень</em> – столешница не требует особого ухода, некоторые цветовые вариации и узоры данного материала практически не отличаются от натурального камня. Поверхность столешницы можно восстанавливать без особых проблем, при этом отсутствие швов между элементами позволяет создавать единые и монолитные конструкции: например, подсветка или декор будут идеально выглядеть вместе со столешницей из акрилового камня.
    <div class="another-article"><span style="color: #6c8685;">Полезные материалы:</span>
    <ul >
        <li><nuxt-link append style="font-size: 16px;" to="/каталог/столешницы/столешницы-из-акрилового-камня.html">столешницы из акрилового камня</nuxt-link></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/corian.html">камень CORIAN</a></li>
        <li><a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/samsung-staron.html">камень SAMSUNG STARON</a></li>
    </ul>
    </div>
    </li>
    <li><em style="color:#c8601b;">Натуральный камень</em> – имеет не только уникальный и оригинальный узор, но и приятную на ощупь структуру. Идеально ровная поверхность и невероятная прочность – основные отличия данного материала.
    <div class="another-article"><span style="color: #6c8685;">Полезные материалы:</span>
    <ul >
        <li><nuxt-link append style="font-size: 16px;" to="/каталог/столешницы/столешницы-из-натурального-камня.html">столешницы из натурального камня</nuxt-link></li>
    </ul>
    </div>
    </li>
</ul>
</div></div></div>
<div class="col-xs-12 col-sm-12 col-md-12">
               <div class="row">
                   <div class="col-xs-12 pull-right">
                       <hr class="blue-line">
                   </div>
                   <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12">

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
                   <div class="col-xs-12 kvarc-condition pull-right">
                     <h3>Готовые работы с ценами</h3>
                     <div class="row work-carousel" v-if="$store.state.ismobile == 'smartphone'">
                          <div v-for="(item,index) in arr2" :key="index">
                            <div  class="col-xs-12 item" v-if="index==slide1Slider1Mob">
                              <div class="fwork-wrapper">
                                <a :href="item.url" rel="nofollow" target="_blank">
                                  <picture>
                                    <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                                    <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                    <img :src="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                  </picture>
                                  <div class="fwork-title">
                                    <h4>{{item.name}}</h4>
                                    <p><span>Материал:</span> {{item.mat}}</p>
                                    <p><span>Производитель:</span> {{item.vendor}}</p>
                                    <p><span>Оттенок:</span><span class="color-block" :style="'background:'+item.color"></span> </p>
                                    <p><span>Цена:</span> <b>{{item.price}}</b></p>
                                  </div>
                                </a>
                              </div>
                              </div>
                              <button class="slider-button slider-button-left"  @click="prevSlideSliderMob()"><span>&lt;</span></button>
                               <button class="slider-button slider-button-right" @click="nextSlideSliderMob()"><span>&gt;</span></button>
                            </div>
                          </div>
                         <div class="row work-carousel" v-else >
                          <div v-for="(item,index) in arr2" :key="index">
                            <div  class="col-sm-4 item" v-if="index==slide1Slider1">
                              <div class="fwork-wrapper">
                                <a :href="item.url" rel="nofollow" target="_blank">
                                  <picture>
                                    <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                                    <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                    <img :src="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                  </picture>
                                  <div class="fwork-title">
                                    <h4>{{item.name}}</h4>
                                    <p><span>Материал:</span> {{item.mat}}</p>
                                    <p><span>Производитель:</span> {{item.vendor}}</p>
                                    <p><span>Оттенок:</span><span class="color-block" :style="'background:'+item.color"></span> </p>
                                    <p><span>Цена:</span> <b>{{item.price}}</b></p>
                                  </div>
                                </a>
                              </div>
                              </div>
                              </div>
                              <div v-for="(item,index) in arr2" :key="index">
                              <div  class="col-sm-4 item" v-if="index==slide2Slider1">
                              <div class="fwork-wrapper">
                                <a :href="item.url" rel="nofollow" target="_blank">
                                  <picture>
                                    <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                                    <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                    <img :src="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                  </picture>
                                  <div class="fwork-title">
                                    <h4>{{item.name}}</h4>
                                    <p><span>Материал:</span> {{item.mat}}</p>
                                    <p><span>Производитель:</span> {{item.vendor}}</p>
                                    <p><span>Оттенок:</span><span class="color-block" :style="'background:'+item.color"></span> </p>
                                    <p><span>Цена:</span> <b>{{item.price}}</b></p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            </div>
                            <div v-for="(item,index) in arr2" :key="index">
                            <div  class="col-sm-4 item" v-if="index==slide3Slider1">
                              <div class="fwork-wrapper">
                                <a :href="item.url" rel="nofollow" target="_blank">
                                  <picture>
                                    <source type="image/webp" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.webp'" class="hover-effect-2" :alt="item.name">
                                    <source type="image/jpg" :srcset="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                    <img :src="'https://стильный-камень.рф/pictures/recources/slider/'+item.slider+'.jpg'" class="hover-effect-2" :alt="item.name">
                                  </picture>
                                  <div class="fwork-title">
                                    <h4>{{item.name}}</h4>
                                    <p><span>Материал:</span> {{item.mat}}</p>
                                    <p><span>Производитель:</span> {{item.vendor}}</p>
                                    <p><span>Оттенок:</span><span class="color-block" :style="'background:'+item.color"></span> </p>
                                    <p><span>Цена:</span> <b>{{item.price}}</b></p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <button class="slider-button slider-button-left"  @click="prevSlideSlider()"><span>&lt;</span></button>
                            <button class="slider-button slider-button-right" @click="nextSlideSlider()"><span>&gt;</span></button>
                        </div>
                     </div>
                      <h2>Установка столешницы на заказ</h2>
<p>Самостоятельно монтировать столешницы для кухни этого типа не рекомендуется. Они требуют использования специальных инструментов для обработки кромок и заделки стыков. Поэтому мы предоставляем такую услугу, как монтаж столешницы из камня. Наши мастера проведут все работы оперативно, идеально замаскируют швы, благодаря чему поверхность стола будет выглядеть монолитной.</p>
<p class="another-article"><span style="color: #6c8685;">Будет полезно:</span>
    <a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/процесс-замера-столешницы.html">Процесс замера столешницы</a> <a style="font-size: 16px;" href="https://стильный-камень.рф/статьи/монтаж-столешницы.html">Какие проблемы могут возникнуть при монтаже</a>

    </p>
<p class="proximait">Мы изготавливаем и устанавливаем столешницы из камня на территории Московской, Рязанской и Владимирской областях.</p>
<p>Обратитесь к нашим специалистам <a href="tel:84994080079">+7 (499)408-00-79</a> и они проконсультируют вас по
выбору оптимального материала, а также произведут расчет стоимости столешницы из любого интересующего камня.</p>
<span v-if="showElement"><b>Поделиться:</b></span>
<div v-if="showElement" class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,viber,telegram"></div>
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
        return {
      title:"Заказать столешницу из камня от производителя || Москва, Рязань, Владимир. Изготовление и установка от Стильный камень.",
      meta: [
        { name: 'description', hid: 'description', content: 'Вы хотите заказать столешницу от производителя? Только от компании &#34;Стильный камень&#34; столешница на заказ будет качественной и доступной.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы.html'},
      ]
      }
    },
    components: {
      ModalCallBack,
      Proizvodim,
    },
    data() {
        return {
          page_name:"Столешницы из камня",
          to_work:[
            {name:"Вы <br>звоните нам",disc:"Вы звоните нам",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_03"},
            {name:"Выезд <br>замерщика",disc:"Выезд замерщика",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_04"},
            {name:"Подписание <br>договора",disc:"Подписание договора",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_05"},
            {name:"Проведение <br>работ",disc:"Проведение работ",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_06"},
            {name:"Мы <br>монтируем",disc:"Мы монтируем",img:"https://стильный-камень.рф/assets/img/elements/Stone_main_07"},
          ],
          showModalCallBack:false,
          showElement:false,
          slide1Slider1Mob:0,
          slide2Slider1Mob:1,
          slide1Slider1:0,
          slide2Slider1:1,
          slide3Slider1:2,
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
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stolishnitsa`
            )
            .then(arr => {
                return {
                    arr:arr.content,
                    arr2:arr.works,
                    page_name:arr.page_name,
                    long1:arr.works.length,
                };
            })
            .catch(err => {
                error(err);
            });
    },
    methods: {
        closeModalCallBack() {
          this.showModalCallBack = false;
        },
         prevSlideSlider() {
          const long=this.long1;
          this.slide1Slider1 = ((this.slide1Slider1 + long - 1)%long);
          this.slide2Slider1 = ((this.slide2Slider1 + long - 1)%long);
          this.slide3Slider1 = ((this.slide3Slider1 + long - 1)%long);
        },
        nextSlideSlider() {
          const long=this.long1;
          this.slide1Slider1 = ((this.slide1Slider1 + 1)%long);
          this.slide2Slider1 = ((this.slide2Slider1 + 1)%long);
          this.slide3Slider1 = ((this.slide3Slider1 + 1)%long);
        },
        prevSlideSliderMob() {
          const long=this.long1;
          this.slide1Slider1Mob = ((this.slide1Slider1Mob + long - 1)%long);
          this.slide2Slider1Mob = ((this.slide2Slider1Mob + long - 1)%long);
        },
        nextSlideSliderMob() {
          const long=this.long1;
          this.slide1Slider1Mob = ((this.slide1Slider1Mob + 1)%long);
          this.slide2Slider1Mob = ((this.slide2Slider1Mob + 1)%long);
        },
    },
}
</script>
<style scoped>
.catalog-preview_block {margin-bottom: 0px;}
.offset-40 {padding-left: 30px;}
.catalog-preview_block a span{
    color: #c8601b;
    text-decoration: underline;
    width: fit-content;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.catalog-preview_block img{
  width: 100%;
}
.fwork-wrapper {
    background: #f1f1f1;
    margin-bottom: 15px;
}
.fwork-wrapper a {
    text-decoration: none !important;
}
.work-carousel {position: relative;}
.work-carousel img {
    width: auto;
    height: 180px;
    max-width: 100%;
}
.fwork-title {
    padding: 5px;
}
.fwork-title h4{
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
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  p, li {margin-block-start: 0;}
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
  .no-mobile {display: none;}
  .fwork-wrapper {
    margin-bottom: 0px;
  }

}
@media (max-width: 420px){
  .slider-button-right {
    left: 95%;
  }
}
</style>
