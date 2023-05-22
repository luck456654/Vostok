<template>
  <div>
    <Bredcrumbs
      :pagetitle="title"
      :firstParent="firstParent"
      :secondParent="secondParent"
      v-if="template == 3"
    />
    <Bredcrumbs
      :pagetitle="title"
      :firstParent="firstParent"
      v-if="template == 4"
    />
    <div class="container">
      <h1 :class="{ 'category-title': template == 4 }">
        {{ newArr.main.pagetitle }} {{ $store.state.inCity }}
      </h1>
      <section class="main-section" v-if="template == 4 && showSub == 'Да'">
        <Servises :servArr="servArr" :type="'single'" />
      </section>
      <section class="main-section">
        <div class="serv-content" v-if="newArr['main']['multi_content']">
          <div
            v-for="(item, index) in newArr['main']['multi_content']"
            :key="index"
          >
            <div v-if="item.type == 'html'" v-html="item.content"></div>
            <ul v-if="item.type == 'links'">
              <li v-for="(link, key) in item.content.split('||')" :key="key">
                <nuxt-link :to="$store.state.sityFolder + link.split('|')[0]">{{
                  link.split("|")[1]
                }}</nuxt-link
                >;
              </li>
            </ul>
            <div v-if="item.type == 'prices'">
              <div class="deskprice">
                Цена работ по отделке фасада частного дома
              </div>
              <table class="table">
                <tr class="bgcth">
                  <td>Наименование услуги</td>
                  <td>Размерность</td>
                  <td>Цена</td>
                </tr>
                <tr
                  class="bgctr"
                  :class="index % 2 === 0 ? 'bgwite' : 'bggray'"
                  v-for="(item, index) in newArr.main.prices"
                  :key="index"
                >
                  <td class="brdnone">{{ item.usluga }}</td>
                  <td class="brdnone">{{ item.size }}</td>
                  <td class="brdnone">{{ item.price }}</td>
                </tr>
              </table>
              
              <div class="tablewrapp">
                <div
                  v-for="(item, index) in newArr.main.prices"
                  :key="index"
                  class="mtable"
                >
                  <div class="mtable__tr">
                    <div class="mtable__title">Наименование услуги</div>
                    <div class="mtable__desck">{{ item.usluga }}</div>
                  </div>
                  <div class="mtable__tr">
                    <div class="mtable__title">
                      Размерность
                    </div>
                    <div class="mtable__desck">{{ item.size }}</div>
                  </div>
                  <div class="mtable__tr bordernone">
                    <div class="mtable__title">
                      Цена
                    </div>
                    <div class="mtable__desck">{{ item.price }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          v-html="this.newArr.main.content"
          class="serv-content"
        ></div>
      </section>

      <section class="main-section" v-if="template == 3" v-show="false">
        <h3 v-html="arrServ[0].title0"></h3>
        <p v-html="arrServ[0].desc"></p>
        <div class="central-row">
          <div class="central-row-text">
            <h4 v-html="arrServ[0].title1"></h4>
            <p v-html="arrServ[0].text1"></p>
            <ul>
              <li v-for="(item, index) in arrServ[0].list1" :key="index">
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="central-row-img">
            <img :src="arrServ[0].img" :alt="title" />
          </div>
        </div>
        <h5 v-html="arrServ[0].title2"></h5>
        <p v-html="arrServ[0].text2"></p>
        <div class="quote-block" v-if="quoting">
          <img src="/elements/main/quote.svg" :alt="element" />
          <p v-html="quoting"></p>
        </div>
        <h6 v-html="arrServ[0].title3"></h6>
        <ol>
          <li v-for="(item, index) in arrServ[0].list2" :key="index">
            {{ item.name }}
          </li>
        </ol>
      </section>
      <section v-if="$route.params.id == 'stroitelstvo-fundamenta-pod-klyuch'">
        <CalcGroundWork />
      </section>
      <section class="photo-section" v-if="template == 3" v-show="false">
        <h3>Посмотрите фото работ</h3>
        <img :src="arrServ[0].img" :alt="title" />
      </section>
    </div>
    <TablePrices
      v-if="$route.params.id == 'stroitelstvo-fundamenta-pod-klyuch'"
    ></TablePrices>
    <TableKrovlya v-if="$route.params.id == 'montazh-kryshi'"></TableKrovlya>
    <section class="price-section" v-if="template == 3" v-show="false">
      <div class="container">
        <h3>Стоимость работ</h3>
        <div class="price-block">
          <div class="price-block-class">
            <div
              class="price-block-class-item"
              :class="{ active: activeCategory == index }"
              v-for="(item, index) in arrServType"
              :key="index"
              @click="activeCategory = index"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="price-block-list">
            <div class="price-block-top-list">
              <div class="price-block-list-name">Название услуги</div>
              <div class="price-block-list-value">Стоимость:</div>
            </div>
            <div
              class="price-block-list-item"
              v-for="(item, index) in arrServType[activeCategory].child"
              :key="index"
            >
              <div class="price-block-list-name">
                {{ item.name }}
              </div>
              <div class="price-block-list-value">{{ item.price }} руб.</div>
            </div>
          </div>
        </div>
        <div class="btn-standart btn-work">Рассчитать стоимость работ</div>
      </div>
    </section>
    <div class="container">
      <div class="temp-content" v-if="!this.newArr.main.content">
        <span>Чтобы уточнить стоимость - свяжитесь с нами!</span>
      </div>
    </div>
    <div class="container" v-if="template == 3" v-show="false">
      <Calc :title="'Калькулятор расчета стоимости'" :typeH="'h3'" />
    </div>
    <section
      class="work-block"
      v-if="(template == 3 || template == 4) && worksArr.length > 0"
    >
      <div class="container">
        <h3>Наши работы</h3>
        <div class="work-row">
          <Work v-for="(item, index) in worksArr" :key="index" :item="item" />
        </div>
      </div>
    </section>
    <section class="uslugi-request">
      <Request :named="requestName" />
    </section>
  </div>
</template>

<script>
import Bredcrumbs from "~/components/breadcrumbs.vue";
import Servises from "~/components/servises.vue";
import Calc from "~/components/calculator.vue";
import CalcGroundWork from "~/components/calc-groundwork.vue";
import Work from "~/components/product.vue";
import Request from "~/components/request.vue";
import TablePrices from "~/components/tableprices.vue";
import TableKrovlya from "~/components/tablekrovlya.vue";
export default {
  components: {
    Bredcrumbs,
    Calc,
    Servises,
    Work,
    Request,
    CalcGroundWork,
    TablePrices,
    TableKrovlya,
  },

  data() {
    return {
      pagetitle:
        "СТРОЙ ВОСТОК: строительные и ремонтные услуги " +
        this.$store.state.inCity,
      title: "",
      seoTitle: "",
      description: "",
      activeCategory: 0,
      firstParent: [{ url: "/uslugi", name: "Услуги" }],
      secondParent: [{ url: "/", name: "" }],
      arrServ: [
        {
          link: "nazvanie_uslugi_1",
          title: "Название услуги 1",
          title0: "Заголовок h3",
          desc: 'Lorem ipsum dolor sit amet, <a href="#" class="">ссылка в тексте</a> elit. Varius sed <a href="#" class="hover-link">ссылка в тексте при наведении</a> habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus <a href="#" class="visited-link">ссылка в тексте уже открывалась</a> proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          img: "/elements/examp1.jpg",
          title1: "Заголовок h4",
          title2: "Заголовок h5",
          title3: "Заголовок h6",
          //'quote': 'Вот как-то так будет выглядеть цитата в тексте, если возникнет такая необходимость. Вот как-то так будет выглядеть цитата в тексте, если возникнет такая необходимость.Вот как-то так будет выглядеть цитата в тексте, если возникнет такая необходимость.',
          text1:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          text2:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          list1: [
            { name: "Маркерованный список" },
            { name: "Маркерованный список" },
            { name: "Маркерованный список" },
            { name: "Маркерованный список" },
            { name: "Маркерованный список" },
          ],
          list2: [
            { name: "Нумерованный список" },
            { name: "Нумерованный список" },
            { name: "Нумерованный список" },
            { name: "Нумерованный список" },
            { name: "Нумерованный список" },
          ],
        },
      ],
      arrServType: [
        {
          name: "Отделочные работы",
          active: true,
          child: [
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
          ],
        },
        {
          name: "Электромонтажные работы",
          active: false,
          child: [
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
          ],
        },
        {
          name: "Сантехнические работы",
          active: false,
          child: [
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
          ],
        },
        {
          name: "Столярные работы",
          active: false,
          child: [
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
          ],
        },
        {
          name: "Демонтажные работы",
          active: false,
          child: [
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
          ],
        },
        {
          name: "Прочие работы",
          active: false,
          child: [
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
            {
              name: "Демонтаж подвесного шкафа (тип - антресоль)",
              price: "1600",
            },
          ],
        },
      ],
      uriPage: "",
      template: 0,
      servArr: [],
      servDescription: "",
      servContent: "",
      isNuxtReady: false,
      showSub: "Да",
      worksArr: [],
      requestName: "",
    };
  },
  head() {
    return {
      title: this.newArr.main.seotitle
        ? this.newArr.main.seotitle + " " + this.$store.state.inCity
        : this.title + " СТРОЙ ВОСТОК " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.newArr.main.seodescription
            ? this.newArr.main.seodescription + " " + this.$store.state.inCity
            : this.title +
              " СТРОЙ ВОСТОК: строительные и ремонтные услуги " +
              this.$store.state.inCity,
        },
      ],
    };
  },
  async asyncData({ $axios, error, route, store }) {
    let lastPos = route.fullPath.lastIndexOf("/");
    let uriPage = encodeURI(route.fullPath.substr(lastPos + 1));
    // let query = route.query;
    let data = {
      url: uriPage,
    };
    return await $axios
      .$post(store.state.apiDomen + `/api/main/usluga.php`, data)
      .then((arr) => {
        return {
          newArr: arr,
        };
      })
      .catch((err) => {
        error(err);
      });
  },
  async mounted() {
    console.log(this.newArr);
    if (this.$store.state.ymInit == true) {
      ym(90648260, "hit", this.$route.path);
    }
    //this.title = this.arrServ[0].title
    //console.log(this.newArr)
    let lastPos = this.$route.fullPath.lastIndexOf("/");
    this.uriPage = encodeURI(this.$route.fullPath.substr(lastPos + 1));
    this.title = this.newArr.main.longtitle
      ? this.newArr.main.longtitle
      : this.newArr.main.pagetitle;
    this.template = this.newArr.main.template;
    this.servContent = this.newArr.main.content;
    this.requestName = this.newArr.main.quoting
      ? this.newArr.main.quoting
      : "Нужен ремонт<br>или строительство<br>дома?";
    //this.servArr = this.newArr.services.servArr
    if (this.template == 3 || this.template == 4) {
      //this.quoting = this.newArr.main.quoting
      this.servDescription = this.newArr.main.servDescription;
      this.secondParent[0].url = this.newArr.main.parent_url;
      this.secondParent[0].name = this.newArr.main.parent_name;
      this.worksArr = this.newArr.works;
      //console.log(this.secondParent)
    }
    if (this.template == 4) {
      let tempArr = [];
      this.showSub = this.newArr.main.show_sub;
      //let k = 0;
      for (var i = 0; i < this.newArr.services.servArr.length; i++) {
        if (this.newArr.services.servArr[i].id == this.newArr.main.id) {
          tempArr[0] = this.newArr.services.servArr[i];
        }
      }
      this.servArr = tempArr;
    }
    this.isNuxtReady = true;
  },

  methods: {
    selectActive(value) {
      this.arrCalcValue.height = value;
      this.openSelector = !this.openSelector;
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 42px;
  line-height: 50px;
  margin-top: 80px;
  margin-bottom: 60px;
  text-transform: uppercase;
  font-weight: 700;
}
h1.category-title {
  text-align: center;
}
.main-content {
  min-height: 436px;
}
.main-section h3 {
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.03em;
  color: #271717;
  margin-top: 0px;
  margin-bottom: 0px;
}
.main-section p {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #271717;
}
.main-section h4 {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.03em;
  color: #271717;
  margin-top: 0px;
  margin-bottom: 0px;
}
.central-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.central-row-text {
  width: calc(50% - 15px);
}
.central-row-img {
  width: calc(50% - 15px);
}
.central-row-img img {
  width: 100%;
}
.main-section h5 {
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 21px;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: #271717;
}
.main-section h6 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #271717;
  margin: 20px 0;
}
.photo-section {
  display: block;
}
.photo-section h3 {
  font-weight: 700;
  font-size: 42px;
  line-height: 50px;
  text-transform: uppercase;
  color: #271717;
  margin-top: 120px;
  margin-bottom: 60px;
  text-align: center;
}
.photo-section img {
  width: 100%;
}
.price-section {
  background: url(/elements/main/bg-3-test.png) center bottom no-repeat;
  padding-bottom: 60px;
  background-size: contain;
}
.price-section h3 {
  font-weight: 700;
  font-size: 42px;
  line-height: 50px;
  text-transform: uppercase;
  color: #271717;
  margin-top: 120px;
  margin-bottom: 60px;
  text-align: center;
}
.price-section .btn-work {
  width: fit-content;
  padding: 20px 40px;
  margin: 0 auto;
}
.price-block {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 60px;
  border-radius: 10px;
}
.price-block-class {
  width: 278px;
}
.price-block-list {
  width: calc(100% - 308px);
}
.price-block-class-item {
  font-size: 16px;
  line-height: 19px;
  color: #ff3f3f;
  padding: 19px 20px 19px 40px;
  background: #ffffff;
  position: relative;
  cursor: pointer;
}
.price-block-class-item span::before {
  content: ".";
  width: 10px;
  height: 10px;
  background: #ff3f3f;
  color: #ff3f3f;
  border-radius: 50%;
  margin-left: 10px;
  position: absolute;
  top: 24px;
  left: 10px;
  font-size: 0px;
}
.price-block-class-item.active span::before {
  background: #ffffff;
  color: #ffffff;
}
.price-block-class-item.active {
  background: #ff3f3f;
  color: #ffffff;
}
.price-block-list {
  background: #ffffff;
}
.price-block-list-item,
.price-block-top-list {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
}
.price-block-list-name {
  width: calc(100% - 205px);
}
.price-block-list-value {
  width: 205px;
}
.price-block-top-list .price-block-list-name,
.price-block-top-list .price-block-list-value {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #271717;
  padding: 20px;
  box-sizing: border-box;
}
.price-block-list-item .price-block-list-name,
.price-block-list-item .price-block-list-value {
  border-bottom: 1px solid #f9f9fa;
  font-size: 16px;
  line-height: 24px;
  color: #271717;
  padding: 20px;
  box-sizing: border-box;
}
.price-block-list-item:not(:last-child) .price-block-list-name {
  border-right: 1px solid #e6e9f9;
}
.price-block-class-item:first-child {
  border-radius: 10px 10px 0 0;
}
.price-block-class-item:last-child {
  border-radius: 0 0 10px 10px;
}
.temp-content span {
  font-size: 19px;
  line-height: 22px;
}
.temp-content {
  margin-bottom: 60px;
  /*min-height: 199px;*/
  box-sizing: border-box;
  /*height: 199px;*/
}
.serv-content {
  margin-bottom: 60px;
}

