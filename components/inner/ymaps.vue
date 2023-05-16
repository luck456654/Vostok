<template>
  <div>
    <h3>Впишите адрес в поле или укажите ваше местоположение на карте:</h3>
    <input type="text" @input="geocode(newInputAddress)"
        v-model="newInputAddress"
        placeholder="Введите адрес"
        class="form-control map_search">
    <yandex-map :coords="coords" :zoom="12" @click="onClick" @map-was-initialized="onInitMap" :controls="['fullscreenControl', 'zoomControl']"
                    :disable="['drag']">
      <ymap-marker :coords="coords" marker-id="123" hint-content="Ваше местоположение" />
    <!--  <ymap-marker
        :coords="zone_3"
        marker-id="3"
        marker-type="polygon"
        hint-content="Зона 3"
        :marker-fill="{color: '#7ee20c', opacity: 0.1}"
        :marker-stroke="{color: '#ff0000', width: 3}"
      />
      <ymap-marker
        :coords="zone_2"
        marker-id="2"
        marker-type="polygon"
        hint-content="Зона 2"
        :marker-fill="{color: '#0ff', opacity: 0.4}"
        :marker-stroke="{color: '#ff0000', width: 3}"
      />
      <ymap-marker
        :coords="zone_1"
        marker-id="1"
        marker-type="polygon"
        hint-content="Зона 1"
        :marker-fill="{color: '#f90', opacity: 0.5}"
        :marker-stroke="{color: '#ff0000', width: 3}"
      /> -->
    </yandex-map>
  </div>
</template>

