<template>
<div id="app">
    <div class="list_vendors">
    <div class="scrollmenu">
            <a class="link_vendor" @click="changeStone(item.name),changeBlock(itemIndex)" v-for="(item, itemIndex) in vendorsArr" v-bind:key="itemIndex"> <span>{{item.name}}</span>
            <span class="price_vendor">от {{item.price}} руб/пог. м</span>
            <picture>
              <source type="image/webp" :srcset="'https://стильный-камень.рф/' + item.slider + '.webp'" class="vendor_icon" :alt="item.name">
              <source type="image/jpg" :srcset="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
              <img :src="'https://стильный-камень.рф/' + item.slider + '.jpg'" class="vendor_icon" :alt="item.name">
            </picture>
            <span class="vendor_stone">Посмотреть камни</span>
            </a>
    </div>
    <div class="list_stones">
        <div class="scrollmenu scroll_stones" >
            <div style="float: left;" >
              <div v-for="(itemArr, itemIndex) in stonesArr[currentStoneId]"  v-bind:key="itemIndex">
                <div  v-for="(item, index) in itemArr" class="stone_block" v-bind:key="index">
                    <template v-if="item.price">
                        <a class="link_vendor link_stones">
                            <span class="name_stones">{{item.name}}</span>
                            <span class="vendor_stones">{{item.vendor}}</span>
                            <span class="price_stones"  >от </span><span class="price_vue">{{item.price}}</span><span class="price_stones"> руб/пог. м</span>
                            <img class="stone_icon" v-bind:src="'https://стильный-камень.рф/'+item.img" />
                        </a>
                        <a class="link_vendor link_stones" v-if="item.photo" @click.prevent="openSuperModal=index+1" > <span class="to_stone">Посмотреть фото изделий</span> </a>
                          <div v-if="openSuperModal == index+1"  class="modal-stone" >
                              <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                              <div class="row modal-stone-row">
                                <div class="modal-stone-prev modal-stone-active" @click="openSuperModal=index" v-if="index>0&&itemArr[index-1].photo">&#8592;</div>
                                <div class="modal-stone-prev" v-else>&#8592;</div>
                                <div class="modal-stone-img-block"><img :src="'https://стильный-камень.рф/'+item.photo" class="modal-stone-img"></div>
                                <div class="modal-stone-next modal-stone-active" @click="openSuperModal=index+2" v-if="index<itemArr.length-2&&itemArr[index+1].photo">&#8594;</div>
                                <div class="modal-stone-next" v-else>&#8594;</div>
                              </div>
                              <span class="title-modal-stone"> Пример работы из камня <br class="br-mobile"><strong>{{item.vendor}} {{item.name}}</strong></span>
                          </div>
                    </template>
                    <template v-else>
                          <a class="link_vendor link_stones"  v-bind:href="'https://стильный-камень.рф/'+item.photo">
                            <span class="name_stones">{{item.name}}</span>
                            <span class="vendor_stones">{{item.vendor}}</span>
                            <div class="min_price_vue"></div>
                            <img class="stone_icon" v-bind:src="'https://стильный-камень.рф/'+item.img" />
                            </a>
                        <a class="link_vendor link_stones" v-bind:href="'https://стильный-камень.рф/'+item.photo">
                            <span class="to_stone">Перейти в палитру камней</span>
                        </a>
                    </template>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>
/*****Карусель производителя и камня*****/
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
    text-decoration-line: underline;}
.vendor_icon{margin-right: 0;
    float: none!important;
    height: 200px;
    width: auto;
    border:none}
.scroll_stones .stone_block {
    border: 1px solid #fff;
    display: inline-grid;
    border-radius: 4px;
    width: 260px;
}
.scroll_stones a {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 5px!important;
    color: #777;
}
.scrollmenu a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    font-size: 18px;
}
.scrollmenu a:hover img, .scrollmenu a:hover .min_price_vue {border:none;}
span.name_stones, .price_stones {
    color: #777;
    font-size: 14px;
}
.price_stones {display: inline!important;}
.link_vendor span {
    width: 100%;
    display: block;
    cursor: pointer;
}
.link_stones span {
    color: #777;
}
.price_vue {
    color: #ff8400!important;
    display: inline!important;
}
.stone_icon {
    width: 100%;
    height: 130px;
    display: block;
}
.to_stone {
    color: #777;
    font-size: 14px;
    text-decoration-style: dotted;
    text-decoration-line: underline;
    cursor: pointer;
}
.list_stones {
    overflow: hidden;
    padding: 0;
    margin-bottom: 20px;
}
.min_price_vue {
    min-height: 24px;
    min-width: 25px;
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
  width: fit-content;
  display: block;
}
.title-modal-stone {text-align: center;
    /*padding-left: 30px;*/
    color: #aaa!important;
    display: inline-block;
    margin-top: 30px;
}
.title-modal-stone strong {color: #fff;letter-spacing: 1px;}
.scroll_stones .stone_block:hover {
    border: 1px solid #f90;}
.scroll_stones .stone_block:hover a{
    order: 1px solid #fff;}
.modal-stone-row {
    width: calc(100% + 30px);
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
@media (max-width: 820px) {
  .modal-stone-prev, .modal-stone-next {margin-top: 15%;}
}
@media (max-width: 500px) {
 .vendor_icon{
    height: 140px;
    width: auto;
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
            showButton: false,
            currentShow: 0,
            currentBoard: 0,
            currentStoneId: -1,
            stonesArr: [],
            vendorsArr:[],
            showModalStone: false,
            openSuperModal:false,
        }
  },
    async mounted() {
        const showVendors = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/data_stone.php?data=vendor`
            )
            .then(vendorsArr => {
                this.vendorsArr = vendorsArr;
            })
            .catch(err => {
                error(err);
            });
        const showStones = await this.$axios
            .$get(
                `https://стильный-камень.рф/data/data_stone.php?data=stone`
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
    }
  }
}
</script>
