import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import lodash from "lodash";
// import ax5core from 'ax5core';
// import ax5uiGrid from 'ax5ui-grid';
import globalComponent from '@/components/global-component';

Vue.config.productionTip = false;

Vue.component(globalComponent.name, globalComponent);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// Vue.use({ name: 'ax5core' , ax5core: ax5core });
// Vue.use({ name: 'ax5uiGrid' , ax5uiGrid: ax5uiGrid });
