<template>
  <div class="item" :class="{ 'gallery-item' : pages == 'gallery' }">
    <div class="slide-block" v-if="item.imgArr.length>1">
      <div class="main-photo" :style="'background: url(' + $store.state.apiDomen + item.imgArr[selectSlide].url2 + ') center center / cover no-repeat;'" @click="showSlideModal = !showSlideModal">
        <img :src="$store.state.apiDomen + item.imgArr[selectSlide].url" :alt="item.name + ' ' + item.imgArr[selectSlide].title">
        <div class="old-marker" v-if="item.imgArr[selectSlide].type == 'old'">До ремонта</div>
        <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="item.imgArr[selectSlide].type =='vkMob' || item.imgArr[selectSlide].type =='vk' || item.imgArr[selectSlide].type =='video'">

      </div>
      <div class="dot-row">
        <div class="dot-item" :class="{ active : idx == selectSlide }" v-for="(itm,idx) in item.imgArr" :key="idx" @click="selectSlide = idx">
        </div>
      </div>
      <div class="preview-row">
        <div class="scroll-block">
          <div
            class="preview-item"
            v-for="(itm,idx) in item.imgArr"
            :key="idx"
            @click="selectSlide = idx"
            v-show="idx >= rowMin && idx <= rowMax"
            :style="'background: url('+ $store.state.apiDomen +  itm.url3 + ') center center / cover no-repeat;'"
          >
            <img :src="$store.state.apiDomen + itm.url3" :alt="item.name + ' ' + itm.title">
            <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="itm.type =='vkMob' || itm.type =='vk' || itm.type =='video'">
          </div>
        </div>
        <div class="scroll-btn" v-if="item.imgArr.length>4">
            <div class="prev" :class="{unactive: rowMin<=0}"  @click="prevScroll()">
              <img src="/elements/main/larr-w.svg" alt="arrow">
            </div>
            <div class="next" :class="{unactive: rowMax>=item.imgArr.length-1}" @click="nextScroll()">
              <img src="/elements/main/rarr-w.svg" alt="arrow">
            </div>
        </div>
      </div>
    </div>
    <div class="slide-block" v-else>
      <div class="single-photo" :style="'background: url(' + $store.state.apiDomen +  item.imgArr[0].url + ') center center / cover no-repeat;'" @click="showSlideModal = !showSlideModal">
        <img :src="$store.state.apiDomen + item.imgArr[0].url" :alt="item.name + ' ' + item.imgArr[0].title">
        <div class="old-marker" v-if="item.imgArr[0].type == 'old'">До ремонта</div>
        <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="item.imgArr[0].type =='vkMob' || item.imgArr[0].type =='vk' || item.imgArr[0].type =='video'">
      </div>
    </div>
    <div class="text-block">
      <span class="item-title" v-html="item.name"></span>
      <span>
        <img src="/elements/main/marker1.svg" alt="marker">
        {{item.geo}}
      </span>
      <nuxt-link v-if="false" :to="$store.state.sityFolder + item.link">Подробнее о проекте
        <img src="/elements/main/arr1.svg" alt="arrow">
      </nuxt-link>
    </div>
    <Modal
      types="photoslider"
      :showModal="showSlideModal"
      @closeModal="showSlideModal = $event"
    >
      <template v-slot:header>
      <span class="modal-title" v-html="item.name"></span>
      </template>
      <template v-slot:body>
        <div class="photo-under-block" v-if="item.imgArr[selectSlide].type !='video' && item.imgArr[selectSlide].type !='vk'">
          <img :src="$store.state.apiDomen + item.imgArr[selectSlide].url" :alt="item.name + ' ' + item.imgArr[selectSlide].title">
        </div>
        <div class="video-under-block" v-if="item.imgArr[selectSlide].type =='video' && item.imgArr[selectSlide].type !='vk'">
          <video
            class="video_file"
            preload="metadata"
            type="video/mp4"
            autoplay="true"
            loop="loop"
            controls="controls"
            controlslist="nodownload"
            crossorigin="anonymous"
            playsinline
            :src="item.video"
            id="video"
          >
          </video>
        </div>
        <div class="video-under-block" v-if="item.imgArr[selectSlide].type =='vk'">
          <img src="/elements/loader.gif" class="loader" alt="loader">
          <div class="video-block video-block-desctop" v-html="item.vk"></div>
          <div class="video-block video-block-mobile" v-html="item.vkMob"></div>
        </div>
        <div class="preview-row scroll-btn modal-button-block">
          <div class="prev unactive" v-if="selectSlide<=0">
            <img src="/elements/main/larr-w.svg" alt="arrow">
          </div>
          <div class="prev" v-else  @click="selectSlide = selectSlide - 1 ">
            <img src="/elements/main/larr-w.svg" alt="arrow">
          </div>
          <div class="next unactive" v-if="selectSlide>=item.imgArr.length-1">
            <img src="/elements/main/rarr-w.svg" alt="arrow">
          </div>
          <div class="next" v-else @click="selectSlide = selectSlide + 1">
            <img src="/elements/main/rarr-w.svg" alt="arrow">
          </div>
        </div>
      </template>
      <template v-slot:footer> </template>
    </Modal>
  </div>
