<template>
  <div class="modal-body">
    
    <img v-if="showBigPicture"  :src="'https://стильный-камень.рф/' + pictureBig" class="bigPicture"/>
    <div
      class="moika-block" @mouseover="showBigPicture = true, pictureBig = item.img" @mouseleave="showBigPicture = false, pictureBig = ''"
      v-for="(item, index) in filteredArr"
      :key="index"
      :title="item.longtitle"
      @click="(flagActive = index), moikaActive(index), modalActive()"
      :class="{ active: flagActive === index }" style="position:relative;"
    > 
      <img
        :src="'https://стильный-камень.рф/' + item.img"
        :alt="item.pagetitle"
        class="img-responsive" 
      />
      <h5>{{ item.pagetitle }}</h5>
      <span>{{ (item.price*$store.state.calc.KoeffSkidka).toFixed() }} руб.</span>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    moikaArr: {},
    showModal: Boolean,
    innerCorner: Number
  },
  data() {
    return {
      flagActive: false,
      pictureBig: '',
      showBigPicture: false,
    };
  },

  methods: {
    moikaActive(i) {
      var tmpArr = this.$store.state.arrWashing
      //tmpArr.push(this.moikaArr[i])
      this.$store.commit("changeWashing", this.moikaArr[i]);
      this.$emit("moikaActive", this.moikaArr[i]);
    },
    modalActive() {
      this.$emit("modalActive", false);
    }  
  },

  computed:{
    
    filteredArr: function(){   
      if (this.innerCorner == 0) {
        return this.moikaArr.filter(function (elem) {
          return elem.ugol == 0;
        })
      } else if (this.innerCorner == 1) {
        // Клиент попросил отсортировать мойки в случае угла со срезом: вначале угловые, затем обычные
        function compare(a, b) {
        if (Number(a.ugol) > Number(b.ugol))
          return -1;
          
        if (Number(a.ugol) < Number(b.ugol))
          return 1;
          
        return 0;
      }
      return this.moikaArr.sort(compare);
        /*
        return this.moikaArr.filter(function (elem) {
          return elem.ugol == 1;
        })*/
      } else {
        return  this.moikaArr;
      }                
    }
    
  }

};
</script>

<style scoped>
.moika-block {
  flex: 14%;
  max-width: 14%;
  margin: 5px 15px 15px 5px;
  padding: 5px;
  cursor: pointer;
}
.bigPicture {
  position: absolute;
    top: 0;
    width: 400px;
}
.moika-block.active, .moika-block:hover {
  box-shadow: 0 0 5px #42b983;
}
.moika-block h5 {
  margin: 5px 0;
  border: none;
}
.moika-block span,
.moika-block p {
  border: none;
}
</style>