 <template>
 <div>
   <div class="left-menu" v-if="showAsideMobileMenu">
     <AsideMenuMobile />
   </div>
   <div class="callme-block" >
     <button class="callme-btn"  @click.prevent="showModalCallBack = !showModalCallBack">
      <svg class="callme-btn-icon callme-btn-icon-phone" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 17.544 25.215" enable-background="new 0 0 17.544 25.215" xml:space="preserve">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M12.22,6.784c-0.135,0.871-1.654,4.073-2.084,4.89c-0.576,1.087-2.779,4.344-3.724,5.065l0,0l-0.775,0.532l-1.879-0.616L0,20.653l0.129,1.043l2.123,2.832l0.916,0.687c0,0,13.474-8.596,14.376-24.03c0,0-0.266-0.297-0.777-0.87L13.228,0l-1.16,0.454l-1.029,4.941l1.127,1.23"></path>
      </svg>
      <div class="callme-btn-icon callme-btn-icon-text"  x="0px" y="0px" width="60px" height="60px" xml:space="preserve">
        <span>обратный</span >
        <span>звонок</span >
      </div>
     </button>
   </div>
    <div class="left-menu-icon" v-if="$store.state.ismobile == 'pc'">
        <a href="" append  class="zakaz-kamen" @click.prevent="showModalCallBack = !showModalCallBack"><img class="ugol-left" src="../assets/img/ugol-left-menu.png">
            <span class="text-calc">ОСТАЛИСЬ ВОПРОСЫ?</span>
             <img class="icon-other" src="../assets/img/vopros-icon.png" alt="Остались вопросы?">
        </a>
    </div>
    <ModalCallBack v-if="showModalCallBack" @close="closeModalCallBack"/>
    <div class="left-menu " v-if="$store.state.ismobile == 'pc'">
        <AsideMenu />
        <div class="col-xs-12 col-sm-12 col-md-12 left-box-icons left-box-icons-acide">
            <div class="left-menu-icon">
                <a href="https://стильный-камень.рф/отзывы-столешниц-из-камня.html"><img class="ugol-left" src="../assets/img/ugol-left-menu.png">
                    <span class="text-calc">ОТЗЫВЫ</span>
                    <img class="icon-other" src="../assets/img/otzyvy-icon.png" alt="Отзывы о столешницах">
                </a>
            </div>
          </div>
         <div class="col-xs-12 col-sm-12 col-md-12 left-box-icons left-box-icons-acide">
            <div class="left-menu-icon">
                <a href="https://стильный-камень.рф/цвет-столешницы/"><img class="ugol-left" src="../assets/img/ugol-left-menu.png">
                    <span class="text-calc">ПАЛИТРА</span>
                    <img class="icon-other" src="../assets/img/palitra-icon.png" alt="Палитра камней для столешниц">
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import AsideMenu from '@/components/AsideMenu';
  import AsideMenuMobile from '@/components/AsideMenuMobile';
  import ModalCallBack from "~/components/ModalCallBack.vue";
  export default {
    data() {
      return {
         showAsideMobileMenu: false,
         showModalCallBack:false,
         cmi:1,
      };
      },
  components: {
    AsideMenu,
    AsideMenuMobile,
    ModalCallBack,
  },
  methods: {
        closeModalCallBack() {
          this.showModalCallBack = false;
        },
  }
}
</script>

<style scoped>
  .callme-block {
    display: block;
    width: 97px;
    height: 97px;
    position: fixed;
    display: inline-block;
    box-sizing: border-box;
    -webkit-transition: opacity .5s ease-in-out;
    transition: opacity .5s ease-in-out;
    z-index: 9;
    right: 5px;
    top: 25px;
}
.callme-btn {
    background: #fcbf55;
    width: 77px;
    height: 77px;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px #333;
    cursor: pointer;
    }
