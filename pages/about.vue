<template>
  <div>
    <Bredcrumbs :pagetitle="title" />
    <div class="container">
      <h1>{{title}}</h1>
      <div class="main-content">
        <p>С 2005 года «Строительство-Восток» (г. Шатура) хорошо зарекомендовала себя как строительная компания. Мы завоевали надежную репутацию среди
          жителей Московской области благодаря первоклассным материалам, внимательному обслуживанию клиентов, а также идеальной отделке жилых и офисных
          помещений. Компания работает в восточной части Московской области (Шатурский район, Орехово-Зуевский район, Егорьевский район).</p>
        <p>Мы строим комфортные и надёжные дома. Основной приоритет при строительстве - это Ваше спокойствие и уверенность в конечном результате. На каждом
          этапе работы с заказчиком мы стараемся учесть все пожелания и полностью информируем о ходе работ. Выгода при работе с нами заключается в том,
          что мы имеем собственное производство материалов, а также индивидуальные скидки у поставщиков, поэтому можем осуществлять конструктивно более
          качественные решения чем у конкурентов за меньшие деньги.</p>
        <p>Безусловно, 2020 год получился очень напряженным для всех участников рынка, однако, благодаря слаженной работе нашей команды мы продолжаем
          наращивать объемы строительства! Понимая текущую ситуацию, мы постараемся предложить Вам наиболее подходящее и выгодное решение.</p>
        <p>Обращайтесь к нам и доверьте строительство Вашего загородного дома или коттеджа профессионалам!</p>
        <h3>Преимущества сотрудничества с нами:</h3>
        <ul>
          <li>Человеческое отношение. На всех этапах строительства мы всегда готовы к диалогу.</li>
          <li>Помогаем сэкономить. Работаем напрямую с заводами и поставщиками стройматериалов, имеем корпоративные скидки, поэтому можем предложить Вам лучшую цену.</li>
          <li>Надежность конструктивных решений. Любые проектные и строительные работы согласуются с проектировщиком.</li>
          <li>Квалифицированные кадры. Проектировщики, прорабы и инженеры компании - дипломированные специалисты с многолетним опытом работы в строительстве.</li>
          <li>Честная и фиксированная цена. Мы заключаем с Вами договор на все работы с согласованной понятной сметой.</li>
        </ul>
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
        : "О компании СТРОЙ ВОСТОК " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "О компании СТРОЙ ВОСТОК: строительные и ремонтные услуги " + this.$store.state.inCity,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "О компании СТРОЙ ВОСТОК " + this.$store.state.inCity,
      seoTitle: "",
      description: "",
      title: 'О нас',
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
  mounted() {
    if (this.$store.state.ymInit == true) {
      ym(90648260, "hit", this.$route.path);
    }
  }
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
}
.main-content {
  margin-bottom: 120px;
}
.main-content p{
  letter-spacing: .03em;
  color: #271717;
  font-size: 16px;
  line-height: 24px;
}
.main-content p.temp-text{
  text-align: center;
}
.main-content h3{
  letter-spacing: .03em;
  color: #271717;
  font-size: 32px;
  line-height: 42px;
}
.main-content ul {
    margin-top: 20px;
    padding-left: 24px;
    margin-bottom: 5px;
}
.main-content ul li {
    font-size: 16px;
    line-height: 19px;
    color: #5e5e5e;
    margin-bottom: 15px;
    position: relative;
}
.main-content ul li:before {
    color: #fff;
    content: "\002E";
    font-weight: 700;
    width: 10px;
    height: 10px;
    background: #ff3f3f;
    border-radius: 50%;
    font-size: 1px;
    position: absolute;
    top: 5px;
    left: -20px;
}
.main-content h2{
  text-align: center;
}
.city-row{
  margin-bottom: 90px;
}
.main-content .city-row ul{
  columns: 6;
  margin-top: 0;
  padding-left: 0;
  margin-bottom: 0;
}
.main-content .city-row ul li{
  margin-bottom: 10px;
}
.main-content .city-row .active-region{
  color: #ff3f3f;
  font-weight: 600;
}
.main-content .city-row ul li:before {
    color: #fff;
    content: "";
    display: none;
}
@media (max-width: 1200px){
  .main-content .city-row ul{
    columns: 5;
  }
}
@media (max-width: 900px){
  .main-content .city-row ul{
    columns: 4;
  }
}
@media (max-width: 600px){
  h1{
    font-size: 22px;
    line-height: 29px;
    margin: 30px 0;
  }
  .main-content h3 {
    font-size: 20px;
    line-height: 24px;
  }
  .main-content {
    margin-bottom: 60px;
  }
  .main-content ul {
    padding-left: 21px;
  }
  .main-content ul li {
    font-size: 14px;
    line-height: 17px;
  }
  .main-content ul li:before {
    top: 3px;
    left: -17px;
  }
  .main-content .city-row ul{
    columns: 3;
  }
}
@media (max-width: 500px){
  .main-content .city-row ul{
    columns: 2;
  }
}
</style>