.work-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
.work-block h3 {
  letter-spacing: 0.03em;
  color: #271717;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
}
.uslugi-request {
  margin-bottom: 120px;
}
.table {
  margin-left: auto;
  margin-right: auto;
  border: none;
  border: collapse;
  margin-top: 2%;
  width: 100%;
}
.bgwhite {
  background-color: white;
}
.bggray {
  background-color: #f2f2f2;
}
.brdnone {
  border: none;
}
.bgcth {
  padding: 5%;
}
.bgcth {
  font-weight: bold;
}
.deskprice {
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 1px solid red;
  padding-bottom: 2%;
}
.tablewrapp{
  display: none;
}
    
@media (max-width: 900px) {
  .mtable__title{
    font-weight: bold;
  }
  .tablewrapp{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-top: 5%;
   flex-wrap: wrap;
   }
.mtable {
    display: block;
    border: 1px solid#ccc;
    margin-bottom: 2vw;
    WIDTH: 46%;
}
.mtable__tr {
    display: flex;
    padding: 1.5vw;
    border-bottom: 1px solid #ccc;
    margin-left: 1vw;
    margin-right: 1vw;
    font-family: sans-serif;
    justify-content: space-between;
    }
.mtable__desck{
  display: flex;
  flex-wrap: wrap;
}
.deskprice{
  line-height: 34px;
}
.table{
  display: none;
}
  .central-row-text,
  .central-row-img {
    width: 100%;
  }
  .price-block-class {
    width: 100%;
  }
  .price-block-list {
    width: 100%;
  }
  .temp-content {
    margin-bottom: 90px;
    min-height: 61px;
    height: unset;
  }
}
@media (max-width: 600px) {
  h1 {
    font-size: 22px;
    line-height: 29px;
    margin: 30px 0;
  }
  .main-section h3 {
    font-size: 20px;
    line-height: 24px;
  }
  .main-section p {
    font-size: 14px;
  }
  .main-section h4 {
    font-size: 18px;
    line-height: 22px;
  }
  .central-row-img {
    margin-top: 20px;
  }
  .main-section h5 {
    font-size: 18px;
    line-height: 22px;
  }
  .price-section h3 {
    font-size: 22px;
    line-height: 29px;
    margin: 60px 0 30px 0;
  }
  .price-block-top-list .price-block-list-name,
  .price-block-top-list .price-block-list-value {
    font-size: 16px;
    padding: 15px 10px;
  }
  .price-block-list-name {
    width: calc(100% - 106px);
  }
  .price-block-list-value {
    width: 106px;
  }
  .price-block-list-item .price-block-list-name,
  .price-block-list-item .price-block-list-value {
    font-size: 14px;
    padding: 10px;
  }
  .price-block-list-item .price-block-list-value {
    text-align: center;
    display: block;
  }
  .price-section {
    padding-bottom: 30px;
  }
  .price-block {
    margin-bottom: 30px;
  }
  .photo-section h3 {
    font-size: 22px;
    line-height: 29px;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .temp-content {
    margin-bottom: 20px;
    min-height: 41px;
    height: unset;
  }
  .work-block h3 {
    font-size: 20px;
    line-height: 24px;
  }
  .uslugi-request {
    margin-bottom: 60px;
  }
}
</style>