.callme-btn-icon {position:absolute; width:100%; }
.callme-btn-icon:nth-child(1) {left: 30px;top: 27px;  opacity:0; animation-name: faden1; animation-duration: 15s; animation-iteration-count: infinite;}
.callme-btn-icon:nth-child(2) {left: -10px;top: 10px; color: #fff;text-align: center; opacity:0; animation-name: faden2; animation-duration: 15s; animation-iteration-count: infinite;}
.callme-btn-icon-phone {width:17.544px; height:25.215px;}
.callme-btn-icon-text span{
  text-transform: uppercase;
  font: 300 12px Open sans,Ubuntu,Arial;
  display: block;
}
.callme-btn-icon-text span:nth-child(1){padding-top: 10px;padding-bottom: 5px;}
.callme-btn-icon-text span:nth-child(2){padding-bottom: 20px;padding-top: 0px;}
@keyframes animPhone {
from,
to {
transform: scale(1.3);
}
15% {animation-duration: 0.1s;transform: scale(1.5)rotate(-15deg)}
25% {animation-duration: 0.1s;transform: scale(1.5)rotate(-20deg)}
50% {animation-duration: 0.4s;transform: scale(1.5)rotate(-15deg)}
70% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)}
80% {animation-duration: 0.2s;transform: scale(1.5)rotate(-15deg)}
90% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)};}
@keyframes faden1 {
  0% { opacity: 1; }
  3% {animation-duration: 0.1s;transform: scale(1.5)rotate(-15deg)}
  5% {animation-duration: 0.1s;transform: scale(1.5)rotate(-20deg)}
  10% {animation-duration: 0.4s;transform: scale(1.5)rotate(-15deg)}
  14% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)}
  16% {animation-duration: 0.2s;transform: scale(1.5)rotate(-15deg)}
  18% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)}
  20% {animation-duration: 0.1s;transform: scale(1.3)}
  23% {animation-duration: 0.1s;transform: scale(1.5)rotate(-15deg)}
  25% {animation-duration: 0.1s;transform: scale(1.5)rotate(-20deg)}
  30% {animation-duration: 0.4s;transform: scale(1.5)rotate(-15deg)}
  34% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)}
  36% {animation-duration: 0.2s;transform: scale(1.5)rotate(-15deg)}
  38% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)}
  40% {animation-duration: 0.1s;transform: scale(1.3)}
  43% {animation-duration: 0.1s;transform: scale(1.5)rotate(-15deg)}
  45% {animation-duration: 0.1s;transform: scale(1.5)rotate(-20deg)}
  50% {animation-duration: 0.4s;transform: scale(1.5)rotate(-15deg)}
  54% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)}
  56% {animation-duration: 0.2s;transform: scale(1.5)rotate(-15deg)}
  58% {animation-duration: 0.1s;transform: scale(1.3)rotate(15deg)}
  60% {animation-duration: 0.1s;transform: scale(1.3)}
  63% {animation-duration: 0.1s;transform: scale(1.5)rotate(-15deg)}
  66.65% {opacity: 1;}
  66.66% { opacity: 0; }
  99.99% { opacity: 0; }
}
@keyframes faden2 {
  0% { opacity: 0; }
  66.65% { opacity: 0; }
  66.66% { opacity: 1; }
  99.98%{ opacity: 1; }
  99.99% { opacity: 0; }
}
@media (max-width: 500px){
  .callme-block{
    width: 55px;
    height: 55px;
    z-index: 9;
    right: 10px;
    top: calc(100% - 105px);
  }
  .callme-btn {
    width: 55px;
    height: 55px;
  }
  .callme-btn-icon-phone {width:12.53px; height:18px;}
  .callme-btn-icon:nth-child(1) {top:20px;left:20px;}
  .callme-btn-icon:nth-child(2) {left: 0px;top: 8px;}
  .callme-btn-icon-text span {font: 300 8.5px Open sans,Ubuntu,Arial;}
  .callme-btn-icon-text span:nth-child(1){padding-bottom: 5px;padding-top: 7px;}
  .callme-btn-icon-text span:nth-child(2){padding-bottom: 10px;padding-top: 0px;}
}

</style>
