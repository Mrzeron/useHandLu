

const state =  require('./state.js');
const mutations =  require('./mutations.js');

console.log(state );
console.log( mutations);

export default new Vuex.Store({
  state,
  mutations
})