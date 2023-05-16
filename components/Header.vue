<template>
<div class="logo-nav-wrapp" id="upper">
 <!-- <div class="go-up" title="Вверх" id='ToTop' v-if="showNav">
        <transition name="fade">
            <a href="#top">⇧</a>
        </transition>
  </div>-->
        <div class="logo-wrapp" id="logo">
            <nuxt-link title="Стильный Камень" to="/" append>
                <img class="biglogo" src="../assets/img/logo-big.jpg" alt="Стильный камень">
                <img class="hoverlogo" src="../assets/img/logo-min.jpg" alt="Стильный камень">
            </nuxt-link>
        </div>
        <div class="back-menu">
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar"
                    v-on:click="showHeaderToggle = ! showHeaderToggle">
                        <span style="display:inline-block;" class="navbar-toggle-menu">МЕНЮ</span>
                        <span style="display:inline-block;border: none;"> <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> </span>
                    </button>
                    <transition name="fade">
                        <ul class="nav  navigation navbar-nav-menu-pc" v-if="showHeaderToggle">
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
                        </ul>
                    </transition>
                </div>
                <div class="collapse navbar-collapse top-menu-collapse" id="navbar">
                    <ul class="nav navbar-nav navigation">
                        <li class="first"><a href="https://стильный-камень.рф/готовые-проекты/">Работы</a></li>
                        <li><a href="https://стильный-камень.рф/о-компании.html">Почему мы</a></li>
                        <li><a href="https://стильный-камень.рф/статьи/">Статьи</a></li>
                        <li><a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a></li>
                        <li class="last"><a href="https://стильный-камень.рф/контакты.html">Контакты</a></li>
                        <li class="button-opt"><a href="https://стильный-камень.рф/информация/партнерам.html">ОПТОВИКАМ</a></li>
                    </ul>
                </div>
            </nav>
            <div class="phone-header">
                <a href="tel:+74994080079"><span class="top-number"><img  src="../assets/img/phone-icon.png" alt="Телефон"> +7 499 408 00 79</span></a>
                <a href="mailto:kgran@mail.ru"><span class="top-mail">KGRAN@MAIL.RU</span></a>
                <a href="" class="callback-toggle" @click.prevent="showHeaderCallback=!showHeaderCallback"><span class="callback-top" >Мы перезвоним</span></a>
                  <div class="header-callback-modal" v-if="showHeaderCallback">
                    <div class="callback-form-top"></div>
                    <div class="form callback-form-wrapp">
                        <div v-if="showHeaderCallbackSend">
                          <span class="close-header-callback" @click="showHeaderCallback=!showHeaderCallback">X</span>
                          <span class="done">Ваша заявка принята. Наш менеджер обязательно с Вами свяжется. Спасибо.</span>
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
                                <button type="submit" @click.prevent="sendHeader()" v-if="nameHCB&&phoneHCB.length >=13 &&checked">Заказать звонок</button>
                                <button  type="submit" @click.prevent="checkForm()" v-else>Заказать звонок</button>
                              </div>
                          </form>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    <img class="right-back-menu" src="../assets/img/menu-right-fon.jpg" alt="Фон">
</div>
</template>
<style>
.navbar-default .navbar-toggle {
    border-color: #ddd;
}
.navbar-toggle {
    position: relative;
    float: right;
    padding: 0px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.logo-nav-wrapp {
    width: 100%;
    height: auto;
    background: none;
}
.navbar-default .navbar-toggle .icon-bar {
    background-color: white;
    margin-top: 4px;

}
.navbar-default {display: inline-block;}
.navbar-default .navbar-toggle {
    border-color: rgb(221, 221, 221);
}

.navbar-toggle .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
}
.navbar-header .container ul li:before {
  opacity: 0;
}
.right-back-menu {display: none;}
.biglogo {display: none}
.hoverlogo {display:block;left: 0;position: absolute;}
.top-menu-collapse {display: none}
.logo-wrapp {
    width: 100%;
    float: none;
    position: relative;
    height: 111px;
    padding-right: 15px;
    padding-left: 15px;
    display: block;
    }
.back-menu  {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    background: url(../assets/img/menu-up-fon.jpg);
    height: 111px;
    margin-left: 0px;
    display: block;
    }

