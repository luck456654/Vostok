<template>
  <div>
<Proizvodim/>
<!--<h1>«Стильный камень» - производитель изделий из камня и дерева</h1>-->
 <div class="col-xs-12">
<h1>{{page_name}}</h1>
<div class="slider-1" id="sliders-1" v-if="$store.state.ismobile == 'pc'">
      <div>
                        <div class="sliders"  v-bind:class="slides1[activeIndex].num">
                            <div class="inner">
                                <div class="title"> {{slides1[activeIndex].title}} </div>
                                <div class="text"> {{slides1[activeIndex].text}} <br>из кварца и искусственного камня </div>
                                <div class="arrows-holder">
                                    <div class="arrow-left" @click="minus(activeIndex)"><span  ></span></div>
                                    <div class="arrow-right"  @click="plus(activeIndex)"><span ></span></div>
                                </div>
                            </div>
                        </div>
      </div>
</div>

    <p>Оформление интерьера кухни, столовой, ванной, гостиной и других помещений в доме – важная задача, требующая профессионального подхода.
        Компания «Стильный камень» специализируется на изготовлении качественных, долговечных изделий из натурального дерева и камня любой сложности.
        В работе мы используем новейшие технологии обработки материалов, что позволяет придать готовой продукции привлекательный вид.
        Производим установку на территории Московской, Рязанской и Владимирской областей.</p>
<Pochemu/>
<!--<h2>Мы изготавливаем</h2>
<p>У нас вы можете заказать следующие виды изделий:</p>

                    <div class="clearfix ossobennosti osobennosti-large izg-oss icons-row icons-row-slider">
                        <div class="scrollmenu-productions">
                          <div  class="production-link" v-for="(prod, idx) in sortProducts" :key="idx">
                            <a :href="'https://стильный-камень.рф/'+prod.link" v-if="prod.link">
                              <div class="item item-product">
                                <div class="img-lg" :class="'img-lg-'+prod.index"></div>
                                    <span>{{prod.title}}</span>
                              </div>
                            </a>
                            <a href="" onclick="return false;" v-else>
                              <div class="item item-product">
                                <div class="img-lg" :class="'img-lg-'+prod.index"></div>
                                    <span>{{prod.title}}</span>
                              </div>
                            </a>
                          </div>
                        </div>
                    </div>
                  -->
<h2>Примеры расчета цены</h2>
<Example />
<h2>Материалы производства</h2>
<p>Наше предприятие имеет широкие возможности по изготовлению столешниц из гранита, мрамора, натурального и акрилового камня, кварцевого агломерата и дерева.
    Мы работаем напрямую с производителями данных материалов и используем в производстве исключительно сертифицированные компоненты, отвечающие всем требованиям
     стандартов качества и безопасности.</p>
<p>Дизайн, габариты, цвет, материал, текстура и прочие особенности изделий оговариваются и согласовываются индивидуально с заказчиком перед началом работ.</p>
<h3>Преимущества изделий из камня</h3>
<p>Столешницы, а также иные элементы мебели и изделия из камня имеют немало преимуществ. Среди наиболее значимых достоинств можно выделить:</p>
<ul>
    <li>Экологическая чистота и безопасность;</li>
    <li>Гигиеничность;</li>
    <li>Повышенная прочность;</li>
    <li>Жаростойкость;</li>
    <li>Широкая палитра;</li>
    <li>Долговечность.</li>
</ul>
<div class="clearfix gal-5 icons-row" v-if="$store.state.ismobile == 'pc'">
                        <div class="item item-row-free">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal5-01.webp" alt="Темная столешница в светлой кухне">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal5-01.jpg" alt="Темная столешница в светлой кухне">
                            <img src="https://стильный-камень.рф/pictures/img/gal5-01.jpg" alt="Темная столешница в светлой кухне">
                          </picture>
                        </div>
                        <div class="item item-row-free  item-row-free-2">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal5-02.webp" alt="Светлая столешница в светлой кухне">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal5-02.jpg" alt="Светлая столешница в светлой кухне">
                            <img src="https://стильный-камень.рф/pictures/img/gal5-02.jpg" alt="Светлая столешница в светлой кухне">
                          </picture>
                        </div>
                        <div class="item item-row-free  item-row-free-2">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal5-03.webp" alt="Раковина из камня">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal5-03.jpg" alt="Раковина из камня">
                            <img src="https://стильный-камень.рф/pictures/img/gal5-03.jpg" alt="Раковина из камня">
                          </picture>
                        </div>
                        <div class="item item-row-free item-row-free-2">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal5-04.webp" alt="Белая столешница из камня">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal5-04.jpg" alt="Белая столешница из камня">
                            <img src="https://стильный-камень.рф/pictures/img/gal5-04.jpg" alt="Белая столешница из камня">
                          </picture>
                        </div>
                        <div class="item item-row-free item-row-free-2">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal5-05.webp" alt="Барная стойка из камня">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal5-05.jpg" alt="Барная стойка из камня">
                            <img src="https://стильный-камень.рф/pictures/img/gal5-05.jpg" alt="Барная стойка из камня">
                          </picture>
                        </div>
                    </div>


