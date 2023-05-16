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
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
                  <h2>Как выглядят столешницы из кварцевого агломерата в нашем исполнении</h2>
     <div v-if="$store.state.ismobile == 'smartphone'">
              <h3>Прямые столешницы: для малогабаритной кухни</h3>
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
                <h3>Угловые столешницы: несколько зон для готовки</h3>
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
                <h3>П-образные столешницы: для больших кухонь</h3>
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
              <h3>Прямые столешницы: для малогабаритной кухни</h3>
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
                <h3>Угловые столешницы: несколько зон для готовки</h3>
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
                <h3>П-образные столешницы: для больших кухонь</h3>
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
                    <h2>Кварцевые столешницы для кухни на заказ</h2>
                     <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshka-icon-kvarc.webp" class="float-images" alt="Кварцевые столешницы для кухни на заказ">
                        <source type="image/png" srcset="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshka-icon-kvarc.png" class="float-images" alt="Кварцевые столешницы для кухни на заказ">
                        <img src="https://стильный-камень.рф/pictures/stoleshnitsi/stoleshka-icon-kvarc.png" class="float-images" alt="Кварцевые столешницы для кухни на заказ">
                      </picture>
                   <p> Кварцевый агломерат – инновационный материал для изготовления столешниц, барных стоек, подоконников и оформления интерьера.
                   Материал получают путем смешивания кварцевой крошки и полиэфирных гранул под действием высокой температуры.
                   Столешницы из кварца эстетичные, прочные, долговечные, поэтому их широко применяют для отделки современных квартир.
                </p>
                <nuxt-link class="last_works" to="/каталог/столешницы/галерея-работ.html" >Посмотреть наши последние работы</nuxt-link>
                <br>
                <p class="another-article"> <span style="color: #f26e01;">«Стильный-Камень»</span> профессионально произведет замеры, качественно изготовит, установит любой формы и размеров столешницу из кварцевого агломерата в требуемые сроки в Москве и других населенных пунктах Московской, Владимирской и Рязанской областей.</p>
                <div>
                  <h3 id="animate1" v-if="$store.state.visitedGranit==1">Спросить у менеджера различия жидкого гранита и кварцевого агломерата</h3>
                  <h3 id="animate1" v-else>Заказать бесплатный расчёт стоимости</h3>
                  <Difference />
                  <br>
                </div>
                <p>В коллекции – более 1000 вариантов текстуры и цвета. В работе применяются материалы известных брендов, таких как
                <b>Avant Quartz</b>, <b>Caesarstone</b>, <b>Santa Margeritha</b>, <b>Silestone</b> и пр.
                </p>
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <KamenKvartcz />
                </div>
                <!--                    <div class="col-xs-12 col-sm-12 col-md-12 for-table" style="margin-bottom:20px;">
                            <h2>Стоимость услуг изготовления</h2>
                        <table class="table table-article">
                        <thead>
                        <tr class="tr-grey">
                          <th>Столешница/услуга</th>
                          <th>Цена</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td class="first-td">TECHNISTONE</td>
                              <td data-label="Цена:">От 4300 руб./м<sup>2</sup></td>
                            </tr>
                           <tr>
                              <td class="first-td">SAMSUNG RADIANZ</td>
                              <td data-label="Цена:">От 4900 руб./м<sup>2</sup></td>
                            </tr>
                            <tr>
                              <td class="first-td">CAESARSTONE</td>
                              <td data-label="Цена:">От 5300 руб./м<sup>2</sup></td>
                            </tr>
                            <tr>
                              <td class="first-td">SILESTONE</td>
                              <td data-label="Цена:">От 5800 руб./м<sup>2</sup></td>
                            </tr>
                             <tr>
                              <td class="first-td">VICOSTONE</td>
                              <td data-label="Цена:">От 6500 руб./м<sup>2</sup></td>
                            </tr>
                            <tr>
                              <td class="first-td">AVANT QUARTZ</td>
                              <td data-label="Цена:">От 9000 руб./м<sup>2</sup></td>
                            </tr>
                            <tr>
                              <td class="first-td">CAMBRIA</td>
                              <td data-label="Цена:">От 11600 руб./м<sup>2</sup></td>
                            </tr>
                            <tr>
                              <td class="first-td">Мойка из камня</td>
                              <td data-label="Цена:">От 5500 руб.</td>
                            </tr>
                            <tr>
                             <td class="first-td">Доставка изделия</td>
                              <td data-label="Цена:">От 1100 руб</td>
                            </tr>
                            <tr>
                             <td class="first-td">Монтаж изделия</td>
                              <td data-label="Цена:">От 1000 руб</td>
                            </tr>
                         </tbody>
                        </table>
                       <div style="clear:both;"></div>
                    <div class="bottom-box-img"><img class="bottom-left-ugol" src="https://стильный-камень.рф/assets/newdisign/img/back-first-h2-bottom.png"></div>
                </div>-->

                </div>
            <div class="main-content">
              <h2>Частые вопросы</h2>
                <h3 class="question" @click="currentQuestion = 0">Уход за столешницей</h3>
                <p v-show="currentQuestion == 0">Каменная столешница требует бережного ухода и при наличии подобных элементов кухонной мебели необходимо знать, 
                  как правильно их эксплуатировать. Узнать все тонкости можно в нашей статье 
                  <a target="_blank" href="https://стильный-камень.рф/статьи/уход-за-столешницей-из-камня.html">Уход за столешницей</a>.</p>
                <h3 class="question" @click="currentQuestion = 1">Какая разница между видами камней</h3>
                <p v-show="currentQuestion == 1">Выбираете столешницу и не знаете, изделие из какого материала предпочесть? Ознакомьтесь с особенностями различных видов 
                  <a target="_blank" href="https://стильный-камень.рф/статьи/материалы-для-изготовления-столешниц.html">Плюсы и минусы материалов</a>.</p>
                <h3 class="question" @click="currentQuestion = 2">Почему индивидуальный заказ</h3>
                <p v-show="currentQuestion == 2">Не стоит бежать в мебельный центр, где Вам предложат несколько версий, не вписывающихся в параметры кухни. Оцените преимущества 
                  заказа под размеры: <a target="_blank" href="https://стильный-камень.рф/статьи/столешница-по-индивидуальным-размерам.html">Почему индивидуальный заказ</a>.</p>
                <h3 class="question" @click="currentQuestion = 3">Какую кухонную мойку выбрать</h3>
                <p v-show="currentQuestion == 3">Любое кухонное оборудование должно быть не только красивым, но и комфортным, многофункциональным. А ещё основная масса покупателей 
                  стремится к разумной экономии. Как выбрать мойку и не прогадать - <a target="_blank" href="https://стильный-камень.рф/статьи/кухонные-мойки-камень.html">Советы по выбору мойки из камня</a>.</p>
                <h3 class="question" @click="currentQuestion = 4">Что нужно знать о замере и монтаже</h3>
                <p v-show="currentQuestion == 4">прежде чем заказать столешницу, необходимо провести замеры. Ведь очень важно, чтобы столешница идеально вписывалась в конструкцию кухни. 
                  Узнать все тонкости по замеру и монтажу можете в наших статьях: <a target="_blank" href="https://стильный-камень.рф/статьи/столешница-по-индивидуальным-размерам.html">Процесс замера столешницы</a> 
                и <a target="_blank" href="https://стильный-камень.рф/статьи/монтаж-столешницы.html">Особенности монтажа столешницы</a>.
                </p>
                <h2 style="padding-left: 15px;">Почему мы</h2>
               <Pochemu/>
                <hr class="no-mobile"><br>
                <div class="row">
                  <div class="col-sm-12 col-md-12 podbor-col">
                    <PodborCalc />
                  </div>
                </div>
     
             <h2>Примеры расчета цены</h2>
              <Example />
             <h2>Что понадобится еще для выбора столешницы</h2>
              <h3>Кромки для кварцевого камня</h3>
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
                <div class="col-xs-6 item" style="margin-bottom: 0;min-height: 0;" v-for="(item, index) in kromka" :key="index">
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
              <h3>Мойки из кварцевого камня</h3>
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
                <div class="col-xs-12 col-sm-12 col-md-12 for-table for-table-min">
                            <h2>Чем кварцевый агломерат отличается от других материалов</h2> <img  src="https://стильный-камень.рф/assets/newdisign/img/back-first-h2.png">
                            <img class="bottom-rigth-ugol" src="https://стильный-камень.рф/assets/newdisign/img/ugol-grey-table.png">
                        <table class="table table-article">
                        <thead>
                        <tr class="tr-grey">
                          <th>&nbsp;</th>
                          <th>Гранит</th>
                          <th>Кварцевый агломерат</th>
                          <th>Керамическая плитка</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td class="first-td">Состав</td>
                              <td data-label="Гранит:">Натуральный материал (100%)</td>
                              <td data-label="Кварцевый агломерат:">Природный кварц (95%), смолы, пигменты (3 и 2% соответственно)</td>
                              <td data-label="Керамическая плитка:">Натуральный материал с долей песка и глины в качестве примеси</td>
                            </tr>
                            <tr>
                              <td class="first-td">Термостойкость</td>
                              <td data-label="Гранит:">Разрушение не происходит до температуры 600-800°С</td>
                              <td data-label="Кварцевый агломерат:">Устойчив к воздействию температуры до 500°С</td>
                              <td data-label="Керамическая плитка:">Высокая устойчивость</td>
                            </tr>
                            <tr>
                              <td class="first-td">Гигиеничность</td>
                              <td data-label="Гранит:">Бактерии не размножаются</td>
                              <td data-label="Кварцевый агломерат:">Бактерии не размножаются</td>
                              <td data-label="Керамическая плитка:">Скопление бактерий в швах</td>
                            </tr>
                            <tr>
                              <td class="first-td">Износостойкость</td>
                              <td data-label="Гранит:">Высокая</td>
                              <td data-label="Кварцевый агломерат:">Высокая</td>
                              <td data-label="Керамическая плитка:">Низкая</td>
                            </tr>
                            <tr class="last-tr">
                              <td class="first-td">Уход</td>
                              <td data-label="Гранит:">Очистка моющими средствами и полировка поверхности воском</td>
                              <td data-label="Кварцевый агломерат:">Не требует специального ухода</td>
                              <td data-label="Керамическая плитка:">Межплиточный шов требует периодического обновления</td>
                            </tr>
                         </tbody>
                        </table>

                        <div style="clear:both;"></div>
                    <div class="bottom-box-img"><img class="bottom-left-ugol" src="https://стильный-камень.рф/assets/newdisign/img/back-first-h2-bottom.png"></div>
                </div>
  </div>
            </div>
