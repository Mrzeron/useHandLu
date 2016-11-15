import searchBox from './searchBox.vue';

const VueSearchBox = () => {};

VueSearchBox.install = (Vue, options) => {
  Vue.component('vue-search-box', Vue.extend(searchBox));
};

export default VueSearchBox;
