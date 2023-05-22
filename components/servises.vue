<template>
  <div class="services-block" :class="{single : type == 'single'}">
    <div class="item" v-for="(item,index) in servArr" :key="index" :style="'background-image: url('+item.pict+')'">
      <div class="title-serv">
        <nuxt-link :to="$store.state.sityFolder + item.url" v-if="item.url">{{item.name}}</nuxt-link>
        <span v-else>{{item.name}}</span>
      </div>
      <ul>
        <li v-for="(itm,idx) in item.childs" :key="idx">
          <div class="round-marker"></div>
          <nuxt-link :to="$store.state.sityFolder + itm.url" v-if="itm.url">{{itm.name}}</nuxt-link>
          <span v-else>{{itm.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    servArr: Array,
    type: String,
  },
}
</script>

<style scoped>

.services-block{
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
}
.services-block.single{
  justify-content: flex-start;
  margin-bottom: 0px;
}
.services-block .item{
  width: calc(33.3333% - 20px);
  height: 285px;
  border-radius: 10px;
  background: #F5F7FA;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
  margin-bottom: 30px;
  background: no-repeat bottom right;
  background-size: cover;
}
.services-block.single .item{
  width: 100%;
  box-shadow: none;
  border-radius: 0;
  height: unset;
  background-image: none!important;
}
.services-block .item .title-serv{
  padding: 20px;
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #271717;
  min-height: 28px;
}
.services-block.single .item .title-serv{
  display: none;
}
/*.services-block.single .item title a,
.services-block.single .item title span{
  display: none;
}*/
.services-block .item .title-serv a{
  color: #271717;
}
.services-block .item ul{
  padding: 0 20px;
}
.services-block.single .item ul{
  padding: 0;
}
.services-block .item ul li{
  font-size: 16px;
  line-height: 19px;
  color: #5E5E5E;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.services-block .item ul li{
  color: #5E5E5E;
}
.round-marker{
  width:10px;
  height: 10px;
  background: #FF3F3F;
  border-radius: 50%;
  margin-right: 8px;
}
.main-section ul li::before {
    color: #fff;
    content: '';
    font-weight: 700;
    width: 10px;
    height: 10px;
    background: #ff3f3f;
    border-radius: 50%;
    font-size: 1px;
    position: absolute;
    top: 5px;
    left: -20px;
    display:none;
}
@media (max-width: 1100px) {
  .services-block .item{
    width: calc(50% - 15px);
  }
}
@media (max-width: 900px) {
  .services-block .item{
    min-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 600px) {
  .services-block{
    margin-bottom: 20px;
  }
  .services-block .item{
    margin-bottom: 10px;
    min-width: unset;
    width: 100%;
  }
  .services-block .item ul li{
    font-size: 14px;
    line-height: 17px;
  }
  .round-marker {
    top: -1px;
    position: relative;
  }
}
@media (max-width: 500px){
  .services-block .item {
    background-image: none!important;
  }
}
</style>
