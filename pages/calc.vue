<template>
  <div>
    <Bredcrumbs :pagetitle="title" />
    <div class="container">
      <Calc :title="title + ' ' + $store.state.inCity" :typeH="'h1'" />
    </div>
  </div>
</template>
<script>
import Bredcrumbs from "~/components/breadcrumbs.vue";
import Calc from "~/components/calculator.vue";
export default {
  components: { Bredcrumbs, Calc },
  head() {
    return {
      title: this.seoTitle
        ? this.seoTitle
        : "Калькулятор работ СТРОЙ ВОСТОК: строительные и ремонтные услуги в " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "Калькулятор работ СТРОЙ ВОСТОК: строительные и ремонтные услуги в " + this.$store.state.inCity,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "Калькулятор работ СТРОЙ ВОСТОК: строительные и ремонтные услуги " + this.$store.state.inCity,
      title:'Калькулятор работ',
      seoTitle: "",
      description: "",
      cityDesc: ''
    }
  },
  mounted() {
    if (this.$store.state.ymInit == true) {
      ym(90648260, "hit", this.$route.path);
    }
  }
}
</script>
<style scoped>

</style>