<script>
import { loadYmap } from "vue-yandex-maps";
export default {
  data: () => ({
    newInputAddress: '',
    settings: {
      apiKey: '9cae474e-4add-418c-838d-964419672944',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
    },
    map: null,
    myMap: {},
    myRoute: {},
    zoneId: 0,
    coords: [55.552176, 39.743462],
    zone_1: [
      [
        [55.57559482079306, 39.49781459992969],
        [55.55982743437979, 39.50055090978923],
        [55.55571016164173, 39.56130821287354],
        [55.57541383347579, 39.57481851093829],
        [55.58913325063013, 39.5466342124944],
        [55.58690799935772, 39.51084875647253],
        [55.57559482079306, 39.49781459992969],
      ],
    ],
    zone_2: [
      [
        [55.57112819828633, 39.46597806081059],
        [55.54525867215842, 39.50464629886943],
        [55.54113135940555, 39.58204421099039],
        [55.573506307503, 39.61256199418558],
        [55.59889161620284, 39.58031240172911],
        [55.6030186080488, 39.49506365137348],
        [55.57112819828633, 39.46597806081059],
      ],
    ],
    zone_3: [
      [
        [55.61392649664545, 39.4097360393178],
        [55.57625557053036, 39.38365053059654],
        [55.50610987556068, 39.43332576685729],
        [55.48139148808234, 39.57306247803021],
        [55.50875265819472, 39.69881953488201],
        [55.56132524273664, 39.74213401358042],
        [55.65996456042888, 39.65841539036931],
        [55.68093555557876, 39.55090019776829],
        [55.66019287061575, 39.44555393034295],
        [55.61392649664545, 39.4097360393178],
      ],
    ],
  }),
  async mounted (){
    const settings = { lang: "ru_RU" };
    //console.log(ymaps); // здесь доступен весь функционал ymaps
    await loadYmap(settings);
    var myMap = this.myMap;
  },
  methods: {
    geocode(request){
      var TempgeoCoords = []
        var myMap = this.myMap;
      ymaps.geocode(request).then( (res) => {
            var obj = res.geoObjects.get(0),
                error, hint;

            if (obj) {
                // Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
                switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
                    case 'exact':
                        break;
                    case 'number':
                    case 'near':
                    case 'range':
                        error = 'Неточный адрес, требуется уточнение';
                        hint = 'Уточните номер дома';
                        break;
                    case 'street':
                        error = 'Неполный адрес, требуется уточнение';
                        hint = 'Уточните номер дома';
                        break;
                    case 'other':
                    default:
                        error = 'Неточный адрес, требуется уточнение';
                        hint = 'Уточните адрес';
                }
            } else {
                error = 'Адрес не найден';
                hint = 'Уточните адрес';
            }

            // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
            if (error) {
                console.log(error);
                console.log(hint);
            } else {
                console.log(123)
                TempgeoCoords[0] = obj.geometry._coordinates[0]
                TempgeoCoords[1] = obj.geometry._coordinates[1]
                console.log(TempgeoCoords)
                localStorage.setItem("Address",  JSON.stringify(this.newInputAddress) )
                ymaps
                .route([[55.552176, 39.743462], TempgeoCoords], {
                  mapStateAutoApply: true,
                })
                .then((route) => {
                    console.log(myMap);
                    window.myRoute && myMap.geoObjects.remove(window.myRoute); // удаление предыдущего маршрута
                    myMap.geoObjects.add((window.myRoute = route)); // добавление нового маршрута
                  /*  route.getPaths().options.set({
                      strokeColor: '333'
                    });*/
                    var points = route.getWayPoints(),
                      lastPoint = points.getLength() - 1;
                    console.log('qwerty')
                    // Задаем тип, цвет и контент меток в начальной и конечной точках.
                    // начальная точка
                    points
                      .get(0)
                      .options.set({
                        iconLayout: "default#image",
                        iconImageHref: 'https://sablemarket.ru/assets/img/elements/cart/map-point2.png',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-5, -30]
                      });
                    // конечная точка
                    points
                      .get(lastPoint)
                      .options.set({
                        preset: "islands#blackStretchyIcon"
                      });
                    points
                      .get(lastPoint)
                      .properties.set({
                        layout: 'islands#blackStretchyIcon',
                        iconContent: "Точка доставки",
                        balloonContent: "Дистанция: " + route.getHumanLength(),
                      });

                    // расчет стоимости доставки
                    // let price = route.getLength() <= 3000 ? this.carPrice : Math.round(route.getLength()/1000*this.carPrice);
                    // отправка данных в this (заработало при использовании стрел.функ. ... .then((res) => {...})
                    //this.carDistance = Math.round( route.getLength() ); // Длина маршрута
                    localStorage.setItem("distance", JSON.stringify(Math.round( route.getLength() )) )
                    this.changeDistance(TempgeoCoords)
                  },
                  function (error) {
                   // alert("Невозможно построить маршрут");
                  }
                );
            }
        }, function (e) {
            console.log(e)
        })
    },
    onInitMap(map){
      this.myMap = map; // сохраним в локальную переменную, потребуется для обработчика что добавляет полигон
      console.log(this.myMap)
    },
    changeDistance(TempgeoCoords) {
      var multiRoute  = null
    multiRoute = new window.ymaps.multiRouter.MultiRoute({
    referencePoints: [
        [55.552542593768344, 39.73868745780318],
        TempgeoCoords
    ]
    })
    var distance = 0
    var initGetDistance = new Promise(function (resolve, reject) {
    multiRoute.model.events.add('requestsuccess', function(distance) {
        // Получение ссылки на активный маршрут.
        var activeRoute = multiRoute.getActiveRoute();
        // Вывод информации о маршруте.
        distance = activeRoute.properties.get("distance").value
        console.log(distance)
        distance = Math.round(distance/1000)
        resolve({distance: distance});
    });
    }).then( result => {
      this.$store.commit("calc/setDistance", result.distance);
    }
    )
    },
    onClick(e) {
    let currentCoords = e.get('coords')
    var multiRoute  = null
    multiRoute = new window.ymaps.multiRouter.MultiRoute({
    referencePoints: [
        [55.552542593768344, 39.73868745780318],
        currentCoords
    ]
})
var distance = 0
var initGetDistance = new Promise(function (resolve, reject) {
multiRoute.model.events.add('requestsuccess', function(distance) {
    // Получение ссылки на активный маршрут.
    var activeRoute = multiRoute.getActiveRoute();
    // Вывод информации о маршруте.
    distance = activeRoute.properties.get("distance").value
    console.log(distance)
    distance = Math.round(distance/1000)
    resolve({distance: distance});
});
}).then( result => {
  this.$store.commit("calc/setDistance", result.distance);
}
)

 // перемещение маркера */
      this.coords = e.get("coords");
  /*    let target = e.get("target");
      
      if (target.geometry && target.geometry.getType() === "Polygon") {
        console.log(target.properties.get("markerId"));
        this.zoneId = target.properties.get("markerId");
      } else {
        console.log("Вне зоны!");
        this.zoneId = -1;
      }
      */
    },
  },
};
</script>

<style scoped>
.ymap-container {
  height: 400px;
}
.map_search {
  margin-bottom: 10px;
}
</style>