<template>
  <div>
    <Bredcrumbs :pagetitle="title" :firstParent="firstParent"/>
    <div class="container">
      <h1>{{newArr.main.longtitle}}</h1>
      <section class="top-row">
        <!--{{newArr.main}}{{imgArr}}{{title}}-->
        <div class="img-block" v-if="imgArr.length>1">
          <div class="main-photo" :style="'background: url(' + $store.state.apiDomen + imgArr[selectSlide].url + ') center center / cover no-repeat;'" @click="showSlideModal = !showSlideModal">
            <img :src="$store.state.apiDomen + imgArr[selectSlide].url"  :alt="title + ' ' + imgArr[selectSlide].title">
            <div class="old-marker" v-if="imgArr[selectSlide].type == 'old'">До ремонта</div>
            <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="imgArr[selectSlide].type =='vkMob' || imgArr[selectSlide].type =='vk' || imgArr[selectSlide].type =='video'">
            <div class="dot-row">
              <div class="dot-item" :class="{ active : idx == selectSlide }" v-for="(itm,idx) in imgArr" :key="idx" @click="selectSlide = idx">
              </div>
            </div>
          </div>
          <div class="preview-row">
            <div class="scroll-block">
              <div class="preview-item" v-for="(itm,idx) in imgArr" :key="idx" @click="selectSlide = idx" v-show="idx >= rowMin && idx <= rowMax" :style="'background: url('+ $store.state.apiDomen +  itm.url + ') center center / cover no-repeat;'">
                <img :src="$store.state.apiDomen + itm.url" :alt="title + ' ' + itm.title">
                 <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="itm.type =='vkMob' || itm.type =='vk' || itm.type =='video'">
              </div>
            </div>
            <div class="scroll-btn" v-if="imgArr.length>5">
              <div class="prev" :class="{unactive: rowMin<=0}"  @click="prevScroll()">
                <img src="/elements/main/larr-w.svg" alt="arrow">
              </div>
              <div class="next" :class="{unactive: rowMax>=imgArr.length-1}" @click="nextScroll()">
                <img src="/elements/main/rarr-w.svg" alt="arrow">
              </div>
            </div>
            <div class="mobile-btn">
              <div class="btn-mobile-video">
                <img src="/elements/main/video.svg" alt="video">
                <span>Смотреть видео</span>
              </div>
              <div class="btn-mobile-video">
                <span>Смотреть отзыв</span>
              </div>
            </div>
          </div>
        </div>
        <div class="img-block"  v-else-if="imgArr.length==1">
          <div  v-if="imgArr[0]" class="single-photo" :style="'background: url(' + $store.state.apiDomen +  imgArr[0].url + ') center center / cover no-repeat;'" @click="showSlideModal = !showSlideModal">
            <img :src="$store.state.apiDomen + imgArr[0].url" :alt="title + ' ' + imgArr[0].title" >
            <div class="old-marker" v-if="imgArr[0].type == 'old'">До ремонта</div>
            <img src="/elements/main/video.svg" alt="video" class="video-img" v-if="imgArr[0].type =='vkMob' || imgArr[0].type =='vk' || imgArr[0].type =='video'">
          </div>
          <div class="mobile-btn" v-if="imgArr.length==0">
            <div class="btn-mobile-video">
              <img src="/elements/main/video.svg" alt="video">
              <span>Смотреть видео</span>
            </div>
            <div class="btn-mobile-video">
              <span>Смотреть отзыв</span>
            </div>
          </div>
        </div>
        <div class="text-block">
          <h2 v-html='title'></h2>
          <p>{{desc}}</p>
          <div class="table-row">
            <div class="table-item" v-if="surf">
              <div class="table-item-name">
                <img src="/elements/works/size-icon.svg" alt="Размер">
                Площадь квартиры:
              </div>
              <div class="table-item-value">
                {{surf}} м<sub>2</sub>
              </div>
            </div>
            <div class="table-item" v-if="room">
              <div class="table-item-name">
                <img src="/elements/works/room-icon.svg" alt="Комнаты">
                Комнаты:
              </div>
              <div class="table-item-value">
                {{room}}
              </div>
            </div>
            <div class="table-item" v-if="price">
              <div class="table-item-name">
                <img src="/elements/works/cost-icon.svg" alt="Стоимость">
                Стоимость:
              </div>
              <div class="table-item-value">
                {{price}} руб.
              </div>
            </div>
            <div class="table-item" v-if="time">
              <div class="table-item-name">
                <img src="/elements/works/time-icon.svg" alt="Время">
                Срок:
              </div>
              <div class="table-item-value">
                {{time}}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="main-section" v-show="false">
        <h4>Заголовок h4</h4>
        <p>{{arrWork[0].text}}</p>
        <h5>Заголовок h5</h5>
        <ul>
          <li v-for="(item,index) in arrWork[0].list1" :key="index">
            {{item.name}}
          </li>
        </ul>
        <h6>Заголовок h6</h6>
        <ol>
          <li v-for="(item,index) in arrWork[0].list2" :key="index">
            {{item.name}}
          </li>
        </ol>
      </section>
      <section class="another-block">
        <h3>оцените другие наши работы</h3>
         <div class="work-row">
          <Work v-for="(item,index) in worksArr" :key="index" :item="item"  v-show="index <= maxIndex" />
        </div>
        <nuxt-link :to="$store.state.sityFolder + '/works'" class="btn-standart btn-work">
          Показать больше работ
        </nuxt-link>
      </section>
    </div>
    <Modal
      types="photoslider"
      :showModal="showSlideModal"
      @closeModal="showSlideModal = $event"
    >
      <template v-slot:header>
      <span class="modal-title" v-html="title"></span>
      </template>
      <template v-slot:body>
        <div class="photo-under-block" v-if="imgArr[selectSlide].type !='video' && imgArr[selectSlide].type !='vk'">
          <img :src="$store.state.apiDomen + imgArr[selectSlide].url" :alt="title + ' ' + imgArr[selectSlide].title">
        </div>
        <div class="video-under-block" v-if="imgArr[selectSlide].type =='video' && imgArr[selectSlide].type !='vk'">
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
          >
          </video>
        </div>
        <div class="video-under-block" v-if="imgArr[selectSlide].type =='vk'">
          <img src="/elements/loader.gif" class="loader" alt="loader">
          <div class="video-block video-block-desctop" v-html="vk"></div>
          <div class="video-block video-block-mobile" v-html="vkMob"></div>
        </div>
        <div class="preview-row scroll-btn modal-button-block">
          <div class="prev unactive" v-if="selectSlide<=0">
            <img src="/elements/main/larr-w.svg" alt="arrow">
          </div>
          <div class="prev" v-else  @click="selectSlide = selectSlide - 1 ">
            <img src="/elements/main/larr-w.svg" alt="arrow">
          </div>
          <div class="next unactive" v-if="selectSlide>=imgArr.length-1">
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
import Bredcrumbs from "~/components/breadcrumbs.vue";
import Work from "~/components/product.vue";
export default {
  components: { Bredcrumbs, Work },
  head() {
    return {
      title: this.seoTitle
        ? this.seoTitle
        : "СТРОЙ ВОСТОК: готовая работа " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "СТРОЙ ВОСТОК: готовая работа " + this.$store.state.inCity,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: 'СТРОЙ ВОСТОК: готовая работа ' + this.$store.state.inCity,
      title:'',
      seoTitle: "",
      description: "",
      uriPage:'',
      firstParent:[{url:'/works',name:'Галерея работ'}],
      selectSlide:0,
      rowMin:0,
      rowMax:4,
      arrWork:[{
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        'list1': [{name:'Маркерованный список'},{name:'Маркерованный список'},{name:'Маркерованный список'},{name:'Маркерованный список'},{name:'Маркерованный список'}],
        'list2':  [{name:'Нумерованный список'},{name:'Нумерованный список'},{name:'Нумерованный список'},{name:'Нумерованный список'},{name:'Нумерованный список'}],
      }],
      desc: '',
      surf: '',
      room: '',
      price: '',
      time: '',
      worksArr: [],
      maxIndex: 2,
      imgArr:[],
      showSlideModal:false,
      vk: '',
      vkMob: '',
      video: '',
    }
  },
  async asyncData({ $axios, error, route, store }) {
    let lastPos = route.fullPath.lastIndexOf('/');
    let uriPage = encodeURI(route.fullPath.substr(lastPos+1));
    // let query = route.query;
    let data = {
      url: uriPage
    };
    return await $axios.$post(store.state.apiDomen + `/api/main/work.php`, data)
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
    //this.title = this.arrWork[0].title
    let lastPos = this.$route.fullPath.lastIndexOf('/');
    this.uriPage = encodeURI(this.$route.fullPath.substr(lastPos+1));
    //console.log(this.uriPage)
    //console.log(this.newArr)
    this.title = this.newArr.main.longtitle ? this.newArr.main.longtitle : this.newArr.main.title
    if(this.newArr.main.imgArr){
      this.imgArr = this.newArr.main.imgArr
    }
    if(this.newArr.main.description){
      this.desc = this.newArr.main.description
    }
    if(this.newArr.main.surf){
      this.surf = this.newArr.main.surf
    }
    if(this.newArr.main.room){
      this.room = this.newArr.main.room
    }
    if(this.newArr.main.price){
      this.price = this.newArr.main.price
    }
    if(this.newArr.main.time){
      this.time = this.newArr.main.time
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
    let TempArr = []
    let k = 0
      for (var i = 0; i < this.newArr.works.length; i++) {
        if (this.newArr.works[i].alias != this.uriPage){
          TempArr[k] = this.newArr.works[i]
          k++
        }
      }
    this.worksArr = TempArr
    //console.log(this.worksArr)
    const availableScreenWidth = window.innerWidth
    if (availableScreenWidth>900) {
      this.maxIndex=2;
    }else if(availableScreenWidth>600&&availableScreenWidth<=900){
      this.maxIndex=1;
    }else if(availableScreenWidth<=600){
      this.maxIndex=0;
    }
  },
  created() {
    if (process.client) {
    window.addEventListener('resize', this.updateWidth);
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
      if (this.rowMax<this.imgArr.length-1){
        this.rowMin = this.rowMin +1
        this.rowMax = this.rowMax +1
      }
    },
    updateWidth() {
      this.widthScreen = window.innerWidth;
    },
  }
}
</script>
<style scoped>

h1{
  font-weight: 700;
  font-size: 42px;
  line-height: 50px;
  margin-top: 80px;
  text-transform: uppercase;
  margin-bottom: 60px;
  position: relative;
}
.top-row{
  display:flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 60px;
}
.img-block{
  width:calc(50% - 15px);
  position: relative;
}
.text-block{
  width:calc(50% - 15px);
}
.img-block img{
  width: 100%;
}
.text-block h2{
  display: block;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.03em;
  color: #271717;
  position: relative;
}
.text-block p{
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #271717;
  margin-top: 20px;
  margin-bottom: 20px;
}
.table-row{
  width: 295px;
}
.table-row .table-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
}
.table-item-name{
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: #FF3F3F;
}
.table-item-name img{
  margin-right: 10px;
}
.table-item-value{
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: #271717;
  position: relative;
}
.main-section h4{
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.03em;
  color: #271717;
  margin-top: 0px;
  margin-bottom: 0px;
}
.main-section p{
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #271717;
  margin-top: 20px;
  margin-bottom: 20px;
}
.main-section h5{
  font-weight: 700;
  font-size: 21px;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: #271717;
  margin-top: 0px;
  margin-bottom: 0px;
}
.main-section h6{
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #271717;
  margin-top: 0px;
  margin-bottom: 0px;
}
.another-block{
  margin-top: 60px;
  display: block;
  margin-bottom: 120px;
}
.another-block h3{
  font-size: 42px;
  line-height: 50px;
  text-transform: uppercase;
  color: #271717;
  margin-top: 60px;
  margin-bottom: 60px;
}
.another-block .work-row{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 60px;
}
.another-block .btn-work{
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
sub{
  vertical-align: middle;
  position: absolute;
  bottom: 20%;
}
.mobile-btn{
  display:none;
}
.main-photo{
  height: 353px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  cursor: pointer;
}

.single-photo{
  height:  auto;
  border-radius: 10px;
  z-index: 2;
  position: relative;
  cursor: pointer;
}
.preview-row{
  margin-top: 10px;
  /*display: flex;*/
}

.preview-row .preview-item{
  display: inline-block;
  width: calc(20% - 8px);
  margin-right: 10px;
  border-radius: 5px;
}
.preview-row .preview-item:last-child{
  margin-right: 0;
}
.scroll-block{
  overflow: hidden;
  white-space: nowrap;
  height: 80px;
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
  width: 20px;
  height: 20px;
  /*background: #ffffffa1;*/
  background: rgba(26, 26, 26, 0.4);
  backdrop-filter: blur(4.5px);
  display: flex;
  padding-left: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding-right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: auto;
  cursor: pointer;
}
.scroll-btn .prev.unactive,
.scroll-btn .next.unactive{
  background: transparent;
  backdrop-filter: none;
  cursor: default;
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
  bottom: 12px;
  display: flex;
  justify-content: center;
  pointer-events: none;
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
.photo-under-block img{
  max-height: calc(100vh - 200px);
}
.modal-button-block{
  bottom: calc(50% - 20px)!important;
}
.preview-row .preview-item{
  max-height: 65px;
  position: relative;
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
@media (max-width: 1200px){}
@media (max-width: 900px){
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
}
@media (max-width: 600px){
  h1{
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    margin: 30px 0;
  }
  .img-block{
    width:100%;
  }
  .text-block{
    width:100%;
  }
  .mobile-btn{
    display:flex;
    justify-content: space-between;
    margin:10px 0;
  }
  .btn-mobile-video img{
    width:23px;
    margin-right: 10px;
  }
  .btn-mobile-video{
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    border: 1px solid #FF3F3F;
    border-radius: 3px;
    width:calc(50% - 5px);
    display: flex;
    cursor:pointer;
  }
  .btn-mobile-video *{
    border: none;
  }
  .btn-mobile-video span{
    font-size: 14px;
    line-height: 17px;
    color: #271717;
    font-weight: 700;
  }
  .text-block h2{
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    margin: 10px 0 20px 0;
  }
  .text-block p {
    font-size: 14px;
  }
  .table-row{
    width:100%;
  }
  .table-item-name {
    font-size: 16px;
  }
  .table-item-value {
    font-size: 16px;
  }
  .top-row{
    margin-bottom: 9px;
  }
  .main-section h4 {
    font-size: 20px;
    line-height: 24px;
  }
  .main-section p {
    font-size: 14px;
  }
  .main-section h5 {
    font-size: 20px;
    line-height: 24px;
  }
  .main-section h6{
    font-size: 18px;
    line-height: 22px;
  }
  .another-block {
    margin-top: 55px 0 60px 0;
}
  .another-block h3{
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    margin: 0px 0 30px 0;
  }
  .another-block .work-row{
    margin-bottom: 30px;
  }
  .another-block .btn-work{
    font-size: 13px;
    line-height: 16px;
    padding: 20px 40px;
  }
  .single-photo,
  .main-photo,
  .gallery-item .single-photo,
  .gallery-item .main-photo,
  .scroll-block,
  .gallery-item .scroll-block
  {
    height: auto;
  }
  .scroll-btn,
  .gallery-item .scroll-btn{
    bottom: calc(10% - 14px);
  }
  video{
    max-width:100%;
    max-height:100%;
  }
  .preview-row .preview-item,
  .gallery-item .preview-row .preview-item {
    max-height: 80px;
  }
  .preview-row .preview-item img,
  .gallery-item .preview-row .preview-item img {
    opacity: 0;
    max-height: 80px;
  }
}
</style>
