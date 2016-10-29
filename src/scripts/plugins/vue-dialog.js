import dialog from './dialog.vue';
let VueDialog = () => {};
VueDialog.install = (Vue,options) => {
	Vue.component('vue-dialog',Vue.extend(dialog));
};
export default VueDialog;