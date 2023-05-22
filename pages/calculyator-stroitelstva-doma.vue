<template>
    <div>
      <Bredcrumbs :pagetitle="title" />
      <div class="container">
        
        <h1>{{title}}</h1>
        
        <h2>Последние работы</h2>
        <div class="work-row" v-if="Mount">
       <Work v-for="(item,index) in works" :key="index" :item="item" v-if="index < CountShow" />
       
       <span class="also_works" @click="CountShow = 30" v-if="CountShow <= 3">Показать еще</span>
        </div>
        <Calc :title="title" :typeH="'h1'" />
      </div>
    </div>
  </template>
  <script>
  import Bredcrumbs from "~/components/breadcrumbs.vue";
  import Calc from "~/components/calc-stroika.vue";
  import Work from "~/components/product.vue";
  export default {
    components: { Bredcrumbs, Calc, Work },
    head() {
      return {
        title: 'Рассчитать стоимость строительства дома ' + this.$store.state.inCity,
        meta: [
          {
            hid: "description",
            name: "description",
            content: '',
          },
        ],
      };
    },
     data() {
      return {
        pagetitle: "Калькулятор расчета строительства дома",
        title:'Калькулятор строительства дома',
        seoTitle: "",
        description: "",
        cityDesc: '',
        works: [],
        Mount: false,
        CountShow: 3,
      }
    },
    async mounted(){
      if (this.$store.state.ymInit == true) {
      ym(90648260, "hit", this.$route.path);
    }
      var widthScreen = window.screen.width
      if(widthScreen <= 600) {
        this.CountShow = 1
      }
      var data = {parent: 8}
      this.works = await this.$axios.$post(this.$store.state.apiDomen + `/api/components/takeGallery.php`, data)
      .then((works) => {
        console.log(works)
        return works.works
      })
      .catch((err) => {
        error(err);
      });
      this.Mount = true
    }
  }
  </script>
  <style scoped>
  .work-row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 60px;
  }
  .also_works {
    color: #ff3f3f;
    border-bottom: 1px dotted;
    cursor: pointer;
    font-size: 20px;
  }
  </style>
  