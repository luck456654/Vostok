<template>
  <div>
    <Bredcrumbs :pagetitle="title" />
    <div class="container">
      <h1>{{title}} {{$store.state.inCity}}</h1>
      <Servises :servArr="newArr.services.servArr" :type="'couple'" />
    </div>
    <section class="uslugi-request">
      <Request :named="requestName" />
    </section>
  </div>
</template>

<script>
import Bredcrumbs from "~/components/breadcrumbs.vue";
import Servises from "~/components/servises.vue";
import Request from "~/components/request.vue";
export default {
  components: { Bredcrumbs, Servises, Request },

  head() {
    return {
      title: this.seoTitle
        ? this.seoTitle
        : "Наши строительные и ремонтные услуги в " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "Наши строительные и ремонтные услуги в " + this.$store.state.inCity,
        },
      ],
    };
  },
  data() {
    return {
      pagetitle: "Наши услуги - СТРОЙ ВОСТОК: строительные и ремонтные услуги " + this.$store.state.inCity,
      seoTitle: "",
      title:'Наши услуги',
      description: "",
      servArr:[],
      requestName: 'Нужен ремонт<br>или строительство<br>дома?',
    }
  },
  async asyncData({ $axios, error, store }) {
    return await $axios
      .$get(
        store.state.apiDomen +
          `/api/main/servis_page.php`
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
  mounted() {
    if (this.$store.state.ymInit == true) {
      ym(90648260, "hit", this.$route.path);
    }
    //this.servArr = this.newArr.services.servArr
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
.uslugi-request{
  margin-bottom: 120px;
}
@media (max-width: 600px){
  h1{
    font-size: 22px;
    line-height: 29px;
    margin: 30px 0;
  }
  .uslugi-request{
    margin-bottom: 60px;
  }
}
</style>
