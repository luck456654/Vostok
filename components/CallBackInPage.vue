<template>
<div>
<form action="" method="post" id="contacts_form" name="contacts_form" class="ajax_form incontent-form" v-if="currentCBP == 0">
    <div class="form-groop">
      <input type="text" id="af_name" name="name" value="" placeholder="Имя*:" v-bind:class="[isActive1 ? 'form-alert' : '']" v-model="cb_name" required/>
    </div>
    <div class="form-groop">
      <input type="tel" id="af_phone" name="phone" value="" placeholder="Телефон без +7*:"  v-bind:class="[isActive2 ? 'form-alert' : '']" v-model="cb_phone"  v-phoned required>
    </div>
    <div class="form-groop" style="min-height: 50px;">
      <button class="content-zakaz send-button" id="send" v-if="cb_phone.length >= 13&&cb_name" @click.prevent="sendForm()">Отправить</button>
      <button class="content-zakaz send-button send-fade" id="send2" @click.prevent="checkForm()" v-else >Отправить</button>
    </div>
    <input type="hidden" name="af_action" value="8c7c3d56e6d9983b4105d2e8a505ab7e" />
</form>
  <div v-if="currentCBP == 1">
    <span class="cb-info">Информация успешно отправлена! Мы скоро перезвоним Вам!</span>
  </div>
</div>
</template>

<style scoped>
.form-alert {
    box-shadow: 0px 0px 10px 0px #f90 inset;
}
.send-fade {
  color: #848484!important;
  background-color: #e6e6e6;
  border: 1px solid #848484;
}
.send-button{
    padding: 10px 40px;
    max-width: 270px;
    width: 100%;
}
input {
    width: 100%;
    padding: 2rem;
    margin-bottom: 1rem;
}
.cb-info{
  font-family: Proxima, Times;
  font-size: 18px;
  color: #fc7f01;}
@media (max-width: 500px){
  input {padding: 1rem;}
  .send-button {margin-top: 0;}
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
  data() {
     return {
    currentCBP: '0',
    cb_name:'',
    cb_phone:'',
    isActive1:false,
    isActive2:false,
     }
  },
    methods: {
      checkForm(){
        if (this.cb_name==''){
        this.isActive1=true;
        }
        else {
          this.isActive1=false;
        }
        if (this.cb_phone.length < 13){
        this.isActive2=true;
        }
         else {
          this.isActive2=false;
        }
      },
        sendForm() {
          this.currentCBP = 1;
          const data = {
            name: this.cb_name,
            phone: this.cb_phone,
            form: "cb",
          };
            this.$axios.post('https://стильный-камень.рф/ajax/shape_mail_test2.php', data)
              .then(response => (this.success = response.data.result))
              .catch(error => (this.success = error.response.data.result));
          },

        },
}
</script>
