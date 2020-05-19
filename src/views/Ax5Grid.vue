<template>
  <div>
    <iframe
            src="https://172.29.71.102/mc"
            style="display:block; width:100vw; height: 90vh; border: none"
    ></iframe>
<!--    <div data-ax5grid="first-grid" data-ax5grid-config='{name:"my first grid"}' style="height: 100%;"></div>-->
  </div>
</template>

<script>
  export default {
    name: "Ax5Grid",
    components: {
    },
    beforeMount() {
      // var firstGrid = new ax5.ui.grid();
      // firstGrid.setConfig({
      //   target: $('[data-ax5grid="first-grid"]'),
      //   frozenColumnIndex: 2,
      //   frozenRowIndex: 0,
      //   showLineNumber: true,
      //   showRowSelector: true,
      //   multipleSelect: true,
      //   lineNumberColumnWidth: 40,
      //   rowSelectorColumnWidth: 28,
      //   sortable: true,
      //   multiSort: false,
      //   header: {
      //     align: "center",
      //     columnHeight: 28
      //   },
      //   body: {
      //     align: "center",
      //     columnHeight: 28,
      //     onClick: function () {
      //       // console.log(this);
      //       this.self.select(this.dindex);
      //     }
      //   },
      //   columns: [
      //     {
      //       key: "a",
      //       label: "필드A",
      //       width: 80,
      //       styleClass: function () {
      //         return "ABC";
      //       },
      //       enableFilter: true,
      //       align: "center"
      //     },
      //     {key: "b", label: "필드B", align: "center"},
      //     {
      //       key: undefined, label: "필드C", columns: [
      //         {key: "price", label: "단가", formatter: "money", align: "right"},
      //         {key: "amount", label: "수량", formatter: "money", align: "right"},
      //         {key: "cost", label: "금액", align: "right", formatter: "money"}
      //       ]
      //     },
      //     {key: "saleDt", label: "판매일자", align: "center"},
      //     {key: "customer", label: "고객명"},
      //     {key: "saleType", label: "판매타입"}
      //   ]
      // });
    }
  };
</script>