<div class="col-xs-12 col-sm-12 col-md-12">
  <KamenKvartcz />
</div>
<h3>Преимущества изделия из дерева</h3>
<p>Продукция из натурального дерева широко ценится во всем мире. Среди основных преимуществ деревянных изделий:</p>
<ul>
    <li>Демократичная цена;</li>
    <li>Натуральность;</li>
    <li>Экологическая чистота;</li>
    <li>Безопасность;</li>
    <li>Привлекательный внешний вид;</li>
    <li>Возможность использования в интерьере в стиле Loft.</li>
</ul>
<h2>Что мы можем предложить</h2>
<p>В нашей компании работают специалисты высокого уровня с богатым профессиональным опытом, что позволяет исключить любые ошибки в производстве и монтаже готовых изделий. Обращаясь к нам, вы можете рассчитывать на:</p>
<ul>
    <li>Выполнение работы «под ключ» (работаем от приема заявки до финальной установки);</li>
    <li>Официальную 3-летнюю гарантию на произведенные изделия;</li>
    <li>Широкий выбор типовых решений, что позволит сэкономить время и сделать правильный выбор;</li>
    <li>Возможность заказа уникальных изделий любой формы и сложности.</li>
</ul>
<p>Все наши изделия изготавливаются из высококачественных сертифицированных материалов и служат достаточно долго.</p>
<div class="row gallery-row icons-row">
                        <div class="col-xs-6 col-md-3 item item-row-free">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal-05.webp" alt="Красивая квадратная столешница">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal-05.jpg" alt="Красивая квадратная столешница">
                            <img src="https://стильный-камень.рф/pictures/img/gal-05.jpg" alt="Красивая квадратная столешница">
                          </picture>
                        </div>
                        <div class="col-xs-6 col-md-3 item item-row-free">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal-06.webp" alt="Мойка в темной столешнице">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal-06.jpg" alt="Мойка в темной столешнице">
                            <img src="https://стильный-камень.рф/pictures/img/gal-06.jpg" alt="Мойка в темной столешнице">
                          </picture>
                        </div>
                        <div class="col-xs-6 col-md-3 item item-row-free">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal-07.webp" alt="Белая столешница на кухне">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal-07.jpg" alt="Белая столешница на кухне">
                            <img src="https://стильный-камень.рф/pictures/img/gal-07.jpg" alt="Белая столешница на кухне">
                          </picture>
                        </div>
                        <div class="col-xs-6 col-md-3 item item-row-free">
                          <picture>
                            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/img/gal-08.webp" alt="Стильная светлая столешница из камня">
                            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/img/gal-08.jpg" alt="Стильная светлая столешница из камня">
                            <img src="https://стильный-камень.рф/pictures/img/gal-08.jpg" alt="Стильная светлая столешница из камня">
                          </picture>
                        </div>
</div>
<div id="animate2"></div>
<h2 class="klient-title">Наши клиенты</h2>
<div class="clearfix ossobennosti osobennosti-large icons-row klient-slider">
                        <div class="scrollmenu-productions scrollmenu-production">
                          <div>
                            <nuxt-link to="" class="customer-link"  v-for="(client, idx) in clients" :key="idx">
                              <div class="item item-product">
                                <div class="carousel-img"  >
                                  <picture>
                                    <source type="image/webp" :srcset="client.img +'.webp'" class="img-responsive-prod" :alt="client.title">
                                    <source type="image/jpg" :srcset="client.img +'.jpg'" class="img-responsive-prod" :alt="client.title">
                                    <img :src="client.img+'.jpg'" class="img-responsive-prod" a:alt="client.title">
                                  </picture>
                                </div>
                                </div>
                            </nuxt-link>
                          </div>
                        </div>
                    </div>
