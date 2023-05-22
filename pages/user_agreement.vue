<template>
  <div>
    <Bredcrumbs :pagetitle="title" />
    <div class="container">
      <h1>{{title}}</h1>
      <div class="main-content">
        <Terms />
      </div>
    </div>
  </div>
</template>

<script>
import Bredcrumbs from "~/components/breadcrumbs.vue";
import Terms from "~/components/terms.vue";
export default {
  components: { Bredcrumbs, Terms },
  head() {
    return {
      title: this.seoTitle
        ? this.seoTitle
        : "Пользовательское соглашение СТРОЙ ВОСТОК: строительные и ремонтные услуги в г. Шатура",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "Пользовательское соглашение СТРОЙ ВОСТОК: строительные и ремонтные услуги в г. Шатура.",
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "Пользовательское соглашение СТРОЙ ВОСТОК: строительные и ремонтные услуги в г. Шатура",
      seoTitle: "",
      description: "",
      title: 'Пользовательское соглашение'
    }
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
.main-content{
  margin-bottom: 120px;
}
@media (max-width: 600px){
  h1{
    font-size: 22px;
    line-height: 29px;
    margin: 30px 0;
  }
  .main-content{
    margin-bottom: 60px;
  }
}
</style>
