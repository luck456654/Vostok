export const state = (location) => ({
  domen: 'https://stroivostok.ru',
  apiDomen: 'https://api.stroivostok.ru',
  stopOverflow: false, // запрет на прокрутку при открытии модального окна
  locales: ['moscow','aprelevka','balashiha','bronnicy','vereya','vidnoe','volokolamsk','voskresensk','vysokovsk','golicyno','dedovsk','dzerzhinskij','dmitrov','dolgoprudnyj','domodedovo','drezna','dubna','egorevsk','zhukovskij','zarajsk','zvenigorod','ivanteevka','istra','kashira','klin','kolomna','korolyov','kotelniki','krasnoarmejsk','krasnogorsk','krasnozavodsk','krasnoznamensk','kubinka','kurovskoe','likino-dulyovo','lobnya','losino-petrovskij','luhovicy','lytkarino','lyubercy','mozhajsk','mytishchi','naro-fominsk','noginsk','odincovo','ozyory','orekhovo-zuevo','pavlovskij-posad','peresvet','podolsk','protvino','pushkino','pushchino','ramenskoe','reutov','roshal','ruza','sergiev-posad','serpuhov','solnechnogorsk','staraya-kupavna','stupino','taldom','fryazino','himki','hotkovo','chernogolovka','chekhov','shatura','shchyolkovo','ehlektrogorsk','ehlektrostal','ehlektrougli','yahroma','almetevsk','arzamas','armavir','arhangelsk','astrahan','balakovo','batajsk','belgorod','berezniki','bryansk','velikij-novgorod','vladikavkaz','vladimir','volgograd','volgodonsk','volzhskij','vologda','voronezh','groznyj','derbent','evpatoriya','elec','essentuki','zheleznogorsk','zelenodolsk','ivanovo','izhevsk','joshkar-ola','kazan','kaliningrad','kaluga','kamyshin','kaspijsk','kerch','kirov','kislovodsk','kovrov','kostroma','krasnodar','kursk','lipeck','majkop','mahachkala','murmansk','murom','naberezhnye-chelny','nazran','nalchik','nevinnomyssk','neftekamsk','nizhnekamsk','nizhnij-novgorod','novomoskovsk','novorossijsk','novocheboksarsk','novocherkassk','novoshahtinsk','obninsk','oktyabrskij','oryol','penza','perm','petrozavodsk','pskov','pyatigorsk','rostov-na-donu','rybinsk','ryazan','salavat','samara','sankt-peterburg','saransk','saratov','sevastopol','severodvinsk','simferopol','smolensk','sochi','stavropol','staryj-oskol','sterlitamak','syzran','taganrog','tambov','tver','tolyatti','tula','ulyanovsk','ufa','hasavyurt','cheboksary','cherepovec','cherkessk','shahty','elista','engels','yaroslavl'],
  //sityFolder: 'vereya',
  sityFolder: '', // папка с название города
  nameCity: '',
  inCity: 'в г. Москве',
  ymInit: false, // инициализация яндекс метрики
})

export const mutations = {
  // запрет на прокрутку при открытии модального окна
  changeOverflow (state, value){
      state.stopOverflow = value;
  },
  YM_SET_INIT(state) {
    state.ymInit = true;
  },
}

export const actions = {
  async nuxtServerInit({ commit, state }, NewMenu){
      //console.log('URL: ' + this.$router.history.current.path)
      let tempArr = this.$router.history.current.path.split('/');
      state.sityFolder = tempArr[1] && state.locales.includes(tempArr[1]) ? '/' + tempArr[1] : ''; // папка с названиями городов
      //console.log(state.sityFolder)
      const mainData = await this.$axios.$get( state.apiDomen + '/api/main/city/CityNames.php?data=menu' + '&path=' + this.$router.history.current.path + '&one_city_nominative=' + tempArr[1]) // Обязательно делаем проверку авторизации пользователя по токену
      state.nameCity = mainData['nameCity'];
      if (state.sityFolder){
        state.inCity = mainData['inCity'];
      }
      commit('YM_SET_INIT', true)
  },
}
