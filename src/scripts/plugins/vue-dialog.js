import dialog from './dialog.vue';

const VueDialog = () => {};
VueDialog.install = (Vue, options) => {
  Vue.component('vue-dialog', Vue.extend(dialog));
};

export default VueDialog;
