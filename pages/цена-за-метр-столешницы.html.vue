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
      :status=1
    />    
    <div class="text">
        <h2>Заказать столешницу по размерам</h2>
<p>На сегодняшний день среди россиян преобладает тенденция не покупать готовые кухни, а заказывать их по персональным меркам у специализирующихся на заказной мебели компаниях. "Стильный камень" имеет собственное производство и многолетный опыт 
в изготовлении качественной продукции.</p>
<h2>Как можно рассчитать стоимость столешницы</h2>
<p>При заказе индивидуальной кухни вы можете быть уверены, что все шкафчики и полочки будут подобраны специалистами по вашему желанию и тщательно подогнаны под размеры кухонного помещения. И, разумеется, никакая кухня не может считаться полноценной без столешницы.
Наверное, излишним будет упоминать о преимуществах данного изделия из искусственного камня. Надежность и выгода данного материала уже покорила многих потребителей. Другой вопрос: как не ошибиться в размерах столешницы? И, главное, как правильно высчитать сумму за квадратный метр, которая может быть затрачена на этот важный для кухни атрибут?
Для того чтобы рассчитать столешницу из искусственного камня, вам необходимо тщательным образом произвести замеры нижних шкафов. Кроме этого, не следует брать во внимание вырезы под мойку и варочную панель. Немаловажно также учитывать и форму самого изделия.
<br>Столешницы из искусственного камня представлены в трех видах:<br>
1.	Прямая.<br>
2.	Г-образная.<br>
3.	П-образная.</p>
<h2>Цена за метр столешницы</h2>
<p>Для того чтобы ваша кухня приобрела гармоничный и завершенный вид, помимо правильно вычисленной площади столешницы, нужно обратить внимание еще на несколько моментов. Так, чтобы максимально точно рассчитать стоимость столешницы, необходимо учесть:
<br>1.	Площадь этой части стола.
<br>2.	Тип столешницы.
<br>3.	Цвет изделия.
<br>4.	Длину и тип пристеночного бортика.
<br>5.	Вырез под варочную панель.
<br>6.	Вырез под мойку.
<br>7.	Наличие или отсутствие самой мойки, которая тоже может быть выполнена из искусственного камня.
<br>8.	Стоимость установки столешницы, которую обязательно должны производить профессионалы во избежание различных казусов.</p>
<h2>Калькулятор столешницы он-лайн</h2>
<p>Для простоты расчетов на сайте существует специальный калькулятор столешниц из камня, который поможет вам не ошибиться в вычислениях. 
Вам достаточно только правильно ввести габариты – и калькулятор высчитает сумму за погонный метр, необходимую для изготовления вашего изделия. 
Однако следует помнить, что эта цена – далеко не окончательная. В стоимость войдут также замер и доставка изделия до Москвы, Рязани, Владимира и других районов.
Но не нужно пугаться: цены вполне приемлемы, и к тому же стоит ли экономить на надежности, красоте и удобстве? 
Именно эти качества вам подарит столешница из искусственного камня.</p>

    </div>
  </div>
</template>

<script>
import Calculator from "~/components/calculator.vue";

export default {
  components: {
    Calculator
  },
  head() { return {
      title:"Рассчитать с помощью калькулятора цену столешницы из камня в Москве",
      meta: [
        { name: 'description', hid: 'description', content: 'С помощью нашего калькулятора Вы можете с большой точностью рассчитать стоимость столешницы из камня.'},
        
      ],
    }},
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
          usd:                Math.round(res.data.usd*1.05),                 // доллар
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