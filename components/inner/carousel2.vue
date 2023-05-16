<template>
  <div class="card-carousel-wrapper">
    <div class="modal-wrapper" :class="{active: modalActive}" @click="fullViewClose">
      <div class="modal-close">X</div>
      <div class="modal-content">
        <img v-if="itemArr[n].img" :src="itemArr[n].img" :alt="itemArr[n].series" />
      </div>
    </div>

    <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>

    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div
          class="card-carousel-cards"
          :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')' }"
        >
          <div
            class="card-carousel_item"  v-if="item.published"
            v-for="(item,index) in itemArr"
            :key="index"
            draggable="true"
            @dragover="moveCarousel(1)"
            @click="itemActive = index, flagActive = true, materialActive(index)"
            :class="{active: itemActive == index}"
          >
            <div class="zoom" @click="fullView(index)"> 
             <img src="pictures/img/zoom12x12.png" alt />
             
            </div>
            <img v-if="item.img" :src="'https://стильный-камень.рф/' + item.img" />
            <div class="card-carousel_item--footer">
              <span>{{ item.series   | cutText(-5)}}</span>
              <p
                class="tag"
                v-for="(tag,index2) in item.tag"
                :class="index &gt; 0 ? 'secondary' : ''"
                :key="index2"
              >{{ tag }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    
  </div>
</template>

<script>
export default {
  props: {
    itemArr: { img: "", series: "" },
    selectMaterial: Number,
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,

      modalActive: false,
      n: 0,
      itemActive: 0,
      flagActive: 0,
      materialIndex: 0,
    };
  },
  filters: {
  cutText(value, symbolsCount) {
  if(value.length > 14) {
    let minus = value.length - 10
    return value.length > symbolsCount
      ? value.slice(0, symbolsCount - minus) + '...'
      : value;
    }
  else {
    return value
  }
  }
  
  
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.itemArr.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    // передача параметров родительскому компоненту
    materialActive(index) {      
      this.$emit('materialActive', this.itemArr[index]);
    },
    // перемещение карусели
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    // полноразмерный просмотр фото
    fullView(index) {      
      this.modalActive = true;
      this.n = index;
    },
    fullViewClose() {
      this.modalActive = false;
    },
  },
  /*
  mounted() {
     this.materialActive(0);
  }
  */
};
</script>

<style scoped>
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 640px;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #f90;
  border-right: 2px solid #f90;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

.card-carousel_item img {
  max-width: 150px;
  max-height: 75px;
}
.card-carousel-cards .card-carousel_item {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
  position: relative;
}
.card-carousel-cards .card-carousel_item:first-child {
  margin-left: 2px;
}
.card-carousel-cards .card-carousel_item:last-child {
  margin-right: 2px;
}
.card-carousel-cards .card-carousel_item img {
  vertical-align: bottom;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel_item img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel_item--footer {
  border-top: 0;
  padding: 7px 12px;
  text-align: center;
}
.card-carousel-cards .card-carousel_item--footer span {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  user-select: none;
}
.card-carousel-cards .card-carousel_item--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-carousel-cards .card-carousel_item--footer p.tag:before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0;
}
.card-carousel-cards .card-carousel_item--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}
.card-carousel-cards .card-carousel_item--footer p.tag.secondary:before {
  display: none !important;
}
.card-carousel-cards .card-carousel_item--footer p.tag:after {
  content: "";
  position: absolute;
  top: 8px;
  left: -3px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: -0px -0px 0px #004977;
}
.card-carousel_item.active {
  box-shadow: 0 4px 5px 0 rgba(40, 44, 53, 0.5), 0 2px 2px 0 rgba(40, 44, 53, 0.5);
}
/* .card-carousel_item.active, .card-carousel_item.active>.zoom {
  background: rgba(255, 132, 0, 0.56);
} */

.zoom {
 position: absolute;
    background: rgba(255,255,255,0.43137);
    border-radius: 0;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 12;
    right: 0;
    border-left: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    border-radius: 0 0 0 5px;
}
.zoom > img {
  width: 12px;
  cursor: pointer;
  border: none;
}

/* просмотр полноразмерного фото */
.modal-wrapper {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
}
.modal-wrapper.active {
  display: block;
  pointer-events: auto;
}
.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 32px;
  color: #fff;
  cursor: pointer;
}
.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.modal-content img {
  max-height: 90vh;
}
@media (max-width: 800px){
.card-carousel {
    width: 100% !important;
  }
}
</style>