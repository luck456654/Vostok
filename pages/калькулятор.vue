<template>
  <div>
    <Calculator 
      :quartzArr="quartzArr"
      :liquidArr="liquidArr"
      :acrilicArr="acrilicArr"
      :naturalArr="naturalArr"
      :quartzKromkaArr="quartzKromkaArr"
      :liquidKromkaArr="liquidKromkaArr"
      :liquidPathlistArr="liquidPathlistArr"
      :acrilicKromkaArr="acrilicKromkaArr"
      :quartzBortikArr="quartzBortikArr"
      :liquidBortikArr="liquidBortikArr"
      :acrilicBortikArr="acrilicBortikArr"
      :cutMixer="cutMixer"
      :cutMixerLiquid="cutMixerLiquid"
      :cutWashing="cutWashing"
      :cutWashingLiquid="cutWashingLiquid"
      :cutWashingAcrylic="cutWashingAcrylic"
      :cutGlue="cutGlue"
      :cutGlueLiquid="cutGlueLiquid"
      :cutGlueAcrylic="cutGlueAcrylic"
      :cutStove="cutStove"
      :cutStoveLiquid="cutStoveLiquid"
      :cutStoveAcrylic="cutStoveAcrylic"
      :metering="metering"
      :kernelLiquid="kernelLiquid"
      :moikaQuartzArr="moikaQuartzArr"
      :moikaLiquidArr="moikaLiquidArr"
      :sinkLiquidArr="sinkLiquidArr"
      :sinkQuartzArr="sinkQuartzArr"
      :sinkAcrilicArr="sinkAcrilicArr"
      :moikaAcrilicArr="moikaAcrilicArr"
      :euro="+euro"
      :usd="+usd" 
      :status=0
    />    
  <!-- 
      //:euro="+euro"
      //:usd="+usd"  -->
  </div>
</template>

<script>
import Calculator from "~/components/calculator.vue";

export default {
  layout: 'calc',
  components: {
    Calculator
  },
  data() {
    return {
      //moikaArr: {}
    };
  },  
  
  asyncData({ $axios, params, error }) {
    return $axios
      .get(
        `https://стильный-камень.рф/api/jsonCalcUser.php?token=5455656ffdvdfv`
      )
      .then(res => {
        return { 
          quartzArr:          res.data.quartz,
          liquidArr:          res.data.liquid,
          acrilicArr:         res.data.acrilic,
          naturalArr:         res.data.natural,
          quartzKromkaArr:    res.data.quartzAndNaturalKromka,
          liquidKromkaArr:    res.data.liquidKromka,
          acrilicKromkaArr:   res.data.acrilicKromka,
          liquidPathlistArr:  res.data.acrilicPathlist,   // Дополнительные кромки с подхлестом Акриловый камень
          quartzBortikArr:    res.data.quartzAndNaturalBortik, // Бортик кварцевого камня
          liquidBortikArr:    res.data.liquidBortik,
          acrilicBortikArr:   res.data.acrilicBortik,     // Бортик акрилового камня
          cutMixer:           res.data.cutMixer,          // Стоимость выреза под смеситель
          cutMixerLiquid:     res.data.cutMixerLiquid,    // Стоимость выреза под смеситель для Жидкого камня
          cutWashing:         res.data.cutWashing,        // Стоимость выреза под мойку для Кварца и Натурального камня
          cutWashingLiquid:   res.data.cutWashingLiquid,  // Стоимость выреза под мойку для Жидкого камня
          cutWashingAcrylic:  res.data.cutWashingAcrylic, // Стоимость выреза под мойку для Акрилового камня
          kernelLiquid:       res.data.kernelLiquid,      // Стоимость стержней под Горячее Жидкого камня
          cutGlue:            res.data.cutGlue,           // Стоимость выреза под мойку, подклейка снизу для Кварца и Натурального камня
          cutGlueLiquid:      res.data.cutGlueLiquid,     // Стоимость выреза под мойку, подклейка снизу для Жидкого камня
          cutGlueAcrylic:     res.data.cutGlueAcrylic,    // Стоимость выреза под мойку, подклейка снизу для Акрилового камня
          cutStove:           res.data.cutStove,          // Стоимость выреза под варочную панель для Кварца и Натурального камня 
          cutStoveLiquid:     res.data.cutStoveLiquid,    // Стоимость выреза под варочную панель для Жидкого камня 
          cutStoveAcrylic:    res.data.cutStoveAcrylic,   // Стоимость выреза под варочную панель для Акриловый камень
          metering:           res.data.metering,          // Стоимость замера
          moikaQuartzArr:     res.data.quartzMoika,       // данные о мойках из кварца и натур. камня
          moikaLiquidArr:     res.data.liquidMoika,       // данные о мойках для жидкого камня
          sinkLiquidArr:      res.data.liquidSink,        // данные о раковинах жидкого камня
          sinkQuartzArr:      res.data.quartzSink,        // данные о раковинах кварцевого камня
          sinkAcrilicArr:      res.data.acrilicSink,        // данные о раковинах акрилового камня
          moikaAcrilicArr:    res.data.acrilicMoika,      // данные о мойках из Акрилового камня
          //euro:                (res.data.euro*1.12).toFixed(1),              // евро
         // usd:                (res.data.usd*1.12).toFixed(1),               // доллар
          euro:               Math.round(res.data.euro*1.05),              // евро
          usd:                Math.round(res.data.usd*1.05),               // доллар
          //unit:    res.data.unit
        };
      })
      .catch(err => {
        error(console.log("Ошибка ответа сервера."));
      });
  },  
  
};
</script>

<style>
</style>