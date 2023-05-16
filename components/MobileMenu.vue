<template>
<div class="headerMobile">
    <div class="header-mobile row">
      <div class="col-xs-4 mobil-menu-tog">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle-mobile navbar-toggle-mobile-menu" data-toggle="collapse" data-target="#navbar"
                v-on:click="showMobileTopMenu = !showMobileTopMenu">
                    <span class="navbar-toggle-menu">
                    <span class="bars-block">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </span>
                    </span>
                </button>
            </div>
        </div>
        <div class="col-xs-4 mobile-logo">
            <nuxt-link to="/" append><img src="../assets/img/logo-min.jpg"></nuxt-link>
        </div>
        <div class="col-xs-4 " style="position:static;">
            <div class="calc-mobile">
              <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html"><img src="../assets/img/new-calc-icon-mobile.png"></a>
            </div>
            <div class="vopros-mobile">
                <a href="" @click.prevent="showHeaderCallback=!showHeaderCallback"><img src="../assets/img/new-vopros-icon-mobile.png"></a>
            </div>
          <div class="header-callback-modal" v-if="showHeaderCallback">
                    <div class="callback-form-top"></div>
                    <div class="form callback-form-wrapp">
                        <div v-if="showHeaderCallbackSend">
                          <span class="close-header-callback" @click="showHeaderCallback=!showHeaderCallback">X</span>
                          <span>Ваша заявка принята. Наш менеджер обязательно с Вами свяжется. Спасибо.</span>
                        </div>
                        <div v-else>
                          <form >
                              <div class="form-group"  >
                                <input type="text" class="form-control" id="name" name="name" v-model="nameHCB" placeholder="Ваше имя" required v-bind:class="[isActive1 ? 'form-active' : '']">
                              </div>
                              <div class="form-group" >
                                <input type="text" class="form-control" id="phone" name="phone" v-model="phoneHCB" placeholder="Телефон" v-phoned required v-bind:class="[isActive2 ? 'form-active' : '']">
                              </div>
                                <span><input type="checkbox" style="position:relative;top:3px;"  id="checkbox" v-model="checked" v-bind:class="[isActive3 ? 'form-active' : '']"> Я ознакомился (ознакомилась) с
                                  <a rel="nofollow" href="https://стильный-камень.рф/политика-конфенденциальности.html">политикой конфиденциальности</a>
                                  и согласен (согласна) на обработку персональных данных</span>
                              <div class="form-group">
                                <button type="submit" @click.prevent="sendHeader()" v-if="nameHCB&&phoneHCB.length>=13&&checked">Заказать звонок</button>
                                <button  type="submit" @click.prevent="checkForm()" v-else>Заказать звонок</button>
                              </div>
                          </form>
                        </div>
                    </div>
                  </div>
            </div>
    <transition name="fader">
                    <ul class="nav navbar-nav navigation navbar-nav-menu-mobile" v-if="showMobileTopMenu">
                        <li>
                          <nuxt-link @click.native="showMobileTopMenu = false" to="/каталог/">Каталог</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link @click.native="showMobileTopMenu = false" to="/каталог/столешницы/галерея-работ.html">Галерея</nuxt-link>
                        </li>
                        <li>
                            <a href="https://стильный-камень.рф/готовые-проекты/">Работы</a>
                        </li>
                        <li>
                            <a href="https://стильный-камень.рф/о-компании.html">Почему мы</a>
                        </li>
                        <li>
                            <a href="https://стильный-камень.рф/статьи/">Статьи</a>
                        </li>
                        <li>
                            <a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a>
                        </li>
                        <li>
                            <a href="https://стильный-камень.рф/контакты.html">Контакты</a>
                        </li>
                        <li>
                            <a href="https://стильный-камень.рф/информация/партнерам.html">Оптовикам</a>
                        </li>
                        <li v-on:click.prevent="showMobileTopMenu = !showMobileTopMenu">
                          <button>Закрыть</button>
                      </li>
                    </ul>
    </transition>
    </div>
    <div class="contact-mobile">
      <div class="row">
        <div class="col-xs-6 phone-header-mobile">
          <a href="tel:+74994080079"><img src="../assets/img/new-phone-icon-mobile.png"><span class="top-number"> +7 499 408 00 79</span></a>
        </div>
         <div class="col-xs-6 wa-header-mobile">
          <a href="https://api.whatsapp.com/send?phone=79100034100"><img src="../assets/img/new-wa-icon-mobile.png"><span class="top-number"> Напишите нам</span></a>
        </div>
        </div>
      </div>
    <div class="katalog-block">
        <div class="toggle-katalog-mobile">
            <button type="button"
            v-on:click="showMobileMenu = !showMobileMenu">
                    <span class="navbar-toggle-menu" v-if="showMobileMenu">КАТАЛОГ <span class="button-caret-off">&gt;</span></span>
                    <span class="navbar-toggle-menu" v-else>КАТАЛОГ <span class="button-caret-on">&gt;</span></span>
            </button>
        </div>
    </div>
            <transition name="fade">
                <ul class="nav navbar-nav navigation navbar-nav-katalog-mobile" v-show="showMobileMenu">
                    <li @click="showMobMenuStolesh=!showMobMenuStolesh">
                        <button>Столешницы</button>
                        <button class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuStolesh"><span>&gt;</span></button>
                        <button class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                        <transition name="fade">
                        <ul class="submenu-katalog-mobile" v-show="showMobMenuStolesh" @click="showMobileMenu = !showMobileMenu">
                          <li><nuxt-link to="/каталог/столешницы/столешницы-из-кварца.html" append title="Столешницы из кварца">Из кварцевого агломерата</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы/столешницы-из-натурального-кварца.html" append title="Столешницы из натурального кварца">Из натурального кварца</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы/столешницы-из-акрилового-камня.html" append title="Столешницы из акрилового камня">Из акрилового камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы/столешницы-из-жидкого-камня.html" append title="Столешницы из жидкого гранита">Из жидкого гранита</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы/столешницы-из-натурального-камня.html" append title="Столешницы из натурального камня">Из натурального камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы/столешницы-из-массива-дерева.html" append title="Столешницы из массива дерева">Из массива дерева</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы.html" append title="Столешницы из камня">Столешницы из камня</nuxt-link></li>
                          <li><a href="https://стильный-камень.рф/статьи/столешница-по-индивидуальным-размерам.html" title="Столешницы по индивидуальным размерам">Столешницы по индивидуальным размерам</a></li>
                          <li><nuxt-link to="/каталог/столешницы/столешницы-из-камня-для-кухни.html" append title="Столешницы из камня на кухню">Столешницы из камня для кухни</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы/столешница-из-камня-в-ванную.html" append title="Столешницы из камня в ванную">Столешницы из камня в ванную</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столешницы/галерея-работ.html" append title="Фотогалерея столешниц из камня">Фотогалерея столешниц из камня</nuxt-link></li>
                        </ul>
                        </transition>
                    </li>
                    <li @click="showMobMenuPod=!showMobMenuPod">
                        <button>Подоконники</button>
                        <button class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuPod"><span>&gt;</span></button>
                        <button class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                          <transition name="fade">
                          <ul class="submenu-katalog-mobile" v-show="showMobMenuPod" @click="showMobileMenu = !showMobileMenu">
                            <li><nuxt-link to="/каталог/подоконники/подоконники-из-кварца.html" append title="Подоконники из кварца">Из кварцевого агломерата</nuxt-link></li>
                            <li><nuxt-link to="/каталог/подоконники/подоконники-из-акрила.html" append title="Подоконники из акрилового камня">Из акрилового камня</nuxt-link></li>
                            <li><nuxt-link to="/каталог/подоконники/подоконники-из-жидкого-гранита.html" append title="Подоконники из жидкого камня">Из жидкого гранита</nuxt-link></li>
                            <li><nuxt-link to="/каталог/подоконники/подоконники-из-натурального-камня.html" append title="Подоконники из натурального камня">Из натурального камня</nuxt-link></li>
                            <li><nuxt-link to="/каталог/подоконники.html" append title="Подоконники из камня">Подоконники из камня</nuxt-link></li>
                          </ul>
                          </transition>
                    </li>
                    <li @click="showMobMenuRec=!showMobMenuRec">
                        <button >Ресепшн</button>
                        <button class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuRec"><span>&gt;</span></button>
                        <button class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                           <transition name="fade">
                          <ul class="submenu-katalog-mobile" v-show="showMobMenuRec" @click="showMobileMenu = !showMobileMenu">
                              <li><nuxt-link to="/каталог/ресепшн/ресепшн-из-кварца.html" append title="Ресепшн из кварца">Из кварцевого агломерата</nuxt-link></li>
                              <li><nuxt-link to="/каталог/ресепшн/ресепшн-из-акрила.html" append title="Ресепшн из акрилового камня">Из акрилового камня</nuxt-link></li>
                              <li><nuxt-link to="/каталог/ресепшн/ресепшн-из-жидкого-камня.html" append title="Ресепшн из жидкого гранита">Из жидкого гранита</nuxt-link></li>
                              <li><nuxt-link to="/каталог/ресепшн/ресепшн-натуральный-камень.html" append title="Ресепшн из натурального камня">Из натурального камня</nuxt-link></li>
                              <li><nuxt-link to="/каталог/ресепшн.html" append title="Ресепшн из камня">Ресепшн из камня</nuxt-link></li>
                          </ul>
                          </transition>
                    </li>
                    <li @click="showMobMenuBar=!showMobMenuBar">
                        <button>Барные стойки</button>
                        <button class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuBar"><span>&gt;</span></button>
                        <button class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                        <transition name="fade">
                        <ul class="submenu-katalog-mobile" v-show="showMobMenuBar" @click="showMobileMenu = !showMobileMenu">
                          <li><nuxt-link to="/каталог/барные-стойки/барные-стойки-из-кварца.html" append title="Барные стойки из кварца">Из кварцевого агломерата</nuxt-link></li>
                          <li><nuxt-link to="/каталог/барные-стойки/барные-стойки-из-акрила.html" append title="Барные стойки из акрила">Из акрилового камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/барные-стойки/барная-стойка-из-жидкого-камня.html" append title="Барные стойки из жидкого камня">Из жидкого гранита</nuxt-link></li>
                          <li><nuxt-link to="/каталог/барные-стойки/барная-стойка-из-натурального-камня.html" append title="Барные стойки из натурального камня">Из натурального камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/барные-стойки.html" append title="Барные стойки из камня">Барные стойки из камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/барные-стойки/галерея-барных-стоек.html" append title="Фотогалерея барных стоек">Фотогалерея барных стоек</nuxt-link></li>
                        </ul>
                        </transition>
                    </li>
                    <li @click="showMobMenuSten=!showMobMenuSten">
                        <button >Стеновые панели</button>
                        <button  class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuSten"><span>&gt;</span></button>
                        <button  class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                          <transition name="fade">
                         <ul class="submenu-katalog-mobile" v-show="showMobMenuSten" @click="showMobileMenu = !showMobileMenu">
                          <li><nuxt-link to="/каталог/стеновые-панели/стеновые-панели-из-кварца.html" append title="Стеновые панели из кварца">Из кварцевого агломерата</nuxt-link></li>
                          <li><nuxt-link to="/каталог/стеновые-панели/стеновые-панели-из-акрила.html" append title="Стеновые панели из акрила">Из акрилового камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/стеновые-панели/стеновая-панель-из-жидкого-камня.html" append title="Стеновые панели из жидкого камня">Из жидкого гранита</nuxt-link></li>
                          <li><nuxt-link to="/каталог/стеновые-панели/стеновая-панель-натуральный-камень.html" append title="Стеновые панели из натурального камня">Из натурального камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/стеновые-панели.html" append title="Стеновые панели из камня">Стеновые панели из камня</nuxt-link></li>
                          <li><a href="https://стильный-камень.рф/каталог/стеновые-панели/галерея-стеновых-панелей.html" title="Фотогалерея стеновых панелей">Фотогалерея стеновых панелей</a></li>
                        </ul>
                        </transition>
                    </li>
                    <li v-if="showBlock" @click="showMobMenuStol=!showMobMenuStol">
                        <button>Столы</button>
                        <button class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuStol"><span>&gt;</span></button>
                        <button class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                        <transition name="fade">
                        <ul class="submenu-katalog-mobile" v-show="showMobMenuStol" @click="showMobileMenu = !showMobileMenu">
                          <li><nuxt-link to="/каталог/столы/столы-из-кварца.html" append title="Столы из кварца">Из кварцевого агломерата</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столы/стол-из-акрилового-камня.html" append title="Столы из акрилового камня">Из акрилового камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столы/столы-из-жидкого-камня.html" append title="Столы из жидкого камня">Из жидкого гранита</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столы/стол-из-натурального-камня.html" append title="Столы из натурального камня">Из натурального камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/столы.html" append title="Столы из камня">Столы из камня</nuxt-link></li>
                        </ul>
                        </transition>
                    </li>
                    <li @click="showMobMenuLest=!showMobMenuLest">
                        <button>Лестницы</button>
                        <button  class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuLest"><span>&gt;</span></button>
                        <button  class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                        <transition name="fade">
                        <ul class="submenu-katalog-mobile" v-show="showMobMenuLest" @click="showMobileMenu = !showMobileMenu">
                          <li><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-и-ступени-из-кварцевого-агломерата.html" append title="Лестницы из кварца">Из кварцевого агломерата</nuxt-link></li>
                          <li><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-из-акрилового-камня.html" append title="Лестницы из акрилового камня">Из акрилового камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-из-искусственного-камня.html" append title="Лестницы из жидкого камня">Из жидкого гранита</nuxt-link></li>
                          <li><nuxt-link to="/каталог/лестницы-и-ступени-из-камня/лестницы-из-натурального-камня.html" append title="Лестницы из натурального камня">Из натурального камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/лестницы-и-ступени-из-камня.html" append title="Лестницы из камня">Лестницы из камня</nuxt-link></li>
                        </ul>
                        </transition>
                    </li>
                    <li @click="showMobMenuPol=!showMobMenuPol">
                        <button >Полы</button>
                        <button class="mob-menu-caret mob-menu-caret-on" v-if="showMobMenuPol"><span>&gt;</span></button>
                        <button class="mob-menu-caret mob-menu-caret-off" v-else><span>&gt;</span></button>
                        <transition name="fade">
                        <ul class="submenu-katalog-mobile" v-show="showMobMenuPol" @click="showMobileMenu = !showMobileMenu">
                          <li><nuxt-link to="/каталог/пол-из-камня.html" append title="Пол из кварца">Пол из кварцевого агломерата</nuxt-link></li>
                          <li><nuxt-link to="/каталог/пол-из-акрилового-камня.html" append title="Пол из акрилового камня">Пол из акрилового камня</nuxt-link></li>
                          <li><nuxt-link to="/каталог/пол-из-натурального-камня.html" append title="Пол из натурального камня">Пол из натурального камня</nuxt-link></li>
                        </ul>
                        </transition>
                    </li>
                    <li><nuxt-link to="/каталог/интегрированные-мойки.html" append title="Интегрированные мойки">Интегрированные мойки</nuxt-link></li>
                    <li><nuxt-link to="/каталог/каталог-кромок.html" append title="Каталог кромок">Каталог кромок</nuxt-link></li>
                    <li><nuxt-link to="/каталог/каталог-плинтусов/" append title="Каталог плинтусов">Каталог плинтусов</nuxt-link></li>
                    <li v-on:click.prevent="showMobileMenu = !showMobileMenu">
                        <button>Закрыть</button>
                    </li>
                </ul>
            </transition>
            <!-- class="bottom-close-mobile" -->

