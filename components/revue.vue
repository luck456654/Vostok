<template>
  <div class="item" :class="{'list-pages' : pages =='reviws'}">
    <div class="slide-block">
      <img :src="$store.state.apiDomen + item.prev" :alt="title" @click="showVideoModal = !showVideoModal">
    </div>
    <div class="text-block">
      <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="item.frame || item.video" @click="showVideoModal = !showVideoModal">
      <span class="rev-title">{{title}}</span>
      <span>
        <img src="/elements/main/marker1.svg" alt="marker">
        {{item.geo}}
      </span>
      <nuxt-link :to="$store.state.sityFolder + item.link" v-if="false">Подробнее об отзыве
        <img src="/elements/main/arr1.svg" alt="arrow">
      </nuxt-link>
    </div>
    <Modal
      types="revue"
      :showModal="showVideoModal"
      @closeModal="showVideoModal = $event"
    >
       <template v-slot:header>
        <span class="modal-title">{{title}}</span>
      </template>
      <template v-slot:body>
        <img src="/elements/loader.gif" class="loader" alt="loader">
        <div class="video-block" v-if="item.video">
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
          ></video>
        </div>
        <div class="video-block video-block-desctop" v-html="item.frame" v-if="!item.video"></div>
        <div class="video-block video-block-mobile" v-html="item.frameMob" v-if="!item.video"></div>
      </template>
      <template v-slot:footer> </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "~/components/modal.vue";
export default {
  components: { Modal },
  props: {
    item: Object,
    pages: String,
    title: String,
  },
  data() {
    return {
      showVideoModal: false,
    }
  },
  methods: {
    openVideo() {

    }
  }
}
</script>
<style scoped>
.item{
  margin-bottom: 30px;
  margin-right: 10px;
  margin-left: 5px;
}
.item.list-pages{
  width: calc(33.3333% - 20px);
  box-sizing: border-box;
  margin-left: 0;
  margin-right: 0;
}
.text-block{
  padding: 20px;
  position:relative;
}
.text-block span{
  display: flex;
  font-size: 16px;
  line-height: 19px;
  color: #5E5E5E;
  align-items: center;
  margin-bottom: 15px;
}
.text-block span img{
  margin-right: 10px;
}
.text-block .rev-title{
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #271717;
  display: block;
  margin-bottom: 15px;
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
img.video-img{
  top: -48px;
  position: absolute;
  left: calc(50% - 33px);
  cursor: pointer;
}
.loader{
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
  display: none;
}
.slide-block img{
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
}
@media (max-width: 1100px){
  .item.list-pages{
    width: calc(50% - 30px);
  }
}
@media (max-width: 900px){
  .video-block-desctop{
    display: none;
  }
  .video-block-mobile{
    display: block;
  }
}
@media (max-width: 600px){
  .item{
    margin-bottom: 10px;
  }
  .item .slide-block img{
    width: 100%;
  }
  .text-block span {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;
  }
  .text-block span img{
    width: 11px;
    margin-right: 8px;
  }
  .text-block .rev-title {
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px 0 15px 0;
  }
  .item.list-pages{
    width: 100%;
  }
}
</style>
