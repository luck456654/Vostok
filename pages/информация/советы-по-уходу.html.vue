<template>
<div>
  <Proizvodim/>
  <div class="col-xs-12 nav-content offset-40">
        <div class="crumbs">
            <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb" :class="{breadcrumb_open: showBreadcrumbsMobile}">
              <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
                itemtype="http://schema.org/ListItem">
                  <nuxt-link to="/"  itemprop="item" >
                    <span itemprop="name" class="first-breadcrumb">Главная</span>
                  </nuxt-link>
                  <meta itemprop="position" content="1" />
              </li>
              <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
                itemtype="http://schema.org/ListItem">
                  <span itemprop="name">{{page_name}}</span>
                  <meta itemprop="position" content="2" />
              </li>
            </ol>
              <button class="breadcrumbs-show-mobile" v-if="!showBreadcrumbsMobile" @click="showBreadcrumbsMobile = !showBreadcrumbsMobile" title="Показать подробнее">
                  <span>...</span>
              </button>
              <h1>{{page_name}}</h1>
        </div>
    </div>
    <div class="main-content col-sm-12">
      <h2>Правила по эксплуатации изделий из искусственного камня</h2>
        <p>
          Качественные изделия из искусственного гранита все чаще появляются в современных домах и квартирах. Их ценят за потрясающую прочность, долговечность, красоту,
          экологическую безопасность и за способность отлично переносить влажную уборку даже с применением различных моющих средств. Причем составы могут быть
          агрессивными, поскольку искусственный гранит устойчив к негативному влиянию едких химических веществ.
        </p>
        <p>
          Однако, как и любой другой прочный материал, он требует бережного к себе отношения и использования по предназначению. Следовательно, необходимо строго
          облюдать несколько нехитрых правил, которые позволят продлить его срок службы:
        </p>
        <ol>
          <li>
            Если на поверхности изделия из искусственного гранита появились загрязнения, удалять их нужно губкой, на одну из сторон которой есть жесткая накладка толщиной
            4-6 мм. Сегодня разноцветные наборы таких аксессуаров встречаются практически в любом магазине, поэтому отыскать их не составит труда. Чтобы удалить пятна
            быстро, нужно нанести моющее средство на жесткую сторону губки, протереть ею поверхность изделия, удалить пену теплой водой и после вытереть поверхность
            насухо мягкой тряпкой.
          </li>
          <li>
            Царапины, возникшие при длительной эксплуатации изделия из искусственного гранита, рекомендуется удалять с помощью сухой губки, обрабатывая участки ее жесткой
            стороной. Она хорошо обновляет поверхность благодаря своим абразивным свойствам.
          </li>
          <li>
            Чтобы искусственный гранит выглядел безупречно, его необходимо беречь от контакта с сильно нагретыми предметами или водой. Поэтому стоит регулярно пользоваться
            специальным подставками под чайники и сковородки, а также немного остужать горячую воду, если возникает необходимость вылить ее в раковину из искусственного
            камня.
          </li>
          <li>
            Если к столешнице пристали частички пищи, не нужно их неистово соскабливать ножом или использовать металлическую сетку для чистки посуды, потому что так можно
            поцарапать поверхность изделия. В этом случае лучше сбрызнуть этот участок теплой водой и немного подождать, когда присохший кусочек хорошо размякнет. После
            его можно будет просто убрать тряпкой.
          </li>
          <li>
             Чтобы на столешницах, подоконниках или ступенях из искусственного гранита не возникало никаких пятен, следует сразу же подтирать упавшие капли сока, соусов и
             других красящих веществ.
          </li>
          <li>
            При уходе за искусственными гранитными полами рекомендуется предварительно обрабатывать их пылесосом и только потом орудовать шваброй с мягкой насадкой. Это
            необходимо для того, чтобы полы не царапались мелкими соринками, которые могут оказаться на них.
          </li>
          <li>
            Нужно помнить, что любое средство, используемое для очистки столешниц, раковин и подоконников, необходимо тщательно смывать, потому что содержащийся в них
            детергент может оставить на поверхности белесые пятна или разводы.
          </li>
        </ol>
        <p>
          Соблюдение этих советов позволит вам долгие годы любоваться красотой и безупречным состоянием предметов из искусственного камня!
        </p>
    </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Советы по уходу за искусственным камнем",
      meta: [
        { name: 'description', hid: 'description', content: 'Советы по уходу за искусственным камнем от производителя'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/информация/советы-по-уходу.html.html'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
         page_name:"Уход за искусственным камнем",
         showBreadcrumbsMobile:false,
      }
    },
}
</script>
<style scoped>
/*::marker.container ol {
  list-style-type: decimal;
  margin-left: 15px;
}
.container ol li::before{
  content:none;
}
.container ol li {
  text-indent: 15px;
  margin-left: -15px;
}*/
.container .main-content ol {
    counter-reset: item;
    margin-left: 0;
    padding-left: 0;
}
.container .main-content ol li {
    display: block;
    margin-bottom: 1rem;
}

.container .main-content ol li:before {
    display: inline-block;
    content: counter(item) ".";
    counter-increment: item;
    width: 5px;
    margin-left: 0;
    font-weight: bold;
    color: #1d1d1d;
}
.main-content strong {
  color: #1d1d1d;
  font-weight: bold;
}
.nav-content h1, .nav-content .h1 {
     left: 0px;
}
</style>
