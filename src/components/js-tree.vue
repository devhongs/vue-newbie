<template>
  <b-container>
    <b-row>
      <b-col>
        <v-jstree
          :data="treeData"
          class="b"
          no-dots
          show-checkbox
          allow-batch
          collapse
          whole-row
          draggable
          @item-click="itemClick"
          @item-toggle="itemToggle"
          @item-drag-start="itemDragStart"
          @item-drag-end="itemDragEnd"
          @item-drop-before="itemDropBefore"
          @item-drop="itemDrop"
          ref="tree"
        >
        </v-jstree>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h5>Drop Zone</h5>
        <button draggable="true" class="draggable">Drag this...</button>
        <div @dragover.prevent @drop="drop" style="background: beige; height: 200px"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VJstree from "vue-jstree";
export default {
  name: "js-tree",
  // template: '#item-template',
  props: {
    item: Object
  },
  data: function() {
    const treeData = [
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
    return {
      treeData,
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
    itemDragEnd() {
      // node, item, e22222sssssss
      //console.log('itemDragEnd');
    },
    itemDropBefore() {
      // node, item, draggedItem, e
      //console.log('itemDropBefore')
    },
    itemDrop() {
      // node, item, draggedItem, e
      //console.log('itemDrop')
    },
    drop(a,b) {
      // console.log('dropzone droped',a,b);
    }
  },
  components: {
    VJstree
  }
};
</script>