</template>
<script>
export default {
 props: {
    item: Object,
    page: String,
  },
  data() {
    return {
      selectSlide:0,
      rowMin:0,
      rowMax:3,
      pages:this.page,
      showSlideModal:false,
    }
  },
  methods: {
    prevScroll(){
      if (this.rowMin>0){
        this.rowMin = this.rowMin -1
        this.rowMax = this.rowMax -1
      }
    },
    nextScroll(){
      if (this.rowMax<this.item.imgArr.length-1){
        this.rowMin = this.rowMin +1
        this.rowMax = this.rowMax +1
      }
    }
  }
}
</script>
<style scoped>
.item{
  width: calc(33.3333% - 20px);
  margin-bottom: 30px;
}
.text-block{
  padding: 20px;
}
.text-block span{
  display: flex;
  font-size: 16px;
  line-height: 19px;
  color: #5E5E5E;
  align-items: center;
  margin-bottom: 15px;
}
.text-block span.item-title{
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #271717;
  display: block;
  margin-bottom: 15px;
  position:relative;
}
.text-block span img{
  margin-right: 10px;
}
.text-block a{
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FF3F3F;
  display: flex;
  align-items: center;
}
.text-block a:hover{
  text-decoration: none;
}
.text-block a img{
  margin-left: 8px;
}
.slide-block{
  position: relative;
}
.slide-block img{
  width: 100%;
}
.single-photo{
  height: 277px;
  overflow: hidden;
  border-radius: 10px;
  z-index: 2;
  position: relative;
  cursor: pointer;
}
.gallery-item .single-photo{
  height: 204px;
}
.main-photo{
  height: 207px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}
