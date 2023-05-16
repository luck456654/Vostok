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
                <nuxt-link to="/каталог/лестницы-и-ступени-из-камня.html" append itemprop="item">
                  <span itemprop="name">Лестницы и ступени из камня</span>
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
            <h1>{{page_name}}</h1>
      </div>
  </div>
<a class="zakaz-kamen content-zakaz" @click.prevent="showModalCallBack = !showModalCallBack">Заказать лестницу</a>
  <ModalCallBack  v-show="showModalCallBack" @close="closeModalCallBack"/>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 main-content">
<br>
<p>Это элемент внутреннего пространства дома, декор которого зачастую игнорируется. Мы предлагаем вам обновить свой дом, сделав лестницу из жидкого камня достойным украшением интерьера.</p>
<p>Такая конструкция может полностью изменить внешний вид помещения. Органический материал придаст ему современный, модный и вместе с тем естественный и элегантный вид, создаст неповторимую аутентичную атмосферу.</p>
<h2>Плюсы и минусы лестницы из жидкого камня</h2>

<p>Если для вас одновременно важны эстетика и практичность, лестница из жидкого камня подойдёт вам идеально. Жидкий камень красив и обладает отличными технико-эксплуатационными характеристиками. В состав композита входят минеральные или синтетические наполнители и пигменты, которые позволяют максимально разнообразить палитру.</p>
<p>Принцип создания прост: изделие отливается или изготавливается при помощи напыления на основу. Финишная шлифовка делает текстуру лестницы из жидкого камня максимально напоминающей натуральный материал.</p>
<p style="margin-bottom: 0;">Конструктивный элемент дома обладает антибактериальными свойствами и является влагостойким, а значит, не подвержен появлению микробов и плесени. Он также имеет и ряд других преимуществ и свойств:</p>
<ul style="margin-top: 5px;">
    <li>возможность создания любой формы;</li>
    <li>устойчивость к высоким температурам;</li>
    <li>высокую прочность и долговечность;</li>
    <li>простой уход;</li>
    <li>меньший вес в сравнении с натуральным камнем;</li>
    <li>лёгкую реставрацию и ремонт.</li>
</ul>
<p>Отсутствие пор на материале препятствует впитыванию запахов.</p>
<p>Экологичность и соответствие материала санитарным нормам делают лестницу из жидкого камня абсолютно безвредной для здоровья жильцов.</p>
<h2>Как рассчитать стоимость лестницы</h2>
<p>Невысокая цена по сравнению с природным материалом делает лестницу из жидкого камня доступной даже при сравнительно небольшом бюджете.</p>
<p style="margin-bottom: 0;">Стоимость конструкции зависит от нескольких параметров:</p>
<ul style="margin-top: 5px;">
    <li>её ширины, длины, толщины;</li>
    <li>производителя;</li>
    <li>выбранной палитры (все возможные оттенки можно увидеть и выбрать в разделе «<a href="https://стильный-камень.рф/цвет-столешницы/">Палитра</a>»);</li>
    <li>используемых торцевых кромок.</li>
</ul>
<h2>Как заказать лестницу</h2>
<p>Купить лестницу из жидкого камня у нас достаточно выгодно, поскольку мы не работаем с посредниками и не закладываем дополнительные расходы в цену готового изделия.</p>
<p>В нашей компании вы можете заказать изделия различных форм, с разнообразной текстурой и цветовой гаммой или приобрести готовые варианты.</p>
<p>Если вы решили сделать заказ, свяжитесь с нами. Наши специалисты произведут замеры на объекте, разработают эскиз и техпроект, которые будут с вами согласованы и утверждены. Затем мастера изготовят лестницу из жидкого камня и смонтируют её непосредственно на месте.</p>
<h3>Почему у Стильного камня?</h3>
<p style="margin-bottom: 0;">Сотрудничество с нами максимально выгодно по следующим причинам:</p>
<ul style="margin-top: 5px;">
<li>Своим клиентам мы предлагаем приемлемые цены, оперативное выполнение заказа, монтаж на объекте, постпродажный ремонт и обслуживание.</li>
<li>У нас работают только высокопрофессиональные мастера.</li>
<li>Срок выполнения заказа зависит от его сложности, но не превышает 15 дней.</li>
<li>Благодаря большому ассортименту, у нас вы всегда найдёте стеновые панели, полностью соответствующие вашим запросам.</li>
<li>Мы даём 3 года гарантии на изделия нашей компании.</li>
<li>Безопасность и гигиеничность используемых нами материалов подтверждается соответствующими сертификатами.</li>
</ul>
<h3>Охват городов</h3>
<p class="proximait">«Стильный камень» устанавливает свою продукцию на территории Москвы, Рязани, Владимира и их областей.</p>
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
      title:"Заказать лестницу из акрилового камня в Москве, Рязани и Владимире.",
      meta: [
        { name: 'description', hid: 'description', content: 'Изготовление и установка лестниц из акрила по доступным ценам. От производителя!'}
      ],
      link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/каталог/лестницы-и-ступени-из-камня/лестницы-из-акрилового-камня.html'},
      ]
    };
  },
    components: {
      Proizvodim,
      ModalCallBack,
    },
    data() {
        return {
          page_name:"Лестницы из акрилового камня",
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
.main-content ul li {margin-bottom: 5px;}
.send-button {float: left;margin-top: 15px;}
.content-zakaz {margin-bottom: 0px;}
h2, .h2, h3, .h3 {padding-top: 1em;margin-bottom: 0.5em;}
p { margin-block-start: 0.5em;}
@media (max-width: 500px){
  h1, .h1 {font-size: 1.1em;}
}
</style>
