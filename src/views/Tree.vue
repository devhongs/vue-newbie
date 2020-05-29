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
              class="ag-theme-alpine-dark"
              :gridOptions="gridOptions"
              :columnDefs="columnDefs"
              :rowData="rowData"
              @grid-ready="gridReady"
            >
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
    return {
      list: {},
      treeInstance: {},
      treeSelectedItems: [],
      gridOptions: null,
      columnDefs: [
        { headerName: '사용자 ID', field: 'userNo', width: 150 },
        { headerName: '이름', field: 'userName', width: 150 },
        { headerName: '부서', field: 'groupName', width: 150 },
      ],
      rowData: null,
    };
  },
  methods: {
    collapseHandler() {
      this.treeInstance.initData();
      // this.treeInstance.collapse();
      // console.log("collapseHandler", this.treeInstance);
      // this.treeData = this.getData();
    },
    getSelectedItemsHandler() {
      const items = this.treeInstance.getSelectedItems();
      console.log("getSelectedItemsHandler", items);
    },
    treeChangeHandler(items) {
      //console.log(items);
      // this.rowData = items;
    },
    // 22333
    drop(event) {
      console.log("drop", event);
      event.preventDefault();
      // 대상의 id를 가져와 이동한 대상 DOM 요소를 추가합니다.
      // Get the id of the target and add the moved element to the target's DOM
      const data = event.dataTransfer.getData("application/my-app");
      const item = JSON.parse(data);
      this.addRowData(item);
      console.log("event.getdata", item, this.gridOptions);
    },
    //
    // Grid
    //
    gridReady(params) {
      // console.log("----------- gridReady", params);
      // this.addGridDropZone(params);
    },
    addRowData(item) {
      const api = this.gridOptions.api;
      const transaction = {
        add: [item]
      };
      api.applyTransaction(transaction);
    },
    getData() {
      return [
        {
          text: "Dept A",
          cd: "A_cd",
          nm: "A_name",
          children: [
            {
              text: "Dept A1",
              cd: "A1_cd",
              nm: "A1_name"
            }
          ]
        },
        {
          text: "Dept B",
          cd: "B_cd",
          nm: "B_name",
          children: [
            {
              text: "Dept B1",
              cd: "B1_cd",
              nm: "B1_name"
            },
            {
              text: "Dept B2",
              cd: "B2_cd",
              nm: "B2_name"
            }
          ]
        }
      ];
    }
  },
  beforeMount() {
    this.rowData = [];
    this.gridOptions = {};
  },
  mounted() {
    this.treeInstance = this.$refs.treeInstance
    // console.log("mounted...");
    // collapseHandler: () => {
    //   console.log('collapseHandler');
    // }
  },
};
</script>
