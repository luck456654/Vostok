<template>
  <header>
    <div class="top-row">
      <div class="container">
        <div class="flex-between-row">
          <ul class="menu-block">
            <li v-for="(item,index) in menuArr" :key="index">
              <nuxt-link :to='$store.state.sityFolder + item.path'>
                <img :src="item.icon" :alt="item.name" v-if="item.icon">
                {{item.name}}
              </nuxt-link>
            </li>
          </ul>
          <div class="mail-block">
            <a href="mailto:info@stroivostok.ru">
              <img src="/elements/header/header-mail.svg" alt="E-mail">
              info@stroivostok.ru
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header-row">
      <div class="container">
        <div class="flex-between-row">
          <div class="logo-block">
            <nuxt-link :to="$store.state.sityFolder + '/'">
              <img src="/elements/header/logotype-2.svg" alt="Лого СТРОЙ ВОСТОК">
              <img src="/elements/header/logotype.svg" alt="Лого СТРОЙ ВОСТОК" v-if="false">
            </nuxt-link>
            <span>Строительные и ремонтные<br> работы {{$store.state.inCity}}</span>
          </div>
          <nuxt-link :to="$store.state.sityFolder + '/uslugi'" class="btn-standart btn-serv-block">
            <img src="/elements/header/btn-serv.svg" alt="Кнопка услуг">
            Наши услуги
          </nuxt-link>
          <div class="contact-block">
            <div class="status" v-if="timeR">
              <img src="/elements/header/online.svg" alt="Звоните или пишите мы сейчас работаем ">
              Звоните или пишите мы сейчас работаем
            </div>
            <div class="status" v-else>
              <img src="/elements/header/offline.png" alt="Звоните или пишите, мы перезвоним в рабочее время">
              Звоните или пишите, мы перезвоним в рабочее время
            </div>
            <div class="phone-row">
              <a href="tel:+79250975511" class="phone">
                <img src="/elements/header/phone-call.svg" alt="Phone">
                8 (925) 097-55-11
              </a>
              <a href="/" class="social">
                <img src="/elements/header/whatsapp.svg" alt="Whatsapp">
              </a>
              <a href="/" class="social">
                <img src="/elements/header/telegram.svg" alt="Telegram">
              </a>
              <a href="/" class="social">
                <img src="/elements/header/vk.svg" alt="VK">
              </a>
             </div>
          </div>
          <div class="mobile-btn-block">
            <div class="btn-callback-block  mobile-phone">
              <a href="tel:+79250975511" class="phone">
                <img src="/elements/header/phone-call.svg" alt="Phone">
              </a>
            </div>
            <div class="btn-callback-block desctop-phone" @click="showCallBack = !showCallBack">
              <span>Заказать звонок</span>
            </div>
            <div class="btn-callback-block mobile-menu" @click="showMobileMenu = !showMobileMenu">
              <img src="/elements/header/mobile-close-menu.svg" alt="Phone" v-if="showMobileMenu">
              <img src="/elements/header/mobile-menu.svg" alt="Phone" v-else>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-row" v-if="showMobileMenu">
      <ul>
        <li v-for="(item,index) in menuArr" :key="index" @click="showMobileMenu = !showMobileMenu">
          <nuxt-link :to='$store.state.sityFolder + item.path'>
            <img :src="item.icon" :alt="item.name" v-if="item.icon">
            {{item.name}}
          </nuxt-link>
        </li>
      </ul>
    </div>
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
              <div class="form-wrap" :class="{ 'has-error': reqModalName }">
                <input
                  class="form-input form-control-has-validation"
                  v-model="modalForm.name"
                  type="text"
                  name="name"
                  placeholder="Ваше имя:"
                /><span v-if="reqModalName" class="form-validation"
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
  </header>
</template>

