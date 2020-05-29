<template>
    <b-container>
        <b-row>
            <b-col>
                <button @click="initData">init data</button>
                <button @click="changeData">change data2</button>
                <v-jstree
                        :data="asyncData"
                        :async="loadData"
                        ref="tree"
                >
                </v-jstree>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  let count = 0;
  import VJstree from "vue-jstree";
  import mockUtil from "@/utils/mock-util.js"

  export default {
    name: "js-tree",
    // template: '#item-template',
    props: {
      list: Array
    },
    data: function () {
      const loadData = function (oriNode, resolve) {
        var id = oriNode.data.id ? oriNode.data.id : 0
        setTimeout(() => {
          let data = []
          if (id > 200) {
            data = []
          }
          else {
            data = [
              {
                "text": "New Item 1..." + id, "isLeaf": id > 100
              },
              {
                "text": "New Item 2..." + id, "isLeaf": true
              }
            ]
          }
          resolve(data)
        }, 500)
      }
      return {
        treeData: mockUtil.getTreeData(),
        asyncData: [],
        loadData,
        selectedItems: []
      };
    },
    mounted() {
      this.tree = this.$refs.tree;
      //console.log("mouted...");
      // collapseHandler: () => {
      //   console.log('collapseHandler');
      // }
    },
    methods: {
      itemClick() {
        this.selectedItems = this.getSelectedItems();
        this.emitChange();
        // console.log(node.model.text + " itemClick !", this.getSelectedItems());
      },
      itemToggle(node) {
        //console.log(node.model.text + " itemToggle !");
      },
      collapse() {
        console.log("js-tree :: collapse", this.tree);
      },
      getSelectedItems() {
        const items = [];
        this.tree.handleRecursionNodeChilds(this.tree, node => {
          if (node.model && node.model.selected) {
            // console.log("handleRecursionNodeChilds", node);
            items.push(node.model);
          }
        });
        return items;
      },
      emitChange() {
        this.$emit("change", this.selectedItems);
      },
      itemDragStart(node, item, e) {
        e.dataTransfer.setData("application/my-app", JSON.stringify(item));
        // console.log('e.target.id', item, e.target.id);
        // node, item, e
        //console.log('itemDragStart');
      },
      drop(a, b) {
        // console.log('dropzone droped',a,b);
      },
      initData() {
        this.treeData = [];
      },
      changeData() {
        const data = [
          {
            text: "Dept CCCCC",
            cd: "A_cd",
            nm: "A_name",
            isLeaf: true,
            children: []
          },
          {
            text: "Dept B",
            cd: "B_cd",
            nm: "B_name",
            isLeaf: false,
            children: [
              {
                text: "Dept B1",
                cd: "B1_cd",
                nm: "B1_name"
              },
            ]
          }
        ];
        console.log(this.tree);
        this.treeData = data;
        this.tree.initializeData(data);
      },
      asyncfn() {
        console.log('async')
        return true
      }
    },
    components: {
      VJstree
    }
  };
</script>
