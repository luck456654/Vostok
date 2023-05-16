<template>
<div style="position:relative;">
  <img class="footer-photo" src="https://стильный-камень.рф/assets/newdisign/img/footer-stol.jpg" alt="img">
 <div class="footer">

    <div class="go-up back_to_top" title="Вверх" id='ToTop' v-if="showNav">
        <transition name="fade">
            <a href="#top">⇧</a>
        </transition>
    </div>
    <div class="go-down v-btn v-btn--bottom" title="Вниз" id='ToBottom' v-if="showNav">
        <transition name="fade">
                <a href="#bottom">⇩</a>
        </transition>
    </div>
            <div  class="fixed-overlay" v-if="showFooterCallback">
                                <div class="form-zakaz-kamen">
                                    <span class="close-form-kamen"><i class="fa fa-times" aria-hidden="true"></i></span>
                                    <h3>Форма обратной связи</h3>
                                    <input type="text" placeholder="Ваше имя*" class="form-control zakaz-name">
                                    <span style="display:none;color:red;" class="error-name">Укажите свое имя</span>
                                    <input type="text" data-mask="+0(000)000-00-00" placeholder="Ваш телефон*" class="form-control zakaz-phone">
                                    <span style="display:none;color:red" class="error-phone">Укажите номер телефона</span>
                                    <input type="text" placeholder="Ваш эл. адрес" class="form-control zakaz-mail">
                                    <label  style="color:black;font-size:12px;font-weight:normal;"><input style="position:relative;top:3px;" type="checkbox" checked />&nbsp;Я ознакомился (ознакомилась) с <a style="color:black;text-decoration:underline;" rel="nofollow" href="[[~754]]">политикой конфиденциальности</a> и согласен (согласна) на обработку персональных данных</label>
                                    <span onclick="yaCounter29428070.reachGoal('zayavka'); return true;" class="button-zakaz">ЗАКАЗАТЬ</span>
                                </div>
            </div>
            <div v-if="showFooterMeasuring">
                                    <span class="close-form-kamen"><i class="fa fa-times" aria-hidden="true"></i></span>
                                    <h3>Вызвать замерщика</h3>
                                    <p></p>
                                    <input type="text" placeholder="Ваше имя*" class="form-control zakaz-name">
                                    <span style="display:none;color:red;" class="error-name">Укажите свое имя</span>
                                    <input type="text" data-mask="+0(000)000-00-00" placeholder="Ваш телефон*" class="form-control zakaz-phone">
                                    <span style="display:none;color:red" class="error-phone">Укажите номер телефона</span>
                                    <input type="text" placeholder="Ваш эл. адрес" class="form-control zakaz-mail">
                                    <span class="button-zakaz">Вызвать</span>
        </div>

       <div class="footer-right">
            <div class="container footer-media">
               <div class="row">
                  <div class="col-md-6 col-xs-12 col-sm-12 footer-center-left">
                      <ul class="footer-nav">
                              <li><nuxt-link to="/" append>Главная</nuxt-link></li>
                              <li><a href="https://стильный-камень.рф/о-компании.html">Почему мы</a></li>
                              <li><a href="https://стильный-камень.рф/о-продукте.html">О продукте</a></li>
                              <li><a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a></li>
                              <li ><a href="https://стильный-камень.рф/контакты.html" >Контакты</a></li>
                           </ul>
                            <span class="bottom_address">г. Москва, Полесский проезд 16с1, офис 427</span>
                        <a title="Разработка и продвижение сайтов в Москве и других регионах России" class="siteupper" rel="nofollow" href="http://сайты-в-топ.рф">Разработка и продвижение "SiteUpper"</a>
                      <img class="dif-center" src="../assets/img/footer-center.jpg" />
                  </div>
                  <div class="col-md-6 col-xs-12 col-sm-12 footer-center-right footer-icons">
                        <div class="footersocseti-block">
                            <a href="tel:+74994080079">
                              <span class="footer-number"> +7 499 408 00 79</span>
                            </a>
                              <ul class="footersocseti">
                                 <li v-on:mouseover="hoverSocial1 = true" v-on:mouseleave="hoverSocial1 = false">
                                  <a href="https://viber.click/79100034100" append rel="nofollow" aria-label="Напишите по телефону 8 (910) 003-4100" title="Мы в Вайбере">
                                      <span title="Напишите по телефону 8 (910) 003-4100" class="hint--left">
                                        <img src="../assets/img/viber-icon.png" alt="Вайбер">
                                      </span>
                                      <span class="gray_left" v-if="hoverSocial1">Напишите по телефону 8 (910) 003-4100</span>
                                    </a>
                                 </li>
                                    <li v-on:mouseover="hoverSocial2 = true" v-on:mouseleave="hoverSocial2 = false">
                                    <a href="http://vk.com/club23855590" append rel="nofollow" title="Мы в Вконтакте" >
                                      <span title="Мы в Вконтакте" class="hint--left">
                                        <img src="../assets/img/vk-icon.png" alt="ВКонтакте">
                                      </span>
                                      <span class="gray_left gray_left_2" v-if="hoverSocial2">Мы в Вконтакте</span>
                                      </a>
                                 </li>
                                 <li v-on:mouseover="hoverSocial3 = true" v-on:mouseleave="hoverSocial3 = false">
                                    <a href="" append rel="nofollow" aria-label="Напишите по телефону 8 (910) 003-4100" title="Мы в Телеграм">
                                      <span title="Напишите по телефону 8 (910) 003-4100" class="hint--left">
                                        <img src="../assets/img/telegram-icon.png" alt="Телеграм">
                                      </span>
                                      <span class="gray_left gray_left_3" v-if="hoverSocial3">Напишите по телефону 8 (910) 003-4100</span>
                                    </a>
                                 </li>
                                 <li v-on:mouseover="hoverSocial4 = true" v-on:mouseleave="hoverSocial4 = false">
                                  <a href="https://api.whatsapp.com/send?phone=79100034100" rel="nofollow" aria-label="Напишите по телефону 8 (910) 003-4100" title="Мы в Вотсапе">
                                      <span title="Напишите по телефону 8 (910) 003-4100" class="hint--left">
                                        <img src="../assets/img/whatsapp_ikon.png" alt="Вотсап">
                                      </span>
                                      <span class="gray_left gray_left_4" v-if="hoverSocial4">Напишите по телефону 8 (910) 003-4100</span>
                                    </a>
                                 </li>
                              </ul>
                         </div>
                    </div>
                      <div class="copyright" id="bottom">
                        ИНН 504902728529/ОГРН 310504915800010 <br>
                       © 2020, Стильный камень. Все права защищены.
                      </div>
                  </div>
                </div>
         </div>
        </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
         showFooterCallback: false,
         showFooterMeasuring: false,
         showNav:true,
         hoverSocial1:false,
         hoverSocial2:false,
         hoverSocial3:false,
         hoverSocial4:false,
         }
    },
