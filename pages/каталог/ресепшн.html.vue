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
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<h2>Стойка ресепшн из искусственного камня</h2>
<p><strong>Стойка ресепшн</strong> является визитной карточкой организации, ведь именно она встречает посетителей при их первом походе в офис или административное учреждение. По ее внешнему виду судят о репутации компании, о ее финансовой состоятельности, и многим потенциальным клиентам и партерам одного взгляда на оформление приемной будет достаточно, чтобы составить свое мнение о подходе фирмы к организации бизнеса.</p>
<h2>Как произвести нужное впечатление</h2>
<p>Наиболее презентабельно и уместно смотрится <strong>ресепшн из искусственного камня</strong>. Изделия из него отличаются практичностью, долговечностью и красивым внешним видом. Оценить их визуально можно благодаря каталогу нашего сайта, где размещены красочные фото продукции. Большой ассортимент позволит приобрести оптимальную модель нужной вам формы или заказать свой собственный вариант. Современное производство конструкций из искусственного камня не пренебрегает модными тенденциями и позволяет предлагать потребителям изделия различных оттенков.</p>
<h2>Отличительные особенности</h2>
<p>Сделать выбор в пользу стойки из искусственного камня поможет обзор преимуществ данного материала. Помимо широкого выбора и эстетичного внешнего вида, покупатель преследует понятную цель – купить недорого качественную вещь. Наша продукция удовлетворяет этот запрос. Во-первых, материал обладает уникальной способностью адаптироваться к самым разным интерьерам, он идеально интегрируется в любое пространство, становясь его неотъемлемой частью. Сложная форма комнат или их небольшая площадь не станет преградой для размещения шикарной стойки – она способна гармонично вписаться в любое помещение, занимая отведенное ей место. Во-вторых, стоимость продукции из ассортимента нашей компании отличается демократичностью.</p>
<h2>Наши предложения</h2>
<p>В компании «Стильный камень» вы можете заказать изготовление стойки ресепшн из искусственного камня любых форм и размеров. <strong>Мы работаем как с частными клиентами, так и с оптовыми покупателями.</strong> Своих заказчиков мы радуем высоким качеством изделий и привлекательной ценой. У нас есть ряд дополнительных услуг, в которые входят доставка заказанного вами товара и его установка. Также мы предлагаем исключить любые ошибки и воспользоваться услугой предварительных замеров. На всю изготовленную нами продукцию мы предоставляем гарантию!</p>
<p class="proximait">Изготавливаем и устанавливаем стойки ресепшн из камня на
территории Московской, Рязанской и Владимирской областях.</p>
 </div>
               </div>
            </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
import ModalCallBack from "~/components/ModalCallBack.vue";
export default {
  head() {
    return{
      title:"Производство и установка ресепшн | Москва, Рязань, Владимир. Продажа, стоимость, цена, купить",
      meta: [
        { name: 'description', hid: 'description', content: 'Компания &quot;Стильный камень&quot; изготавливает стойки ресепшн из искусственного и натурального камней. Произведем и установим. Индивидуальный подход.'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/ресепшн.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Ресепшн",
          page_full_name:"Ресепшн из камня",
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
@media (max-width: 500px){
  h1, .h1 {
    font-size: 1.1em;
  }
}
</style>
