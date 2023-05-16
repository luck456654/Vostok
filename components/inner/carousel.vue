<template>
  <div>
    <div class="modal-wrapper" :class="{active: modalActive}" @click="fullViewClose">
      <div class="modal-close">X</div>
      <div class="modal-content">
        <img :src="itemArr[n].img" :alt="itemArr[n].series">
      </div>
    </div>

    <div class="vue-carousel">
      <div class="arrow-block arrow-block_prew" @click="prev">
        <!-- <span>&lt;</span> -->
        <img src="img/calc/fotorama_prev_button.png" alt />
      </div>
      <div class="vue-carousel_body">
        <!--
      <div class="vue-carousel_item" v-for="(item,index) in itemArr" :key="index+n">
        <img :src="itemArr[index].img" alt />
        
      </div>
        -->
        <div class="vue-carousel_item" @click="fullView(a)">
          <div class="zoom">
            <img src="img/zoom12x12.png" alt />
            Увеличить
          </div>
          <img :src="itemArr[a].img" alt />
          <p>{{itemArr[a].series}}</p>
        </div>
        <div class="vue-carousel_item"  @click="fullView(b)">
          <div class="zoom">
            <img src="img/zoom12x12.png" alt />
            Увеличить
          </div>
          <img :src="itemArr[b].img" alt />
          <p>{{itemArr[b].series}}</p>
        </div>
        <div class="vue-carousel_item"  @click="fullView(c)">
          <div class="zoom">
            <img src="img/zoom12x12.png" alt />
            Увеличить
          </div>
          <img :src="itemArr[c].img" alt />
          <p>{{itemArr[c].series}}</p>
        </div>
        <div class="vue-carousel_item"  @click="fullView(d)">
          <div class="zoom">
            <img src="img/zoom12x12.png" alt />
            Увеличить
          </div>
          <img :src="itemArr[d].img" alt />
          <p>{{itemArr[d].series}}</p>
        </div>
      </div>
      <div class="arrow-block arrow-block_next" @click="next">
        <!-- <span>&gt;</span> -->
        <img src="img/calc/fotorama_next_button.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalActive: false,
      a: 0,
      b: 1,
      c: 2,
      d: 3,

      n: 0
    };
  },

  props: {
    itemArr: {}
  },

  methods: {
    prev() {
      if (this.a > 0) {
        this.a -= 1;
        this.b -= 1;
        this.c -= 1;
        this.d -= 1;
      }
    },

    next() {
      if (this.d < this.itemArr.length - 1) {
        this.a += 1;
        this.b += 1;
        this.c += 1;
        this.d += 1;
      }
    },

    fullView(e) {
      //console.log('Ok');
      this.modalActive = true;
      this.n = e;
    },
    fullViewClose() {
      this.modalActive = false;
    }
  }
};
</script>

<style scoped>
.vue-carousel_item p {white-space: break-spaces;}
.vue-carousel {
  position: relative;
  max-width: 100%;
  white-space: nowrap;
  display: flex;
  flex-wrap: wrap;
}
.vue-carousel_body {
  display: inline-block;
  width: 80%;
  overflow: hidden;
}
.arrow-block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  cursor: pointer;
}
.arrow-block > span {
  display: inline-block;
  padding: 10px;
  color: #f90;
  font-size: 30px;
}
.vue-carousel_item {
  width: 150px;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 2px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
  text-align: center;
}
.vue-carousel_item img {
  max-width: 100%;
  height: auto;
}
.zoom {
  background: #e2e2e2;
  text-align: center;
}
.zoom > img {
  width: 12px;
  cursor: pointer;
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
</style>