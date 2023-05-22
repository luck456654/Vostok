<template>
    <section class="calc-section">
      <div class="calc-block">
        <div class="calc-block-item" v-for="(item,index) in arrCalc" :key="index">
          <div class="calc-block-name">
            <div class="number"><span>{{item.id}}</span></div>
            <div class="title">{{item.name}}</div>
          </div>
          <div class="calc-block-value" v-if="item.type == 'selectBtn'">
             <div class="btn-row">
                <btn class="btn-item" :class="{active : itm2.active}" v-for="(itm2,idx2) in item.child" :key="idx2" @click="changeBtn(index,idx2)">
                  {{itm2.name}}
                </btn>
              </div>
            <span class="description">{{item.desc}}</span>
          </div>
          <div class="calc-block-value" v-if="item.type == 'inputs'">
            <div class="input_block">
                <input type="text" v-model="arrCalc[index].value" class="normal" @input="changeBtn(index,idx2)" placeholder="Площадь дома в м2">
            </div>
          </div>
         <!-- <div class="calc-block-value" v-if="item.type == 'multiBlock'">
            <div class="item-substring">
              <span class="title">Количество комнат:</span>
              <div class="btn-row">
                <btn class="btn-item" :class="{active : itm2.active}" v-for="(itm2,idx2) in item.child" :key="idx2" @click="changeBtn(index,idx2)">
                  {{itm2.name}}
                </btn>
              </div>
            </div>
            <div class="item-substring">
              <span class="title">Общая площадь, м<sub>2</sub></span>
              <input
                class="normal"
                type="number"
                placeholder=""
                v-model="arrCalcValue.size"
              />
            </div>
            <div class="item-substring">
              <span class="title">Высота потолков, м</span>
              <div>
                <input
                  class="psevdo-select"
                  type="text"
                  placeholder="Выбрать высоту"
                  v-model="arrCalcValue.height"
                  @click="openSelectorH = !openSelectorH"
                />
                <span class="icon-arrow" :class="{ active: openSelectorH }">
                  <img
                    src="/elements/arr2down.svg"
                    alt="arr"
                    class="arr"
                  />
                </span>
              </div>
              <transition name="slide">
                <ul class="psevdo-selector" v-if="openSelectorH">
                  <li
                    v-for="(itm, idx) in arrCalc[5].heightSelector"
                    :key="idx"
                    :class='{active: itm.value==arrCalcValue.height}'
                    @click="selectActive(itm.value)"
                  >
                   {{ itm.value }}
                  </li>
                </ul>
              </transition>
            </div>
          </div> -->
        </div>
      </div>
      <div class="calc-block-form">
        <div class="calc-form">
          <h3 v-show="false">Предварительный расчет</h3>
          <h3>Узнать стоимость работ</h3>
          <div class="form-row" v-show="false">
            <div class="form-item">
              <div class="item-name">
                Ориентировочная стоимость работ:
              </div>
              <div class="item-value">
                320 000 руб
              </div>
            </div>
            <div class="form-item">
              <div class="item-name">
                Ориентировочная стоимость черновых материалов:
              </div>
              <div class="item-value">
                320 000 руб
              </div>
            </div>
            <div class="form-item">
              <div class="item-name">
                ИТОГО:
              </div>
              <div class="item-value">
                640 000 руб
              </div>
            </div>
          </div>
           <div class="form-row-temp">
             <div class="form-block">
                <div class="form">
                  <div class="form-wrap" :class="{ 'has-error': reqMail }">
                    <input
                      class="form-input form-control-has-validation"
                      v-model="form.email"
                      type="mail"
                      name="name"
                      placeholder="Ваш email:"
                    /><span v-if="reqMail" class="form-validation"
                      >Укажите email!</span
                    >
                    <img src="/elements/form/form-mail-active.svg" class="input-icon" alt="icon" v-if="form.email">
                    <img src="/elements/form/form-mail-unactive.svg" class="input-icon" alt="icon" v-else>
                  </div>
                  <div class="form-wrap">
                    <input
                      class="form-input form-control-has-validation"
                      v-model="form.phone"
                      type="text"
                      name="name"
                      v-mask="'+7 (###) ###-##-##'"
                      placeholder="+7 (123) 456-78-89"
                    />
                    <img src="/elements/form/form-phone-active.svg" class="input-icon" alt="icon" v-if="form.phone">
                    <img src="/elements/form/form-phone-unactive.svg" class="input-icon" alt="icon" v-else>
                  </div>
                  <div class="status-block">
                    <span v-if="sended">Предварительная заявка на уточнение стоимости отправлена!  Мы свяжемся с вами в ближайшее время!</span>
                    <span v-else>Укажите email  и мы свяжемся с вами и уточним стоимость!</span>
                  </div>
                  <div class="btn-standart btn-form" v-if="flag2">Отправляется</div>
                  <div class="btn-standart btn-form" @click="sendform()" v-else>Отправить</div>
                </div>
              </div>
           </div>
          <div v-show="false" class="btn-standart btn-form">Вызвать замерщика для 100%<br> оценки стоимости</div>
        </div>
      </div>
    </section>
