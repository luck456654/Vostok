<template>
  <div class="palitra-carousel">
    <div class="row" v-if="$store.state.ismobile == 'smartphone'">
      <div v-for="(item, index) in stonesArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slideMob1">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От: </span><span class="catalog-preview_price"> {{item.price24}} </span><span> руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 56 мм:</span><span class="options-block_price"> {{item.price56}} руб./м<sup>2</sup></span><br>
              </div>
            </div>
          </div>
          <div class="catalog-preview_footer" v-if="item.photo">
            <a :href="item.photo" @click.prevent="openSuperModal=index+1">
              <span>
                <i class="fa fa-camera-retro"></i>
                Посмотреть фото изделий
              </span>
            </a>
          </div>
          <div class="catalog-preview_footer" v-else>
            <span>
              <i class="fa fa-camera-retro"></i>
              Посмотреть фото изделий
            </span>
          </div>
          <div v-if="openSuperModal == index+1"  class="modal-stone" >
            <span @click="openSuperModal=0" class="close-modal-stone">X</span>
            <div class="row modal-stone-row">
              <div class="modal-stone-img-block"><img :src="item.photo" class="modal-stone-img"></div>
            </div>
            <span class="title-modal-stone"> Акриловая столешница <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
          </div>
        </div>
      </div>

    <div v-for="(item, index) in stonesArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slideMob2">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От: </span><span class="catalog-preview_price"> {{item.price24}} </span><span> руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 56 мм:</span><span class="options-block_price"> {{item.price56}} руб./м<sup>2</sup></span><br>
              </div>
            </div>
          </div>
          <div class="catalog-preview_footer" v-if="item.photo">
            <a :href="item.photo" @click.prevent="openSuperModal=index+1">
              <span>
                <i class="fa fa-camera-retro"></i>
                Посмотреть фото изделий
              </span>
            </a>
          </div>
          <div class="catalog-preview_footer" v-else>
            <span>
              <i class="fa fa-camera-retro"></i>
              Посмотреть фото изделий
            </span>
          </div>
          <div v-if="openSuperModal == index+1"  class="modal-stone" >
            <span @click="openSuperModal=0" class="close-modal-stone">X</span>
            <div class="row modal-stone-row">
              <div class="modal-stone-img-block"><img :src="item.photo" class="modal-stone-img"></div>
            </div>
            <span class="title-modal-stone"> Акриловая столешница <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
          </div>
        </div>
      </div>

      <button class="slider-button slider-button-left"  @click="prevSlideSliderMobile()"><span>&lt;</span></button>
      <button class="slider-button slider-button-right" @click="nextSlideSliderMobile()"><span>&gt;</span></button>
    </div>
    <div class="row" v-else>
      <div v-for="(item, index) in stonesArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide1">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От: </span><span class="catalog-preview_price"> {{item.price24}} </span><span> руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 56 мм:</span><span class="options-block_price"> {{item.price56}} руб./м<sup>2</sup></span><br>
              </div>
            </div>
          </div>
          <div class="catalog-preview_footer" v-if="item.photo">
            <a :href="item.photo" @click.prevent="openSuperModal=index+1">
              <span>
                <i class="fa fa-camera-retro"></i>
                Посмотреть фото изделий
              </span>
            </a>
          </div>
          <div class="catalog-preview_footer" v-else>
            <span>
              <i class="fa fa-camera-retro"></i>
              Посмотреть фото изделий
            </span>
          </div>
          <div v-if="openSuperModal == index+1"  class="modal-stone" >
            <span @click="openSuperModal=0" class="close-modal-stone">X</span>
            <div class="row modal-stone-row">
              <div class="modal-stone-img-block"><img :src="item.photo" class="modal-stone-img"></div>
            </div>
            <span class="title-modal-stone"> Акриловая столешница <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
          </div>
        </div>
      </div>

    <div v-for="(item, index) in stonesArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide2">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От: </span><span class="catalog-preview_price"> {{item.price24}} </span><span> руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 56 мм:</span><span class="options-block_price"> {{item.price56}} руб./м<sup>2</sup></span><br>
              </div>
            </div>
          </div>
          <div class="catalog-preview_footer" v-if="item.photo">
            <a :href="item.photo" @click.prevent="openSuperModal=index+1">
              <span>
                <i class="fa fa-camera-retro"></i>
                Посмотреть фото изделий
              </span>
            </a>
          </div>
          <div class="catalog-preview_footer" v-else>
            <span>
              <i class="fa fa-camera-retro"></i>
              Посмотреть фото изделий
            </span>
          </div>
          <div v-if="openSuperModal == index+1"  class="modal-stone" >
            <span @click="openSuperModal=0" class="close-modal-stone">X</span>
            <div class="row modal-stone-row">
              <div class="modal-stone-img-block"><img :src="item.photo" class="modal-stone-img"></div>
            </div>
            <span class="title-modal-stone"> Акриловая столешница <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
          </div>
        </div>
      </div>

      <div v-for="(item, index) in stonesArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide3">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От: </span><span class="catalog-preview_price"> {{item.price24}} </span><span> руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 56 мм:</span><span class="options-block_price"> {{item.price56}} руб./м<sup>2</sup></span><br>
              </div>
            </div>
          </div>
          <div class="catalog-preview_footer" v-if="item.photo">
            <a :href="item.photo" @click.prevent="openSuperModal=index+1">
              <span>
                <i class="fa fa-camera-retro"></i>
                Посмотреть фото изделий
              </span>
            </a>
          </div>
          <div class="catalog-preview_footer" v-else>
            <span>
              <i class="fa fa-camera-retro"></i>
              Посмотреть фото изделий
            </span>
          </div>
          <div v-if="openSuperModal == index+1"  class="modal-stone" >
            <span @click="openSuperModal=0" class="close-modal-stone">X</span>
            <div class="row modal-stone-row">
              <div class="modal-stone-img-block"><img :src="item.photo" class="modal-stone-img"></div>
            </div>
            <span class="title-modal-stone"> Акриловая столешница <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
          </div>
        </div>
      </div>
      <button class="slider-button slider-button-left"  @click="prevSlideSlider()"><span>&lt;</span></button>
      <button class="slider-button slider-button-right" @click="nextSlideSlider()"><span>&gt;</span></button>
    </div>
  </div>
