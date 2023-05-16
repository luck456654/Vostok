<template>
<div>
<div class="sidebar-item" id="aside-menu">
                  <h4 class="toggle-catalog first-aside-h2" v-on:click="showKatalog = !showKatalog">
                     <br>КАТАЛОГ
                     <span class="caret-default" v-if="!showKatalog"><i class="fa fa-chevron-right"></i></span>
                     <span class="caret" v-else><i class="fa fa-chevron-down"></i></span>
                  </h4>
                  <transition name="fade">
                  <ul class="nav-catalog hidexs" v-if="showKatalog">
                     <li >
                        <h5 class="toggle-stolesh left-menu-h5" title="Столешницы"  v-on:click="showKatalogTabletop = !showKatalogTabletop">
                        Столешницы
                        <span class="caret-default" v-if="!showKatalogTabletop"><i class="fa fa-chevron-right"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" ></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-stolesh hiden-left-menu" v-if="showKatalogTabletop">
                            <li class="title-left-submenu">По виду материала
                               <ul>
                                  <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешницы-из-кварца.html" append title="Столешницы из кварца">Из кварцевого агломерата</nuxt-link></li>
                                  <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешницы-из-натурального-кварца.html" append title="Столешницы из натурального кварца">Из натурального кварца</nuxt-link></li>
                                  <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешницы-из-акрилового-камня.html" append title="Столешницы из акрилового камня">Из акрилового камня</nuxt-link></li>
                                  <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешницы-из-жидкого-камня.html" append title="Столешницы из жидкого гранита">Из жидкого гранита</nuxt-link></li>
                                  <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешницы-из-натурального-камня.html" append title="Столешницы из натурального камня">Из натурального камня</nuxt-link></li>
                              <!--    <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешницы-из-массива-дерева.html" append title="Столешницы из массива дерева">Из массива дерева</nuxt-link></li> -->
                               </ul>
                           </li>
                           <li class="title-left-submenu">Общая информация
                               <ul>
                                 <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы.html" append title="Столешницы из камня">Столешницы из камня</nuxt-link></li>
                                 <li class="small-padding-left-menu"><a class="nav-link-aside" href="https://стильный-камень.рф/статьи/столешница-по-индивидуальным-размерам.html" title="Столешницы по индивидуальным размерам">Столешницы по индивидуальным размерам</a></li>
                                 <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешницы-из-камня-для-кухни.html" append title="Столешницы из камня на кухню">Столешницы из камня для кухни</nuxt-link></li>
                                 <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/столешница-из-камня-в-ванную.html" append title="Столешницы из камня в ванную">Столешницы из камня в ванную</nuxt-link></li>
                                 <li class="small-padding-left-menu"><nuxt-link class="nav-link-aside" to="/каталог/столешницы/галерея-работ.html" append title="Фотогалерея столешниц из камня">Фотогалерея столешниц из камня</nuxt-link></li>
                               </ul>
                           </li>
                        </ul>
                        </transition>
                     </li>
                     <li >
                         <h5 class="toggle-podok left-menu-h5" title="Подоконники" v-on:click="showKatalogWindowsill = !showKatalogWindowsill">
                        Подоконники
                        <span class="caret-default" v-if="!showKatalogWindowsill"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-podok hiden-left-menu"  v-if="showKatalogWindowsill">
                            <li class="title-left-submenu">По виду камня

                                <ul>
                               <li class="small-padding-left-menu"><nuxt-link to="/каталог/подоконники/подоконники-из-кварца.html" append title="Подоконники из кварца">Из кварцевого агломерата</nuxt-link></li>
                               <li class="small-padding-left-menu"><nuxt-link to="/каталог/подоконники/подоконники-из-акрила.html" append title="Подоконники из акрилового камня">Из акрилового камня</nuxt-link></li>
                               <li class="small-padding-left-menu"><nuxt-link to="/каталог/подоконники/подоконники-из-жидкого-гранита.html" append title="Подоконники из жидкого камня">Из жидкого гранита</nuxt-link></li>
                               <li class="small-padding-left-menu"><nuxt-link to="/каталог/подоконники/подоконники-из-натурального-камня.html" append title="Подоконники из натурального камня">Из натурального камня</nuxt-link></li>
                               </ul>
                            </li>
                            <li class="title-left-submenu">Общая информация
                               <ul>
                                <li class="small-padding-left-menu"><nuxt-link to="/каталог/подоконники.html" append title="Подоконники из камня">Подоконники из камня</nuxt-link></li>
                               </ul>
                            </li>
                        </ul>
                        </transition>
                     </li>
                     <li>
                        <h5 class="toggle-resep left-menu-h5" title="Ресепшн"  v-on:click="showKatalogReception = !showKatalogReception">
                        Ресепшн
                        <span class="caret-default" v-if="!showKatalogReception"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-resep hiden-left-menu"  v-if="showKatalogReception">
                            <li class="title-left-submenu">По виду камня

                                <ul>
                                     <li class="small-padding-left-menu"><nuxt-link to="/каталог/ресепшн/ресепшн-из-кварца.html" append title="Ресепшн из кварца">Из кварцевого агломерата</nuxt-link></li>
                                     <li class="small-padding-left-menu"><nuxt-link to="/каталог/ресепшн/ресепшн-из-акрила.html" append title="Ресепшн из акрилового камня">Из акрилового камня</nuxt-link></li>
                                     <li class="small-padding-left-menu"><nuxt-link to="/каталог/ресепшн/ресепшн-из-жидкого-камня.html" append title="Ресепшн из жидкого гранита">Из жидкого гранита</nuxt-link></li>
                                     <li class="small-padding-left-menu"><nuxt-link to="/каталог/ресепшн/ресепшн-натуральный-камень.html" append title="Ресепшн из натурального камня">Из натурального камня</nuxt-link></li>
                                </ul>
                            </li>
                            <li class="title-left-submenu">Общая информация
                               <ul>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/ресепшн.html" append title="Ресепшн из камня">Ресепшн из камня</nuxt-link></li>
                                </ul>
                            </li>
                        </ul>
                        </transition>
                     </li>
                     <li>
                        <h5 class="toggle-stoiki left-menu-h5" title="Барные стойки"  v-on:click="showKatalogBarStand = !showKatalogBarStand">
                        Барные стойки
                        <span class="caret-default" v-if="!showKatalogBarStand"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-stoiki hiden-left-menu"  v-if="showKatalogBarStand">
                            <li class="title-left-submenu">По виду камня

                                <ul>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/барные-стойки/барные-стойки-из-кварца.html" append title="Барные стойки из кварца">Из кварцевого агломерата</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/барные-стойки/барные-стойки-из-акрила.html" append title="Барные стойки из акрила">Из акрилового камня</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/барные-стойки/барная-стойка-из-жидкого-камня.html" append title="Барные стойки из жидкого камня">Из жидкого гранита</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/барные-стойки/барная-стойка-из-натурального-камня.html" append title="Барные стойки из натурального камня">Из натурального камня</nuxt-link></li>
                                </ul>
                            </li>
                            <li class="title-left-submenu">Общая информация
                               <ul>
                                    <li class="small-padding-left-menu"><nuxt-link to="/каталог/барные-стойки.html" append title="Барные стойки из камня">Барные стойки из камня</nuxt-link></li>
                                    <li class="small-padding-left-menu"><nuxt-link to="/каталог/барные-стойки/галерея-барных-стоек.html" append title="Фотогалерея барных стоек">Фотогалерея барных стоек</nuxt-link></li>
                                </ul>
                            </li>
                        </ul>
                        </transition>
                     </li>
                     <li >
                        <h5 class="toggle-paneli left-menu-h5" title="Стеновые панели" v-on:click="showKatalogWallPanel = !showKatalogWallPanel">
                        Стеновые панели
                        <span class="caret-default" v-if="!showKatalogWallPanel"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-paneli hiden-left-menu"  v-if="showKatalogWallPanel">
                            <li class="title-left-submenu">По виду камня

                                <ul>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/стеновые-панели/стеновые-панели-из-кварца.html" append title="Стеновые панели из кварца">Из кварцевого агломерата</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/стеновые-панели/стеновые-панели-из-акрила.html" append title="Стеновые панели из акрила">Из акрилового камня</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/стеновые-панели/стеновая-панель-из-жидкого-камня.html" append title="Стеновые панели из жидкого камня">Из жидкого гранита</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/стеновые-панели/стеновая-панель-натуральный-камень.html" append title="Стеновые панели из натурального камня">Из натурального камня</nuxt-link></li>
                                </ul>
                            </li>
                            <li class="title-left-submenu">Общая информация
                               <ul>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/стеновые-панели.html" append title="Стеновые панели из камня">Стеновые панели из камня</nuxt-link></li>
                                    <li class="small-padding-left-menu"><a href="https://стильный-камень.рф/каталог/стеновые-панели/галерея-стеновых-панелей.html" title="Фотогалерея стеновых панелей">Фотогалерея стеновых панелей</a></li>
                                    </ul>
                            </li>
                        </ul>
                        </transition>
                     </li>
                     <li v-if="disableTable">
                        <h5 class="toggle-stoly left-menu-h5" title="Столы" v-on:click="showKatalogTable = !showKatalogTable">
                        Столы
                        <span class="caret-default" v-if="!showKatalogTable"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-stoly hiden-left-menu"  v-if="showKatalogTable">
                            <li class="title-left-submenu">По виду камня

                                <ul>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/столы/столы-из-кварца.html" append title="Столы из кварца">Из кварцевого агломерата</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/столы/стол-из-акрилового-камня.html" append title="Столы из акрилового камня">Из акрилового камня</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/столы/столы-из-жидкого-камня.html" append title="Столы из жидкого камня">Из жидкого гранита</nuxt-link></li>
                                   <li class="small-padding-left-menu"><nuxt-link to="/каталог/столы/стол-из-натурального-камня.html" append title="Столы из натурального камня">Из натурального камня</nuxt-link></li>
                                </ul>
                            </li>
                            <li class="title-left-submenu">Общая информация
                               <ul>
                            <li class="small-padding-left-menu"><nuxt-link to="/каталог/столы.html" append title="Столы из камня">Столы из камня</nuxt-link></li>
                             </ul>
                            </li>
                        </ul>
                        </transition>
                     </li>
                     <li >
                        <h5 class="toggle-lestnicy left-menu-h5" title="Лестницы" v-on:click="showKatalogStair = !showKatalogStair">
                        Лестницы
                        <span class="caret-default" v-if="!showKatalogStair"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-lestnicy hiden-left-menu"  v-if="showKatalogStair">
                            <li class="title-left-submenu">По виду камня

                                <ul>
                                           <li class="small-padding-left-menu"><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-и-ступени-из-кварцевого-агломерата.html" append title="Лестницы из кварца">Из кварцевого агломерата</nuxt-link></li>
                                           <li class="small-padding-left-menu"><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-из-акрилового-камня.html" append title="Лестницы из акрилового камня">Из акрилового камня</nuxt-link></li>
                                           <li class="small-padding-left-menu"><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-из-искусственного-камня.html" append title="Лестницы из жидкого камня">Из жидкого гранита</nuxt-link></li>
                                           <li class="small-padding-left-menu"><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-из-натурального-камня.html" append title="Лестницы из натурального камня">Из натурального камня</nuxt-link></li>
                                </ul>
                            </li>
                            <li class="title-left-submenu">Общая информация</li>
                               <ul>
                            <li class="small-padding-left-menu"><nuxt-link to="/каталог/лестницы-и-ступени-из-камня.html" append title="Лестницы из камня">Лестницы из камня</nuxt-link></li> </ul>
                        </ul>
                        </transition>
                     </li>
                   <!--  <li >
                        <h5 class="toggle-pol left-menu-h5" title="Пол из камня" v-on:click="showKatalogFloor = !showKatalogFloor">
                        Полы
                        <span class="caret-default" v-if="!showKatalogFloor"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                        <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </h5>
                        <transition name="fade">
                        <ul class="nav-pol hiden-left-menu"  v-if="showKatalogFloor">
                            <li class="title-left-submenu">По виду камня

                                <ul>
                                           <li class="small-padding-left-menu"><nuxt-link to="/каталог/пол-из-камня.html" append title="Пол из кварца">Пол из кварцевого агломерата</nuxt-link></li>
                                           <li class="small-padding-left-menu"><nuxt-link to="/каталог/пол-из-акрилового-камня.html" append title="Пол из акрилового камня">Пол из акрилового камня</nuxt-link></li>
                                           <li class="small-padding-left-menu"><nuxt-link to="/каталог/пол-из-натурального-камня.html" append title="Пол из натурального камня">Пол из натурального камня</nuxt-link></li>
                                </ul>
                            </li>

                        </ul>
                        </transition>
                     </li> -->

                     <li class="small-left-menu"><nuxt-link to="/каталог/интегрированные-мойки.html" append title="Интегрированные мойки">Интегрированные мойки</nuxt-link></li>
                     <li class="small-left-menu"><nuxt-link to="/каталог/каталог-кромок.html" append title="Каталог кромок">Каталог кромок</nuxt-link></li>
                     <li class="small-left-menu"><nuxt-link to="/каталог/каталог-плинтусов/" append title="Каталог плинтусов">Каталог плинтусов</nuxt-link></li>
                  </ul>
               </transition>
               </div>
               <div class="sidebar-item">
                  <h4 class="toggle-articles" v-on:click="showExample = !showExample">
                     Примеры работ с ценами
                     <span class="caret-default" v-if="!showExample"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                     <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                  </h4>
                  <transition name="fade">
                  <div class="slider-aside" v-if="showExample">
                      <img src="https://стильный-камень.рф/assets/images/resources/3401/185x70/20190213-141922.jpg">
                      <a href="https://стильный-камень.рф/готовые-проекты/3401-заказ-к-117.html">Белая кварцевая столешница, февраль</a>
                  </div>
                   </transition>
               </div>
               <div class="sidebar-item">
                  <h4 class="toggle-articles-2" v-on:click="showArticle = !showArticle">
                     Статьи
                     <span class="caret-default" v-if="!showArticle"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                     <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                  </h4>
                  <transition name="fade">
                  <div class="slider-aside" v-if="showArticle">
                      <img src="https://стильный-камень.рф/assets/images/resources/3201/185x70/cambria-white.jpg">
                      <a href="https://стильный-камень.рф/cambria.html">Столешницы Cambria</a>
                  </div>
                   </transition>
               </div>
               <div class="sidebar-item">
                  <h4 class="toggle-info" v-on:click="showInform = !showInform">
                     Информация

                     <span class="caret-default" v-if="!showInform"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                     <span class="caret" v-else><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                  </h4>
                  <transition name="fade">
                  <ul class="nav-info hidexs" v-if="showInform">
                     <li class="small-left-menu">
                        <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html">
                        Отзывы
                        </a>
                     </li>
                     <li  class="small-left-menu">
                        <a href="https://стильный-камень.рф/информация/советы-по-уходу.html">
                        Советы по уходу
                        </a>
                     </li>
                     <li class="small-left-menu">
                        <a href="https://стильный-камень.рф/информация/партнерам.html">
                        Партнерам
                        </a>
                     </li>
                     <li class="small-left-menu">
                        <a href="https://стильный-камень.рф/информация/акции-и-скидки.html">
                       Акции и скидки
                        </a>
                     </li>
                     <li class="small-left-menu">
                        <a href="https://стильный-камень.рф/prices">
                       Прайс-листы
                        </a>
                     </li> 
                     <li class="small-left-menu">
                        <a href="https://стильный-камень.рф/политика-конфенденциальности.html">
                       Пользовательское соглашение
                        </a>
                     </li>
                  </ul>
                  </transition>
               </div>

               <div style="clear:both;"></div>
               <div class="left-menu-icon">
                   <!--<nuxt-link to="калькулятор" append><img class="ugol-left" src="../assets/img/ugol-left-menu.png" alt="КАЛЬКУЛЯТОР">-->
                   <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html" append><img class="ugol-left" src="../assets/img/ugol-left-menu.png" alt="КАЛЬКУЛЯТОР">
                   <span class="text-calc">КАЛЬКУЛЯТОР</span>
                   <img class="icon-calc" src="../assets/img/calc-icon.png" alt="КАЛЬКУЛЯТОР"></a>

