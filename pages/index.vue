<template>
  <div>
    <section class="main-slider">
      <div class="container">
        <div class="gray-block">СТРОИМ и ремонтируем отличные ДОМА С 2005 ГОДА</div>
        <h1>Строительные<br> и ремонтные работы<br> {{$store.state.inCity}}</h1>
        <div class="items">
          <div class="item" v-for="(item,index) in mainSlider" :key="index">
            <img :src="item.icon" :alt="item.name">
            <div class="item-text">
              <title>{{item.name}}</title>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mouse">
        <nuxt-link :to="{path: $store.state.sityFolder , hash: '#worksblock'}" v-if="$store.state.sityFolder">
          <img src="/elements/main/mouse.svg" class="mouse-img" alt="icon">
        </nuxt-link>
        <nuxt-link :to="{path: '/' , hash: '#worksblock'}" v-else>
          <img src="/elements/main/mouse.svg" class="mouse-img" alt="icon">
        </nuxt-link>
      </div>
      <div class="right-btns">
        <div class="item" v-for="(item,index) in rightBtn" :key="index" @click="modalStatus(index)">
          <div class="item-img">
            <img :src="item.icon" :alt="item.name">
          </div>
           <title>{{item.name}}</title>
        </div>
      </div>
    </section>
    <img src="/elements/main/bg-main-mobile2.jpg" class="mobile-back-slider" alt="mobile-back-slider">
    <section class="main-works">
      <a name="worksblock" id="worksblock"></a>
      <div class="container" v-if="worksArr.length>0">
        <h2>Оцените наши работы</h2>
        <div class="work-row">
          <Work v-for="(item,index) in worksArr" :key="index" :item="item" :page="'main'" v-show="index<6" />
        </div>
        <nuxt-link :to=" $store.state.sityFolder + '/works'" class="btn-standart btn-work" v-if="worksArr.length>6">
            Показать больше работ
        </nuxt-link>
      </div>
    </section>
    <section class="main-services" v-if="servArr.length>0">
      <div class="container">
        <h2>Какие услуги мы оказываем</h2>
        <Servises :servArr="servArr" :type="'couple'" />
      </div>
    </section>
    <section class="main-reviews"  v-if="reviewsArr.length>0">
      <div class="container container-reviews">
        <div class="reviews-row">
          <div class="reviews-title">
            <h2>Посмотрите, что<br>говорят о нас<br>наши клиенты</h2>
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
            <nuxt-link :to="$store.state.sityFolder + '/otzivi'" class="btn-standart btn-reviews">
              Смотреть все отзывы
            </nuxt-link>
          </div>
          <div class="reviews-block">
            <Revue v-for="(item,index) in reviewsArr" :key="index" :item="item" :pages="'main'"  :title="item.name" v-show="index>=minIndex&&index<=maxIndex"/>
            <div class="btn-row">
              <div class="prev-btn" v-if="minIndex>0" @click="minIndex = minIndex - 1; maxIndex = maxIndex - 1">
                <svg class="icon icon-arrowLeft" viewBox="0 0 24 24" width="24px" height="24px"><title>Arrow Left</title><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path></svg>
              </div>
              <div class="prev-btn unactive" v-else>
                <svg class="icon icon-arrowLeft" viewBox="0 0 24 24" width="24px" height="24px"><title>Arrow Left</title><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill='#d8d9d7'></path></svg>
              </div>
              <div class="next-btn" v-if="maxIndex<reviewsArr.length - 1" @click="minIndex = minIndex + 1; maxIndex = maxIndex + 1">
                <svg class="icon icon-arrowRight" viewBox="0 0 24 24" width="24px" height="24px"><title>Arrow Right</title><path d="M0 0h24v24H0z" fill="none"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
              </div>
              <div class="next-btn unactive" v-else>
                <svg class="icon icon-arrowRight" viewBox="0 0 24 24" width="24px" height="24px"><title>Arrow Right</title><path d="M0 0h24v24H0z" fill="none"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill='#d8d9d7'></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-request">
      <Request :named="requestName" />
    </section>
    <section class="main-article">
      <div class="container">
      <h2>Услуги строительных и ремонтных работ</h2>
        <p>
          Наши специалисты выполнят ремонт квартир любой сложности – косметический, капитальный, евроремонт, дизайнерский. Для нас не существует не решаемых задач.
          С легкостью осуществим перепланировку, установим новые окна, сантехнику, электрику. Сделаем черновую и чистовую отделку. Осуществляем ремонт в новостройках,
          хрущевках, одна - и двухкомнатных квартирах.</p>
        <p>С каждым клиентом ведется индивидуальное сотрудничество:</p>
        <ul style="margin-top: 10px;">
          <li>подбираем и закупаем материалы;</li>
          <li>разрабатываем дизайн;</li>
          <li>консультируем;</li>
          <li>согласовываем перечень работ.</li>
        </ul>
        <p>Стоимость ремонта зависит от многих факторов. Если хотите получить детальную информацию, вам нужно только позвонить. Мы с легкостью ответим на все вопросы
          и выполним предварительные расчеты.</p>
        <p>  Заказать ремонт можно у нас в любой момент. Сразу отправим к вам специалиста для осмотра квартиры и составления сметы. Мы все сделаем под ключ и в
          строго оговоренные сроки. Вам останется только принять работу и произвести оплату. С нашей компанией вы гарантированно получаете уютное жилье с
          качественным ремонтом.</p>
        <p>При строительстве дома можно использовать ипотечные средства и материнский капитал.</p>
        <p>Широкий спектр услуг – наше основное преимущество. Мы в силах предоставить клиенту как отдельные виды работ, так и полный их комплекс в рамках одного
          или нескольких объектов.</p>
        <p>В услуги строительно-монтажной компании Строительство-Восток входит:</p>
        <div class="old-services-block" v-if="servArr.length>0">
          <div class="old-services-item" v-for="(item, index) in servArr" :key="index">
            <nuxt-link :to="$store.state.sityFolder + item.url" class="category-link">{{item.name}}</nuxt-link>
            <ul>
              <li v-for="(itm, idx) in item.childs" :key="idx">
                <nuxt-link :to="$store.state.sityFolder + itm.url">- {{itm.name}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <p>Если для вашего участка необходима установка септика, то мы рекомендуем перейти на сайт Септик-Восток, где представлен каталог септиков Термит и
          станций очистки Ergobox. В ассортименте от наших партнёров можно подобрать септик для любых индивидуальных нужд, а также заказать доставку и монтаж.</p>
        <div class="content-img-row">
          <img src="/elements/septic/logo1a.png" alt="Eurolos">
          <img src="/elements/septic/logo2.png" alt="Топол эко">
          <img src="/elements/septic/logo3a.png" alt="Garda">
          <img src="/elements/septic/logo4.png" alt="Волгарь">
          <img src="/elements/septic/logo5.png" alt="Юнилос">
        </div>
        <p>В услуги нашей ремонтно-строительной компании также входит сервисное обслуживание и поддержка помещений в рабочем состоянии и отделочные работы, такие
          как монтаж потолочных конструкций, шпатлёвка стен, стяжка пола и многие другие. Говоря простым языком, ваша фирма получает специального сотрудника на
          аутсорсе, следящим за состоянием электросетей, кондиционеров, мебели и других нюансов, которые могут нанести ущерб рабочему процессу и привести к
          некоторым издержкам. И все эти строительные услуги в доступном ценовом диапозоне. Стоимость работ зависит от индивидуальных пожеланий заказчика, может
          быть озвучена по телефону или при выезде на объект.</p>
      </div>
    </section>
    <Modal
      types="callback"
      :showModal="showCallBack"
      @closeModal="showCallBack = $event"
    >
      <template v-slot:header>
        <span class="modal-title">Заказать обратный звонок</span>
      </template>
      <template v-slot:body>
        <div class="modal-form">
          <div class="form-block">
            <div class="form">
              <div class="form-wrap" :class="{ 'has-error': reqModalPhone }">
                <input
                  class="form-input form-control-has-validation"
                  v-model="modalForm.phone"
                  type="text"
                  name="name"
                  v-mask="'+7 (###) ###-##-##'"
                  placeholder="+7 (123) 456-78-89"
                /><span v-if="reqModalPhone" class="form-validation"
                  >Укажите телефон корректно!</span
                >
                <img src="/elements/form/form-phone-active.svg" class="input-icon" alt="icon" v-if="modalForm.phone">
                <img src="/elements/form/form-phone-unactive.svg" class="input-icon" alt="icon" v-else>
              </div>
              <div class="form-wrap" :class="{ 'has-error': reqModallName }">
                <input
                  class="form-input form-control-has-validation"
                  v-model="modalForm.name"
                  type="text"
                  name="name"
                  placeholder="Ваше имя:"
                /><span v-if="reqModallName" class="form-validation"
                  >Укажите имя!</span
                >
                <img src="/elements/form/form-user-active.svg" class="input-icon" alt="icon" v-if="modalForm.name">
                <img src="/elements/form/form-user-unactive.svg" class="input-icon" alt="icon" v-else>
              </div>
              <div class="form-wrap">
                <textarea
                  class="form-input form-control-has-validation"
                  v-model="modalForm.message"
                  type="text"
                  name="name"
                  placeholder="Сообщение"
                />
              </div>
              <div class="btn-standart btn-form" v-if="flag2">Отправляется</div>
              <div class="btn-standart btn-form" @click="sendModalForm()" v-else>Заказать звонок</div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer> </template>
    </Modal>
    <Modal
      types="calc"
      :showModal="showCalc"
      @closeModal="showCalc = $event"
    >
      <template v-slot:header>
        <Calc :title="'Рассчитать стоимость'" :typeH="'h3'" />
      </template>
      <template v-slot:body>
      </template>
      <template v-slot:footer> </template>
    </Modal>
    <Modal
      types="master"
      :showModal="showMaster"
      @closeModal="showMaster = $event"
    >
      <template v-slot:header>
        <span class="modal-title">Вызвать мастера</span>
      </template>
      <template v-slot:body>
        <div class="master-form">
          <div class="form-block">
            <div class="form">
              <div class="form-wrap" :class="{ 'has-error': reqMasterPhone }">
                <input
                  class="form-input form-control-has-validation"
                  v-model="masterForm.phone"
                  type="text"
                  name="name"
                  v-mask="'+7 (###) ###-##-##'"
                  placeholder="+7 (123) 456-78-89"
                /><span v-if="reqMasterPhone" class="form-validation"
                  >Укажите телефон корректно!</span
                >
                <img src="/elements/form/form-phone-active.svg" class="input-icon" alt="icon" v-if="masterForm.phone">
                <img src="/elements/form/form-phone-unactive.svg" class="input-icon" alt="icon" v-else>
              </div>
              <div class="form-wrap" :class="{ 'has-error': reqMasterlName }">
                <input
                  class="form-input form-control-has-validation"
                  v-model="masterForm.name"
                  type="text"
                  name="name"
                  placeholder="Ваше имя:"
                /><span v-if="reqMasterlName" class="form-validation"
                  >Укажите имя!</span
                >
                <img src="/elements/form/form-user-active.svg" class="input-icon" alt="icon" v-if="masterForm.name">
                <img src="/elements/form/form-user-unactive.svg" class="input-icon" alt="icon" v-else>
              </div>
              <div class="form-wrap">
                <textarea
                  class="form-input form-control-has-validation"
                  v-model="masterForm.message"
                  type="text"
                  name="name"
                  placeholder="Сообщение"
                />
              </div>
              <div class="btn-standart btn-form" v-if="flag2">Отправляется</div>
              <div class="btn-standart btn-form" @click="sendMasterForm()" v-else>Вызвать мастера</div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer> </template>
    </Modal>
  </div>
</template>

<script>
import { VueMaskDirective } from "v-mask";
import Modal from "~/components/modal.vue";
import Work from "~/components/product.vue";
import Revue from "~/components/revue.vue";
import Calc from "~/components/calculator.vue";
import Servises from "~/components/servises.vue";
import Request from "~/components/request.vue";
export default {
  directives: { mask: VueMaskDirective },
  components: { Modal, Work, Revue, Calc, Servises, Request },
  head() {
    return {
      title: "Заказать качественных строителей " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "Строительство и ремонт объектов " + this.$store.state.inCity + '. Строго по смете, под ключ и в установленные сроки.',
        },
      ],
    };
  },
  data() {
    return {
      pagetitle: "СТРОЙ ВОСТОК: строительные и ремонтные работы " + this.$store.state.inCity,
      seoTitle: "",
      description: "",
      isNuxtReady: false,
      showCalc: false,
      showCallBack: false,
      showMaster: false,
      reqModalName: false,
      reqModalPhone: false,
      reqMasterlName: false,
      reqMasterPhone: false,
      requestName: 'Нужен ремонт<br>или строительство<br>дома?',
      //reqModalMessage: false,
      //reqFormPhone: false,
      //reqFormName: false,
      //reqFormMessage: false,
      flag:true,
      //flag2:false,
      mainSlider: [
        {
          name: "Контроль качества",
          desc: "Контролируем весь процесс строительства",
          icon: "/elements/main/ico-main-slider-1.svg",
        },
        {
          name: "Соблюдение сроков",
          desc: "Выполняем все работы точно в срок по договору",
          icon: "/elements/main/ico-main-slider-2.svg",
        },
        {
          name: "Работа по договору",
          desc: "Все нюансы строительства и сроки будут указаны в договоре",
          icon: "/elements/main/ico-main-slider-3.svg",
        },
        {
          name: "Консультирование",
          desc: "Подскажем как сделать лучше с профессиональной точки зрения",
          icon: "/elements/main/ico-main-slider-4.svg",
        },
        {
          name: "Личный подход",
          desc: "Подберем матеариалы исходя из Вашего бюджета",
          icon: "/elements/main/ico-main-slider-5.svg",
        },
        {
          name: "Гарантия качества",
          desc: "Мы гарантируем качественное исполнение своих работ",
          icon: "/elements/main/ico-main-slider-6.svg",
        },
      ],
      rightBtn: [
        {
          name: "Рассчитать стоимость",
          modal: "showCalc",
          icon: "/elements/main/right-1.svg",
        },
        {
          name: "Заказать звонок",
          modal: "showCallBack",
          icon: "/elements/main/right-2.svg",
        },
        {
          name: "Вызвать мастера",
          modal: "showMaster",
          icon: "/elements/main/right-3.svg",
        },
      ],
      minIndex:0,
      maxIndex:1,
     //form:{name:'',phone:'',message:''},
      modalForm:{name:'',phone:'',message:''},
      masterForm:{name:'',phone:'',message:''},
      reviews:{rate:4.6, count:35},
      /*worksArr:[],
      servArr:[],
      reviewsArr:[]*/
    }
  },
  async mounted() {
   //console.log(this.newArr)
    /*this.worksArr = this.newArr.works
    this.servArr = this.newArr.services.servArr
    this.reviewsArr = this.newArr.reviews*/
    this.isNuxtReady = true;
    if (this.$store.state.ymInit == true) {
      ym(90648260, "hit", this.$route.path);
    }
  },
  async asyncData({ $axios, error, store }) {
   // console.log(store.state.sityFolder)
    return await $axios
      .$get(
        store.state.apiDomen +
          `/api/main/main_page.php?city=` + store.state.sityFolder
      )
      .then((arr) => {
        return {
          newArr: arr,
          servArr: arr.services.servArr,
          reviewsArr: arr.reviews,
          worksArr: arr.works,
          cityN: arr.city
          //worksArr: arr.mainPageArr.worksArr,
          //servArr: arr.mainPageArr.servArr,
         //reviewsArr: arr.mainPageArr.reviewsArr
        };
      })
      .catch((err) => {
        error(err);
      });
  },
  methods: {
    async sendModalForm() {
      if(this.modalForm.phone.length==18&&this.modalForm.name){
        this.reqModalPhone = false;
        this.reqModallName = false;
        const mail = await this.$axios({
        url: this.$store.state.apiDomen + '/api/main/mail.php',
        method: 'POST',
        data: {
          name: this.modalForm.name,
          phone: this.modalForm.phone,
          message: this.modalForm.message,
          //email: this.email,
        }
        })
        .then((res) => {
          if(res.code != 2) {
          this.$toast.show('Ваше заявка отправлена. В скором времени с Вами свяжется наш менеджер.', {
            position: "top-center",
            duration: 5500,
            });
          }
          else {
              this.$toast.show('Заполните все поля.', {
              position: "top-center",
              duration: 3000,
              theme: "bubble",
              type: "error"
            });
          }

        })
        .catch((err) => {
            console.log(err)
        })
        this.flag2 = true;
        setTimeout(() => {
          this.modalForm.name = '';
          this.modalForm.phone = '';
          this.modalForm.message = '';
          this.flag2 = false;
        }, 5000);
      }
      else{
        if(this.modalForm.phone.length<18){
          this.reqModalPhone = true;
        }
        else{
          this.reqModalPhone = false;
        }
        if(!this.modalForm.name){
          this.reqModallName = true;
        }else{
          this.reqModallName = false;
        }
      }
    },
    async sendMasterForm(){
      //console.log(this.masterForm.phone.length);
      if(this.masterForm.phone.length==18&&this.masterForm.name){
        this.reqMasterPhone = false;
        this.reqMasterlName = false;
        const mail = await this.$axios({
        url: this.$store.state.apiDomen + '/api/main/mail.php',
        method: 'POST',
        data: {
          name: this.masterForm.name,
          phone: this.masterForm.phone,
          message: this.masterForm.message,
          //email: this.email,
        }
        })
        .then((res) => {
          if(res.code != 2) {
          this.$toast.show('Ваше заявка отправлена. В скором времени с Вами свяжется наш менеджер.', {
            position: "top-center",
            duration: 5500,
            });
          }
          else {
              this.$toast.show('Заполните все поля.', {
              position: "top-center",
              duration: 3000,
              theme: "bubble",
              type: "error"
            });
          }

        })
        .catch((err) => {
            console.log(err)
        })
        this.flag2 = true;
        setTimeout(() => {
          this.masterForm.name = '';
          this.masterForm.phone = '';
          this.masterForm.message = '';
          this.flag2 = false;
        }, 5000);
      }
      else{
        if(this.masterForm.phone.length<18){
          this.reqMasterPhone = true;
        }
        else{
          this.reqMasterPhone = false;
        }
        if(!this.masterForm.name){
          this.reqMasterlName = true;
        }else{
          this.reqMasterlName = false;
        }
      }
    },
    modalStatus(index) {
      if (index == 0 ){
        this.showCalc = !this.showCalc;
      }else if (index == 1 ){
        this.showCallBack = !this.showCallBack;
      }else if (index == 2 ){
        this.showMaster = !this.showMaster;
      }
    }
  }
}
</script>
<style scoped>
h1{
  font-weight: 700;
  text-transform: uppercase;
  color: #271717;
}
h2{
  font-weight: 700;
  font-size: 42px;
  line-height: 50px;
  text-transform: uppercase;
  color: #271717;
  text-align: center;
}

