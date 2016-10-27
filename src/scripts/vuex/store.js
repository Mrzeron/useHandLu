const state = {
  tabIndex: 0
}

const mutations = {
  CHANGETAB (state, currentTabindex) {
    state.tabIndex = currentTabindex;
  }
}

export default new Vuex.Store({
  state,
  mutations
});