</template>
<style scoped>
.palitra-carousel {position: relative;}
.palitra-carousel .row {margin-right: 0;margin-left: 0;}
.palitra-carousel .item {
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 33.333333%;
  float: left;
  padding-left: 5px;
  padding-right: 5px;
}
.catalog-preview_wrapper {
    position: relative;
    max-width: 270px;
    height: 220px;
    cursor: pointer;
    border: 1px solid #e2e2e2;
}
.catalog-preview_title {
    background: #fff;
    border-bottom: 1px solid #e2e2e2;
    padding: 5px 5px 0 5px;
    text-align: center;
    overflow: hidden;
}
.favorites-block {
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    border: none;
}
.favorites-block .msfavorites-icon-star {background-position: 0 bottom;}
.msfavorites-icon-star {
    width: 17px;
    height: 17px;
    background: url(https://стильный-камень.рф/assets/components/msfavorites/img/icon-star.png) no-repeat;
}
.catalog-preview_title .col-sm-9 {border:none;}
.catalog-preview_title span {font-size: 14px;}
.catalog-preview_title span.name {
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: -5px;
    font-size: 13px;
    color: grey;
    font-family: Proxima, Times;
    display: block;
}
.preview-vendor {
    display: block;
    width: 100%;
    font-size: 12px!important;
}
.catalog-preview_price {
    display: inline-block !important;
    color: #c8601b !important;
    font-size: 14px;
}
sup {
    top: -.5em;
}
sub, sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}
.catalog-preview_size {
    height: 0;
    overflow: hidden;
    z-index: 9;
    background: #fff;
    width: calc(100% + 10px);
    border-top: 1px solid #e2e2e2;
    border-left: none;
    border-right: none;
    border-bottom: none;
    transition: 0.5s;
    margin: -5px 5px 5px -5px;
}
.catalog-preview_size span{
    border: none;
}
.catalog-preview_size  span {font-size: 12px;}
.options-block_title {
    display: inline-block !important;
    margin-right: 15px;
    color: #2e2e2e;
    background: #fff;
}
.options-block_price {
    display: inline-block !important;
    margin-right: 14px;
    color: #2e2e2e;
    background: #fff;
    color: grey;
    font-family: Proxima, Times;
}
.catalog-preview_wrapper:hover .catalog-preview_size {
    height: 100px;
}
.fa-camera-retro:before {
    content: "\f083";
}
.catalog-preview_footer i {
    font-size: 14px;
    color: #e2e2e2;
    margin-right: 0;
    position: static;
}
.catalog-preview_footer, .catalog-preview_footer span {
    text-align: center;
}
.catalog-preview_footer span {
    color: #e2e2e2;
    line-height: 1.4;
    font-size: 14px;
    font-family: 'calibriregular',Arial, Verdana, Times, sans-serif;
}
.catalog-preview_footer a span{
    color: #777;
}
.catalog-preview_footer a:hover span{
    color: #e95c00;
    text-decoration: underline;
}
.modal-stone{
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background: #333;
    z-index: 10000;
    display: inline-block;
    border: none;
    }
