<template>
  <div class="card-plitka-wrapper">
    <div class="modal-wrapper" :class="{active: modalActive}" @click="fullViewClose">
      <div class="modal-close">X</div>
      <div class="modal-content">
        <img :src="itemArr[n].img" :alt="itemArr[n].series" />
      </div>
    </div>
    

    <div class="card-plitka">
      
        <div class="card-plitka-cards">
          <div
            class="card-plitka_item" v-if="item.published"
            v-for="(item,index) in itemArr"
            :key="index"
            @click="itemActive = index, flagActive = true, materialActive(index)"
            :class="{active: flagActive && itemActive == index}"
          >
            <div class="zoom" @click="fullView(index)">
              <img src="pictures/img/zoom12x12.png" alt />
              
            </div>
            <img :src="item.img" />
            <div class="card-plitka_item--footer">
              <p>{{ item.series }}</p>
            </div>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    itemArr: { img: "", series: "" },
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,

      modalActive: false,
      n: 0,
      itemActive: false,
      flagActive: false,
    };
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
    // полноразмерный просмотр фото
    fullView(index) {      
      this.modalActive = true;
      this.n = index;
    },
    fullViewClose() {
      this.modalActive = false;
    },
  },
};
</script>

<style scoped>

.card-plitka_item img {
  max-width: 150px;
  max-height: 75px;
}
.card-plitka-cards .card-plitka_item {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 10px;
  width: 150px;
  display: inline-block;
  position: relative;
}

.card-plitka-cards .card-plitka_item img {
  vertical-align: bottom;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-plitka-cards .card-plitka_item img:hover {
  opacity: 0.5;
}
.card-plitka-cards .card-plitka_item--footer {
  border-top: 0;
  padding: 7px 12px;
  text-align: center;
}
.card-plitka-cards .card-plitka_item--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-plitka-cards .card-plitka_item--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-plitka-cards .card-plitka_item--footer p.tag:before {
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
.card-plitka-cards .card-plitka_item--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}
.card-plitka-cards .card-plitka_item--footer p.tag.secondary:before {
  display: none !important;
}
.card-plitka-cards .card-plitka_item--footer p.tag:after {
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
.card-plitka_item.active {
  background: #e2e2e2;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.5),
    0 2px 2px 0 rgba(40, 44, 53, 0.5);
}

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
.card-plitka-cards .card-plitka_item {
  width: 40%;
}
.modal-content img {
  width: 100%;
}
}
</style>