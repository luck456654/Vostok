import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: '9cae474e-4add-418c-838d-964419672944',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
  }; // настройки плагина

Vue.use(YmapPlugin, settings);