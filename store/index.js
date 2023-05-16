
export const state = (location) => ({
  ismobile: 'pc',
  domain: 'https://стильный-камень.рф/',
  visitedQuartz:0,
  visitedGranit:0,
  pageNumber:1,
  arrWashing: [],
  procentCalc: -1,
  directionProcentCalc: '+'
  })

export const mutations = {
  SET_DEVICE_TYPE(state) {
    state.ismobile = this.$ua.deviceType()
  },
  changeQuartz(state, IsVisitedQuartz) {
    state.visitedQuartz = IsVisitedQuartz
  },
  changeWashing(state, value) {
    state.arrWashing = value
  },
  changeGranit(state, IsVisitedGranit) {
    state.visitedGranit = IsVisitedGranit
  },
  changePage (state, NewPage){
    state.pageNumber = NewPage;
  },
  changeProcent (state, value){
    state.procentCalc = value[0];
    state.directionProcentCalc = value[1]
    localStorage.setItem("procent", JSON.stringify(value[0]));
    localStorage.setItem("direction", value[1]);
  },
}

export const getters = {
 isMobile: state => state.ismobile,
 VisitedQuartz: state => state.visitedQuartz,
 VisitedGranit: state => state.visitedGranit,
 PageNumber: state => state.pageNumber,
}

export const actions = {
  async nuxtServerInit({ commit },{req, app}){
    const deviceType = this.$ua.deviceType()
    commit('SET_DEVICE_TYPE', deviceType)
  },
  async VisitQuartz({ commit }, IsVisitedQuartz) {
    commit('changeQuartz', IsVisitedQuartz)
  },
  async VisitGranit({ commit }, IsVisitedGranit) {
    commit('changeGranit', IsVisitedGranit)
  },
  async changeNumberPage({ commit }, NewPage){
    commit('changePage',  NewPage)
  },
}