async mounted() {
  window.addEventListener("scroll", function () {
      let scrolled = window.pageYOffset; // текущая дистанция прокрутки
      let coords = 150; // дистанция прокрутки после которой появляется кнопка
      let goTopBtn = document.getElementById('ToTop');

      if (scrolled > coords) {
        goTopBtn.classList.add("back_to_top-show");
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove("back_to_top-show");
      }
    });
  const sceneB = this.$scrollmagic.scene({
    triggerElement: '#bottom',
    triggerHook: 0.9,
     duration: 10,
  })
    .setTween('#ToBottom', {
      css: {
        display: 'none'
      }
  })
  this.$scrollmagic.addScene(sceneB)
    },
  methods: {
    // возврат наверх
    backToTop() {
      let verticalOffset = window.pageYOffset; // текущая дистанция прокрутки
      if (verticalOffset > 0) {
        window.scrollBy(0, -verticalOffset);
      }
    },
  },
};
</script>


<style scoped>
.back_to_top {
  display: none;
}
.back_to_top-show {
  display: block;
}
/*****CallMe*****/
.callme-btn {
    position: fixed;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    -webkit-transition: opacity .5s ease-in-out;
    transition: opacity .5s ease-in-out;
    z-index: 99;
}
.callme-btn-circle {
    display: block;
    width: 97px;
    height: 97px;
}
.callme-btn-right-top {
    right: 15px;
    top: 15px;
}
.callme-btn-color-fcbf55 {
    color: #f90;
}
svg:not(:root) {
    overflow: hidden;
}
.callme-btn-icon-show {
    -webkit-transform: perspective(400px) rotateY(0) scale(1);
    transform: perspective(400px) rotateY(0) scale(1);
    opacity: 1;
}
.callme-btn-icon-phone {
    position: absolute;
    top: 21px;
    right: 25px;
    opacity: 0;
    padding: 7px;
    width: 31px;
    height: 42px;
}
.callme-btn-icon-phone, .callme-btn-icon-text {
    -webkit-transition: opacity .8s cubic-bezier(.19,1,.22,1),-webkit-transform .8s cubic-bezier(.19,1,.22,1);
    transition: opacity .8s cubic-bezier(.19,1,.22,1),-webkit-transform .8s cubic-bezier(.19,1,.22,1);
    transition: opacity .8s cubic-bezier(.19,1,.22,1),transform .8s cubic-bezier(.19,1,.22,1);
    transition: opacity .8s cubic-bezier(.19,1,.22,1),transform .8s cubic-bezier(.19,1,.22,1),-webkit-transform .8s cubic-bezier(.19,1,.22,1);
    -webkit-transform: perspective(400px) rotateY(-180deg) scale(.4);
    transform: perspective(400px) rotateY(-180deg) scale(.4);
}

