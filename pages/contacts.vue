<template>
  <div>
    <Bredcrumbs :pagetitle="title" />
    <div class="container">
      <h1>{{title}}</h1>
      <div class="main-content">
        <div class="contact-row">
          <div class="contact-list">
            <div class="contact-item">
              <span><strong>Телефон:</strong></span><a href="tel:+79250975511">+7 (925) 097-55-11</a>
              <a href="https://wa.me/79250975511" class="social" data-v-fad11dd4=""><img src="/elements/header/whatsapp.svg" alt="Whatsapp" data-v-fad11dd4=""></a>
              <a href="/" class="social" data-v-fad11dd4=""><img src="/elements/header/telegram.svg" alt="Telegram" data-v-fad11dd4=""></a>
              <a href="https://vk.com/public215241862" class="social" data-v-fad11dd4=""><img src="/elements/header/vk.svg" alt="VK" data-v-fad11dd4=""></a>
            </div>
            <div class="contact-item">
              <span><strong>Электронная почта:</strong></span><a href="mailto:info@stroivostok.ru">info@stroivostok.ru</a>
            </div>
            <div class="contact-item">
              <span><strong>Адрес:</strong></span><span style="margin-left: 10px;">140703, Московская область, Шатурский район, г.Шатура</span>
            </div>
          </div>
          <div class="map-list">
            <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3Ab0f04762b0c40bd19ffe5a935082715e9a9151054eeaaa79815a60cee9de05fb" frameborder="0" allowfullscreen="true" width="100%" height="426px" style="display: block;"></iframe>
          </div>
        </div>
        <h2 v-if="$store.state.sityFolder == ''">Выполняем работы в Москве и по всей Московской области</h2>
        <h2 v-else>Выполняем работы {{$store.state.inCity}} и по всей Московской области</h2>
        <div class="city-row">
          <ul>
            <li>
              <a
                :href="$store.state.domen"
                :class="{'active-region' : $store.state.sityFolder == ''}"
              >
                Москва
              </a>
            </li>
            <li v-for="(item,index) in city1" :key="index">
              <a
                :href="$store.state.domen + item.url"
                :class="{'active-region' : $store.state.sityFolder == item.url}"
              >
                {{item.name}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bredcrumbs from "~/components/breadcrumbs.vue";
export default {
  components: { Bredcrumbs },
  head() {
    return {
      title: this.seoTitle
        ? this.seoTitle
        : "Контакты компании СТРОЙ ВОСТОК " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "Контакты компании СТРОЙ ВОСТОК: строительные и ремонтные услуги " + this.$store.state.inCity,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "Контакты компании СТРОЙ ВОСТОК" + this.$store.state.inCity,
      seoTitle: "",
      description: "",
      title: 'Контакты',
      city1:[
              //{url:'/',name:'Москва'},
              {url:'/aprelevka',name:'Апрелевка'},
              {url:'/balashiha',name:'Балашиха'},
              {url:'/bronnicy',name:'Бронницы'},
              {url:'/vereya',name:'Верея'},
              {url:'/vidnoe',name:'Видное'},
              {url:'/volokolamsk',name:'Волоколамск'},
              {url:'/voskresensk',name:'Воскресенск'},
              {url:'/vysokovsk',name:'Высоковск'},
              {url:'/golicyno',name:'Голицино'},
              {url:'/dedovsk',name:'Дедовск'},
              {url:'/dzerzhinskij',name:'Дзержинский'},
              {url:'/dmitrov',name:'Дмитров'},
              {url:'/dolgoprudnyj',name:'Долгопрудный'},
              {url:'/domodedovo',name:'Домодедово'},
              {url:'/drezna',name:'Дрезна'},
              {url:'/dubna',name:'Дубна'},
              {url:'/egorevsk',name:'Егорьевск'},
              {url:'/zhukovskij',name:'Жуковский'},
              {url:'/zarajsk',name:'Зарайск'},
              {url:'/zvenigorod',name:'Звенигород'},
              {url:'/zelenograd',name:'Зеленоград'},
              {url:'/ivanteevka',name:'Ивантеевка'},
              {url:'/istra',name:'Истра'},
              {url:'/kashira',name:'Кашира'},
              {url:'/klin',name:'Клин'},
              {url:'/kolomna',name:'Коломна'},
              {url:'/korolyov',name:'Королёв'},
              {url:'/kotelniki',name:'Котельники'},
              {url:'/krasnoarmejsk',name:'Красноармейск'},
              {url:'/krasnogorsk',name:'Красногорск'},
              {url:'/krasnozavodsk',name:'Краснозаводск'},
              {url:'/krasnoznamensk',name:'Краснознаменск'},
              {url:'/kubinka',name:'Кубинка'},
              {url:'/kurovskoe',name:'Куровское'},
              {url:'/likino-dulyovo',name:'Ликино Дулёво'},
              {url:'/lobnya',name:'Лобня'},
              {url:'/losino-petrovskij',name:'Лосино-Петровский'},
              {url:'/luhovicy',name:'Луховицы'},
              {url:'/lytkarino',name:'Лыткарино'},
              {url:'/lyubercy',name:'Люберцы'},
              {url:'/mozhajsk',name:'Можайск'},
              {url:'/mytishchi',name:'Мытищи'},
              {url:'/naro-fominsk',name:'Наро-Фоминск'},
              {url:'/noginsk',name:'Ногинск'},
              {url:'/odincovo',name:'Одинцово'},
              {url:'/ozyory',name:'Озёры'},
              {url:'/orekhovo-zuevo',name:'Орехово-Зуево'},
              {url:'/pavlovskij-posad',name:'Павловский Посад'},
              {url:'/peresvet',name:'Пересвет'},
              {url:'/podolsk',name:'Подольск'},
              {url:'/protvino',name:'Протвино'},
              {url:'/pushkino',name:'Пушкино'},
              {url:'/pushchino',name:'Пущино'},
              {url:'/ramenskoe',name:'Раменское'},
              {url:'/reutov',name:'Реутов'},
              {url:'/roshal',name:'Рошаль'},
              {url:'/ruza',name:'Руза'},
              {url:'/sergiev-posad',name:'Сергиев Посад'},
              {url:'/serpuhov',name:'Серпухов'},
              {url:'/solnechnogorsk',name:'Солнечегорск'},
              {url:'/staraya-kupavna',name:'Старая Купавна'},
              {url:'/stupino',name:'Ступино'},
              {url:'/taldom',name:'Талдом'},
              {url:'/fryazino',name:'Фрязино'},
              {url:'/himki',name:'Химки'},
              {url:'/hotkovo',name:'Хотьково'},
              {url:'/chernogolovka',name:'Черноголовка'},
              {url:'/chekhov',name:'Чехов'},
              {url:'/shatura',name:'Шатура'},
              {url:'/shchyolkovo',name:'Щелково'},
              {url:'/ehlektrogorsk',name:'Электрогорск'},
              {url:'/ehlektrostal',name:'Электросталь'},
              {url:'/ehlektrougli',name:'Электроугли'},
              {url:'/yahroma',name:'Яхрома'},
            ],
    }
  },
}
</script>
<style scoped>
h1 {
  font-size: 42px;
  line-height: 50px;
  margin-top: 80px;
  margin-bottom: 60px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
}
.main-content p{
  letter-spacing: .03em;
  color: #271717;
  font-size: 16px;
  line-height: 24px;
}
.contact-row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 120px;
}
.contact-list{
  width: 490px;
}
.contact-item{
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.contact-item a{
  margin-left: 10px;
}
.map-list{
  width: calc(100% - 510px);
}
.main-content h2{
  text-align: center;
}
.city-row{
  margin-bottom: 90px;
}
.city-row ul{
  columns: 6;
}
.city-row ul li{
  margin-bottom: 10px;
}
.city-row .active-region{
  color: #ff3f3f;
  font-weight: 600;
}
@media (max-width: 1200px){
  .contact-list{
    width: 100%;
  }
  .map-list{
    width: 100%;
  }
  .city-row ul{
    columns: 5;
  }
}
@media (max-width: 900px){
  .city-row ul{
    columns: 4;
  }
}
@media (max-width: 600px){
  h1{
    font-size: 22px;
    line-height: 29px;
    margin: 30px 0;
  }
  .contact-row{
    margin-bottom: 60px;
  }
  .contact-item {
    display: block;
  }
  .city-row ul{
    columns: 3;
  }
}
@media (max-width: 500px){
  .city-row ul{
    columns: 2;
  }
}
</style>