<div class="zero-hidden-scroll"></div>

  </div>
</div>
</template>

<script>
import Proizvodim from "~/components/Proizvodim.vue";
import KamenKvartcz from "~/components/KamenKvartcz.vue";
import Example from "~/components/Example.vue";
import Pochemu from "~/components/Pochemu.vue";
export default {
    head() { return {
      title:"Изделия из камня и дерева для Москвы, Рязани, Владимира",
      meta: [
        { name: 'description', hid: 'description', content: 'Заказать изделие из камня и массива. Замер и монтаж в любой точке Московской, Рязанской и Владимирской областях.'},
        {name:'yandex-verification', content:'41e5914cc3ca6916'},
        {name:"google-site-verification", content:"3svNW5hC-14ZVto-2C3hVBRielRor2w4JaN0MvEiKX0"},
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф' },
      ]
    }},
    components: {
    Proizvodim,
    KamenKvartcz,
    Example,
    Pochemu,
    },
    data() {
        return {
          page_name:"«Стильный камень» - производитель изделий из камня",
            slides1: [{num: "slide-01",title: "Столешницы из камня", text: "Собственное производство"},
              {num: "slide-02",title: "Подоконники из камня", text: "Надежные подоконники"},
              {num: "slide-03",title: "Столы из камня", text: "Красивые столы"},
              {num: "slide-04",title: "Лестница из камня", text: "Практичные ступени"}],
            sortProducts: [{index:"10",title:"Стол из дерева",link:""},
              {index:"02",title:"Ступени из камня",link:"каталог/лестницы-и-ступени-из-камня/лестницы-и-ступени-из-кварцевого-агломерата.html"},
              {index:"11",title:"Ступени из дерева",link:""},
              {index:"03",title:"Пол из камня",link:"каталог/пол-из-камня.html"},
              {index:"04",title:"Мойка из камня",link:"каталог/интегрированные-мойки.html"},
              {index:"05",title:"Столешница из камня",link:"каталог/столешницы/столешницы-из-кварца.html"},
              {index:"12",title:"Столешница из дерева",link:"каталог/столешницы/столешницы-из-массива-дерева.html"},
              {index:"06",title:"Стеновая панель из камня",link:"каталог/стеновые-панели/стеновые-панели-из-кварца.html"},
              {index:"13",title:"Стеновая панель из дерева",link:""},
              {index:"07",title:"Барная стойка из камня",link:"каталог/барные-стойки/барные-стойки-из-кварца.html"},
              {index:"14",title:"Барная стойка из дерева",link:""},
              {index:"08",title:"Ресепшн из камня",link:"каталог/ресепшн/ресепшн-из-кварца.html"},
              {index:"15",title:"Ресепшн из дерева",link:""},
              {index:"09",title:"Подоконник из камня",link:"каталог/подоконники/подоконники-из-кварца.html"},
              {index:"16",title:"Подоконник из дерева",link:""}],
            clients:[{index:"1",title:"Танцевальная студия Танго",img:"https://стильный-камень.рф/pictures/img/carousel/1"},{index:"2",title:"Сеть ресторанов Маки Маки",img:"https://стильный-камень.рф/pictures/img/carousel/2"},
              {index:"3",title:"Стоматологическое оборудование и материалы",img:"https://стильный-камень.рф/pictures/img/carousel/3"},{index:"4",title:"Протезно-ортопедическое предприятие",img:"https://стильный-камень.рф/pictures/img/carousel/4"},
              {index:"5",title:"Производство строительно-отделочных материалов",img:"https://стильный-камень.рф/pictures/img/carousel/6"}
            ],
            prices:{first_price: "64 448",second_price: "95 600",third_price:"122 466",fourth_price: "44 950",fifth_price: "77 435",sixth_price: "102 412",},
            osob:[{name:"Не оставляет пятен",img:"https://стильный-камень.рф/assets/img/osobennost-01.jpg)"},{name:"Простой уход",img:"https://стильный-камень.рф/assets/img/osobennost-02.jpg)"},
                {name:"Износостойкость",img:"https://стильный-камень.рф/assets/img/osobennost-03.jpg)"},{name:"Высокая прочность",img:"https://стильный-камень.рф/assets/img/osobennost-04.jpg)"},
                {name:"Жаростойкость",img:"https://стильный-камень.рф/assets/img/osobennost-05.jpg)"},{name:"Экологичность",img:"https://стильный-камень.рф/assets/img/osobennost-06.jpg)"},
                {name:"Натуральность",img:"https://стильный-камень.рф/assets/img/osobennost-07.jpg)"}],
            colors:[
                {name:"Интересный зеленоватый оттенок столешницы из камня",link:"gal5-06"},
                {name:"Голубоватые вкрапления в цвете столешницы",link:"gal5-07"},
                {name:"Цвет натурального камня у столешницы",link:"gal5-08"},
                {name:"Черно-белый цвет столешницы",link:"gal5-09"},
                {name:"Дорогой цвет столешницы",link:"gal5-10"},
                ],
            slides: 4,
            slide1Slider1:0,
            slide2Slider1:1,
            activeIndex:0,
            selectActive1: true,
            selectActive2: false,
            selectActive3: false,
            selectMaterial1: true,
            selectMaterial2: false,
            showDetailed1: false,
            showDetailed2: false,
            showDetailed3: false,
            showButton: false,
            currentShow: 0,
            currentBoard: 0,
            currentStone: 'Avant Quartz',
            currentStoneId: 0,
            stonesArr: [],
            showModalStone: false,
            openSuperModal:false,
        };
    },
    mounted(){
        const scene = this.$scrollmagic.scene({
            // ID of element where animation starts
            triggerElement: '#animate2',
            triggerHook: 0.7,
            duration: 10
        })
            // Declaration of animation and attaching to element
            .setTween('#animate2', {
            css: {
                color: 'red' // the tween durtion can be omitted and defaults to 1
            }
            })


        // Add Scene to controller
        this.$scrollmagic.addScene(scene)
    },
    methods: {
    minus(activeIndex) {
      this.activeIndex = ((4 + activeIndex - 1) %4);
    },
    plus(activeIndex) {
      this.activeIndex = ((activeIndex + 1) %4);
    },
    prevSlideSlider1() {
          this.slide1Slider1 = ((this.slide1Slider1 + 4)%5);
          this.slide2Slider1 = ((this.slide2Slider1 + 4)%5);
        },
    nextSlideSlider1() {
          this.slide1Slider1 = ((this.slide1Slider1 + 1)%5);
          this.slide2Slider1 = ((this.slide2Slider1 + 1)%5);
        },
    },
}
</script>

