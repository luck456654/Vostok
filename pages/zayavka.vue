<template>
  <div>
    <Bredcrumbs :pagetitle="title" />
    <div class="container">
      <h1>{{title}} {{city}}</h1>
      <div class="main-content">
      <Request />
      </div>
    </div>
  </div>
</template>

<script>
import Bredcrumbs from "~/components/breadcrumbs.vue";
import Request from "~/components/request.vue";
export default {
  components: { Bredcrumbs, Request },
  head() {
    return {
      title: this.seoTitle
        ? this.seoTitle
        : "Оставить заявку на заказ услуг компании СТРОЙ ВОСТОК: строительные и ремонтные услуги " + this.cityDesc,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "Оставить заявку на заказ услуг компании СТРОЙ ВОСТОК: строительные и ремонтные услуги " + this.cityDesc,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "Оставить заявку на заказ услуг компании СТРОЙ ВОСТОК: строительные и ремонтные услуги " + this.cityDesc,
      seoTitle: "",
      description: "",
      title: 'Оставить заявку',
      city: '',
      cityDesc: ''
    }
  },
  mounted() {
    if (this.city){
      this.cityDesc = this.city;
    }else{
      this.cityDesc = 'в г. Шатура';
    }
  },
  /*async asyncData({ app, error, route, store }) {
    let uri = encodeURI(
      store.state.apiDomen + "/api/pages/product.php?url=" + route.params.id + "&city=" + store.state.sityFolder
    );
    return await app.$axios
      .$get(uri)
      .then((arr) => {
        if(arr.main == null) {
          error({statusCode: 404, message: 'Страница не найдена'});
        } else {
          console.log(arr)
        }
        return {
          city: arr.main.forPagetitle
        };
      })
      .catch((err) => {
        error(err);
        error({statusCode: 404, message: 'Страница не найдена'});
      });
  },*/
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
.main-content {
    padding: 120px 0;
}
@media (max-width: 600px){
  h1{
    font-size: 22px;
    line-height: 29px;
    margin: 30px 0;
  }
  .main-request {
    padding: 60px 0;
  }
}
</style>
