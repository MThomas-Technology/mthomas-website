export const state = () => ({
  activeService: 0,
})

export const mutations = {
  setActiveService(state, payload) {
    state.activeService = payload
  },
}