<style scoped>

.slider-1 {
    width: 100%;
    height: auto;
    display:none;
}
.slider-1 .title {
    text-transform: uppercase;
    color: #c8601b;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
    border: none;
}
.slider-1 .text {
    font-weight: bold;
    height: 40px;
    font-size:14px;
    border: none;
}
.slider-1 .arrow-left {
    height: 58px;
    width: 75px;
    background: #fe8200;
    position: absolute;
    right: -75px;
    top: 0;
    z-index: 2;
    cursor: pointer;
    border: none;
}
.slider-1 .arrow-right {
    height: 58px;
    width: 75px;
    background: #9e3f00;
    position: absolute;
    right: -75px;
    bottom: 0;
    z-index: 2;
    cursor: pointer;
    border: none;
}
.slider-1 .arrow-left span {
    display: block;
    width: 75px;
    height: 58px;
    background: url(../assets/img/arrow-left.png) no-repeat center center;
}
.slider-1 .arrow-right span {
    display: block;
    width: 75px;
    height: 58px;
    background: url(../assets/img/arrow-right.png) no-repeat center center;
}
.sliders {height: 400px;
}
.slider-1 .inner {
    background: #f0f6f6;
    padding: 20px 20px 20px 30px;
    position: absolute;
    top: 370px;
    border-left: 5px solid #6d8585;
    height: 120px;
    width: 50%;
}

.slide-01 {
    background: url(../assets/img/slider/slider_bg.jpg) no-repeat center center;
    background-size: cover;
}
.slide-02 {
    background: url(../assets/img/slider/podokonnik-iz-kamnya.jpg) no-repeat center center;
    background-size: cover;
}
.slide-03 {
    background: url(../assets/img/slider/stol-iz-kamnya.jpg) no-repeat center center;
    background-size: cover;
}
.slide-04 {
    background: url(../assets/img/slider/stupeni-iz-kamnya.jpg) no-repeat center center;
    background-size: cover;
}
.animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .slide-in {
    opacity: 0;
    transform: translate(-40%, -50%);
  }

  .slide-in-active {
    transition-delay: 150ms;
  }

  .slide-out {
    opacity: 1;
  }

  .slide-out-active {
    opacity: 0;
    transform: translate(-60%, -50%);
  }

