const commonUtil = {
  isAllLoaded(scope, cb) {
    var t_img; // 定时器
    var isLoad = true; // 控制变量

    // 判断图片加载状况，加载完成后回调
    return isImgLoad(cb);

    // 判断图片加载的函数
    function isImgLoad(callback) {
      // 查找所有图片，迭代处理
      $(scope).find('img').each(() => {
        // 找到为0就将isLoad设为false，并退出each
        if (this.height === 0) {
          isLoad = false;
          return false;
        }
      });
      // 为true，没有发现为0的。加载完毕
      if (isLoad) {
        clearTimeout(t_img); // 清除定时器
        // 回调函数
        callback(scope);
        // 为false，因为找到了没有加载完成的图，将调用定时器递归
      } else {
        isLoad = true;
        t_img = setTimeout(() => {
          isImgLoad(callback); // 递归扫描
        }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
      }
    }
  },
  myScroll() {
    var that = this;
    Vue.directive('scroll', (value) => {
      if (value) {
        that.isAllLoaded(value, (value) => {
          new IScroll(value);
        });
      }
    });
  },
};

export default commonUtil;
