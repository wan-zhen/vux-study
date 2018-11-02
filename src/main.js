import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 全域組件還沒辦法用 form vux 直接 import 打包过大问题临时解决方案 直接指定要引入的组件全路径
// 直接在組件 import 是可以直接用 vux 的
import XButton from "vux/src/components/x-button/index.vue";

Vue.component("XButton", XButton);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
