<template>
  <div class="fixed-overlay">
    <div class="form-zakaz-kamen">
        <form class="form-message" id="my-zakaz-form" v-if="send==0">
          <span class="close-form-kamen" @click="close()">
            X
          </span>
          <h3>Форма обратной связи</h3>
          <input id="name2" type="text" placeholder="Ваше имя*" class="form-control zakaz-name" v-bind:class="[isActive1 ? 'form-alert' : '']" v-model="name" required>
          <input id="phone2" type="text" placeholder="Ваш телефон*" class="form-control zakaz-phone" v-bind:class="[isActive2 ? 'form-alert' : '']" v-model="phone" v-phoned required>
          <input id="email2" type="text" placeholder="Ваш эл. адрес" class="form-control zakaz-mail" v-model="mail">
          <label style="color:black;font-size:12px;font-weight:normal;line-height: 24px;">
            <input style="position:relative;top:3px;" type="checkbox"  v-bind:class="[isActive3 ? 'form-alert' : '']" v-model="checked">
            Я ознакомился (ознакомилась) с
            <a style="color:black;text-decoration:underline;font-weight: normal;line-height: 24px;}" rel="nofollow" href="https://стильный-камень.рф/политика-конфенденциальности.html">политикой конфиденциальности</a>
             и согласен (согласна) на обработку персональных данных
          </label>
          <span @click.prevent="sendForm()" class="button-zakaz" id="send2" v-if="name&&phone.length>=13&&checked">ЗАКАЗАТЬ</span>
          <span @click.prevent="checkForm()" class="button-zakaz" id="send2" v-else>ЗАКАЗАТЬ</span>
        </form>
        <form class="form-message" v-if="send==1">
          <span class="close-form-kamen" @click="close()">
            X
          </span>
          <span class="send-span">Ваша заявка принята. Наш менеджер обязательно с Вами свяжется. Спасибо.</span>
        </form>
    </div>
  </div>
</template>
<style scoped>
.fixed-overlay {
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 11;
}
.form-zakaz-kamen {
  position: absolute;
    background: white;
    border: 1px solid black;
    top: 100px;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    width: 94%;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    max-width: 300px;
    left: 50%;
    margin-left: -150px;
    z-index: 10;
    color: black;
}
.form-zakaz-kamen form  {border:none}
.close-form-kamen {
    cursor: pointer;
    float: right;
    color: black;
    transform: scaleX(1.5);
    font-size: 1rem;
    font-weight: 600;
    top: -5px;
    position: relative;
}
.form-zakaz-kamen input {
    margin-bottom: 5px;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.button-zakaz {
    background: #f0ad4e;
    padding: 10px;
    border-radius: 5px;
    color: white;
    width: 75px;
    cursor: pointer;
    margin-top: 5px;
    float: right;
    font-size: 14px;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
}
.form-alert {box-shadow: 0px 0px 10px 0px #f90 inset;}
.send-span {
    display: block;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 20px;
    padding-right: 20px;
    height: 300px;
    font-size: 19px;
  }
</style>

<script>
export default {
  directives: {
      phoned: {
        // определение директивы
        bind(el) {
            el.oninput = function(e) {
              if (!e.isTrusted) {
                return;
              }
              let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,5})/);
              this.value = !x[2] ? x[1] :'(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
              el.dispatchEvent(new Event('input'));
        }
      }
  }
},
  data: function () {
        return {
            showSend:false,
            errors: [],
            name:'',
            phone:'',
            mail:'',
            checked:false,
            isActive1:false,
            isActive2:false,
            isActive3:false,
            send:0,
        }
    },
  methods: {
      close() {
        this.$emit('close');
      },
       checkForm() {
        if (this.name==''){
        this.isActive1=true;
        }
        else {
          this.isActive1=false;
        }
        if (this.phone==''){
        this.isActive2=true;
        }
         else {
          this.isActive2=false;
        }
         if (this.checked==false){
        this.isActive3=true;
        }
         else {
          this.isActive3=false;
        }
      },
       async sendForm(){
         this.send=1;
          const params ={
                      name: this.name,
                      phone: this.phone,
                      mail:this.mail,
                    };
          const  data = await this.$axios.post('https://стильный-камень.рф/api/mail_vue.php',
          params)
                .then(response => (this.success = response.data.result))
                .catch(error => (this.success = error.response.data.result));
       },
  },
}
</script>