<div class="col-xs-12 col-sm-12 col-md-12">
               <div class="row">
                   <div class="col-xs-12 pull-right">
                       <hr class="blue-line no-mobile">
                   </div>
                   <div id="effect-1" class="col-xs-12 col-sm-12 col-md-12 effects gallery popup-gallery">
                   </div>
                   <a href="https://стильный-камень.рф/каталог/столешницы/галерея-работ.html" rel="nofollow" class="link-gal">смотреть всю галерею &gt;</a>
                   <div style="clear:both;"></div>
                   <div class="col-xs-12 col-sm-6 col-md-6 kvarc-condition pull-right-garant pull-right">
                       <h2>Выгодные условия для клиентов</h2>
                    <p>Своим покупателям мы гарантируем:</p>
                    <ul>
                        <li>Высокое качество изделий и монтажа.</li>
                        <li>Сервисное обслуживание установленных изделий.</li>
                        <li>Организацию доставки по Москве, Рязани, Владимиру.</li>
                        <li>Доступные цены, бонусы постоянным и оптовым заказчикам.</li>
                        <li>Полный ассортимент оттенков.</li>
                        <li>Гарантию на товар и услуги монтажа – не менее 3 лет.</li>
                        <li>Сроки изготовления от 3 до 15 рабочих дней.</li>
                        <li>Вы можете заказать кухонную столешницу любого размера, толщины и формы. Мы изготовим нужное количество изделий в короткие сроки.</li>
                      </ul>
                   </div>
                   <div class="col-xs-12 col-sm-6 col-md-6 kvarc-condition pull-right">
                       <h2>Монтаж кварцевых столешниц</h2>
                      <p> Столешницы из кварца действительно преображают кухню. Ровная полированная поверхность не оставляет шанса жиру, воде и грязи.
                      Эффект целостности полотна достигается путем заполнения швов специальным клеем при установке.</p>

                      <p>По эскизам вашей кухни мы готовим проект столешницы, где предусмотрены отверстия для мойки и под варочную панель. На выбор клиента – дополнительные элементы:</p>
                      <ul>
                        <li>канавки для отведения воды;</li>
                        <li>кромки разной геометрии;</li>
                        <li>встроенная мойка из кварцевого агломерата;</li>
                        <li>подставки под горячую посуду.</li>
                      </ul>
                      <p>В арсенале нашей компании – опыт монтажников и специализированный инструмент, с помощью которого мы в течение нескольких часов установим столешницу в вашем доме.</p>
                   </div>
                 </div>
                 <div class="col-xs-12  kvarc-condition  pull-right" style="padding-right: 0;padding-left: 0;">
                       <h2>Свойство кварцевого агломерата</h2>
                       <p>Искусственный агломерат состоит из каменной крошки(95-96%) и полимерных гранул(4-5%), которые придают материалу пластичность наряду с высокой прочностью и стабильность при любых условиях эксплуатации.
                       Кварц тяжело поддается обработке, но из него создают изделия сложной геометрической формы.</p>
                        <div class="main-content">
                        <div class="clearfix ossobennosti osqwst icons-row">
                          <div class="row">
                            <div class="item" v-for="(item,index) in osob" :key="index">
                                <div class="img" :class="'img-'+(index+1)"></div>
                                <span>{{item.name}}</span>
                           </div>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
