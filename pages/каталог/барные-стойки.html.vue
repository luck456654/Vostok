<template>
<div>
<Proizvodim/>
<div class="col-xs-12 nav-content offset-40">
      <div class="crumbs">
          <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb">
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
            <h1>{{page_full_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать ресепшн</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
                  <div  class="top-img-row">
                    <div class="col-xs-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/svetlaya-barnaya-stoika.webp"  alt="Светлая барная стойка из камня на кухню">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/svetlaya-barnaya-stoika.jpg"  alt="Светлая барная стойка из камня на кухню">
                        <img src="https://стильный-камень.рф/pictures/bar/svetlaya-barnaya-stoika.jpg"  alt="Светлая барная стойка из камня на кухню">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-otel.webp"  alt="Барная стойка из камня в отеле">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-otel.jpg"  alt="Барная стойка из камня в отеле">
                        <img src="https://стильный-камень.рф/pictures/bar/barnaya-stoika-otel.jpg"  alt="Барная стойка из камня в отеле">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-kuhnya.webp"  alt="Барная стойка из камня в комнату">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/barnaya-stoika-kuhnya.jpg"  alt="Барная стойка из камня в комнату">
                        <img src="https://стильный-камень.рф/pictures/bar/barnaya-stoika-kuhnya.jpg"  alt="Барная стойка из камня в комнату">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/temnaya-barnaya-stoika.webp"  alt="Темная барная стойка из камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/bar/temnaya-barnaya-stoika.jpg"  alt="Темная барная стойка из камня">
                        <img src="https://стильный-камень.рф/pictures/bar/temnaya-barnaya-stoika.jpg"  alt="Темная барная стойка из камня">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <nuxt-link to="/каталог/барные-стойки/галерея-барных-стоек.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
<div>
<h2>Изготовление для кафе и квартир </h2>
<p>Производство барных стоек для многих компаний является прибыльной статьей доходов, и вот почему. Если раньше такие конструкции украшали преимущественно кафе, бары, рестораны
  или подобные им общественные заведения, в настоящий момент они пользуются популярностью при обустройстве кухонь и столовых в обычных домах и квартирах.</p>
<p>Мнение о том, что установка барной стойки является бессмысленной тратой драгоценных метров, изжило себя. Появляясь на кухне или даже в гостиной, конструкция придает интерьеру
  законченный вид, является его ярким акцентом и выполняет роль стола.</p>
<div class="created-from">
                        <div class="inner">
                            <h2>Мы изготавливаем из:</h2>
                            <nuxt-link title="Барная стойка из кварцевого агломерата"  append to="/каталог/барные-стойки/барные-стойки-из-кварца.html">
                              <picture>
                                <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/made-from-1.webp"  alt="Барная стойка из кварцевого агломерата">
                                <source type="image/png" srcset="https://стильный-камень.рф/pictures/bar/made-from-1.png"  alt="Барная стойка из кварцевого агломерата">
                                <img src="https://стильный-камень.рф/pictures/bar/made-from-1.jpg"  alt="Барная стойка из кварцевого агломерата">
                              </picture>
                            </nuxt-link>
                            <nuxt-link title="Барная стойка из жидкого камня" apend to="/каталог/барные-стойки/барные-стойки-из-акрила.html">
                              <picture>
                                <source type="image/webp" srcset="https://стильный-камень.рф/pictures/bar/made-from-2.webp"  alt="Барная стойка из жидкого камня">
                                <source type="image/png" srcset="https://стильный-камень.рф/pictures/bar/made-from-2.png"  alt="Барная стойка из жидкого камня">
                                <img src="https://стильный-камень.рф/pictures/bar/made-from-2.jpg"  alt="Барная стойка из жидкого камня">
                              </picture>
                            </nuxt-link>
                            <a title="Чем отличаются столешницы из разных камней" rell="nofollow" href="https://стильный-камень.рф/статьи/столешницы-из-камня.html" class="button">Сравнить</a>
                        </div>
</div>
<h2>Стойки для дома, кухни</h2>
<p style="margin-bottom: 0;">Чтобы покупка вас не разочаровала и доставляла радость долгие годы, рекомендуем присмотреться к барной стойке из искусственного камня. Материал идеально имитирует фактуру
  своего природного собрата, искусно подражая ему по всем показателям. Он:</p>
<ul style="margin-top: 5px;">
  <li>надежен. Даже если в процессе эксплуатации появятся повреждения, устранить их не составит никакого труда;</li>
  <li>практичен. Стойка из акрилового камня не боится воздействия влаги, не впитывает загрязнения, ей легко вернуть первоначальный внешний вид;</li>
  <li>имеет множество цветовых решений. Можно подобрать стойку в соответствии с интерьером;</li>
  <li>создает атмосферу солидности и презентабельности учреждения, а при появлении в домашней обстановке удачно подчеркивает имидж домовладельца.</li>
</ul>
<h2>Барные стойки из кварца</h2>
<p>У нас вы можете заказать оригинальные барные стойки из кварцевого агломерата. Этот материал
более дорогой, но и более красивый, чем обычный акриловый камень. Особый декоративный
эффект достигается за счет включения большого количества минеральных кварцевых гранул в
состав агломерата. Они придают материалу особый натуральный каменный блеск, а также делают
его более прочным и устойчивым к широкому спектру воздействий.</p>
<h2>Барные стойки на заказ</h2>
<p>Изготовление износостойких барных стоек из искусственного камня вы можете заказать в нашей компании. Обращаясь к нам, вы получите изделия непревзойденного качества, на каждое мы даем гарантию. При покупке вас ожидает дополнительный комплекс услуг, в который входят предварительные замеры, доставка выбранного товара по адресу и монтаж от профессиональных мастеров компании «Стильный камень».</p>
<p>Оценить внешний вид изготавливаемых нами изделий вы можете по фото в каталоге продукции. При необходимости мы выполним барную стойку на заказ, в том числе бюджетную, согласно нужным параметрам и запросам по форме и цвету. Еще одним приятным бонусом от нашей компании станет цена, демократичная и доступная для человека с любым достатком.</p>
<p>Если вам нужен долговечный элемент интерьера повышенной прочности, смело обращайтесь в нашу компанию. У нас вы гарантированно сможете купить барную стойку своей мечты по привлекательной стоимости.</p>
<p class="proximait">Изготавливаем и устанавливаем барные стойки из камня на
территории Москвы, Рязани, Владимира, Московской, Рязанской и Владимирской областях.</p>
</div></div>
 </div> </div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Изготовление и установка барных стоек | Москва, Рязань, Владимир. Стоимость, цена, купить, продажа",
      meta: [
        { name: 'description', hid: 'description', content: 'Производитель барных стоек из искусственного камня - компания &quot;Стильный камень&quot;. Изготовим и установим барные стойки по индивидуальному проекту.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/барные-стойки.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Барные стойки",
          page_full_name:"Барная стойка из камня",
          showModalCallBack:false,
        }
    },
    methods: {
        closeModalCallBack() {
          this.showModalCallBack = false;
        },
    }
}
</script>
<style scoped>
.send-button {float: left;margin-top: 15px;}
h2, .h2 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
.created-from {
    margin-left: 0px!important;
    background: #f0f6f6;
    padding: 15px 20px;
    text-align: center;
    margin: 40px -15px;
    -ms-transform: skewX(45deg);
    -webkit-transform: skewX(45deg);
    transform: skewX(45deg);
}
.created-from .inner {
    -ms-transform: skewX(-45deg);
    -webkit-transform: skewX(-45deg);
    transform: skewX(-45deg);
}
.created-from h2 {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    margin-right: 5px;
    padding-top:0;
}
.created-from img {
    display: inline-block;
    float: none;
    margin: 0 5px;
}
.created-from a {
    margin-left: 0;
    margin-right: 0;
}
.created-from .button {
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
    color: white;
    border: 2px solid #9f4000;
    background: #9f4000;
    border-radius: 15px;
    padding: 7px 30px;
    margin-left: 5px;
    vertical-align: middle;
    -webkit-box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);
    box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);
}
.created-from .button:hover {
    color: white;
    text-decoration: none;
    background: #ab5219;
}
@media (max-width: 991px) {
  .created-from {
      -ms-transform: skewX(0deg);
      -webkit-transform: skewX(0deg);
      transform: skewX(0deg);
      margin: 40px 0;
  }
  .created-from .inner {
    -ms-transform: skewX(0deg);
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
    padding: 0;
    text-align: left;
  }
  .created-from h2 {
    display: block;
    margin-bottom: 10px;
  }
  .created-from img {
    margin: 0;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .created-from a {
    margin-left: 10px;
    margin-right: 10px;
  }
  .created-from .button {
    display: block;
    width: 150px;
    text-align: center;
  }
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px; max-width: 120%;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
  .top-img-row img{max-width: 100%;margin-bottom: 0;}
  .content-zakaz {margin-bottom: 20px;}
}
</style>
