<template>
  <div id="app">
    <Header class="header-container"/>
    <Main class="main-container"/>
  </div>
</template>

<script>
  import Header from "@/layouts/Header";``
  import Main from "@/layouts/Main";

  export default {
    name: "App",
    components: {
      Header,
      Main
    }
  };
</script>

<style lang="scss">
  @import "./assets/styles/app.scss";
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