/*****Footer*****/
.footer {
    background-image: url(../assets/img/footer-left.jpg);
    background-repeat: repeat-x;
    background-position: bottom right;
    position: relative;
    color: #fdfdfd;
    width: 100%;
    height: 220px;
    overflow-y: hidden;
    overflow-x: hidden;
}
.footer a {
    color: #fdfdfd;
}
.footer-media { width: 100%; }
.footer-right {
    min-height: 111px;
    background-image: none;
    background-repeat: no-repeat;
    background-position: bottom left;
}
.footer-center-left {
    background-image: url(../assets/img/footer-left.jpg);
    min-height: 111px;

}
.footer a.siteupper {
    color: #78c9c9;
    font-size: 16px;
    margin-bottom: 5px;
    position: absolute;
    margin-top: 0px;
    top: 80px;
    left: 75px;
}
.footer .footer-nav li a {
    color: #fdfdfd;
    text-decoration: none;
    font-family: displaepro-bold;
    font-size: 13px;
    text-transform: uppercase;
}
.footer .footer-nav li a:hover {
    color: #4b4b4b;
     text-decoration: none;
    }
.footer .footer-nav li {
    float: left;
    margin-right: 10px;
}
.footer-center-right {
    background-image: url(../assets/img/footer-right.jpg);
    min-height: 111px;
    float:left;
}
.footer-icons {
    text-align: center;
}
.footer-icons img {
    width: 30px;}
