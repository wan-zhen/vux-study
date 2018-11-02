import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 全域組件還沒辦法用 form vux 直接 import 打包过大问题临时解决方案 直接指定要引入的组件全路径
// 直接在組件 import 是可以直接用 vux 的
import XButton from "vux/src/components/x-button/index.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("XButton", XButton);
library.add(faCoffee);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