/*.img-lg-01 {
    background: url(../assets/img/large-os-01.jpg) no-repeat bottom center;
}*/
.img-lg-02 {
    background: url(../assets/img/large-os-02.jpg) no-repeat bottom center;
}
.img-lg-03 {
    background: url(../assets/img/large-os-03.jpg) no-repeat bottom center;
}
.img-lg-04 {
    background: url(../assets/img/large-os-04.jpg) no-repeat bottom center;
}
.img-lg-05 {
    background: url(../assets/img/large-os-05.jpg) no-repeat bottom center;
}
.img-lg-06 {
    background: url(../assets/img/large-os-06.jpg) no-repeat bottom center;
}
.img-lg-07 {
    background: url(../assets/img/large-os-07.jpg) no-repeat bottom center;
}
.img-lg-08 {
    background: url(../assets/img/large-os-08.jpg) no-repeat bottom center;
}
.img-lg-09 {
    background: url(../assets/img/large-os-09.jpg) no-repeat bottom center;
}
.img-lg-10 {
    background: url(../assets/img/large-os-10.jpg) no-repeat bottom center;
}
.img-lg-11 {
    background: url(../assets/img/large-os-11.jpg) no-repeat bottom center;
}
.img-lg-12 {
    background: url(../assets/img/large-os-12.jpg) no-repeat bottom center;
}
.img-lg-13 {
    background: url(../assets/img/large-os-13.jpg) no-repeat bottom center;
}
.img-lg-14 {
    background: url(../assets/img/large-os-14.jpg) no-repeat bottom center;
}
.img-lg-15 {
    background: url(../assets/img/large-os-15.jpg) no-repeat bottom center;
}
.img-lg-16 {
    background: url(../assets/img/large-os-16.jpg) no-repeat bottom center;
}

.teh .item-1 {
    background: url(../assets/img/teh-1.jpg) no-repeat left center;
}
.teh .item-2 {
    background: url(../assets/img/teh-2.jpg) no-repeat left center;
}
.teh .item-3 {
    background: url(../assets/img/teh-3.jpg) no-repeat left center;
}
.teh .item-4 {
    background: url(../assets/img/teh-4.jpg) no-repeat left center;
}
.teh .item-5 {
    background: url(../assets/img/teh-5.jpg) no-repeat left center;
}
.teh .item-6 {
    background: url(../assets/img/teh-6.jpg) no-repeat left center;
}
/*.carousel-img {height: auto;min-width: 130%;}*/
.owl-carousel .item {
    height: 120px;
    line-height: 120px;
    padding: 5px;
    margin: 5px;
}
.owl-carousel .item img{
    height: 60px;
}
.production-link {display: inline-block;color: white;width: 36%;}
.scrollmenu-productions {background-color: white;overflow: auto;white-space: nowrap;height: 110px;}
.scrollmenu-color {background-color: white;overflow: auto;white-space: nowrap;}
.item-product {display: inline-block; width: 100%;}
.icons-row-slider {display:flex;}
.gal-5 {display: block;}
.img-responsive-prod {display: block;height: auto;width: auto}
.item-row span {font-size: 14px;font-weight: bold;}
.item-product span {font-size: 11px;font-weight: bold;}
.toggle-detailed {display: inline-block;}
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
  color: #808080;
  font-family: displaepro-bold;
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
  color: #808080;
  font-family: displaepro-bold;
}
.customer-link {width:20%;display: inline-block;}
.right-shadow-block {display: none!important;}
.br-mobile {display: none;}
.izg-oss .scrollmenu-productions{height: 200px;}
.item-row-free-2 img{width: 170px;}
/*.klient-title {z-index: 1;position: relative;}
.klient-slider {z-index: 0;margin-top: -40px;}*/
@media (min-width: 501px) {
    .slider-1 {display:block;}
    .img-responsive-prod {height: auto;width: 100%;}
    .zero-hidden-scroll {width: 100%;height: 40px;margin-top: -60px;background: #fff;position: relative;z-index: 5;}
    .osqwst .item {width:33.33333333%;}
    .osqwst .item:last-child {margin-left: 33.33333333%;}
    .item-row-free-2:nth-child(5) {margin-left:95px;}
}
@media (min-width: 601px){
    .h1, h1 {
      font-size: 1.5em;
    }
}
@media (min-width: 642px){
    .item-row-free-2:nth-child(4) {margin-left:95px;}
    .item-row-free-2:nth-child(5) {margin-left:0px;}
}
@media (min-width: 768px) {
    .osqwst .item {width:25%;}
    .osqwst .item:nth-child(5) {margin-left: 12.5%;}
    .osqwst .item:last-child {margin-left: 0;}
    .item-row-free-2:nth-child(4) {margin-left:0px;}
    .item-row-free-2:nth-child(5) {margin-left:95px;}
}

@media (min-width: 992px) {
  .h1, h1 {
    font-size: 1.7em;
    font-family: displaepro;
}
    .slider-1 .inner {
       width: auto;
       padding-right: 65px;
      }
    .osqwst .item {width:20%;}
    .osqwst .item:nth-child(6) {margin-left: 30%;}
    .osqwst .item:nth-child(5) {margin-left: 0;}
    .slider-1 .inner::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 60px solid transparent;
        border-bottom: 60px solid #f0f6f6;
        border-left: 60px solid #f0f6f6;
        position: absolute;
        top: 0;
        right: -120px;
    }
    .slider-1 .title {
      font-size: 18px;
    }
    .production-link {width: 20%;}
    .item-product span {font-size: 14px;}
    .item-row-free-2:nth-child(4) {margin-left:95px;}
    .item-row-free-2:nth-child(5) {margin-left:0px;}
    .slider-1 .arrow-left {
    right: -110px;
    -ms-transform: skewX(45deg);
    -webkit-transform: skewX(45deg);
    transform: skewX(45deg);
    }
    .slider-1 .arrow-right {
        right: -172px;
        bottom: 0;
        -ms-transform: skewX(45deg);
        -webkit-transform: skewX(45deg);
        transform: skewX(45deg);
    }
    .slider-1 .inner {
      width: 300px;
      padding: 25px 25px 20px 50px;
    }
    .slider-1 .arrow-left span {
        transform: skewX(-45deg);
    }
    .slider-1 .arrow-right span {
        transform: skewX(-45deg);
    }
}