[class*=hint--] {
    position: relative;
    display: inline-block;
}
[class*=hint--][aria-label]:after {
    content: attr(aria-label);
}
.hint--left:after, .hint--left:before {
    right: 100%;
    bottom: 50%;
}
.hint--left:after {
    margin-bottom: -14px;
}
[class*=hint--]:after {
    background: rgb(109, 132, 132);
    color: #fff;
    padding: 8px 10px;
    font-size: 12px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 12px;
    white-space: nowrap;
    text-shadow: 0 -1px 0 #000;
    box-shadow: 4px 4px 8px rgba(0,0,0,.3);
}
.hint--left:before {
    border-left-color: rgb(109, 132, 132);
    margin-right: -11px;
    margin-bottom: -6px;
}
[class*=hint--]:before {
    content: '';
    position: absolute;
    background: 0 0;
    border: 6px solid transparent;
    z-index: 1000001;
}
[class*=hint--]:after, [class*=hint--]:before {
    position: absolute;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    visibility: hidden;
    opacity: 0;
    z-index: 1000000;
    pointer-events: none;
    -webkit-transition: .3s ease;
    -moz-transition: .3s ease;
    transition: .3s ease;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
}
.footersocseti-block li {
    display: inline-block;
    margin-right: 10px;
}
.copyright {
    position: relative;
    top: -50px;
    left: -2%;
    font-size: 16px;
    height: 0px;
    text-align: right;
    z-index: 4;
}
.footer-number {
    display: inline-block;
    color: #607e7e;
    font-family: displaepro;
    font-size: 16px;
    position: relative;
    top: -10px;
}
.footersocseti {
    display: inline-block;
    position: relative;
    right: 0px;
    z-index: 6;
}
.footersocseti-block ul li::before,.footer-center-left ul li::before {content:''}
.dif-center{display: none}
.footer-nav {
    top: 10px;
    position: relative;
    left: 50px;
}
.bottom_address {
    position: absolute;
    bottom: 38px;
    left: 75px;
    width: 265px;
    color: #fdfdfd;
    font-size: 14px;
    font-family: 'calibriregular',Arial, Verdana, Times, sans-serif;

}
.siteupper {
    position: absolute;
    bottom: 2px;
    left: 13px;
}
.footer-photo {display:none}
.go-down a, .go-up a {border:none;}
.fade-enter, .fade-leave-active {
    transition-property: all;
    transition-duration: 0.7s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
  .fade-enter-active, .fade-leave-to {
     opacity: 0;
  }
  .footersocseti li img{
    transform: rotateY(0deg);
    transition-property: transform;
    transition-duration: 0.5s;
}
.footersocseti li img:hover {
    transform: rotateY(180deg);
    transition-property: transform;
    transition-duration: 0.5s;
}
.gray_left {
  position: absolute;
    left: -270px;
    background: #6d8585;
    padding: 10px;
    font-size: 14px;
    top: 7px;
    color:#fff;
    display: block;
    border-radius: 0 3px 3px 0;
}
.gray_left_2 {left: -55px;}
.gray_left_3 {left: -140px;}
.gray_left_4 {left: -75px;}
@media screen and (min-width: 501px) {
    .footer-number {
    top: -10px;
    font-size: 22px;
    margin-right: 65px;
}
}
@media (min-width: 601px){
    .footer-icons img {
        width: 50px;
    }
    .footer-number {
        top: -25px;
    }
    .footersocseti {
        top: -15px;
    }
}
@media (min-width: 992px){
    .footer {height: 109px;}
    .dif-center {position: absolute;
        right: -145px;
        z-index: 1;
        display:block;
        top:0;
    }
    .footer-photo {
        display: block;
        position: absolute;
        bottom: 109px;
        left: -60px;
        z-index: -4;
    }
    .footer-number {width: 100%;left: -25%;top: 12px;z-index: 5;}
    .footersocseti {
        left: 25%;
        top: -25px;
    }
    .footersocseti li {margin-right: 0;}
    .footersocseti img {width:30px;}
    .bottom_address {left: 75px;}
    .footer a.siteupper {left: 75px;}
}
@media (min-width: 1201px){
    .footer-photo {left: 0;}
}
@media (min-width: 1032px){
    .footersocseti {top: -42px;}
    .footersocseti img {width:50px;}
}

</style>
