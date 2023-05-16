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
                <nuxt-link to="/каталог/стеновые-панели.html" append itemprop="item">
                  <span itemprop="name">Стеновые панели и фартуки </span>
                </nuxt-link>
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
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать панель</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
 <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content kvarc-condition">
                  <div  class="top-img-row">
                    <div class="col-xs-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-01.webp"  alt="Светлая стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-01.jpg"  alt="Светлая стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-01.jpg"  alt="Светлая стеновая панель из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-02.webp"  alt="Черная стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-02.jpg"  alt="Черная стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-02.jpg"  alt="Черная стеновая панель из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-03.webp"  alt="Коричневаял стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-03.jpg"  alt="Коричневаял стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-03.jpg"  alt="Коричневаял стеновая панель из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/wall/stakr-04.webp"  alt="Бежевая стеновая панель из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/wall/stakr-04.jpg"  alt="Бежевая стеновая панель из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/wall/stakr-04.jpg"  alt="Бежевая стеновая панель из акрилового камня">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                     <nuxt-link to="/каталог/стеновые-панели/галерея-стеновых-панелей.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
       </div>
</div>

<div class="col-xs-12">
<p>Современный интерьер – это прежде всего сочетание различных тактильно-визуальных фактур, таких как дерево, аксессуары из нержавеющей стали, стекло, керамика, кожа, текстиль и, конечно, новые экоматериалы, такие как жидкий камень.</p>
<p>Компания «Стильный камень» предлагает на самых выгодных условиях стеновые панели, а также фартуки из жидкого камня, выполненные из сырья от лучшего мирового бренда Granistone. Такой декор всегда смотрится красиво и респектабельно и способен стать адекватной заменой дорогостоящему натуральному минералу, сэкономив ваши средства.</p>

<h2>Плюсы и минусы стеновой панели из жидкого камня</h2>

<p>Жидкий камень обладает уникальными характеристиками. В первую очередь он достаточно экологичен, а значит, безопасен. Это подтверждает его состав: 80 % приходится на каменную крошку, а связующим веществом является полиэстер, по набору компонентов аналогичный природному янтарю.</p>
<p style="margin-bottom: 0;">Жидкий камень идеально подходит для устройства фартука, который находится в непосредственной близости от места приготовления пищи и подвергается нагреву. Но это лишь одно из преимуществ такого декоративного слоя. Благодаря технологии производства жидкий камень имеет такие свойства, как:</p>
<ul style="margin-top: 5px;">
    <li>податливость: материал способен принять любую форму;</li>
    <li>возможность создания плавных поворотов, изгибов;</li>
    <li>отсутствие стыковых швов у фартуков и стеновых панелей любых форм и размеров;</li>
    <li>высокий уровень прочности;</li>
    <li>небольшой вес по сравнению с природным минералом;</li>
    <li>долговечность и простота эксплуатации.</li>

</ul>
<p>Для фартуков и других изделий из этого материала состав готовится индивидуально, после чего наносится на подложку. Таким образом, при заказе маленького нестандартного элемента декора вы оплачиваете только реальную квадратуру, без обрезков.</p>


<h2>Как рассчитать стоимость стеновой панели</h2>
<p style="margin-bottom: 0;">Цена зависит от нескольких параметров:</p>
<ul style="margin-top: 5px;">
    <li>ширины, длины, толщины стеновой панели и фартука;</li>
    <li>цветовой палитры (все возможные варианты цветов вы можете увидеть в разделе <a href="https://стильный-камень.рф/цвет-столешницы/">«Палитра»</a>);</li>
    <li>используемых торцевых кромок.</li>
</ul>
<p>С действующим прайсом вы можете ознакомиться на нашем сайте. Для удобства расчёта воспользуйтесь специальным <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html">калькулятором</a>.</p>
<p>Невысокая цена жидкого камня по сравнению с природным материалом делает такие стеновые панели доступными даже при небольшом бюджете.</p>
 <hr>
  <h3>Заказать консультацию</h3>
  <CallBackInPage/>
</div>
<div class="col-sm-12">
<h2>Как заказать стеновую панель </h2>
<p>Купить стеновую панель из жидкого камня у нас достаточно выгодно. Чтобы сделать заказ, вам необходимо просмотреть каталог нашей продукции, материал и связаться с нами. Всё остальное, от создания эскиза и до монтажа готового изделия на объекте, берут на себя наши специалисты.</p>
<h3>Почему у Стильного камня?</h3>
<p style="margin-bottom: 0;">Сотрудничество с компанией «Стильный камень» максимально выгодно для клиентов, поскольку мы:</p>
<ul style="margin-top: 5px;">
    <li>Работаем качественно, быстро и недорого;</li>
    <li>Предоставляем 3-летнюю гарантию на всю продукцию;</li>
    <li>Имеем сертификаты безопасности и гигиеничности для всех своих товаров;</li>
    <li>Оказываем дополнительные услуги по установке стеновых панелей, фартуков из жидкого камня и других изделий, осуществляем их ремонт и обслуживание;</li>
    <li>Благодаря наличию собственного производства не оплачиваем работу посредников, а вы не переплачиваете за готовую продукцию;</li>
    <li>Своим постоянным партнёрам предлагаем интересные условия, информационную и маркетинговую поддержку, а также индивидуальные программы сотрудничества;</li>
    <li>Готовы оказать клиентам помощь в создании собственного выставочного зала с предоставлением всех необходимых образцов.</li>
</ul>
<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» устанавливает свои стеновые панели, фартуки и другие изделия на территории Москвы, Московской области, где расположено 10 представительств нашей компании.
</p>
<p class="proximait">Кроме этого, мы работаем в Рязани, Владимире и их областях.</p>
</div>
</div>
</div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
export default {
  head() {
    return{
      title:"Заказать фартук из жидкого гранита  в Москве, Рязани и Владимире - Кухонные фартуки из Granistone",
      meta: [
        { name: 'description', hid: 'description', content: 'Стеновые панели из жидкого камня на заказ. Цены производителя.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/стеновые-панели/стеновая-панель-из-жидкого-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
      CallBackInPage
    },
    data() {
        return {
          page_name:"Стеновые панели из жидкого гранита",
          page_full_name:"Стеновые панели из жидкого камня",
          showModalCallBack:false,
          showBreadcrumbsMobile:false,
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
h2, .h2, h3, .h3 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
.content-zakaz {margin-bottom: 0px;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
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