</div>
</template>
<script>
export default {
   directives: {
      phoned: {
        // определение директивы
        bind(el) {
            el.oninput = function(e) {
              if (!e.isTrusted) {
                return;
              }

              let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
              this.value = !x[2] ? x[1] :'(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
              el.dispatchEvent(new Event('input'));
        }
      }
  },
  scroll: {
          bind(el, binding, vnode) {
          let f = function (evt) {
	          if (binding.value(evt, el)) {
	        window.removeEventListener('scroll', f)
	        }
	       }
	        window.addEventListener('scroll', f)
          },
  }
},
      data() {
        return {
        showMobileTopMenu: false,
        showMobileMenu: false,
        showMobMenuStolesh: false,
        showMobMenuPod: false,
        showMobMenuRec:false,
        showMobMenuBar:false,
        showMobMenuSten:false,
        showMobMenuStol:false,
        showMobMenuLest:false,
        showMobMenuPol:false,
        scrollToY: 0,
        showHeaderCallback:false,
        showHeaderCallbackSend:false,
        nameHCB:"",
        phoneHCB:"",
        checked:false,
        isActive1:false,
        isActive2:false,
        isActive3:false,
        showBlock:false,
        }
    },
    methods: {
      checkForm() {
        if (this.nameHCB==''){
        this.isActive1=true;
        }
        else {
          this.isActive1=false;
        }
        if (this.phoneHCB==''){
        this.isActive2=true;
        }
         else {
          this.isActive2=false;
        }
        if (this.checked==false){
        this.isActive3=true;
        }
         else {
          this.isActive3=false;
        }
      },
      async sendHeader(){
         this.showHeaderCallbackSend=true;
          const params ={
                      name: this.nameHCB,
                      phone: this.phoneHCB,
                    };
          const  data = await this.$axios.post('https://стильный-камень.рф/api/mail_vue.php',
          params)
                .then(response => (this.success = response.data.result))
                .catch(error => (this.success = error.response.data.result));
       },
    },
      mounted() {
  window.addEventListener('scroll', (event) => this.scrollToY == window.scrollY)
},
}

