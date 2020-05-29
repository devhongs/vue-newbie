<template>
  <div id="app">
    <ag-grid-vue style="width: 100%; height: 500px;"
                 class="ag-theme-alpine"
                 :columnDefs="columnDefs"
                 :frameworkComponents="frameworkComponents"
                 :rowData="rowData">
    </ag-grid-vue>
  </div>
</template>

<script>
  import {AgGridVue} from "ag-grid-vue";
  import ChildMessageRenderer from "./ChildMessageRenderer";

  export default {
    name: 'AgGrid',
    data() {
      return {
        columnDefs: null,
        rowData: null,
        frameworkComponents: null,
      }
    },
    components: {
      AgGridVue
    },
    beforeMount() {
      this.columnDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'},
        {
          headerName: 'Child/Parent',
          field: 'model',
          cellRenderer: 'childMessageRenderer',
          colId: 'params',
          width: 180,
        },
      ];
      this.rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
      ];
      this.frameworkComponents = {
        childMessageRenderer: ChildMessageRenderer,
      };
    }
  }
</script>
