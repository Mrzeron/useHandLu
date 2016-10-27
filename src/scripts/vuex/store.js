<<<<<<< HEAD


const state =  require('./state.js');
const mutations =  require('./mutations.js');

console.log(state );
console.log( mutations);
=======
const state = {
  tabIndex: 0
}

const mutations = {
  CHANGETAB (state, currentTabindex) {
    state.tabIndex = currentTabindex;
  }
}
>>>>>>> master

export default new Vuex.Store({
  state,
  mutations
<<<<<<< HEAD
})
=======
});
>>>>>>> master