.right-btns {
  position: absolute;
  top: 171px;
  right: 0;
}
.right-btns .item{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px 5px;
  gap: 5px;
  width: 51px;
  height: 53px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 2px 0px 0px 2px;
  margin-bottom: 6px;
  cursor: pointer;
}
.right-btns .item-img{
  width: 100%;
  height: 30px;
  display: flex;
}
.right-btns .item-img img{
  margin: auto;
}
.right-btns .item title{
  display:block;
  font-size: 8px;
  line-height: 8px;
  text-align: center;
  letter-spacing: 0.07em;
  color: #271717;
}
.main-works h2{
  margin-bottom: 60px;
  margin-top: 60px;
}
.work-row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.btn-work {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.main-services{
  background: url(/elements/main/bg-3-test.png) round round;
}
.main-services h2{
  margin: 120px 0 60px 0;
}
.reviews-row{
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 80px);
  justify-content: space-between;
}
.reviews-title{
  width: 422px;
}
.reviews-title h2{
  text-align: left;
  margin-top: 30px;
  margin-bottom: 30px;
}
.btn-reviews{
  text-align: center;
  width: 213px;
  display: block;
  color: #FF3F3F;
  background: #fff;
  margin-top: 90px;
}
.btn-reviews:hover{
  background: #FF3F3F;
  color: #fff;
  opacity: 1;
}
.yandex-widjet{
  padding: 30px 35px;
  display: flex;
  margin-bottom: 60px;
}
.yandex-main{
  padding-left: 20px;
}
.yandex-main .star-row{
  margin-bottom: 10px;
}
.yandex-main .star-row img{
  margin-right: 8px;
}
.yandex-main span.count{
  font-size: 18px;
  line-height: 22px;
  color: #C4C4C4;
}
.yandex-main span.rate{
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #271717;
}
.reviews-block{
  display: flex;
  position: relative;
  width: calc(100% - 482px);
}
.hooper-list{
  display: flex;
  width: 100%;
}
.hooper-list ul{
  overflow: hidden;
  transform: translate(0px, 0px);
  width: 100%;
  display: block;
  height: 450px;
}
.hooper-list ul li{
  width: 404px;
  float: right;
}
.next-btn,
.prev-btn {
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
}
.next-btn.unactive,
.prev-btn.unactive{
  cursor: default;
}
.prev-btn{
  position: absolute;
  top: 120px;
  left: -25px;
}
.next-btn{
  position: absolute;
  top: 120px;
  right: -20px;
}