<script>
import { VueMaskDirective } from "v-mask";
import Modal from "~/components/modal.vue";
export default {
  directives: { mask: VueMaskDirective },
  components: { Modal},
  data() {
    return {
      workTime:true,
      showCallBack:false,
      showMobileMenu:false,
      reqModalName: false,
      reqModalPhone: false,
      flag2:false,
      flag:true,
      menuArr: [
        {
          name: "О нас",
          path: "/about",
          icon:'',
        },
        {
          name: "Галерея работ",
          path: "/works",
          icon:'',
        },
        {
          name: "Отзывы",
          path: "/otzivi",
          icon:'',
        },
        {
          name: "Калькулятор работ",
          path: "/calc",
          icon:'/elements/header/header-calc.svg',
        },
        {
          name: "Контакты",
          path: "/contacts",
          icon:'',
        },
      ],
      modalForm:{name:'',phone:'',message:''}
    };
  },
  methods: {
    // изменение заголовка при скролле    sendModalForm(){
    async sendModalForm() {
      if(this.modalForm.phone.length==18&&this.modalForm.name){
        this.reqModalPhone = false;
        this.reqModalName = false;
        const mail = await this.$axios({
        url: this.$store.state.apiDomen +'/api/main/mail.php',
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
          this.reqModalName = true;
        }else{
          this.reqModalName = false;
        }
      }
    },
  },
  computed:{
    timeR(){
      let today = new Date();
      let hour = today.getUTCHours()//час по Гринвичу
      //console.log(hour)
      if (hour<6||hour>16){
        this.workTime = false;
      }else{
        this.workTime = true;
      }

      return this.workTime;
    }
  }
};
</script>

<style scoped>
.top-row{
  background: #f9f9fa;
  padding: 12px 0;
}
.menu-block{
  display:flex;
}
.menu-block li a,
.mail-block a{
  display: flex;
  align-items: center;
}
.menu-block li img,
.mail-block a img{
  margin-right: 8px;
}
.menu-block li:not(:first-child){
  padding-left: 60px;
}
.main-header-row{
  padding: 10px 0;
}
.logo-block{
  display: flex;
  align-items: center;
}
.logo-block img{
    margin-right: 15px;
    width: 190px;
}
.logo-block span{
  font-size: 16px;
  line-height: 20px;
  color: #5E5E5E;
}
.btn-serv-block:hover{
  opacity: 0.8;
}
.btn-callback-block{
  color: #FF3F3F;
  border: 2px solid #FF3F3F;
  border-radius: 7px;
  padding: 17px 20px;
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #FFFFFF;
  align-items: center;
  opacity: 1;
  cursor:pointer;
}
.btn-callback-block:hover{
  background: #FF3F3F;
  color: #FFFFFF;
  opacity: 0.8;
}
.contact-block .status{
    font-size: 15px;
    line-height: 18px;
    color: #5E5E5E;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.contact-block .status img{
  margin-right: 10px;
}
.phone-row{
  display: flex;
}
.phone-row .phone{
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  color: #271717;
  display: flex;
  align-items: center;
}
.phone-row .phone img{
  width: 18px;
  height: 18px;
  margin-right: 8px;
}
.phone-row .phone:hover{
  text-decoration: none;
}
.phone-row .social img{
  width: 29px;
  height: 30px;
  margin-left: 5px;
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
.btn-callback-block img{
    display: none;
}
.mobile-menu{
  display:none;
}
.mobile-btn-block{
  display: flex;
}
.bottom-row{
  display:none;
}
.desctop-phone{
  display:flex;
}
.mobile-phone{
  display:none;
}
@media (max-width: 1200px){
  .contact-block .status{
    display: none;
  }
  .phone-row {
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: 200px;
  }
  .btn-callback-block,
  .btn-standart{
    padding: 17px 10px;
    font-size: 14px;
  }
  .logo-block span {
    font-size: 14px;
  }
  .menu-block li:not(:first-child) {
    padding-left: 40px;
  }
}
@media (max-width: 900px){
  .logo-block span {
    display: none;
  }
  .contact-block{
    display: none;
  }
  .btn-callback-block,
  .btn-standart{
    padding: 17px 20px;
    font-size: 16px;
  }
  .menu-block li:not(:first-child) {
    padding-left: 40px;
  }
  .mail-block{
    display: none;
  }
  .menu-block li{
    font-size: 14px;
    line-height: 16px;
  }
  .mobile-phone{
    display:flex;
  }
  .btn-callback-block:hover {
    color: #FF3F3F;
    background: #FFFFFF;
    opacity: 0.8;
  }
  .btn-callback-block img{
    display: block;
    width: 24px;
  }
  .desctop-phone{
    margin-left: 20px;
  }
}
@media (max-width: 600px){
  .top-row{
    display: none;
  }
  .btn-callback-block{
    padding: 14px;
  }
  .btn-callback-block:hover {
    color: #FF3F3F;
    background: #FFFFFF;
    opacity: 0.8;
}
  .btn-callback-block span{
    display: none;
  }
  .mobile-menu{
    display:flex;
    margin-left: 10px;
  }
  .logo-block{
    order:0;
  }
  .mobile-btn-block{
    order:1;
  }
  .btn-standart{
    order:2;
    width: 100%;
    margin: 10px 0;
    text-align: center;
    display: block;
  }
  .btn-standart img{
        margin-right: 10px;
  }
  .bottom-row{
    display:block;
  }
  .bottom-row ul{
    padding: 0 10px;
  }
  .bottom-row ul li{
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }
  .bottom-row ul li:not(:last-child){
    border-bottom: 1px solid #ff3f3f;
  }
  .bottom-row ul li *{
    border:none;
  }
  .desctop-phone{
    display:none;
  }
  .mobile-phone{
    display:flex;
  }
}
@media (max-width: 330px){
  .logo-block {
    width: 50%;
  }
}
</style>