</template>
<script>
import { VueMaskDirective } from "v-mask";
export default {
directives: { mask: VueMaskDirective },
props: {
  title: String,
  typeH: String,
},
data() {
  return {
    flag2: false,
    arrCalc:[
      {
        id:'01',
        name:'Выберите тип фундамента',
        type:'selectBtn',
        desc:'',
        child:[
          {name:'Ленточный' ,active:false},
          {name:'Монолитный' ,active:false},
          {name:'Ленточно-монолитный' ,active:false},
          {name:'Нужен совет' ,active:false},
        ]
      },
      {
        id:'02',
        name:'Площадь основания дома',
        type:'inputs',
        desc:'Укажите площадь всего дома',
        value: '',
        child:[
          {name:'Площадь дома, в м2' , active:false},
          {name:'Затрудняюсь подсчитать' ,active:false},
        ]
      },
      {
        id:'03',
        name:'Подготовка под фундамент',
        type:'selectBtn',
        desc:'В зависимости от грунта и типа фундамента потребуются определенные работы по подготовке фундамента',
        child:[
          {name:'Требуется' ,active:false},
          {name:'Не требуется' ,active:false},
          {name:'Нужен совет' ,active:false},  
        ]
      },
      {
        id:'04',
        name:'Гидроизоляция фундамента',
        type:'selectBtn',
        desc:'Гидроизоляция фундамента позволит существенно повысить срок его жизни.',
        child:[
          {name:'Требуется' ,active:false},
          {name:'Не требуется' ,active:false},
          {name:'Нужен совет' ,active:false},  
        ]
      },
      {
        id:'05',
        name:'Утепление фундамента',
        type:'selectBtn',
        desc:'Фундамент как и все остальные элементы дома несет в себе теплопотери. Утепление фундамента способствуют их снижению.',
        child:[
          {name:'Требуется' ,active:false},
          {name:'Не требуется' ,active:false},
          {name:'Нужен совет' ,active:false},  
        ]
      },
      {
        id:'06',
        name:'Закладные под фундамент',
        type:'selectBtn',
        desc:'Через фундамент можно провести несколько инженерных систем: канализация, водопровод, вентиляция погреба, электричество.',
        child:[
          {name:'Требуется' ,active:false},
          {name:'Не требуется' ,active:false},
          {name:'Нужен совет' ,active:false},  
        ]
      },
     
    ],
    arrCalcValue:{
      param1:'', // Тип фундамента
      param2:'', // Площадь дома
      param3:'', // Подготовка под фундамент
      param4:'', // Гидроизоляция фнудамента
      param5:'', // Утепление фундамента
      param6:'', // Закладные под фундамент
      param7:'', // Внешняя отделка
      param8:'',
      param9:'',
      param10: ''
    },
    form:{email:'',phone:''},
    reqMail: false,
    sended: false,
    openSelectorH: false,
  }
},
methods: {
  changeBtn(val1,val2){
    switch (val1) {
      case 0:
        for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue.param1 = this.arrCalc[val1].child[val2].name;
      break;
      case 1:
        this.arrCalcValue.param2 = this.arrCalc[val1].value;
      break;
      case 2:
        for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue.param3 = this.arrCalc[val1].child[val2].name;
      break;
      case 3:
        for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue.param4 = this.arrCalc[val1].child[val2].name;
      break;
      case 4:
        for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue.param5 = this.arrCalc[val1].child[val2].name;
      break;
      case 5:
        for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue.param6 = this.arrCalc[val1].child[val2].name;
        break;
      case 6:
        for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue.param7 = this.arrCalc[val1].child[val2].name;
      break;
      case 7:
        for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue.param8 = this.arrCalc[val1].child[val2].name;
      break;
      default:
      break;
    }
    /*for (let i = 0; i < this.arrCalc[val1].child.length; ++i) {
          this.arrCalc[val1].child[i].active = false;
        }
        this.arrCalc[val1].child[val2].active = true;
        this.arrCalcValue[val1] = this.arrCalc[val1].child[val2].name;*/
  },

  resetBtn(){
    for (let i = 0; i < this.arrCalc.length; ++i) {
      for (let j = 0; j < this.arrCalc[i].child.length; ++j) {
        this.arrCalc[i].child[j].active = false;
      }
       this.arrCalc[i].child[0].active = true;
    }

  },
  async sendform(){
    console.log(this.arrCalcValue   )
    if(this.form.email){
      this.reqMail = false;
      const mail = await this.$axios({
      url: this.$store.state.apiDomen + '/api/main/mail/calcHouse.php',
      method: 'POST',
      data: {
        groundwork: true,
        phone: this.form.phone,
        email: this.form.email,
        param1: this.arrCalcValue.param1,
        param2: this.arrCalcValue.param2,
        param3: this.arrCalcValue.param3,
        param4: this.arrCalcValue.param4,
        param5: this.arrCalcValue.param5,
        param6: this.arrCalcValue.param6,
        param7: this.arrCalcValue.param7,
        param8: this.arrCalcValue.param8,
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
      this.sended = true;
      setTimeout(() => {
        this.form.email = '';
        this.form.phone = '';
        this.flag2 = false;
        this.arrCalcValue.homeType = 'Новостройка';
        this.arrCalcValue.renovationType = 'Черновой';
        this.arrCalcValue.dismantling = 'Да';
        this.arrCalcValue.alignment = 'Да';
        this.arrCalcValue.replanning = 'Да';
        //this.arrCalcValue.dismantling2 = 'Да';
        this.arrCalcValue.rooms = '1';
        this.arrCalcValue.size = '';
        this.arrCalcValue.height = '3';
        this.resetBtn();
      }, 5000);
    }
    else{
      if(!this.form.email){
        this.reqMail = true;
      }else{
        this.reqMail = false;
      }
    }
  },
  selectActive(value){
    this.arrCalcValue.height = value;
    this.openSelectorH = !this.openSelectorH;
  },
}
}
</script>
<style scoped>
.input_block input {
    background: #FFFFFF;
    border: 1px solid #dbdddf;
    border-radius: 4px;
    padding: 12px 10px;
    width: 150px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
    color: #271717;
}
.calc-section h3,
.calc-section h1{
font-weight: 700;
font-size: 42px;
line-height: 50px;
text-transform: uppercase;
color: #271717;
margin-top: 120px;
margin-bottom: 60px;
text-align: center;
}
.calc-block-item{
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: flex-start;
margin-bottom: 40px;
}
.calc-block-name{
width: 483px;
display: flex;
align-items: center;
}
.calc-block-value{
width: calc(100% - 513px);
position: relative;
}
.calc-block-name .number{
background: #FFFFFF;
border: 2px solid #FF3F3F;
width: 73px;
height: 73px;
border-radius: 50%;
display: flex;
margin-right: 30px;
box-sizing: border-box;
}
.calc-block-name .number span{
margin: auto;
font-weight: 700;
font-size: 28px;
line-height: 34px;
color: #FF3F3F;
}
.calc-block-name .title{
font-weight: 700;
font-size: 21px;
line-height: 25px;
color: #271717;
}
.calc-block-value .description{
font-size: 14px;
line-height: 20px;
color: #B0B0B0;
}
.calc-block-value .btn-row {
display: flex;
flex-wrap: wrap;
margin-bottom: 20px;
}
.calc-block-value .btn-item{
margin-bottom: 5px;
font-size: 16px;
line-height: 19px;
color: #FF3F3F;
border: 1px solid #FF3F3F;
background: #fff;
border-radius: 4px;
padding: 10px;
margin-right: 20px;
cursor: pointer;
box-sizing: border-box;
}
.calc-block-value .btn-item.active{
background: #FF3F3F;
color: #fff;
}
.calc-block-value .item-substring{
display: flex;
align-items: center;
margin-bottom: 20px;
position: relative;
width: fit-content;
}
.calc-block-value .item-substring .btn-row{
margin-bottom: 0;
}
.calc-block-value .item-substring .btn-item{
margin-right: 10px;
}
.calc-block-value .item-substring .title{
font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-right: 20px;
position: relative;
}
.calc-block-value .item-substring .title sub{
vertical-align: middle;
position: absolute;
bottom: 20%;
}
.calc-block-value .item-substring input{
background: #FFFFFF;
border: 1px solid #F9F9FA;
border-radius: 4px;
padding: 12px 10px;
width: 150px;
height: 40px;
font-size: 13px;
line-height: 16px;
color: #271717;
}
.calc-block-value .item-substring input[type="number"]::-webkit-outer-spin-button,
.calc-block-value .item-substring input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.calc-block-value .item-substring input[type='number'],
.calc-block-value .item-substring input[type="number"]:hover,
.calc-block-value .item-substring input[type="number"]:focus {
  appearance: none;
  -moz-appearance: textfield;
}
.item-substring .icon-arrow{
position: absolute;
right: 15px;
top: 23px;
cursor: pointer;
}
.psevdo-select{
width: 40px!important;
cursor: pointer;
}
.calc-block-value .psevdo-selector{
border: 1px solid #333;
left: 168px;
position: absolute;
width: 150px;
border-radius: 6px;
padding: 10px;
background: #fff;
cursor: pointer;
z-index:7;
}
.calc-block-value .psevdo-selector li.active{
color: #FF3F3F;
}
.calc-block-form{
background: url(/elements/main/calc-form.png) center bottom no-repeat;
padding: 60px;
background-size: contain;
margin-bottom: 127px;
}
.calc-section .calc-form h3 {
margin-top: 0px;
margin-bottom: 40px;
text-align: left;
}
.form-row{
margin-bottom: 30px;
}
.form-row .form-item{
display: flex;
align-items: center;
justify-content: space-between;
width: 507px;
padding: 20px 0;
}
.form-row .form-item:not(:first-child){
border-top: 1px solid #FF3F3F;
}
.form-row .form-item .item-name{
font-size: 16px;
line-height: 24px;
color: #271717;
max-width: 280px;
}
.form-row .form-item .item-value{
font-weight: 700;
font-size: 28px;
line-height: 20px;
color: #271717;
}
.form-row .form-item:last-child .item-name{
font-weight: 700;
font-size: 32px;
line-height: 24px;
color: #FF3F3F;
}
.form-row .form-item:last-child .item-value{
color: #FF3F3F;
}
.calc-section .calc-form .btn-form{
padding: 10px;
width: 302px;
text-align: center;
display: block;
}
.form-row-temp input {
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
.form-row-temp .input-icon {
position: absolute;
top: 23px;
left: 20px;
}
.form-wrap{
position: relative;
}
.status-block{
width:50%;
}
.status-block span{
display: block;
margin-bottom: 20px;
margin-top: 20px;
font-size: 19px;
line-height: 23px;
}
@media (max-width: 1100px){
.calc-block-item {
  display: block;
}
.calc-block-name {
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
.calc-block-value {
  width: 570px;
  margin-left: auto;
  margin-right: auto;
}
}
@media (max-width: 900px){
.form-row .form-item {
  width: 400px;
}
.form-row .form-item .item-name {
  font-size: 14px;
  line-height: 20px;
  max-width: 200px;
}
.form-row .form-item .item-value {
  font-size: 20px;
  line-height: 20px;
}
.calc-block-form {
  padding: 20px;
}
.calc-section h3,
.calc-section h1 {
  font-size: 32px;
  line-height: 40px;
}
}
@media (max-width: 600px){
.calc-block-value {
  width: 100%;
}
.calc-block-name {
  margin: 0 0 30px 0;
  width: 100%;
}
.calc-block-name .title {
  font-size: 18px;
  line-height: 22px;
}
.calc-block-name .number {
  margin-right: 15px;
}
.calc-block-value .btn-row {
  justify-content: space-between;
}
.calc-block-item .calc-block-value .btn-item {
  width: calc(50% - 5px);
  margin-right: 0;
  text-align: center;
  display: block;
}
.calc-block-item:first-child .calc-block-value .btn-item,
.calc-block-item:nth-child(2) .calc-block-value .btn-item{
  width: 100%;
  margin-bottom: 10px;
}
.calc-block-item:last-child .calc-block-value .btn-item{
  width: unset;
  margin-right: 10px;
}
.calc-block-value .description{
  line-height: 24px;
}
.calc-block-value .item-substring .title {
  font-size: 14px;
}
.calc-section h3,
.calc-section h1 {
  font-size: 22px;
  line-height: 29px;
  margin: 60px 0 30px 0;
}
.calc-block-form {
  background: url(/elements/main/calc-form-mob.png) center bottom no-repeat;
  padding: 30px 10px 326px 10px;
  background-size: contain;
  margin-bottom: 60px;
}
.calc-section .calc-form h3{
  text-align: center;
}
.form-row .form-item {
  width: 100%;
}
.status-block{
  width: 100%;
}
.form-row .form-item .item-name{
  max-width: 150px;
}
.calc-section .calc-form .btn-form {
  padding: 10px;
  width: 100%;
  text-align: center;
  display: block;
}
.form-row .form-item:last-child .item-name{
  font-size: 20px;
  line-height: 24px;
}
}
@media (max-width: 330px){
.form-row .form-item .item-name {
  max-width: 140px;
}
.form-row .form-item .item-value {
  font-size: 18px;
  line-height: 18px;
}
.form-row .form-item:last-child .item-name{
  font-size: 18px;
  line-height: 18px;
}
.calc-block-value .item-substring .title {
  font-size: 14px;
  width: 100px;
}
.calc-block-form[data-v-70a7e4a6] {
  padding: 30px 10px 275px 10px;
}
}
@media (max-width: 290px){
.calc-block-name .number{
  width: 45px;
  height: 45px;
  margin-right: 10px;
}
.calc-block-name .number span {
  font-size: 20px;
  line-height: 26px;
}
.calc-block-name .title {
  width: 200px;
}
.calc-block-value .item-substring {
  flex-wrap: wrap;
}
.calc-block-value .item-substring .title {
  width: 100%;
  margin-bottom: 10px;
}
.calc-section .calc-form .btn-form br {
  display: none;
}
.calc-block-form {
  padding: 30px 10px 250px 10px;
}
}
</style>
