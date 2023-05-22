<template>
  <div class="container">
        <div class="request-form">
          <div class="form-block">
            <h2>{{name}}</h2>
            <span>Оставьте заявку и мы предложим лучшую цену {{city}}</span>
            <div class="form">
              <div class="form-wrap" :class="{ 'has-error': reqFormPhone }">
                <input
                  class="form-input form-control-has-validation"
                  v-model="form.phone"
                  type="text"
                  name="name"
                  v-mask="'+7 (###) ###-##-##'"
                  placeholder="+7 (123) 456-78-89"
                /><span v-if="reqFormPhone" class="form-validation"
                  >Укажите телефон корректно!</span
                >
                <img src="/elements/form/form-phone-active.svg" class="input-icon" alt="icon" v-if="form.phone">
                <img src="/elements/form/form-phone-unactive.svg" class="input-icon" alt="icon" v-else>
              </div>
              <div class="form-wrap" :class="{ 'has-error': reqFormName }">
                <input
                  class="form-input form-control-has-validation"
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="Ваше имя:"
                /><span v-if="reqFormName" class="form-validation"
                  >Укажите имя!</span
                >
                <img src="/elements/form/form-user-active.svg" class="input-icon" alt="icon" v-if="form.name">
                <img src="/elements/form/form-user-unactive.svg" class="input-icon" alt="icon" v-else>
              </div>
              <div class="form-wrap">
                <textarea
                  class="form-input form-control-has-validation"
                  v-model="form.message"
                  type="text"
                  name="name"
                  placeholder="Сообщение"
                />
              </div>
              <div class="btn-standart btn-form" v-if="flag2">Отправляется</div>
              <div class="btn-standart btn-form" @click="sendForm()" v-else>Отправить заявку</div>
            </div>
          </div>
        </div>
       </div>
</template>

<script>
import { VueMaskDirective } from "v-mask";
export default {
  directives: { mask: VueMaskDirective },
  props: {
    name: String,
  },
  data() {
    return {
      form:{name:'',phone:'',message:''},
      reqFormPhone: false,
      reqFormName: false,
      flag2:false,
      city:''
    }
  },
   methods: {
    sendForm(){
      //console.log(this.form.phone.length);
      if(this.form.phone.length==18&&this.form.name){
        this.reqFormPhone = false;
        this.reqFormName = false;
        console.log('Условная отправка');
        console.log('Обнуление сообщения');
        this.flag2 = true;
        setTimeout(() => {
          this.form.name = '';
          this.form.phone = '';
          this.form.message = '';
          this.flag2 = false;
        }, 5000);
      }
      else{
        if(this.form.phone.length<18){
          this.reqFormPhone = true;
        }
        else{
          this.reqFormPhone = false;
        }
        if(!this.form.name){
          this.reqFormName = true;
        }else{
          this.reqFormName = false;
        }
      }
    }
  }
}
</script>
<style scoped>
.request-form{
  height:715px;
  background: url(/elements/main/bg-5-form.png) round round;
  filter: drop-shadow(0px 24px 44px rgba(0, 0, 0, 0.1));
  border-radius: 40px;
  background-size: cover;
}
.request-form .form-block{
  padding: 80px;
}
.request-form .form-block h2{
  text-align: left;
  font-size: 42px;
  line-height: 58px;
  margin-bottom: 20px;
  margin-top: 0px;
}
.form-block span{
  font-size: 16px;
  line-height: 19px;
  color: #271717;
}
.request-form .form{
  margin-top: 30px;
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
@media (max-width: 600px) {
  .request-form{
    background:none;
    background: url(/elements/main/bg-5-form-mobile-2.png) round round;
    background-size: cover;
    height: auto;
  }
  .request-form .form-block{
    padding: 10px 10px 248px 10px
  }
  .request-form .form-block h2{
    font-size: 22px;
    line-height: 29px;
    margin-top: 30px;
    text-align: center;
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
}
</style>
