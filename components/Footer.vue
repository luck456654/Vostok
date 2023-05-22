<template>
  <footer>
     <div class="main-footer-row">
      <div class="container">
        <div class="flex-between-top-row">
          <div class="main-footer-col">
            <div class="logo-block">
              <nuxt-link :to='$store.state.sityFolder + "/"'>
                <img src="/elements/header/logotype-2.svg" alt="Лого СТРОЙ ВОСТОК">
                <img src="/elements/header/logotype.svg" alt="Лого СТРОЙ ВОСТОК" v-if="false">
              </nuxt-link>
              <span>Строительные и ремонтные<br> работы {{$store.state.inCity}}</span>
            </div>
          </div>
          <div class="main-footer-col only-desctop">
            <div class="title-block">Меню:</div>
            <ul class="menu-block">
              <li v-for="(item,index) in menuArr" :key="index">
                <nuxt-link :to='$store.state.sityFolder + item.path'>
                  {{item.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="main-footer-col only-desctop">
            <div class="title-block">Услуги:</div>
            <ul class="menu-block">
              <li v-for="(item,index) in servArr" :key="index">
                <nuxt-link :to='$store.state.sityFolder + item.path'>
                  {{item.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="main-footer-col">
            <div class="title-block">Контакты:</div>
            <ul class="menu-block">
              <li v-for="(item,index) in contArr" :key="index">
                <a :href='item.href' v-if="item.href">
                  <img :src="item.icon" :alt="item.name" v-if="item.icon">
                  {{item.name}}
                </a>
                <div class="psevdo-a" v-else>
                  <img :src="item.icon" :alt="item.name" v-if="item.icon">
                  <span v-html='item.name'></span>
                </div>
              </li>
              <li class="socials">
                Напишите нам
                <a href="https://wa.me/79250975511" class="social">
                  <img src="/elements/header/whatsapp.svg" alt="Whatsapp">
                </a>
                <a href="/" class="social">
                  <img src="/elements/header/telegram.svg" alt="Telegram">
                </a>
                <a href="https://vk.com/public215241862" class="social">
                  <img src="/elements/header/vk.svg" alt="VK">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-row">
      <div class="container">
        <div class="flex-between-row">
          <div class="bottom-left">
            <span>«Строй-Восток» © 2022 Все права защищены.<br> Сайт не является публичной офертой.</span>
          </div>
          <div class="bottom-right">
            <nuxt-link :to="$store.state.sityFolder + '/user_agreement'">Политика конфиденциальности</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menuArr: [
        {
          name: "О нас",
          path: "/about",
        },
        {
          name: "Галерея работ",
          path: "/works",
        },
        {
          name: "Отзывы",
          path: "/otzivi",
        },
        {
          name: "Калькулятор работ",
          path: "/calc",
        },
        {
          name: "Оставить заявку",
          path: "/zayavka",
        },
        {
          name: "Контакты",
          path: "/contacts",
        },
      ],
      servArr: [
        {
          name: "Строительство домов",
          path: "/uslugi/stroitelstvo-domov",
        },
        {
          name: "Заборы и ограждения",
          path: "/uslugi/zabori-i-ograjdeniya",
        },
        {
          name: "Кровля и мансарда",
          path: "/uslugi/krovlya-i-monsarda",
        },
        {
          name: "Перекрытия и фундамент",
          path: "/uslugi/perekritiya-i-fundament",
        },
        {
          name: "Ремонт и отделка",
          path: "/uslugi/remont-i-otdelka",
        },
        {
          name: "Фасад и утепление",
          path: "/uslugi/fasad-i-uteplenie",
        },
      ],
      contArr: [
        {
          name: "МО, Шатурский район,<br> г.Шатура",
          href: "",
          icon: "/elements/footer/marker.svg",
        },
        {
          name: "8 (925) 097-55-11",
          href: "tel:+79250975511",
          icon: "/elements/footer/footer-phone.svg",
        },
        {
          name: "Пн-Вс 9:00 - 20:00",
          href: "",
          icon: "/elements/footer/clock.svg",
        },
        {
          name: "info@stroivostok.ru",
          href: "mailto:info@stroivostok.ru",
          icon: "/elements/footer/footer-mail.svg",
        }
      ],
    };
  },

};
</script>

<style scoped>
footer{
  background: #5e5e5e;
  color:#ffffff;
}
.main-footer-row{
  padding: 50px 0;
}
.main-footer-col{
  width: 25%;
}
.logo-block img{
  display: block;
  margin-bottom: 19px;
  width: 190px;
}
.logo-block span{
  font-size: 16px;
  line-height: 20px;
}
.main-footer-col .title-block{
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.main-footer-col .menu-block li{
  margin-top: 20px;
}
.main-footer-col .menu-block li a{
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
}
.menu-block .psevdo-a,
.menu-block a{
  display: flex;
  align-items: center;
}
.menu-block .psevdo-a:first-child{
  align-items: flex-start;
}
.menu-block img:not(.social){
  margin-right: 10px;
}
.menu-block .socials{
  display: flex;
  align-items: center;
}
.menu-block .social{
  margin-left: 5px;
}
.menu-block .social:first-child{
  margin-left: 9px;
}
.menu-block .social img{
  margin-right: 0;
}
.bottom-row{
  border-top: 1px solid rgba(246, 247, 250, 0.5);
  padding: 15px 0;
}
.bottom-row *{
  border:none;
}
.bottom-left span,
.bottom-right a{
  font-size: 16px;
  line-height: 19px;
  color: rgba(246, 247, 250, 0.5);
}
.bottom-left br{
  display:none;
}

@media (max-width: 900px){
  .main-footer-col {
    width: 50%;
  }
  .main-footer-col{
    margin-bottom: 15px;
  }
}
@media (max-width: 600px){
  .main-footer-col {
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }
  .main-footer-row {
    padding: 30px 0;
  }
  .logo-block a{
    display: flex;
    padding-bottom: 0px;
    margin-bottom: 19px;
  }
  .logo-block img{
    margin: auto;
  }
  .logo-block span{
    margin-bottom: 20px;
    display: block;
  }
  .main-footer-col.only-desctop{
    display:none;
  }
  .menu-block li{
    width: fit-content;
    margin: 0 auto 18px auto;
    font-size: 14px;
    line-height: 17px;
  }
  .menu-block li span br{
    display: none;
  }
  .main-footer-col .title-block {
    margin-bottom: 21px;
  }
  .bottom-left br{
    display:block;
  }
  .bottom-row span, .bottom-row a{
    font-size: 14px;
    line-height: 32px;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    display: block;
  }
  .bottom-left,
  .bottom-right{
    width: 100%;
  }
}
@media (max-width: 330px){
  .bottom-row span,
   .bottom-row a {
    font-size: 13px;
  }
}
@media (max-width: 290px){
  .bottom-row span,
   .bottom-row a {
    font-size: 11px;
  }
}
</style>