</div>
               <h4 class="first-aside-bottom">&nbsp;</h4>
</div>
</template>

<script>
export default {
   data() {
      return {
         showKatalog: true,
         showExample: true,
         showArticle: true,
         showInform: true,
         showKatalogTabletop: false,
         showKatalogWindowsill: false,
         showKatalogReception: false,
         showKatalogBarStand: false,
         showKatalogWallPanel: false,
         showKatalogTable: false,
         showKatalogStair: false,
         showKatalogFloor: false,
         disableTable:false,
      };
   },
}

</script>

<style scoped>
#aside-menu {color: #333;}
.sidebar-item ul li {margin-bottom: -5px;}
.sidebar-item ul li::before {content:''}
.sidebar-item h4 {
    font-size: 16px;
    line-height: 33px;
    margin: 0;
    padding: 0 10px;
    text-transform: uppercase;
    cursor: pointer;
}
.first-aside-h2 {
    background: url(../assets/img/back-first-h2.png) no-repeat;
    background-position: right top;
    height: 68px;
    vertical-align: bottom;
    margin-right: -1px!important;
}
.sidebar-item ul li a, h5 {
    color: black;
    display: block;
    font-size: 14px;
    line-height: 19px;
    min-height: 19px;
    padding: 4px 1px 4px 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 11px;
    cursor: pointer;
    font-family: displaepro-bold;
}
.sidebar-item ul li a:hover, h5:hover {
    text-decoration: underline;
}
.hiden-left-menu {
    background: #b1c2c2;
}
.sidebar-item ul li ul {
    margin-left: -20px;
    padding-left: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
}
.slider-aside {padding: 2px;
    text-align: center;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
}
.slider-aside a {color: #575656;}
.slider-aside a:hover {
    color: #575656;
    text-decoration: underline;
}
.sidebar-item {
    margin-bottom: 20px;
    float: left;
    width: 100%;
    font-family: displaepro-bold;
}
.sidebar-item i {
    font-size: 8px;
    color: #bdd0d0;
}
 .caret-default {
   border-style: solid;
	border-width: 0.12em 0.12em 0 0;
	content: '';
	display: inline-block;
	height: 0.4em;
	left: 0;
	position: relative;
	bottom: 0.12em;
	transform: rotate(45deg);
	vertical-align: middle;
	width: 0.4em;
}
.caret {
    border-style: solid;
	border-width: 0.12em 0.12em 0 0;
	content: '';
	display: inline-block;
	height: 0.4em;
	left: 0;
	position: relative;
	bottom: 0.2em;
	transform: rotate(135deg);
	vertical-align: middle;
	width: 0.4em;
}
.left-menu-h5{margin-top: 0px;margin-bottom: 0px;top: -5px;position: relative;}
.fade-enter, .fade-leave-active {
    transition: opacity .3s;
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-to {
    transition: opacity .3s;
     opacity: 0;
  }
  .slide-fade-enter-active,.slide-fade-leave-active  {
  transition:all .8s;
  opacity: 1;
}
.slide-fade-enter, .slide-fade-leave-to{
  transition:all .8s;
  opacity: 0;
}
  .small-left-menu {line-height: 0.1px;}
  .small-padding-left-menu {line-height: 0.1px;;padding-left: 20px; margin-bottom: 0;}
  .padding-left-menu {padding-left: 20px;}
  .left-submenu-padding {margin-left: -20px;padding-left: 20px;display: inline-block;}
</style>
