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
                <nuxt-link to="/каталог/столы.html" append itemprop="item">
                  <span itemprop="name">Столы из камня</span>
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
  <a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать стол</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12 main-content">
               <div class="row">
                 <div  class="top-img-row">
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-01_akril_stol.webp"  alt="Темный стол из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-01_akril_stol.jpg"  alt="Темный стол из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-01_akril_stol.jpg"  alt="Темный стол из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-02_akril_stol.webp"  alt="Белый стол из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-02_akril_stol.jpg"  alt="Белый стол из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-02_akril_stol.jpg"  alt="Белый стол из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-03_akril_stol.webp"  alt="Серый стол из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-03_akril_stol.jpg"  alt="Серый стол из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-03_akril_stol.jpg"  alt="Серый стол из акрилового камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-04_akril_stol.webp"  alt="Коричневый стол из акрилового камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-04_akril_stol.jpg"  alt="Коричневый стол из акрилового камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-04_akril_stol.jpg"  alt="Коричневый стол из акрилового камня">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                      <a href="https://стильный-камень.рф/каталог/столешницы/галерея-работ-столешниц-из-акрилового-камня.html" rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </a>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
             </div>
          </div>
<div class="col-xs-12">
<p>Стол из акрилового камня – надёжный и практичный предмет современной мебели. Он впишется как в интерьер общественного помещения, так и в обстановку столовой, кухни квартиры или дома. Глянцевая поверхность и красивая фактура натурального камня украсят и преобразят любое пространство, привнеся в него немного роскоши и элегантной эстетики.</p>
<h2>Цвета столов из акрилового камня</h2>
<KamenAkril />
<div class="btn-center">
                <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                  <button class="content-zakaz">Смотреть всю палитру</button>
                </a>
              </div>
<p>Особенный материал производится из нескольких составляющих: порошка-основы, цветового пигмента и связующего вещества – акриловой смолы. В качестве наполнителя для придания схожести с натуральным минералом в состав добавляют небольшие кусочки и крошку разного размера.</p>
<h2>Плюсы и минусы стола из акрилового камня</h2>
<p>Стол из акрилового камня функционален, имеет небольшой вес и вполне демократичную стоимость. Он обладает рядом других важных эксплуатационных характеристик и достоинств, в числе которых:</p>
<ul>
<li>безопасность, гигиеничность и безвредность для здоровья человека;</li>
<li>лёгкая обработка и шлифовка;</li>
<li>бесшовная технология соединения;</li>
<li>оптимальная толщина (12 мм);</li>
<li>практичность;</li>
<li>влагостойкость;</li>
<li>простота ухода;</li>
<li>долговечность.</li>
</ul>
<p>Наряду с этим у стола из акрилового камня есть один недостаток. В процессе производства в качестве закладной, или подложки, используется прессованный материал. Чтобы стол не деформировался, основа должна быть устойчива к влаге. Несмотря на это, всё же не рекомендуется устанавливать такой стол под открытым небом.</p>
<h2>Как рассчитать стоимость стола</h2>
<p>Конечная цена изделия будет зависеть от выбранных вами параметров:</p>
<ul>
<li>ширины, длины, толщины;</li>
<li>производителя материала;</li>
<li>цвета (с цветовой гаммой можно ознакомиться в разделе «<a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a>»);</li>
<li>оформления торцевых кромок.</li>
</ul>
<p>Воспользуйтесь удобным <a href="https://стильный-камень.рф/цена-за-метр-столешницы.html">онлайн-калькулятором</a> на нашем сайте, чтобы быстро и правильно рассчитать стоимость товара.</p>
<h2> Как заказать стол</h2>
<p>Купить стол из акрилового камня у нас достаточно выгодно и просто. Если вы определились с размером и цветовой гаммой, вы можете выбрать любой понравившийся вариант. Мы предлагаем множество разнообразных коллекций, находящихся в разной ценовой категории, куда включено более 500 образцов материала.</p>
<hr>
    <CallBackInPage />
</div>
<div class="col-sm-12">
<p>После этого наши специалисты разработают эскиз и технический проект с учётом ваших требований, а мастера изготовят стол из акрилового камня.</p>
<h3>Почему у Стильного камня?</h3>
<p>Наши клиенты получают ряд выгод, обусловленных тем, что мы:</p>
<ul>
<li>1.	Имеем собственное производство и не используем услуги посредников. Этот факт положительно сказывается на итоговой сумме заказа.</li>
<li>2.	Работаем быстро и без потери качества.</li>
<li>3.	Предоставляем 3-летнюю гарантию на столы из акрилового камня и другую продукцию.</li>
<li>4.	Имеем сертификаты безопасности и гигиеничности на все наши товары.</li>
<li>5.	Оказываем целый ряд дополнительных услуг, в том числе осуществляем доставку готовой продукции, ремонт и постпродажное обслуживание.</li>
<li>6.	Своим постоянным партнёрам предлагаем интересные условия, информационную и маркетинговую поддержку, а также индивидуальные программы сотрудничества.</li>
<li>7.	Готовы оказать помощь в создании собственного выставочного зала с предоставлением всех необходимых образцов.</li>
</ul>
<h3>Охват городов</h3>
<p class="proximait">Наша компания устанавливает свои изделия на территории Москвы, Московской области, где расположено 10 представительств «Стильного камня».
Кроме этого, мы работаем в Рязани, Владимире и их областях.</p>
</div>
</div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
import CallBackInPage from "~/components/CallBackInPage.vue";
import KamenAkril from "~/components/KamenAkril.vue";
export default {
   head() {
     return{
      title:"Заказать стол из акрилового камня у производителя в Москве и Московской области",
      meta: [
        { name: 'description', hid: 'description', content: 'Качественные, надежные, красивые и доступные столы из акрилового камня для Вашей кухни.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столы/стол-из-акрилового-камня.html'},
      ]
    }
   },
    components: {
      ModalCallBack,
      CallBackInPage,
      Proizvodim,
      KamenAkril,
    },
    data() {
        return {
          page_name:"Столы из акрилового камня",
          page_full_name:"Стол из акрилового камня",
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
.main-content {margin-top: 20px;}
.top-img-row {margin-top: 20px;margin-bottom: 20px;}
.top-img-row  img{padding: 5px;margin-bottom: 20px;max-width: 120%;}
.float-images {float: left;padding-right: 20px;}
.bottom-box-img {left: -15px;position: relative;}
.send-button {float: left;margin-top: 15px;}
hr {
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
  .top-img-row {margin-left: -15px;margin-right: -15px;margin-top: -10px;}
  .top-img-row .col-md-3 {padding-left: 0;padding-right: 0;}
}
</style>