.gallery-item .main-photo{
  height: 148px;
}
.preview-row{
  margin-top: 10px;
  /*display: flex;*/
}
.preview-row .preview-item{
  display: inline-block;
  width: calc(25% - 7.5px);
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.preview-row .preview-item:last-child{
  margin-right: 0;
  position: relative;
}
.scroll-block{
  /*overflow: auto;
  white-space: nowrap;
  height: 75px;*/
  overflow: hidden;
  white-space: nowrap;
  height: 65px;
}
.gallery-item .scroll-block{
    height: 44px;
}
.scroll-btn{
  position: absolute;
  bottom: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}
.gallery-item .scroll-btn {
    bottom: 12px;
}
.scroll-btn .prev,
.scroll-btn .next{
  width: 25px;
  height: 25px;
  /*background: #ffffffa1;*/
  background: rgba(26, 26, 26, 0.4);
  backdrop-filter: blur(4.5px);
  display: flex;
  padding-left: 7px;
  margin-left: 7px;
  margin-right: 7px;
  padding-right: 7px;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: auto;
  cursor: pointer;
}
.scroll-btn .prev.unactive,
.scroll-btn .next.unactive{
  background: transparent;
  backdrop-filter: none;
}
.scroll-btn .prev.unactive img,
.scroll-btn .next.unactive img{
  display:none;
}
.old-marker{
  padding: 5px 10px;
  position: absolute;
  top:20px;
  background: #5E5E5E;
  border-radius: 0px 4px 4px 0px;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #FFFFFF;
}
.dot-row{
  width: 100%;
  position: absolute;
  /*bottom: 12px;*/
  bottom: 90px;
  display: flex;
  justify-content: center;
  pointer-events: none;
}
.gallery-item .dot-row{
  bottom: 65px;
}
.dot-item{
  /*width: 8px;
  height: 8px;*/
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.49);
  border-radius: 50%;
  margin: 0 4.5px;
  pointer-events: auto;
  border: 1px solid #ffffffc7;
  cursor: pointer;
}
.dot-item.active{
  background: #FF3F3F;
  border: 1px solid #FF3F3F;
}
.photo-under-block,
.video-under-block{
  width: fit-content;
  margin: auto;
}
/*.video_file{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}*/
.photo-under-block img{
  max-height: calc(100vh - 200px);
}
.modal-button-block{
  bottom: calc(50% - 20px)!important;
}
.preview-row .preview-item{
  max-height: 65px;
}
.preview-item img{
  opacity: 0;
  max-height: 65px;
}
.gallery-item .preview-row .preview-item {
    max-height: 44px;
}
.gallery-item .preview-row .preview-item img{
  opacity: 0;
  max-height: 44px;
}
.main-photo img{
  opacity: 0;
  max-height: 250px;
}
.main-photo .video-img,
.single-photo .video-img{
  opacity: 1;
  position: absolute;
  z-index: 5;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
}
.preview-row .preview-item .video-img,
.gallery-item .preview-row .preview-item .video-img{
  opacity: 1;
  position: absolute;
  z-index: 5;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  width: 20px;
  height: 20px;
}
.loader {
    position: absolute;
    left: calc(50% - 64px);
    top: 100px;
    z-index: 1;
}
.video-block{
  width: fit-content;
  margin: auto;
  z-index: 2;
  position: relative;
}
.video-block-desctop{
  display: block;
}
.video-block-mobile{
  display:none;
}
.single-photo img,
.main-photo img{
    opacity: 0;
}
@media (max-width: 900px) {
  .item{
    width: calc(50% - 15px);
  }
  .gallery-item .single-photo{
    height: 277px;
  }
  .gallery-item .main-photo{
    height: 207px;
  }
  .gallery-item .scroll-block{
    height: 80px;
  }
  .gallery-item .scroll-btn {
    bottom: 35px;
  }
  .video-block-desctop{
    display: none;
  }
  .video-block-mobile{
    display: block;
  }
  .gallery-item .dot-row{
    bottom: 100px;
  }
}
@media (max-width: 600px) {
  .item{
    width: 100%;
  }
  .single-photo,
  .main-photo,
  .gallery-item .single-photo,
  .gallery-item .main-photo
  {
    height: auto;
    min-height: 250px;
  }

  .scroll-block,
  .gallery-item .scroll-block{
    height: auto;
    min-height: 60px;
  }
  .scroll-btn,
  .gallery-item .scroll-btn{
    bottom: calc(10% - 12px) ;
  }
  video{
    max-width:100%;
    max-height:100%;
  }
  .preview-row .preview-item,
  .gallery-item .preview-row .preview-item {
    max-height: 60px;
  }
  .preview-row .preview-item img,
  .gallery-item .preview-row .preview-item img {
    opacity: 0;
    max-height: 60px;
  }
  .dot-row {
    bottom: unset;
    top: 230px;
  }
}
@media (max-width: 450px) {
  .text-block title {
    font-size: 14px;
    line-height: 17px;
  }
  .text-block span {
    font-size: 14px;
    line-height: 17px;
  }
  .text-block span img{
    width: 11px;
    margin-right: 8px;
  }
}
</style>
