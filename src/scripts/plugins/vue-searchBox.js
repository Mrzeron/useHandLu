import searchBox from './searchBox.vue';
let VueSearchBox = () => {};
VueSearchBox.install = (Vue,options) => {
	Vue.component('vue-search-box',Vue.extend(searchBox));
};
export default VueSearchBox;