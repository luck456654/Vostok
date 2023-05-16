<template>
  <div>
    <h3>Производители</h3>
    <div class="palitra-carousel"  v-if="$store.state.ismobile == 'smartphone'">
      <div class="row">
        <div v-for="(item, itemIndex) in vendorsArr" :key="itemIndex">
          <div class="catalog-preview_block item" v-bind:class="[currentStoneId==itemIndex ? 'block-selected' : '']" v-show="itemIndex==slide1SliderMob1">
          <a class="link_vendor" @click="changeStone(item.name),changeBlock(itemIndex)" > <span class="name_vendor">{{item.name}}</span>
            <span class="price_vendor" v-if="item.price">от {{item.price}} руб/пог. м</span>
            <span class="price_vendor" v-else style="color:#fff!important;">от</span>
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/' + item.slider + '.webp'" class="vendor_icon" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
              <img :src="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
            </picture>
            <span class="vendor_stone" v-if="item.price">Посмотреть камни</span>
            <span class="vendor_stone vendor_stone_full" v-else> Не доступно</span>
          </a>
        </div>
      </div>
        <div v-for="(item, itemIndex) in vendorsArr" :key="itemIndex">
          <div class="catalog-preview_block item" v-bind:class="[currentStoneId==itemIndex ? 'block-selected' : '']" v-show="itemIndex==slide2SliderMob1">
          <a class="link_vendor" @click="changeStone(item.name),changeBlock(itemIndex)" > <span class="name_vendor">{{item.name}}</span>
            <span class="price_vendor" v-if="item.price">от {{item.price}} руб/пог. м</span>
            <span class="price_vendor" v-else style="color:#fff!important;">от</span>
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/' + item.slider + '.webp'" class="vendor_icon" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
              <img :src="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
            </picture>
            <span class="vendor_stone" v-if="item.price">Посмотреть камни</span>
            <span class="vendor_stone vendor_stone_full" v-else> Не доступно</span>
          </a>
          </div>
        </div>
         <button class="slider-button slider-button-left"  @click="prevSlideSliderMobile1()" v-if="vendorsArr.length>2"><span>&lt;</span></button>
      <button class="slider-button slider-button-right" @click="nextSlideSliderMobile1()" v-if="vendorsArr.length>2"><span>&gt;</span></button>
      </div>
    </div>
    <div class="palitra-carousel"  v-else>
      <div class="row">
        <div v-for="(item, itemIndex) in vendorsArr" :key="itemIndex">
          <div class="catalog-preview_block item" v-bind:class="[currentStoneId==itemIndex ? 'block-selected' : '']" v-show="itemIndex==slide1Slider1">
          <a class="link_vendor" @click="changeStone(item.name),changeBlock(itemIndex)" > <span class="name_vendor">{{item.name}}</span>
            <span class="price_vendor" v-if="item.price">от {{item.price}} руб/пог. м</span>
            <span class="price_vendor" v-else style="color:#fff!important;">от</span>
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/' + item.slider + '.webp'" class="vendor_icon" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
              <img :src="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
            </picture>
            <span class="vendor_stone" v-if="item.price">Посмотреть камни</span>
            <span class="vendor_stone vendor_stone_full" v-else> Не доступно</span>
          </a>
        </div>
      </div>
        <div v-for="(item, itemIndex) in vendorsArr" :key="itemIndex">
          <div class="catalog-preview_block item" v-bind:class="[currentStoneId==itemIndex ? 'block-selected' : '']" v-show="itemIndex==slide2Slider1">
          <a class="link_vendor" @click="changeStone(item.name),changeBlock(itemIndex)" > <span class="name_vendor">{{item.name}}</span>
            <span class="price_vendor" v-if="item.price">от {{item.price}} руб/пог. м</span>
            <span class="price_vendor" v-else style="color:#fff!important;">от</span>
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/' + item.slider + '.webp'" class="vendor_icon" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
              <img :src="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
            </picture>
            <span class="vendor_stone" v-if="item.price">Посмотреть камни</span>
            <span class="vendor_stone vendor_stone_full" v-else> Не доступно</span>
          </a>
          </div>
        </div>
        <div v-for="(item, itemIndex) in vendorsArr" :key="itemIndex">
          <div class="catalog-preview_block item" v-bind:class="[currentStoneId==itemIndex ? 'block-selected' : '']" v-show="itemIndex==slide3Slider1">
          <a class="link_vendor" @click="changeStone(item.name),changeBlock(itemIndex)" > <span class="name_vendor">{{item.name}}</span>
            <span class="price_vendor" v-if="item.price">от {{item.price}} руб/пог. м</span>
            <span class="price_vendor" v-else style="color:#fff!important;">от</span>
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/' + item.slider + '.webp'" class="vendor_icon" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
              <img :src="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
            </picture>
            <span class="vendor_stone" v-if="item.price">Посмотреть камни</span>
            <span class="vendor_stone vendor_stone_full" v-else> Не доступно</span>
          </a>
          </div>
        </div>
         <button class="slider-button slider-button-left"  @click="prevSlideSlider1()" v-if="vendorsArr.length>3"><span>&lt;</span></button>
      <button class="slider-button slider-button-right" @click="nextSlideSlider1()" v-if="vendorsArr.length>3"><span>&gt;</span></button>
      </div>
    </div>
    <h3 v-if="stonesArr[currentStoneId]">Палитра камня</h3>
    <div class="palitra-carousel">
    <div class="row" v-if="$store.state.ismobile == 'smartphone'">
      <div v-for="(itemArr, itemIndex) in stonesArr[currentStoneId]" :key="itemIndex">
        <div v-for="(item, index) in itemArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide1SliderMob2">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От:</span><span class="catalog-preview_price">{{item.price12}}</span><span>руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 12 мм:</span><span class="options-block_price"> {{item.price12}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 60 мм:</span><span class="options-block_price"> {{item.price60}} руб./м<sup>2</sup></span><br>
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
        </div>
      </div>
    </div>
    <div v-for="(itemArr, itemIndex) in stonesArr[currentStoneId]" :key="itemIndex">
        <div v-for="(item, index) in itemArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide2SliderMob2">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От:</span><span class="catalog-preview_price">{{item.price12}}</span><span>руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 12 мм:</span><span class="options-block_price"> {{item.price12}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 60 мм:</span><span class="options-block_price"> {{item.price60}} руб./м<sup>2</sup></span><br>
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
        </div>
      <button class="slider-button slider-button-left"  @click="prevSlideSliderMobile2(index)" v-if="index>1"><span>&lt;</span></button>
      <button class="slider-button slider-button-right" @click="nextSlideSliderMobile2(index)" v-if="index>1"><span>&gt;</span></button>
       <div v-if="openSuperModal == index+1"  class="modal-stone" >
                              <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                              <div class="row modal-stone-row">
                                <div class="modal-stone-prev modal-stone-active" @click="openSuperModal=index" v-if="index>0&&itemArr[index-1].photo">&#8592;</div>
                                <div class="modal-stone-prev" v-else>&#8592;</div>
                                <div class="modal-stone-img-block"><img :src="item.photo" class="modal-stone-img"></div>
                                <div class="modal-stone-next modal-stone-active" @click="openSuperModal=index+2" v-if="index<itemArr.length-1&&itemArr[index+1].photo">&#8594;</div>
                                <div class="modal-stone-next" v-else>&#8594;</div>
                              </div>
                              <span class="title-modal-stone"> Акриловая столешница <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
         </div>
      </div>
    </div>

    </div>
    <div class="row" v-else>
     <div v-for="(itemArr, itemIndex) in stonesArr[currentStoneId]" :key="itemIndex">
        <div v-for="(item, index) in itemArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide1Slider2">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От:</span><span class="catalog-preview_price">{{item.price12}}</span><span>руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 12 мм:</span><span class="options-block_price"> {{item.price12}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 60 мм:</span><span class="options-block_price"> {{item.price60}} руб./м<sup>2</sup></span><br>
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
        </div>
      </div>
    </div>

    <div v-for="(itemArr, itemIndex) in stonesArr[currentStoneId]" :key="itemIndex">
      <div v-for="(item, index) in itemArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide2Slider2">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От:</span><span class="catalog-preview_price">{{item.price12}}</span><span>руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 12 мм:</span><span class="options-block_price"> {{item.price12}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 60 мм:</span><span class="options-block_price"> {{item.price60}} руб./м<sup>2</sup></span><br>
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
        </div>
      </div>
    </div>

      <div v-for="(itemArr, itemIndex) in stonesArr[currentStoneId]" :key="itemIndex">
      <div v-for="(item, index) in itemArr" :key="index">
        <div class="catalog-preview_block item" v-if="index==slide3Slider2">
          <div class="catalog-preview_wrapper" :style="'background-image: url('+item.img+');'">
            <div class="catalog-preview_title">
              <div class="col-sm-3 favorites-block">
                <i class="msfavorites-icon-star"></i>
              </div>
              <div class="col-sm-9">
                <span class="name">{{item.name}}</span>
                <span class="preview-vendor">{{item.vendor}}</span>
                <span>От:</span><span class="catalog-preview_price">{{item.price12}}</span><span>руб./м<sup>2</sup></span>
              </div>
              <div class="catalog-preview_size">
                <span class="options-block_title">Цена для 12 мм:</span><span class="options-block_price"> {{item.price12}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 24 мм:</span><span class="options-block_price"> {{item.price24}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 40 мм:</span><span class="options-block_price"> {{item.price40}} руб./м<sup>2</sup></span><br>
                <span class="options-block_title">Цена для 60 мм:</span><span class="options-block_price"> {{item.price60}} руб./м<sup>2</sup></span><br>
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
        </div>
      <button class="slider-button slider-button-left"  @click="prevSlideSlider2(index)" v-if="index>2"><span>&lt;</span></button>
      <button class="slider-button slider-button-right" @click="nextSlideSlider2(index)" v-if="index>2"><span>&gt;</span></button>
       <div v-if="openSuperModal == index+1"  class="modal-stone" >
                              <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                              <div class="row modal-stone-row">
                                <div class="modal-stone-prev modal-stone-active" @click="openSuperModal=index" v-if="index>0&&itemArr[index-1].photo">&#8592;</div>
                                <div class="modal-stone-prev" v-else>&#8592;</div>
                                <div class="modal-stone-img-block"><img :src="item.photo" class="modal-stone-img"></div>
                                <div class="modal-stone-next modal-stone-active" @click="openSuperModal=index+2" v-if="index<itemArr.length-1&&itemArr[index+1].photo">&#8594;</div>
                                <div class="modal-stone-next" v-else>&#8594;</div>
                              </div>
                              <span class="title-modal-stone"> Акриловая столешница <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
       </div>
    </div>
    </div>
   </div>
  </div>
</div>
</template>

<style scoped>
h4, .h4 {font-weight: 500;font-size: 18px;}
.list_vendors {overflow: hidden;padding: 20px 0;}
.list_vendors .scrollmenu {background-color: white;overflow: auto;white-space: nowrap;}
.list_vendors a {border: 1px solid #fff;
    border-radius: 4px;
    margin-bottom: 20px;
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    font-size: 18px;}
.list_vendors a:hover {text-decoration: none;}
.list_vendors span {width: 100%;
    display: block;
    color: #ff8400;
    border:none}
.price_vendor {color: #96acaa!important;
    font-size: 14px;
    position: relative;
    top: -3px;}
.vendor_stone {color: #333333!important;
    font-size: 14px;
    letter-spacing: -1px;
    text-decoration-style: dotted;
    text-decoration-line: underline;
    cursor: pointer;}
.vendor_stone_full {cursor:unset;color:#fff!important;}
.vendor_icon{margin-right: 0;
    float: none!important;
    height: auto;
    width: auto;
    max-width: 100%;
    border:none}
.name_vendor {display: block;}
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
.catalog-preview_size span {font-size: 12px;}
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
.modal-stone-img-block {width: calc(100% - 110px);float: left;height: 100%;display: flex;align-items: center;}
.modal-stone-prev {margin-left: 15px;}
.modal-stone-next {margin-right: 15px;}
.modal-stone-active {color:#aaa!important;}
.modal-stone-active:hover {color:#fff!important;cursor: pointer;}
.block-selected {border: 1px solid #fe8101;border-radius: 2px;}
.block-selected span, .block-selected a, .block-selected img{border-style:none;}
@media (min-width: 1201px) {
.catalog-preview_size  span {font-size: 14px;}
}
@media (max-width: 820px) {
  .modal-stone-prev, .modal-stone-next {margin-top: 15%;}
}
@media(max-width: 767px){
  .favorites-block {display:none;}
}
@media (max-width: 500px) {
.modal-stone-prev, .modal-stone-next {margin-top: 70%;}
.palitra-carousel .item {
    width: calc(50% - 15px);
    padding-left: 0px;
    padding-right: 0px;
    margin-left:15px;
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
            showButton: false,
            currentShow: 0,
            currentBoard: 0,
            currentStoneId: -1,
            stonesArr: [],
            vendorsArr:[],
            showModalStone: false,
            openSuperModal:false,
            slide1Slider1:0,
            slide2Slider1:1,
            slide3Slider1:2,
            slide1SliderMob1:0,
            slide2SliderMob1:1,
            slide1Slider2:0,
            slide2Slider2:1,
            slide3Slider2:2,
            slide1SliderMob2:0,
            slide2SliderMob2:1,
            openSuperModal:false,
            long1:null,
        }
  },
    async mounted() {
        const showVendors = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/data_stone.php?data=vendorAkril`
            )
            .then(vendorsArr => {
                this.vendorsArr = vendorsArr;
                this.long1 = vendorsArr.length;
            })
            .catch(err => {
                error(err);
            });
        const showStones = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/data_stone.php?data=stone_akril`
            )
            .then(stonesArr => {
                this.stonesArr = stonesArr;
            })
            .catch(err => {
                error(err);
            });
    },
    methods: {
  	changeBlock(itemIndex) {
      this.currentShow = itemIndex;
      this.currentStoneId = itemIndex;
    },
    changeDashboard(index) {
      this.currentBoard = index;
    },
    changeStone(stone) {
      this.currentStone = stone;
      this.slide1Slider2 = 0;
      this.slide2Slider2 = 1;
      this.slide3Slider2 = 2;
      this.slide1SliderMob2 = 0;
      this.slide2SliderMob2 = 1;
    },
    prevSlideSlider1() {
          const long = this.long1;
          this.slide1Slider1 = ((this.slide1Slider1 + long - 1)%long);
          this.slide2Slider1 = ((this.slide2Slider1 + long - 1)%long);
          this.slide3Slider1= ((this.slide3Slider1 + long - 1)%long);
        },
        nextSlideSlider1() {
          const long = this.long1;
          this.slide1Slider1 = ((this.slide1Slider1 + 1)%long);
          this.slide2Slider1 = ((this.slide2Slider1 + 1)%long);
          this.slide3Slider1 = ((this.slide3Slider1 + 1)%long);
        },
    prevSlideSliderMobile1() {
          const long = this.long1;
          this.slide1SliderMob1 = ((this.slide1SliderMob1 + long - 1)%long);
          this.slide2SliderMob1 = ((this.slide2SliderMob1 + long - 1)%long);
        },
    nextSlideSliderMobile1() {
          const long = this.long1;
          this.slide1SliderMob1 = ((this.slide1SliderMob1 + 1)%long);
          this.slide2SliderMob1 = ((this.slide2SliderMob1 + 1)%long);
        },
     prevSlideSlider2(index) {
          const long = index+1;
          this.slide1Slider2 = ((this.slide1Slider2 + long - 1)%long);
          this.slide2Slider2 = ((this.slide2Slider2 + long - 1)%long);
          this.slide3Slider2= ((this.slide3Slider2 + long - 1)%long);
        },
        nextSlideSlider2(index) {
          const long = index+1;
          this.slide1Slider2 = ((this.slide1Slider2 + 1)%long);
          this.slide2Slider2 = ((this.slide2Slider2 + 1)%long);
          this.slide3Slider2 = ((this.slide3Slider2 + 1)%long);
        },
        prevSlideSliderMobile2(index) {
          const long = index+1;
          this.slide1SliderMob2 = ((this.slide1SliderMob2 + long - 1)%long);
          this.slide2SliderMob2 = ((this.slide2SliderMob2 + long - 1)%long);
        },
        nextSlideSliderMobile2(index) {
          const long = index+1;
          this.slide1SliderMob2 = ((this.slide1SliderMob2 + 1)%long);
          this.slide2SliderMob2 = ((this.slide2SliderMob2 + 1)%long);
        },
  }
}
</script>