.biglogo, .hoverlogo {
    position: absolute;
    z-index: 2;
}
.biglogo{left: -80px;top: 0px;}
.right-back-menu {display:none}
.phone-header {
    display: inline-block;
    color: white;
    font-size: 22px;
    font-family: displaepro;
    z-index: 2;
    left: -100px;
    position: relative;
}
.callback-top a {
    color: white;
    text-decoration: none;
}
.callback-top {
    font-family: displaepro-bold;
    font-size: 10px;
    display: inline-block;
    color: white;
    border: 2px solid #9e3f00;
    background: #9e3f00;
    border-radius: 15px;
    margin-left: 5px;
    padding: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    text-transform: uppercase;
}
.top-mail {
    font-family: displaepro-bold;
    font-size: 12px;
    display: inline-block;
}
.top-number {
    display: block;
    padding-top: 20px;
    position: relative;
}
.phone-header a {color: #fff;text-decoration: none;}
.phone-header a:hover {color: #fff;text-decoration:underline;}
.top-number img {vertical-align: middle;}
.navbar-default .navbar-nav > li.button-opt > a {
    color: #9e3f00;
    border: 2px solid #9e3f00;
    border-radius: 15px;
    margin-left: 5px;
    padding: 5px;
    text-decoration: none;
    font-family: "Sans-serif", sans-serif;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    z-index: 3;
}
.navbar-default .navbar-nav > li.button-opt > a:hover {
    color: white;
    background: #9e3f00;
}
.navbar-toggle {display:block;left: 280%;top: -10px;}
.navbar-default .navbar-nav > li > a {color: #fff;padding: 0;text-decoration: none;}
.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {
    color: #333;
    background-color: transparent;
    text-decoration: none;

}
.navigation li {
    float: none;
    display: inline-block;
    list-style: none;
    margin-top: 40px;
    margin-right: 0;
}
.navigation li a {
    color: #fff;
    font-family: "Sans-serif", sans-serif;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    z-index: 3;
    text-transform: uppercase;
}
.navbar-nav > li > a, .navbar-nav > li  {padding: 0;}
ul.navbar-nav {float: left;position: relative;left: -5%;z-index:4;top: -7px;}
.navbar-toggle-menu {display: inline-block;
    color: #fff;
    font-size: 22px;
    font-family: Calibri;
    font-weight: 400;
    line-height: 31.4286px;
    border: none;
}
.navbar-nav-menu-pc {z-index: 8;margin: 15px;position: fixed!important;width: 500;left: -10px;}
.navbar-nav-menu-pc {top: 27px;}
.navbar-nav-menu-pc li {float: left;width: 100%; margin: 0;background: #797979;border-bottom: 1px solid #fff;text-align: center;height: 40px;}
.navbar-nav-menu-pc li:before {content:''!important;}
.navbar-nav-menu-pc li a{font-family: "Sans-serif", sans-serif;font-size: 16px;text-decoration: none!important;font-weight: bold;text-transform: uppercase;
    padding-top: 10px;padding-bottom: 10px;line-height: 30px; border: none;top: 5px;position: relative;color:#fff!important;}
.navbar-nav-menu-pc li:hover, .navbar-nav-menu-pc li:active {background: #555;}
.navbar-nav-menu-pc li a:hover{color:#fff!important;}
.navbar-nav-menu-pc {top: 55px;position: absolute!important;left: 0;}
.header-callback-modal {
  position: absolute;
  z-index: 9999999;
  width: 160px;
}
.callback-form-top {
    width: 100%;
    height: 12px;
    background: url(https://стильный-камень.рф/assets/newdisign/img/callback-top-bg.png) no-repeat center;
    margin-top: -2px;
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
.done {margin-bottom: 60px;}
.form-active {box-shadow: 0px 0px 10px 0px #f90 inset;}
.fade-enter, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter-active, .fade-leave-to {
     opacity: 0;
  }
.go-up a, .go-up a:hover {
    border: none;
    color: #fff;
    text-decoration: none;
}
@media (min-width: 768px){
    .logo-wrapp {width: 34%;position: relative;display:table-cell;float:left;}
    .back-menu  {width: 44%;position: relative;display:table-cell;left:10px;}
    .hoverlogo {display: none}
    .biglogo {display:block}
    .right-back-menu {
        display: table-cell;
        position: absolute;
        right: -5px;
        top: 0;
    }
    .phone-header {
        left: -60px;
        position: relative;
    }
    .navbar-toggle {
    top: -15px;
    left: 220%;
    z-index: 5;
}
.navbar-nav-menu-pc {left: calc(5% - 320px)!important;;top:-10px;}
}


@media (min-width: 992px){
    .top-menu-collapse {display: none}
    .right-back-menu {right: 0;}
    .back-menu {width: 37%;}
    .phone-header {
        left: -80px;
        position: relative;
    }
    .navbar-toggle     {left: 320%;}
    .navbar-nav-menu-pc {left: calc(5% - 220px)!important;}

}
@media (min-width: 1201px){
    .top-menu-collapse {display: block}
    .navbar-toggle {display:none}
    .back-menu {
    position: relative;
    width: 6%;
    left: -55px;
}
.phone-header {left: calc(70% - 20px);
    position: absolute;
    width: 100%;
}
}
@media (min-width: 1306px){
    .top-menu-collapse {display:  block}
    .right-back-menu { right: 50px;}

}
@media (min-width: 1401px){
    .top-menu-collapse {display:  block}
    .right-back-menu {right: 115px;}
    .back-menu {left: -53px;}
}
@media (min-width: 1531px){
    .logo-nav-wrap {margin-right: calc(50% - 500px);margin-left: calc(50% - 460px);left: 15px;position: relative;}
    .right-back-menu {position: absolute;left: 1240px;}
}
@media (min-width: 1636px){
    .right-back-menu {position: absolute;left: 1340px;}
}
@media (min-width: 1821px){
    .right-back-menu {position: absolute;left: 1420px;}
}
</style>
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

              let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,5})/);
              this.value = !x[2] ? x[1] :'(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
              el.dispatchEvent(new Event('input'));
        }
      }
  }
},
    data() {
      return {
         showHeaderToggle: false,
         showHeaderCallback:false,
         showHeaderCallbackSend:false,
         nameHCB:"",
         phoneHCB:"",
         checked:false,
         isActive1:false,
         isActive2:false,
         isActive3:false,
         showNav:true,
         }
    },
   /* async mounted() {
 const sceneT = this.$scrollmagic.scene({
    triggerElement: '#logo',
    triggerHook: 0.7,
     duration: 10,
     scrollOffset : -50,
  })
    .setTween('#ToTop', {
      css: {
        display: 'block'
      }
  })
  this.$scrollmagic.addScene(sceneT)
    },*/

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
};
</script>
