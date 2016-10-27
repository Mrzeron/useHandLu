export const tabChanger = function({dispatch, state}, tabIndex) {
  dispatch('CHANGETAB', tabIndex);
};
