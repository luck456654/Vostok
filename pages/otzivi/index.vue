<template>
  <div>
    <Bredcrumbs :pagetitle="title" />
    <div class="container">
      <h1>{{title}} </h1>
      <div class="main-content">
        <div class="yandex-widjet" v-show="false">
          <div class="yandex-logo">
            <img src="/elements/main/yandex.svg" alt="yandex">
          </div>
          <div class="yandex-main">
            <div class="star-row">
              <img src="/elements/main/star.svg" alt="rate" v-for="(item,index) in 5" :key="index">
            </div>
            <div class="rate-count">
              <span class="rate">{{reviews.rate}}</span> <span class="count"> ({{reviews.count}})</span>
            </div>
          </div>
        </div>
        <div class="reviews-block">
          <Revue v-for="(item,index) in reviewsArr" :key="index" :item="item" :title="item.name" :pages="'reviws'"/>
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
        : "СТРОЙ ВОСТОК: отзывы на строительные и ремонтные услуги " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "СТРОЙ ВОСТОК: отзывы на строительные и ремонтные услуги " + this.$store.state.inCity,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "СТРОЙ ВОСТОК: отзывы на строительные и ремонтные услуги " + this.$store.state.inCity,
      seoTitle: "",
      description: "",
      title: 'Отзывы',
      reviews:{rate:4.6, count:35},
      reviewsArr:[],
      cityDesc: ''
    }
  },
   async asyncData({ $axios, error, store }) {
    return await $axios
      .$get(
        store.state.apiDomen +
          `/api/main/reviws.php`
      )
      .then((arr) => {
        return {
          newArr: arr
        };
      })
      .catch((err) => {
        error(err);
      });
  },
  async mounted() {
    //this.isNuxtReady = true;
    // console.log(this.newArr)
    this.reviewsArr = this.newArr.reviews
    this.servArr = this.newArr.servArr
  },
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
  text-align: center;
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
.reviews-block{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.yandex-widjet{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.yandex-logo{
  margin-right: 20px;
}
@media (max-width: 600px){
  h1{
    font-size: 22px;
    line-height: 29px;
    margin: 30px 0;
  }
}
</style>
