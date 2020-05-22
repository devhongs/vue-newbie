import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AgGrid from "../views/AgGrid.vue";
import Ax5Grid from "../views/Ax5Grid.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/tree",
      name: "Tree",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "tree" */ "../views/Tree.vue")
    },
    {
      path: "/aggrid",
      name: "Ag Grid",
      component: AgGrid
    },
    {
      path: "/ax5grid",
      name: "Ax5 Grid",
      component: Ax5Grid
    }
  ]
});
