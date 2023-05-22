<template>
  <div>
    <Bredcrumbs :pagetitle="title" :firstParent="firstParent"/>
    <div class="container">
      <div class="main-row">
        <div class="text-block">
           <h1 v-html='title'></h1>
          <span>
            <img src="/elements/main/marker1.svg" alt="marker">
            {{geo}}
          </span>
          <nuxt-link :to="worklink" v-if="worklink">Подробнее о проекте
            <img src="/elements/main/arr1.svg" alt="arrow">
          </nuxt-link>
        </div>
        <div class="img-block">
          <img :src="$store.state.apiDomen + prev" :alt="title" class="prev"  @click="showVideoModal = !showVideoModal">
          <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="vk || video">
        </div>
      </div>
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
        <div class="video-block"  v-if="video">
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
            :src="video"
            id="video"
          ></video>
        </div>
        <div class="video-block video-block-desctop" v-html="vk" v-if="!video"></div>
        <div class="video-block video-block-mobile" v-html="vkMob" v-if="!video"></div>
      </template>
      <template v-slot:footer> </template>
    </Modal>
  </div>
</template>

<script>
import Bredcrumbs from "~/components/breadcrumbs.vue";
export default {
  components: { Bredcrumbs },
  head() {
    return {
      title: this.seoTitle
        ? this.seoTitle
        : "СТРОЙ ВОСТОК: отзыв к готовой работе " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "СТРОЙ ВОСТОК: отзыв к готовой работе " + this.$store.state.inCity,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "СТРОЙ ВОСТОК: отзыв к готовой работе " + this.$store.state.inCity,
      title:'',
      seoTitle: "",
      description: "",
      uriPage:'',
      firstParent:[{url:'/otzivi',name:'Отзывы'}],
      showVideoModal: false,
      prev: '',
      vk: '',
      vkMob: '',
      video: '',
      worklink: '',
      geo: '',
    }
  },
  async asyncData({ $axios, error, route, store }) {
    let lastPos = route.fullPath.lastIndexOf('/');
    let uriPage = encodeURI(route.fullPath.substr(lastPos+1));
    // let query = route.query;
    let data = {
      url: uriPage
    };
    return await $axios.$post(store.state.apiDomen + `/api/main/otziv.php`, data)
      .then((arr) => {
        return {
          newArr: arr
        };
      })
      .catch((err) => {
        error(err);
      });

  },
  mounted(){
    this.title =  this.newArr.main.longtitle
    if(this.newArr.main.description){
      this.desc = this.newArr.main.description
    }
    if(this.newArr.main.vk){
      this.vk = this.newArr.main.vk
    }
    if(this.newArr.main.vkMob){
      this.vkMob = this.newArr.main.vkMob
    }
    if(this.newArr.main.video){
      this.video = this.newArr.main.video
    }
    if(this.newArr.main.worklink){
      this.worklink = this.newArr.main.worklink
    }
    if(this.newArr.main.prev){
      this.prev = this.newArr.main.prev
    }
    if(this.newArr.main.geo){
      this.geo = this.newArr.main.geo
    }
  },
  methods: {
  }
}
</script>
<style scoped>
h1{
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin-top: 0px;
  text-transform: uppercase;
  margin-bottom: 30px;
  position: relative;
}
.main-row{
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 60px;
  justify-content: space-between;
}
.text-block{
  width: calc(100% - 500px);
}
.text-block span{
  align-items: center;
  margin-bottom: 30px;
  display: flex;
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
.img-block{
  width: 480px;
  position: relative;
  border-radius: 10px;
}
.img-block img.prev{
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}
.img-block img.video-img{
  position: absolute;
  top: calc(50% - 33px);
  left: calc(50% - 33px);
}
sub{
  vertical-align: middle;
  position: absolute;
  bottom: 20%;
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
  display: none;
}
@media (max-width: 1200px){
  .text-block{
    width: 100%;
  }
  .img-block{
    width: 100%;
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
  h1{
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    margin: 30px 0;
  }
  video{
    max-width:100%;
    max-height:100%;
  }
}
</style>
