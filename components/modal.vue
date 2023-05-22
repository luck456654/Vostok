<template>
<div>
  <transition name="modal">
    <div v-if="showModal" class="modal-mask" @click.prevent="$emit('closeModal'), $store.commit('changeOverflow', false)">
      <div class="modal-wrapper">
        <div class="modal-container" :class="[{terms:types=='confirm'},{'photo-slider':  types=='photoslider'},{'container': types=='calc'},{'video-revue': types=='revue'}]" @click.stop="" :style="'max-width:' + containerWidth + 'px'">
        <span class="modal-close_btn" @click.prevent="$emit('closeModal'), $store.commit('changeOverflow', false)">&times;</span>

          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    types: String,
    containerWidth: Number
  },
  data() {
    return {
      //showModal: false,
    };
  },

};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  transform: translateZ(0);
  width: 100%;
  will-change: opacity;
  z-index: 10001;
  display:flex;
}

.modal-container {
  position: relative;
  max-width: 360px;
  min-height: 400px;
  margin: auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  padding: 12px 20px 16px;
  height: fit-content;
}
.modal-container.terms{
  max-width: calc(100% - 40px);
  padding: 32px;
}
.modal-header {
  margin-top: 0;
  /*color: #42b983;*/
  color: #333;
  font-weight: 600;
}
.terms .modal-header{
  font-size: 24px;
}
.modal-body {
  margin: 20px 0;
  position: relative;
}
.terms .modal-body{
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: calc(100vh - 180px);
}
.modal-close_btn {
  position: absolute;
  top: -5px;
  right: 10px;
  display: block;
  cursor: pointer;
  font-size: 42px;
  color: #2e2e2e;
  font-weight: 100;
  line-height: 1.2;
}
.terms .modal-close_btn{
  top: 10px;
  right: 10px;
}
/* --transition="modal" -- */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.terms .modal-body::-webkit-scrollbar {
  position: relative;
  right:10px;
  background: #7e7e7e40;
}
.terms .modal-body::-webkit-scrollbar-thumb {
  background-color: rgb(126 126 126);
  border-radius: 20px;
  border: 1px solid rgb(126 126 126);
}
.modal-container.container{
  width: calc(100% - 60px);
  max-width: calc(100% - 60px)!important;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.modal-container.photo-slider{
  width: calc(100% - 60px);
  max-width: calc(100% - 60px)!important;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.modal-container.video-revue{
  width: 883px;
  max-width: 883px;
}
@media (min-width: 1261px){
  .modal-container.container,
  .modal-container.photo-slider {
      width: 1230px!important;
      max-width: 1230px;
  }

}
/*@media (min-width: 768px) {
  .modal-wrapper {
    padding-top: 6rem;
  }
}*/
@media (max-width: 900px) {
  .modal-container.video-revue{
    width: 350px;
    max-width: 350px!important;
    min-height: 250px;
  }
}
@media (max-width: 600px){
  .modal-wrapper {
    width: calc(100% - 10px);
  }
  .modal-container.container {
    width: calc(100% - 40px);
    max-width: calc(100% - 40px)!important;
    margin-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
  }
  .modal-container.photo-slider{
    width: calc(100% - 40px);
    max-width: calc(100% - 40px)!important;

  }
  .modal-container.video-revue{
    width: 350px;
    max-width: 350px!important;
    min-height: 250px;
  }
}
</style>