.modalStoneClose
  {display:none}
.close-modal-stone{
    width: fit-content!important;
    text-align: right;
    transform: scaleX(1.5);
    font-size: 21px;
    padding: 10px 30px 10px 10px;
    cursor:pointer;
    color:#aaa!important;
    margin-left: auto;
    display: block;
}
.close-modal-stone:hover {
  color: #fff!important;
}
.modal-stone-img {
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: auto;
  display: block;
}
.title-modal-stone {text-align: center;
    /*padding-left: 30px;*/
    color: #aaa!important;
    display: block;
    margin-top: 30px;
}
.title-modal-stone strong {color: #fff;letter-spacing: 1px;}
.modal-stone-row {
    width: 100%;
    height: calc(100vh - 180px);
    margin-top: 20px;
    display: inline-block;
}
.modal-stone-prev,.modal-stone-next{
    width: 40px;
    float: left;
    height: 50px;
    padding: 10px;
    color: #333;
    font-size: 24px;
    background: #333;
    margin-top: 25%;
}
.modal-stone-img-block {width:100%;float: left;height: 100%;display: flex;align-items: center;}
.modal-stone-prev {margin-left: 15px;}
.modal-stone-next {margin-right: 15px;}
.modal-stone-active {color:#aaa!important;}
.modal-stone-active:hover {color:#fff!important;cursor: pointer;}
@media (min-width: 1201px) {
  .catalog-preview_size  span {font-size: 14px;}
}
@media (max-width: 820px) {
  .modal-stone-prev, .modal-stone-next {margin-top: 15%;}
}
@media(max-width: 767px){
  .favorites-block {display:none;}
}
@media(max-width: 500px){
.palitra-carousel .item {
    width: 50%;
    padding-left: 15px;
    padding-right: 0px;
}
.catalog-preview_wrapper:hover .catalog-preview_size {
    height: 140px;
}
.catalog-preview_title span {
    font-size: 12px;
}
.catalog-preview_size {
    width: 100%;
    margin: 0;
}
.catalog-preview_title span.name {
    margin-bottom: -3px;
    font-size: 12px;
}
.preview-vendor {
    display: block;
    width: 100%;
    font-size: 11px!important;
}
.palitra-carousel .slider-button-left {
    left: -7%;
}
.modal-stone-prev, .modal-stone-next {margin-top: 70%;}
}
@media (max-width: 360px) {
    .item-row span {font-size: 10px;}
}
@media (max-width: 330px) {
    .item-row span {font-size: 8px;}
}
</style>
<script>
export default {
   data() {
        return {
            stonesArr: [],
            slide1:0,
            slide2:1,
            slide3:2,
            slideMob1:0,
            slideMob2:1,
            long1:null,
            openSuperModal:0,
        }
  },
  async mounted() {
        const showStones = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/data_stone.php?data=stone_granit`
            )
            .then(stonesArr => {
                this.stonesArr = stonesArr;
                this.long1 = stonesArr.length;
            })
            .catch(err => {
                error(err);
            });
    },
    methods: {
        prevSlideSlider() {
          const long=this.long1;
          this.slide1 = ((this.slide1 + long - 1)%long);
          this.slide2 = ((this.slide2 + long - 1)%long);
          this.slide3= ((this.slide3 + long - 1)%long);
        },
        nextSlideSlider() {
          const long=this.long1;
          this.slide1 = ((this.slide1 + 1)%long);
          this.slide2 = ((this.slide2 + 1)%long);
          this.slide3 = ((this.slide3 + 1)%long);
        },
        prevSlideSliderMobile() {
          const long=this.long1;
          this.slideMob1 = ((this.slideMob1 + long - 1)%long);
          this.slideMob2 = ((this.slideMob2 + long - 1)%long);
        },
        nextSlideSliderMobile() {
          const long=this.long1;
          this.slideMob1 = ((this.slideMob1 + 1)%long);
          this.slideMob2 = ((this.slideMob2 + 1)%long);
        },
    },
}
</script>
