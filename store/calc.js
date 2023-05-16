export const state = (location) => ({
    distance: 0,
    KoeffSkidka: 1
})
export const mutations = {
    setDistance(state, value) {
        state.distance = value
    },
    setKoeffSkidka(state, value) {
        state.KoeffSkidka = value
    },
}
export const actions = {
    async setDistance({ commit }, value) {
        commit('setDistance', value)
      },
}