<div class="col-xs-12 col-sm-12 col-md-12">
               <div class="row">
                   <div class="col-xs-0 left-box-icons left-box-icons-pages">
                       <div class="left-menu-icon">
                           <a class="zakaz-kamen" @click.prevent="showModalCallBack = !showModalCallBack"><img class="ugol-left" src="https://стильный-камень.рф/assets/newdisign/img/ugol-left-menu.png">
                           <span class="text-calc">ОСТАЛИСЬ ВОПРОСЫ?</span>
                           <img class="icon-other" src="https://стильный-камень.рф/assets/newdisign/img/vopros-icon.png"></a>
                       </div>
                <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
                   </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 kvarc-condition pull-right">
                       <h2>Характеристики столешницы из кварцевого камня</h2>
                       <ul>
                         <li>Обладает устойчивостью к влаге и другим химическим веществам.</li>
                         <li>Не окрашивается соком овощей и ягод.</li>
                         <li>Легко очищается от жира, грязи и остатков пищи.</li>
                         <li>Поддается ремонту.</li>
                         <li>Срок эксплуатации – неограничен.</li>
                         <li>Кварцевые столешницы безвредны для человека, не выделяют и не поглощают запахов, соответствуют нормам безопасности, принятым в РФ.</li>
                       </ul>
                   </div>
                   <div class="col-xs-12 col-sm-6 col-md-6 kvarc-condition pull-right">
                       <h2>Цены на кварцевые столешницы</h2>
                     <p>Стоимость можно рассчитать на нашем современном калькуляторе.
                     Достаточно перейти на страницу <a rel="nofollow" href="https://стильный-камень.рф/цена-за-метр-столешницы.html">калькулятора</a>, вбить исходные параметры для расчета и получить результат расчета столешницы.
                     Либо позвоните нашим менеджерам <b>+7 (499)408-00-79</b> и получите подробную консультацию.</p>
                     <p class="proximait">Мы изготавливаем и устанавливаем столешницы из кварца на территории Московской, Рязанской и Владимирской областях.</p>
                   </div>
                    <div class="col-xs-12 cross-link-footer">
                      <span>Сравнить со
                     <nuxt-link to="../столешницы-из-жидкого-камня.html" append @click="ym(29428070,'reachGoal','togranit')">
                      cтолешницей из жидкого камня
                     </nuxt-link>.
                     </span>
                   </div>
                   <div class="col-xs-12 col-sm-8 col-md-8 kvarc-condition  pull-right" v-if="showElement">
                          <span><b>Поделиться:</b></span>
                      <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,viber,telegram"></div>
                  </div>
                </div>
               </div>
            </div>
  </div>
