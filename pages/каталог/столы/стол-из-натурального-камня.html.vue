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
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-01_nat_stol.webp"  alt="Стол из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-01_nat_stol.jpg"  alt="Стол из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-01_nat_stol.jpg"  alt="Стол из натурального камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-02_nat_stol.webp"  alt="Стол из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-02_nat_stol.jpg"  alt="Стол из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-02_nat_stol.jpg"  alt="Стол из натурального камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-03_nat_stol.webp"  alt="Стол из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-03_nat_stol.jpg"  alt="Стол из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-03_nat_stol.jpg"  alt="Стол из натурального камня">
                      </picture>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <picture>
                        <source type="image/webp" srcset="https://стильный-камень.рф/pictures/stoly/gal-04_nat_stol.webp"  alt="Стол из натурального камня">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/stoly/gal-04_nat_stol.jpg"  alt="Стол из натурального камня">
                        <img src="https://стильный-камень.рф/pictures/stoly/gal-04_nat_stol.jpg"  alt="Стол из натурального камня">
                      </picture>
                    </div>
                </div>
              <div class="btn-center">
                     <nuxt-link to="/каталог/столешницы/галерея-работ.html" append rel="nofollow">
                        <button class="content-zakaz">Галерея работ</button>
                      </nuxt-link>
                      <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html" rel="nofollow">
                        <button class="content-zakaz">Отзывы</button>
                      </a>
                      <a href="https://стильный-камень.рф/цвет-столешницы/" rel="nofollow">
                        <button class="content-zakaz">Цветовая палитра</button>
                      </a>
              </div></div>
<div class="col-xs-12">
<p>Стол является центром мебельной композиции кухни и столовой. Большой, белый, овальный мраморный или небольшой круглый, гранитный, он подчеркнёт стиль помещения и впишется практически в любой интерьер: современный, аутентичный, классический и даже деревенский.</p>
<p>Благородный, экологичный материал излучает тепло и придаёт дому уникальный характер. Стол из натурального камня верно прослужит вам долгие годы. Наши специалисты выполнят заказ согласно вашим критериям, чтобы вы остались довольны столь практичным приобретением.</p>
<h2>Плюсы и минусы стола из натурального камня</h2>
<p>У нас можно заказать изделие в трёх вариантах исполнения: из мрамора, гранита и оникса. Помимо того, что такой предмет мебели освежает интерьер, делает его более эксклюзивным, респектабельным и скрашивает быт, он обладает многими практическими преимуществами. Среди них:</p>
<ul>
    <li>долговечность и износостойкость;</li>
    <li>абсолютная пожаробезопасность;</li>
    <li>влагостойкость;</li>
    <li>способность выдерживать большие нагрузки;</li>
    <li>красивая натуральная цветовая палитра;</li>
    <li>потрясающая тактильная фактура;</li>
    <li>такой стол не накрывают скатертью.</li>
</ul>
<h2>Как рассчитать стоимость стола</h2>
<p>Цена готового стола из натурального камня будет зависеть от следующих показателей и характеристик:</p>
<ul>
    <li>ширины, длины, толщины изделия;</li>
    <li>выбранного производителя;</li>
    <li>цветовой палитры (возможные варианты выбирайте в разделе «<a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a>»);</li>
    <li>используемых торцевых кромок.</li>
</ul>
<h2>Как заказать стол</h2>
<p>Купить стол из натурального камня у нас достаточно выгодно. Вы можете заказать мраморную, гранитную версию или вариант из оникса. Если вы уже определились с цветом, вам нужно лишь с нами связаться. Всё остальное сделают наши специалисты. Они разработают макет будущего предмета мебели, изготовят его и доставят на объект.</p>
<hr>
  <CallBackInPage />
</div>
<div class="col-sm-12">
<h3>Почему у Стильного камня?</h3>
<p>Если вам нужно качественно, оперативно и недорого изготовить стол из натурального камня, обращайтесь в нашу компанию.</p>
<p>Благодаря наличию собственного производства мы не оплачиваем услуги посредников и не закладываем эти суммы в цену готовой продукции. Помимо изготовления и доставки мы осуществляем постпродажный ремонт и обслуживание своих изделий.</p>
<p>На всю продукцию предоставляется 3-летняя гарантия. Изделия «Стильного камня» имеют сертификаты безопасности и гигиеничности.</p>
<p>Для своих постоянных партнёров у нас разработаны дополнительные условия. Кроме того, мы осуществляем информационную, маркетинговую поддержку и предлагаем индивидуальные программы сотрудничества.</p>
<p>Мы рады помочь в оборудовании собственного выставочного зала с предоставлением всех необходимых образцов.</p>
<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» работает на территории Москвы, Московской области, где расположено 10 представительств нашей компании. А наши готовые изделия можно посмотреть более чем в 50 столичных мебельных магазинах.</p>
<p class="proximait">Кроме этого, мы принимаем заказы в Рязани, Владимире и их областях.</p>
 </div><div>
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
      title:"Изготовление и установка столешниц из натурального камня в Москве, Рязани и Владимире",
      meta: [
        { name: 'description', hid: 'description', content: 'Заказать или купить столешницу из натурального камня от производителя по доступным ценам. Мрамор, Оникс, Гранит.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/столы/стол-из-натурального-камня.html'},
      ]
    }
   },
    components: {
      ModalCallBack,
      CallBackInPage,
      Proizvodim,
    },
    data() {
        return {
          page_name:"Столы из натурального камня",
          page_full_name:"Стол из натурального камня",
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