</script>
<style scoped>
.headerMobile {z-index:8; max-width: 500px;width: 100%;}
/*Header-block*/
.navigation li a {
    color: #797979;
}
.header-mobile  {background:#fff;}
.mobile-logo {float:left;}
.mobile-logo img {/*width:100%;height:auto;margin:4px;*//*width: auto;height: 40px;margin-left: -15px;*/width: auto;height: 32px;margin-left: 0;margin-top: 5px;}
.phone-header-mobile a{font-size: 17px;color: #fff;}
.phone-header-mobile a img{float: left;padding-left: 15px;padding-top: 5px;padding-right: 5px;padding-bottom: 5px;}
.navbar-toggle-mobile {float: left;padding: 0px 10px;margin:4px;background-color: #ee6401;background-image: none;
     border: 1px solid transparent;border-radius: 4px;margin-bottom: 0px;}
.navbar-toggle-mobile-menu{background-color: #fff;padding: 0;}
.navbar-header {padding-left: 15px;}
.icon-bar {background-color: white;margin-top: 4px;}
.navbar-toggle-mobile .icon-bar {display: block;width: 18px;height: 2px;border-radius: 1px;}
.navbar-toggle-mobile-menu .navbar-toggle-menu {display: inline-block;padding-right: 30px;font-size: 15px;/*top: -5px;left: -4px;position: relative;*/height: 25px;}
.navbar-toggle-mobile-katalog .navbar-toggle-menu {display: inline-block;padding-right: 30px;}
.navbar-toggle-mobile-katalog .icon-bar {display: block;width: 22px;height: 2px;border-radius: 1px;}
.bars-block {display: inline-block;border: none;}
.navbar-nav {z-index: 9;width: 100%;left: 0;position: relative;margin: 0;top: 0;}
.navbar-nav-menu-mobile {top: 27px;}
.navbar-nav li {float: left;width: 100%; margin: 0;background: #fff;border-bottom: 1px solid #797979;text-align: center;height: 40px;}
.navbar-nav li a{font-family: "Sans-serif", sans-serif;font-size: 16px;text-decoration: none;font-weight: bold;text-transform: uppercase;padding-top: 5px;
    padding-bottom: 5px;line-height: 30px; border: none;display:block;}
.navbar-nav li:hover, .navbar-nav li:active {background: #fff;}
.navbar-nav li:hover button, .navbar-nav li:active button{color: #fc7f01;}
.navbar-nav li:last-child {background:#fc7f01;}
.navbar-nav li:last-child button{width: 100%;text-align: center;}
.navbar-nav button{
  color: #fff;
  background: transparent;
  text-transform: uppercase;
  border-style: none;
  font-family: "Sans-serif", sans-serif;
  font-size: 13px;
  font-weight: bold;
  padding-top: 3px;
  padding-bottom: 3px;
  line-height: 30px;
  padding-left: 20px;
  width: calc(100% - 50px);
  text-align: left;
}
.mobil-menu-tog{float: left;margin-top: 5px;}
/*Contact-block*/
.contact-mobile {background: url(../assets/img/menu-up-fon.jpg);height: 38px;}
.contact-mobile .phone-header-mobile:nth-child(2) {text-align: right;}
.contact-mobile .callback-toggle {margin-right: 7px;margin-top: 4px;display: block;}
.callback-top {padding-right: 10px;padding-left: 10px;font-size: 12px;}
.phone-header-mobile{position: unset;padding-top: 8px;}
.wa-header-mobile{padding-top: 8px;}
.wa-header-mobile a{font-size: 17px;color: #fff;}
.wa-header-mobile a img{float: left;display: inline-block;padding-left: 25px;padding-top: 2px;padding-right: 5px;padding-bottom: 5px;}
.top-number,.top-mail {margin-left:8px;}
.top-number{display: block;padding-top: 0;position: static;}
.top-number img{width:15px;}
.top-mail {display: block;padding-bottom: 2px;}
.callback-form-wrapp span {text-align: left;}
.callback-form-wrapp span a{font-size: 10px;}
/*Katalog-block*/
.katalog-block {background:#fff;width: 100%;margin-top: 5px;}
.katalog-block-fixed  {position: fixed;z-index: 6;width: 100%;}
.navbar-toggle-mobile-katalog {height: 36px;width: 140px;}
.navbar-toggle-mobile-katalog .bars-block {position: static;padding-left: 15px;}
.toggle-katalog-mobile {float:left;text-align: center;width: 100%;}
.toggle-katalog-mobile button{background: #fff;}
.button-caret-on{
    display: inline-block;
    padding-left: 0px;
    margin-left: 5px;
    position: relative;
    top: -1px;
}
.button-caret-off{transform: scaleX(1.2)rotate(90deg);
    display: inline-block;
    padding-left: 0px;
    margin-left: 5px;}
 .vopros-mobile, .calc-mobile {position: static;display: block;float: right;margin-top: 10px;margin-right: 10px;}
 .calc-mobile {margin-right: 10px;margin-top: 10px;}
.navbar-nav-katalog-mobile {border-top: 1px solid rgb(121, 121, 121);margin-top: 0px;position: static;}
.navbar-nav-katalog-mobile::before, .navbar-nav-katalog-mobile::after {content:none;}
.navbar-nav-katalog-mobile li {border-top:none;}
.vopros-mobile img{width:22px;}
.calc-mobile img{width:22px;}
.fader-enter, .fader-leave-active {
    transition: opacity .3s;
     opacity: 1;
  }
  .fader-enter-active, .fader-leave-to {
    transition: opacity .3s;
     opacity: 0;
  }
.fade-enter, .fade-leave-active {
    transition: all .3s;
     height:auto;
  }
  .fade-enter-active, .fade-leave-to {
    transition: all .3s;
     height: 30px;
  }
  .header-callback-modal {
  position: absolute;
  z-index: 9999999;
  width: 160px;
  top: 50px;
  left: calc(50% - 80px);
}
.callback-form-top {
    display:none;
    width: 70%;
    height: 12px;
    background: url(https://стильный-камень.рф/assets/newdisign/img/callback-top-bg.png) no-repeat center;
    margin-top: -2px;
    margin-left: auto;
}
.callback-form-wrapp {
    padding: 20px 10px 10px 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 16px -2px rgba(0, 0, 0, .29);
}
.form-group {
    margin-bottom: 15px;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.callback-form-wrapp span{
  color: black;
  font-size: 12px;
  font-weight: normal;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
}
.callback-form-wrapp a {color:#79a6a6}
.callback-form-wrapp a:hover {color: #f90;}
.callback-form-wrapp button    {
    width: 100%;
    background: #ff8400;
    color: #fff;
    height: 40px;
    border: 0;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
}
.close-header-callback {
    text-align: right;
    width: fit-content;
    padding: 5px;
    margin-left: auto;
    display: block!important;
    color: #f90!important;
    font-size: 14px!important;
    transform: scaleX(1.5);
    cursor: pointer;
}
.form-active {box-shadow: 0px 0px 10px 0px #f90 inset;}
.navbar-nav-katalog-mobile li {height: fit-content;text-align: left;}
/*.navbar-nav-katalog-mobile li:first-child  {background:#fc7f01;text-align: right;}
.navbar-nav-katalog-mobile li:first-child button{padding-right: 20px;padding-left: 20px;padding-right: 20px; width: 50px!important;}*/
.navbar-nav-katalog-mobile li:last-child {background:#fc7f01;}
.navbar-nav-katalog-mobile li:last-child button{width: 100%;text-align: center;color: #fff;}
.navbar-nav-katalog-mobile button{
  color: #797979;
  background: transparent;
  text-transform: uppercase;
  border-style: none;
  font-family: "Sans-serif", sans-serif;
  font-size: 13px;
  font-weight: bold;
  padding-top: 3px;
  padding-bottom: 3px;
  line-height: 30px;
  padding-left: 20px;
  width: calc(100% - 50px);
  text-align: left;
}
.navbar-nav-katalog-mobile li a{
  font-size: 13px;
  padding-left: 20px;
}
.submenu-katalog-mobile {border-top: 1px solid #797979;margin-top: 0px;}
.submenu-katalog-mobile li{text-align: left; border-bottom: 1px solid #aaa;border-top: none;background: #eee;}
.submenu-katalog-mobile li a{font-size: 11px; padding-top: 2px;padding-bottom: 2px;padding-left: 40px; display:block;}
.submenu-katalog-mobile li:first-child  {background:#eee;text-align: left;}
.submenu-katalog-mobile li:last-child {background:#eee;}
.sub-line {height: 5px!important;background: #fff!important;}
.mob-menu-caret {float: right;width: 50px!important;}
.mob-menu-caret-off span{transform: scaleY(1.2);display: inline-block;}
.mob-menu-caret-on span{transform: scaleX(1.2)rotate(90deg);display: inline-block;}
.fade-enter, .fade-leave-active {
    transition: opacity .3s;
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-to {
    transition: opacity .3s;
     opacity: 0;
}
@media (min-width: 213px){
    .katalog-block {min-height: 38px;}
}
@media (min-width: 251px){
    .top-number{font-size: 18px;}
    .top-number img{width:25px;}
    .callback-top {font-size: 10px;margin-top: 5px;}
}
@media (min-width: 313px){
    .mobile-logo img {height: 46px;margin-left: -46px;margin-top: -5px;}
    .header-mobile  {min-height: 45px;}
    .mobil-menu-tog{margin-top: 0;}
    .callback-top {font-size: 12px;margin-top: 0;}
    .top-number{font-size: 18px;}
    .icon-bar {background-color: white;margin-top: 4px;}
    .navbar-nav-menu-mobile {z-index: 9;margin: 0;position: static;width: 100%;left: 0;padding: 0;/*background: #ababab;border: 1px solid #797979;*/}
    .navbar-nav-menu-mobile::before,.navbar-nav-menu-mobile::after{display: table;content:none;}
    .navbar-toggle-mobile-menu  .navbar-toggle-menu {font-size: 22px;top: 1px;}
    .navbar-toggle-mobile-menu  .icon-bar {display: block;width: 22px;height: 2px;border-radius: 1px;background-color: #ed6300;}
    .navbar-toggle-menu {padding-right: 0px;color: #EE6402;}
}
@media (min-width: 410px){
    .mobile-logo img {height: 37px;}
    .top-number{font-size: 20px;}
    .callback-top {margin-top: 5px;}
    .mobile-logo img {margin-left: -20px;}
    .header-callback-modal {left: calc(50% - 20px);top: 76px;}
}
@media (min-width: 420px){
    .top-number{font-size: 22px;}
}
@media (min-width: 501px){
.mobile-logo img {margin-left: 0;}
}
@media (max-width: 350px){
  .phone-header-mobile a img {
    padding-top: 3px;
  }
  .wa-header-mobile a img {
    padding-top: 0px;
    padding-left: 20px;
  }
  .top-number {
    font-size: 15px;
  }
  .mobile-logo img {
    margin-left: -51px;
  }
  .wa-header-mobile, .phone-header-mobile {
    padding-top: 9px;
  }
}
@media (max-width: 290px){
  .navbar-nav-menu-mobile {z-index: 9;margin: 0;position: static;width: 100%;left: 0;padding: 0;/*background: #ababab;border: 1px solid #797979;*/}
  .navbar-nav-menu-mobile::before,.navbar-nav-menu-mobile::after{display: table;content:none;}
  .navbar-toggle-mobile-menu  .icon-bar {display: block;width: 22px;height: 2px;border-radius: 1px;background-color: #ed6300;}
  .navbar-toggle-menu {padding-right: 0px;color: #EE6402;}
  .navbar-toggle-mobile-menu {margin-top: 0px;}
  .mobile-logo img {margin-left: -52px;height: 40px;margin-top: -5px;}
  .calc-mobile,.vopros-mobile {margin-top: 5px;}
  .top-number {font-size: 13px;}
  .wa-header-mobile a img {padding-left: 10px;}
  .toggle-katalog-mobile button {border: none;}
}
</style>
