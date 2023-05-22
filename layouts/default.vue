<template>
  <div>
    <Header />
    <div class="main-content">
      <nuxt />
    </div>
    <FooTer />
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import FooTer from "~/components/footer.vue";
export default {
  components: {
    Header,
    FooTer,
  },
  data() {
    return {
      isNuxtReady: false,
    }
  },
  mounted() {
    this.isNuxtReady = true;
    //console.log(this.$store.state)
  },
};
</script>

<style>
.main-slider{
  width:100%;
  height:690px;
  background: red;
  background: url(/elements/main/bgmain1.png) no-repeat center center;
  margin-top: 90px;
  position:relative;
  margin-bottom: 46px;
  position: relative;
}
.main-slider .gray-block{
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #5E5E5E;
  border-radius: 3px;
  width: fit-content;
  padding: 10px;
}
.main-slider .items{
  display: flex;
  flex-wrap: wrap;
  width: 650px;
}
.main-slider .items .item{
  width: 277px;
  display: flex;
  align-items: flex-start;
  margin-right: 30px;
  position: relative;
  height: fit-content;
}
.main-slider .items .item img{
  margin-right: 15px;
}
.main-slider .items .item .item-text title{
  display: block;
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #271717;
}
.main-slider .items .item .item-text p{
  font-size: 13px;
  line-height: 17px;
  color: #5E5E5E;
}
.main-slider .mouse{
  position: absolute;
  bottom: 0;
  left: calc(50% - 16px);
}
.serv-content a {
  text-decoration: underline !important;
}
html{
  scroll-behavior: smooth;
}
* {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 19px;
  font-family: "TT Norms Pro";
  color: #271717;
  letter-spacing: 0px;
  margin:0;
  box-sizing: border-box;
}
body.hide_overflow {
  overflow: hidden;
}
ul,
nav {
  list-style: none;
}
.main-text {
  font-size: 16px;
  color: #271717;
}
h2{
  letter-spacing: .03em;
  color: #271717;
  font-size: 32px;
  line-height: 42px;
}
h2.vhtml-h2{
  text-align: center;
}
a {
  text-decoration: none;
  color: #5E5E5E;
}
a:hover {
  text-decoration: underline;
}
h1,
.h1 {
  text-align: left;
  font-size: 46px;
  line-height: 60px;
  color: #271717;
  font-weight: normal;
}
ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}
.container {
  width: calc(100% - 30px);
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-active {
  opacity: 0;
 }
.main-content{
  min-height: 348px;
  min-height: 436px;
}
.flex-between-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.flex-between-top-row{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.modal-header span.modal-title {
  line-height: 1.2;
  font-size: 20px!important;
  padding-top: 24px;
  display: block;
  letter-spacing: -.05px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  pointer-events: none;
}
.modal-body {
  margin: 20px 0;
}
.modal-container .form-wrap {
  position: relative;
}
.modal-container .form-input {
  background-color: #edf3f5;
  display: block;
  width: calc(100% - 30px);
  min-height: 50px;
  padding: 12px 19px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #9b9b9b;
  background-color: #f5f5f5;
  background-image: none;
  border-radius: 0;
  -webkit-appearance: none;
  transition: .3s ease-in-out;
  border: 1px solid #f5f5f5;
}
.modal-container .pre-phone {
    position: absolute;
    bottom: 16px;
    left: 19px;
}
.modal-container .button-secondary {
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    background-color: #FF3F3F;
    display: flex;
    align-items: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: 42px;
    white-space: nowrap;
    padding: 8px 26px;
    border-radius: 3px;
    border-color: #FF3F3F;
    margin-top: 8px;
    margin-left: auto;
    margin-right: auto;
    text-transform: none;
    line-height: 1.25;
}
.btn-standart {
    background: #FF3F3F;
    border: 2px solid #FF3F3F;
    border-radius: 7px;
    padding: 17px 20px;
    display: flex;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    align-items: center;
    opacity: 1;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
}
.btn-standart:hover{
  opacity: 0.8;
  text-decoration: none;
}
p a{
  color: #FF3F3F;
}
p a.hover-link,
p a:hover{
  color: #FF3F3F;
  text-decoration: underline;
}
p a.visited-link{
  color: #7857d6;
  text-decoration: underline;
}
.main-section ul{
  /*list-style: disc;*/
  margin-top: 20px;
  padding-left: 24px;
  margin-bottom: 5px;
}
.main-section ul li{
  font-size: 16px;
  line-height: 19px;
  color: #5E5E5E;
  margin-bottom: 15px;
  position: relative;
}
.main-section ul li::before{
  color: #fff;
  content: '\002E';
  font-weight: 700;
  width: 10px;
  height: 10px;
  background: #ff3f3f;
  border-radius: 50%;
  font-size: 1px;
  position: absolute;
  top: 5px;
  left: -20px;
}

.main-section ol{
  list-style: decimal;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
}
.main-section ol li{
  font-size: 16px;
  line-height: 19px;
  color: #5E5E5E;
  margin-bottom: 15px;
}
.main-section ol li::marker{
  color:#FF3F3F;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
noindex > .main-slider {
  background: none;
  height: auto;
  margin-top: 40px;
}
.quote-block{
  display: block;
  border-left: 6px solid #ff3f3f;
  position: relative;
}
.quote-block *{
  border-left: none;
}
.quote-block img{
  position: absolute;
  top: 20px;
  left: 30px;
}
.quote-block p{
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #271717;
  padding: 35px 82px;
}
.content-img-row{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.content-img-row img{
  width: calc(20% - 20px);
}
.content-img-row img:nth-child(1){
  order:3
}
.content-img-row img:nth-child(2) {
  order:1
}
.content-img-row img:nth-child(3){
  order:2
}
.content-img-row img:nth-child(4) {
  order:4
}
.content-img-row img:nth-child(5) {
  order:5
}
@media (min-width: 1261px){
  .container {
      width: 1230px;
  }
}
@media (max-width: 900px){
  .content-img-row img {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
  }
  .content-img-row img:nth-child(1){
    order:2
  }
  .content-img-row img:nth-child(2) {
    order:1
  }
  .content-img-row img:nth-child(3){
    order:4
  }
  .content-img-row img:nth-child(4) {
    order:5
  }
  .content-img-row img:nth-child(5) {
    order:3
  }
}
@media (max-width: 600px){
  .main-slider {
    display: block;
    background: none;
    height: 100%;
    margin-bottom: 0px;
    /*margin-top: 30px;*/
    margin-top: 10px;
    margin-bottom: 60px;
    margin-bottom: 0px;
  }
  .main-slider .gray-block {
    font-size: 12px;
    line-height: 14px;
  }
  .main-slider .items {
    width: 100%;
  }
  .main-slider .items .item {
    width: 100%;
    margin: 0 0 30px 0;
  }
  .main-slider .items .item .item-text p {
    font-size: 12px;
  }
  .main-slider .mouse {
    display: none;
  }
  .container {
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
  }
  .main-section ul li,
  .main-section ol li{
    font-size: 14px;
    line-height: 17px;
  }
  .main-section ul {
    padding-left: 21px;
  }
  .main-section ul li::before {
    top: 3px;
    left: -17px;
  }
  .quote-block {
    border-left: 3px solid #ff3f3f;
  }
  .quote-block p {
    padding: 15px 15px 15px 50px;
    text-align: left;
  }
  .quote-block img {
    top: 15px;
    left: 15px;
    width: 20px;
  }
  .main-content {
    min-height: unset;
  }
  h2{
    font-size: 20px;
    line-height: 24px;
  }
  .content-img-row img {
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }
  .content-img-row img:nth-child(1){
    order:5
  }
  .content-img-row img:nth-child(2) {
    order:1
  }
  .content-img-row img:nth-child(3){
    order:2
  }
  .content-img-row img:nth-child(4) {
    order:3
  }
  .content-img-row img:nth-child(5) {
    order:0
  }
}
</style>