.main-request{
  background: url(/elements/main/bg-5-test.png) round round;
  padding: 60px 0;
}
.form-block span{
  font-size: 16px;
  line-height: 19px;
  color: #271717;
}
.form-wrap{
  position: relative;
}
.form-block input {
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 43px;
  width: 100%;
  max-width: 422px;
  background: #FFFFFF;
  border: 1px solid #DBDDDF;
  border-radius: 8px;
  font-size: 14px;
  line-height: 17px;
  color: #271717;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.form-block textarea {
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 20px;
  width: 100%;
  max-width: 422px;
  background: #FFFFFF;
  border: 1px solid #DBDDDF;
  border-radius: 8px;
  font-size: 14px;
  line-height: 17px;
  color: #271717;
  margin-bottom: 10px;
  height: 110px;
  resize: none;
  box-sizing: border-box;
}
.form-block input::placeholder,
.form-block textarea::placeholder{
  color: #B0B0B0;
}
.form-block .input-icon{
  position: absolute;
  top: 23px;
  left: 20px;
}
.btn-form{
  max-width: 422px;
  box-sizing: border-box;
  text-align: center;
  display: block;
}
.form-validation{
  color: #ff3f3f!important;
  margin-bottom: 10px;
  display: block;
}
.has-error input{
  border: 1px solid #ff3f3f;
}
.mobile-back-slider{
  display: none;
}
.main-article{
  margin-bottom: 120px;
}
.main-article h2{
  padding:0;
}
.old-services-block{
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.old-services-item{
  padding: 10px 15px;
  background: #e8e8e8;
  border-radius: 4px;
  margin-bottom: 30px;
  width: calc(33.3333% - 20px);
  box-sizing: border-box;
}
.old-services-item .category-link{
  font-weight: 600;
  color: #333;
}
.old-services-item ul {
  margin-top: 5px;
}
.old-services-item ul li{
  margin-bottom: 5px;
  display: block;
}
@media (max-width: 1450px) {
  .reviews-row {
    width: 100%;
  }
}
@media (max-width: 1100px) {
  .reviews-title{
    width: 100%;
    margin-bottom: 25px;
  }
  .reviews-block {
    width: 100%;
  }
  .reviews-row {
    width: 100%;
  }
  .reviews-title h2 {
    text-align: center;
  }
  .yandex-widjet {
    width: fit-content;
    margin: 0 auto;
  }
  .btn-reviews {
    width: 213px;
    margin: 0 auto;
  }
  .old-services-item{
    width: calc(50% - 15px);
  }
}
@media (max-width: 600px) {

  h1{
    font-size: 26px;
    line-height: 42px;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  .right-btns {
    display: none;
  }

  .mobile-back-slider{
    display: block;
    width: 100%;
  }
  .main-works h2 {
    margin: 60px 0 30px 0;
    font-size: 22px;
    line-height: 29px;
  }
  .work-row{
    margin-bottom: 20px;
  }
  .btn-work {
    font-size: 13px;
    line-height: 16px;
    padding: 20px 40px;
  }
  .main-services h2{
    margin: 60px 0 30px 0;
    font-size: 22px;
    line-height: 29px;
  }
  .main-services{
    background: #fff;
  }
  .reviews-title h2 {
    font-size: 22px;
    line-height: 29px;
    text-align: center;
  }
  .reviews-block {
    flex-wrap: wrap;
  }
  .prev-btn {
    bottom: -15px;
    top: unset;
    left: calc(50% - 40px);
  }
  .next-btn {
    bottom: -15px;
    top: unset;
    right: calc(50% - 40px);
  }
  .main-request {
    padding: 30px 0;
    background:none;
  }
  .form-block span {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    display: block;
  }
  .form-block input {
    max-width: 100%;
  }
  .form-block textarea {
    max-width: 100%;
  }
  .btn-form {
    max-width: 100%;
  }
  .main-article{
    margin-bottom: 60px;
  }
  .old-services-item{
    width: 100%;
  }
  .main-article h2{
    font-size: 22px;
    line-height: 29px;
  }
}
</style>
