
const api = {
  get: () => {
    console.log("Api Plugin : get method");
  }
};

export default {
  install(Vue) {
    console.log("Api Plugin : install");
    Vue.prototype.$_API = api;
  }
};