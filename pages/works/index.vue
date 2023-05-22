<template>
<div>
  <Bredcrumbs :pagetitle="title" />
  <div class="container">
    <div class="main-flex-row">
      <aside>
        <div class="filter-row" v-for="(item,index) in filters" :key="index" v-show="false">
          <div class="filter-title">
            {{item.name}}
            <img src="/elements/arr2top.svg" alt="arr" class="filter-arr-img" :class="{revert: !item.open}" @click="item.open = !item.open">
          </div>
          <div class="filter-body" v-show="item.open">
            <div class="checkbox-row" v-if="item.type == 'checkbox'">
              <div class="checkbox-subrow" v-for="(itm,idx) in item.value" :key="idx" @click="reChecked(index, idx)">
                <div class="check-icon">
                  <img src="/elements/checkbox.svg" alt="checked" class="checked-img" v-if="itm.checked">
                </div>
                <div class="check-title">
                  {{itm.name}}
                </div>
              </div>
              <div class="show-all">
                Показать все
                <img src="/elements/arr2down.svg" alt="arr" class="all-arr-img" >
              </div>
            </div>
            <div class="checkbox-row" v-else-if="item.type == 'multiCheckbox'">
              <div class="checkbox-subrow" v-for="(itm,idx) in item.value" :key="idx" @click="reMultiChecked(index, idx)">
                 <div class="check-icon">
                   <img src="/elements/checkbox.svg" alt="checked" class="checked-img" v-if="itm.checked">
                 </div>
                 <div class="check-title">
                   {{itm.name}}
                 </div>
               </div>
            </div>
            <div class="diagramm-row" v-else-if="item.type == 'diagramm'">
              <div class="diagram-subrow">
                <!--<div class="start-diagramm"></div>
                <div class="fin-diagramm"></div>-->
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div class="main-content">
        <h1>{{title}}</h1>
        <secion class="tags-sections" v-show="false" v-if="tags.length>0">
          <div class="tags-block" :class="{showall:showAllTags}">
            <div class="tag-item" :class="{active:item.active}" v-for="(item,index) in tags" :key="index" @click="changeTag(index)">{{item.name}}</div>
          </div>
          <div class="show-all-btn" @click="showAllTags = !showAllTags">
            <span v-if="showAllTags">Свернуть</span>
            <span v-else>Показать все</span>
            <img src="/elements/arr2top.svg" alt="arr" class="filter-arr-img" :class="{revert: !showAllTags}">
          </div>
        </secion>
        <secion class="work-row">
          <Work v-for="(item,index) in worksArr" :key="index" :item="item"  :page="'gallery'" v-show="index <= maxIndex"/>
        </secion>
        <secion class="paginator-section">
          <div class="btn-standart btn-work" @click="showAll()" v-if="worksArr.length>maxIndex +1">
            Показать больше работ
          </div>
          <div class="paginator-block" v-if="worksArr.length>0" v-show="false">
            Paginator
          </div>
        </secion>
      </div>
    </div>
  </div>
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
        : "СТРОЙ ВОСТОК: галерея работ " + this.$store.state.inCity,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
            ? this.description
            : "СТРОЙ ВОСТОК: галерея работ " + this.$store.state.inCity,
        },
      ],
    };
  },
   data() {
    return {
      pagetitle: "СТРОЙ ВОСТОК: галерея работ " + this.$store.state.inCity,
      title:'Галерея работ',
      seoTitle: "",
      description: "",
      showAllTags:false,
      worksArr:[],
      tags:[],
      filters:[],
      maxIndex: 5,
    }
  },
  async asyncData({ $axios, error, store }) {
    return await $axios
      .$get(
        store.state.apiDomen +
          `/api/main/gallery.php`
      )
      .then((arr) => {
        return {
          newArr: arr
        };
      })
      .catch((err) => {
        error(err);
      });
  },
  async mounted() {
    if (this.$store.state.ymInit == true) {
      ym(90648260, "hit", this.$route.path);
    }
    console.log(this.newArr)
    //if (this.newArr[0][0].length >0){
      this.worksArr = this.newArr.newWorks
      this.tags = this.newArr.tags.tags
      this.filters = this.newArr.filters.filters
    //}
    const availableScreenWidth = window.innerWidth
    if (availableScreenWidth>900) {
      this.maxIndex=5;
    }else if(availableScreenWidth>600&&availableScreenWidth<=900){
      this.maxIndex=3;
    }else if(availableScreenWidth<=600){
      this.maxIndex=1;
    }
      this.maxIndex=this.worksArr.length - 1;//Временно показываем все работы, скрываем кнопку
  },
  created() {
    if (process.client) {
    window.addEventListener('resize', this.updateWidth);
    }
  },
  methods: {
    reChecked(index, idx){
      for (var i = 0; i < this.filters[index].value.length; i++) {
        if (i != idx){
          this.filters[index].value[i].checked = false;
        }
      }
      this.filters[index].value[idx].checked = true;
    },
    reMultiChecked(index, idx){
      if (this.filters[index].value[idx].checked){
        this.filters[index].value[idx].checked = false;
      }else{
        this.filters[index].value[idx].checked = true;
      }
    },
    changeTag(index){
      /*if(this.tags[index].active){
        this.tags[index].active = false;
      }else{
        this.tags[index].active = true;
      }*/
      this.tags[index].active = !this.tags[index].active;
    },
    updateWidth() {
      this.widthScreen = window.innerWidth;
    },
    showAll(){
      this.maxIndex=this.worksArr.length - 1;
    }
  },
}
</script>
<style scoped>
h1{
  font-weight: 700;
  text-transform: uppercase;
  color: #271717;
  margin-top: 0px;
}
.main-flex-row{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;
}
aside{
  min-height: 1px;
  width: 257px;
}
.filter-row{
  align-items: center;
  padding: 10px 10px 0px 0px;
  width: 257px;
  border-top: 1px solid #F9F9FA;
}
.filter-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #271717;
}
.filter-arr-img{
  transition: all 0.3s;
  cursor:pointer;
}
.filter-arr-img.revert{
  transform:rotate(-180deg)
}
.checkbox-row{
  margin-top: 20px;
  margin-bottom: 5px;
}
.checkbox-subrow{
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
}
.check-icon{
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.show-all{
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FF3F3F;
}
.tags-sections{
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
}
.tags-block{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  height: 105px;
  transition: all 0.3s;
}
.tags-block.showall{
  overflow: visible;
  height: auto;
}
.tag-item{
  font-size: 14px;
  line-height: 17px;
  color: #FF3F3F;
  padding: 10px;
  border: 1px solid #FF3F3F;
  border-radius: 4px;
  margin-right: 15px;
  background:#ffffff;
  margin-bottom: 15px;
  cursor:pointer;
}
.tag-item.active{
  background: #FF3F3F;
  color:#ffffff;
  opacity: 1;
}
.tag-item.active:hover{
  opacity: 0.8;
}
.main-content{
  width:calc(100% - 309px);
}
.show-all-btn{
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FF3F3F;
  position: absolute;
  bottom: -5px;
  right: 10px;
  cursor: pointer;
}
.work-row{
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
}
.paginator-section{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 130px;
}
@media (max-width: 900px){
  aside{
    width: 100%;
    margin-top: 14px;
    margin-bottom: 60px;
  }
  .main-content{
    width: 100%;
  }
  .main-flex-row{
    margin:0;
  }
  h1{
    text-align: center;
  }
  .show-all-btn{
    text-align: center;
    position: unset;
    margin-bottom: -5px;
  }
  .paginator-block{
    display: none;
  }
}
@media (max-width: 600px){
  .filter-row {
    width: 100%;
  }
  h1{
    font-size: 22px;
    line-height: 29px;
  }
  .filter-title {
    font-size: 16px;
    line-height: 19px;
    color: #271717;
  }
  .check-title{
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
