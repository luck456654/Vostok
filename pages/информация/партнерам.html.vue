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
        <p>
          Компания <strong>«Стильный камень»</strong> приглашает дилеров к плодотворному сотрудничеству на очень выгодных условиях. Ежедневно ведя работу с нашими
          оптовыми партнерами, мы стараемся безукоризненно выполнять свои обязательства, поэтому работа с нами позволит вашему бизнесу постоянно развиваться. Также мы
          готовы обеспечивать вас информационной и маркетинговой поддержкой, предлагать индивидуальные программы взаимодействия, а также предоставлять улучшенные условия
          при покупке больших партий наших изделий.
        </p>
        <p>
          Кроме того, мы с удовольствием поможем вам открыть собственный выставочный зал и предоставим все необходимые для этого образцы. Становясь нашим дилером, вы
          приобретаете надежного партнера, с которым не будете стоять на месте и станете работать по привлекательным ценам. Не упустите свой шанс!
        </p>
    </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Условия для оптовых закупок изделий из камня",
      meta: [
        { name: 'description', hid: 'description', content: 'Выгодные условия для партнеров реализации изделий из камня.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/информация/партнерам.html'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
         page_name:"Изделия из искусственного камня оптом",
         showBreadcrumbsMobile:false,
      }
    },
}
</script>
<style scoped>
.main-content strong {
  color: #1d1d1d;
  font-weight: bold;
}
</style>