@media (min-width: 1200px) {
    .sleder-1 {
    width: 813x;
    }
    .osqwst .item {width:fit-content;}
    .osqwst .item:nth-child(6) {margin-left: 0;}
    .item-row-free-2:nth-child(4) {margin-left: 0px;}
    .item-row-free-2 img {width: auto;}
}
@media (max-width: 820px) {
  .modal-stone-prev, .modal-stone-next {margin-top: 15%;}
}
@media (max-width: 500px) {
 p, li {margin-block-start: 0;}
 .vendor_icon{
    height: 140px;
    width: auto;
    }
  .img-lg{
    height: auto;
    width: auto;
    margin-bottom: 5px;
    background-size: cover!important;
    min-width: 160px;
    min-height: 160px;}
  .item-product {
    width: fit-content;}
  .production-link {
    width: 50%;}
  .item-row-color {
    /*display: contents;*/
    display: block;
    width: 50%;
    float: left;
    }
  .item-row-color img{padding: 10px;width: 170px;height: auto;}
  .item-row span {font-size: 11px;}
  .zero-hidden-scroll {display: none;}
    .osqwst .item {width:50%;}
    .osqwst .item:last-child {margin-left: 25%;}
    .br-mobile {display: inline;}
    .close-modal-stone {padding: 10px;}
    .modal-stone-row {width: 100vw;margin-left: 0;margin-right: 0;}
    .modal-stone-prev, .modal-stone-next {margin-top: 60%;}
    .item-row-color span {display: block;width: 50%;}
    .scrollmenu-color .slider-button-left {left: -7%;}
    .scrollmenu-color .slider-button-right {left: 97%;}
    .customer-link {width: 35%;}
    .customer-link img {height: auto;width: 110px;}
    .scrollmenu-productions {height: auto; }
    .icons-row-slider-productions { height: 120px;position: relative;top: -60px;margin-bottom: -40px;z-index: 1;}
    .clients-h {z-index: 2;position: relative;}
}
@media (max-width: 360px) {
    .item-row span {font-size: 10px;}
    .item-row-color img {padding: 10px;max-width: 150px;height: auto;width: auto;}
}
@media (max-width: 330px) {
    .item-row span {font-size: 8px;}
}
</style>