</template>

<style scoped>
.question {
    font-size: 18px;
    border-bottom: 1px dotted;
    width: fit-content;
    cursor: pointer;
}
  h1, .h1 {
    font-size: 1.3em;
    text-align: center;
    }
    .float-images {float: left;padding-right: 20px;z-index: -1;position: relative;top: -10px;}
    .bottom-box-img {left: -15px;position: relative;}
    .to-form{margin-bottom: 30px;}
    .send-button {float: left;margin-top: 15px;}
    .open2, .open2 button {
      background: #fff;
      position: relative;
      cursor: pointer;
      text-align: center;
      font-size: 18px;
      color: #e95c00;
      font-family: 'calibriregular',Arial, Verdana, Times, sans-serif;
      line-height: 1.42857143;
    }
    .pull-right ul li {padding-bottom:5px;}
    .title-modal-stone {text-align: center;color: #fff!important;width: 100%;}
    .close-modal-stone {
      width: fit-content;
      text-align: right;
      transform: scaleY(0.67);
      font-size: 32px;
      padding: 10px 30px 10px 10px;
      cursor: pointer;
      color: #aaa!important;
      margin-left: auto;
      display: block;
    }
.close-modal-stone:hover{
    width: fit-content;
    text-align: right;
    transform: scaleY(0.67);
    font-size: 32px;
    padding: 10px 30px 10px 10px;
    color: #fff!important;
    margin-left: auto;
    display: block;
}
.cross-link-footer {margin-bottom: 20px;}
.cross-link-footer span {
    font-size: 18px;
    color: #808080;
    font-family: Proxima, Times;
    margin-bottom: 10px;}
.cross-link-footer span a, .cross-link-footer span a:hover {text-decoration: underline;}
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
@media (min-width: 1321px) {
  .another-article {
    display: inline-block;
    margin-top: -35px;
  }
}
@media (max-width: 600px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .float-images {top: -10px;}
  .curousel-palitra-slider {margin-right: 0;}
  .curousel-palitra-slider .slider-button-right {
    left: calc(100% - 15px);
  }
  .content-zakaz {padding: 5px 20px;font-size: 12px;}
  .curousel-palitra .item a span {font-size: 12px}
  .osqwst .item {width:50%;}
  .osqwst .item:last-child {margin-left: 25%;}
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
  .content-zakaz {padding: 5px 20px;font-size: 12px;margin-bottom: 10px;margin-top: 10px;}
  .for-table {padding-left: 0px;padding-right: 0px;margin-bottom: 30px;}
  .for-table h2 {font-size: 16px;text-align: center;}
  .for-table img.bottom-left-ugol, .for-table img, .no-mobile {display: none;}
  .for-table td.first-td {padding: 12px 8px 12px 8px;}
  .for-table-min td.first-td {padding: 12px 4px 12px 4px;letter-spacing:-0.8px;}
  .for-table-min .table-article th, .for-table-min .table-article td {padding: 0.5em;}
  .table-article th, .table-article td {font-size: 10px;}
  .for-table-min .table-article th, .for-table-min .table-article td {font-size: 9.5px;}
  .table {margin-bottom: 0px;}
  .popup-gallery {margin-top: 10px;}
  .kvarc-condition {margin-top: -10px;}
  .stapwork-block .decription-picture {font-size: 14px;}
  .open2 button {font-size: 12px;}
  .last_works {
    margin-bottom: 10px;
    display: block;
  }
}

</style>

<script>
import Proizvodim from "~/components/Proizvodim.vue";
import PodborCalc from "~/components/PodborCalc.vue";
import KamenKvartcz from "~/components/KamenKvartcz.vue";
import Example from "~/components/Example.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import Difference from "~/components/Difference.vue";
import Pochemu from "~/components/Pochemu.vue";
export default {
  head() {
    return{
      title:"Кварцевая столешница для кухни. Купить и заказать столешницу из кварца в Москве, Рязани и Владимире у «Стильный-Камень»",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка кварцевой столешницы по доступным ценам от производителя. Столешница из кварца нашего производства доступна и надежна.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столешницы/столешницы-из-кварца.html'},
      ]
    };
  },
  components: {
    Proizvodim,
    PodborCalc,
    KamenKvartcz,
    Example,
    ModalCallBack,
    Difference,
    CallBackInPage,
    Pochemu,
  },
    data() {
        return {
          page_name:"Столешницы из кварцевого агломерата",
          page_full_name:"Столешницы из кварцевого агломерата от производителя",
          osob:[{name:"Не оставляет пятен",img:"https://стильный-камень.рф/assets/img/osobennost-01.jpg)"},{name:"Простой уход",img:"https://стильный-камень.рф/assets/img/osobennost-02.jpg)"},
                {name:"Износостойкость",img:"https://стильный-камень.рф/assets/img/osobennost-03.jpg)"},{name:"Высокая прочность",img:"https://стильный-камень.рф/assets/img/osobennost-04.jpg)"},
                {name:"Жаростойкость",img:"https://стильный-камень.рф/assets/img/osobennost-05.jpg)"},{name:"Экологичность",img:"https://стильный-камень.рф/assets/img/osobennost-06.jpg)"},
                {name:"Натуральность",img:"https://стильный-камень.рф/assets/img/osobennost-07.jpg)"}],
          firstIndex:6,
          secondIndex:6,
          thirdIndex:6,
          kromka :[],
          moyka:[],
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
          showElement:false,
          showModalCallBack:false,
          openSuperModal1:0,
          openSuperModal2:0,
          openSuperModal3:0,
          showBreadcrumbsMobile:false,
          currentQuestion: 0
        }
    },
    async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_katalog.php?data=stolishnitsa_kvartz`
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
            this.$store.dispatch('VisitQuartz', 1);
            const scene = this.$scrollmagic.scene({
                  triggerElement: '#animate1',
                  triggerHook: 0.7,
                  duration: 10
              })
                  .setTween('#animate1', {
                  css: {
                      color: 'rgb(242, 110, 1)'
                  }
            })
        this.$scrollmagic.addScene(scene)
        const kr = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_plintus_kromka.php?data=kromka_kvartz`
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
                `https://стильный-камень.рф/data/katalog/data_moyki.php?data=kvartz_moyka`
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
