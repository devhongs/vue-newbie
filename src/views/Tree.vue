<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <h3>Tree Component</h3>
            <hr class="my-3" />
            <div>
              <button @click="collapseHandler">collapse</button>
              <button @click="getSelectedItemsHandler">selected Items</button>
            </div>
            <hr class="my-3" />
            <js-tree ref="treeInstance" v-on:change="treeChangeHandler" />
          </div>
        </b-col>
        <b-col>
          <div @dragover.prevent @drop="drop">
            <h3>Tree Result</h3>
            <ag-grid-vue
              id="aggrid"
              style="width: 100%; height: 500px;"
              class="ag-theme-alpine"
              :columnDefs="columnDefs"
              :rowData="rowData"
              @grid-ready="gridReady"
              @drag-started="dragStarted"
            >
              <ag-grid-column
                field="cd"
                headerName="Dept Code"
                :rowDrag="true"
                :width="120"
              >
              </ag-grid-column>
              <ag-grid-column
                field="nm"
                headerName="Dept Name"
                :width="100"
              >
              </ag-grid-column>
            </ag-grid-vue>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import jsTree from "@/components/js-tree";
import { AgGridVue } from "ag-grid-vue";
export default {
  name: "Tree",
  components: {
    jsTree,
    AgGridVue
  },
  data: () => {
    const data = {};
    return {
      list: data,
      treeInstance: {},
      treeSelectedItems: [],
      columnDefs: null,
      rowData: null
    };
  },
  methods: {
    gridReady(params) {
      // console.log("----------- gridReady", params);
      // this.addGridDropZone(params);
    },
    addGridDropZone(params) {
      var grid = document.querySelector("#aggrid2");
      console.log("addGridDropZone", grid);
      var dropZone = {
        getContainer: function() {
          return grid;
        },
        onDragStop: function(params) {
          console.log("onDragStop", params);
          // addRecordToGrid(side.toLowerCase(), params.node.data);
        }
      };
      params.api.addRowDropZone(dropZone);
    },
    dragStarted() {
      console.log("----------- dragStarted");
    },
    gridDragOver(event) {
      console.log("----------- gridDragOver", event);
    },
    collapseHandler() {
      this.treeInstance.collapse();
      console.log("collapseHandler", this.treeInstance);
    },
    getSelectedItemsHandler() {
      const items = this.treeInstance.getSelectedItems();
      console.log("getSelectedItemsHandler", items);
    },
    treeChangeHandler(items) {
      console.log(items);
      this.rowData = items;
    },
    // 22333
    drop(event) {
      console.log("drop", event);
    }
  },
  beforeMount() {
    this.rowData = [];
  },
  mounted() {
    this.treeInstance = this.$refs.treeInstance;
    // console.log("mounted...");
    // collapseHandler: () => {
    //   console.log('collapseHandler');
    // }
  }
};
</script>