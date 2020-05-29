<template>
  <b-container>
    <b-row>
      <b-col>
        <button @click="initData">init data</button>
        <button @click="changeData">change data</button>
        <tree
          :data="treeData"
          :options="treeOptions"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  let count = 0;
  import LiquorTree from 'liquor-tree'

  export default {
    name: "liquor-tree",
    props: {
      list: Array
    },
    data: function () {
      const treeData = [
        {text: 'Item 1', state: {visible: true}},
        {text: 'Item 2', data: {customProp: 'AAAAAAAAAAAAAAAAAAAA'}},
        {text: 'Item 3', state: {selected: true}},
        {text: 'Item 4'},
        {
          text: 'Item 5', children: [
            {text: 'Item 5.1', state: {disabled: true}},
            {text: 'Item 5.2', state: {selectable: false}}
          ]
        }
      ]
      return {
        treeData: treeData,
        treeOptions: {}
      };
    },
    mounted() {
      // this.tree = this.$refs.tree;
    },
    methods: {
      initData() {
        this.treeData = [];
        console.log('initData', this.treeData)
      },
      changeData() {
        this.treeData = [
          {text: 'Itemms 1', state: {visible: true}},
          {text: 'Itemm 4'},
        ]
        console.log('changeData', this.treeData)
      }
    },
    components: {
      [LiquorTree.name]: LiquorTree
    }
  }
</script>
