<template>
  <div class="home">
    <na-table :column='column'></na-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      column:[
        {label:'日期',prop:'date'},
        {label:'姓名',prop:'name'},
        {label:'地址',prop:'address'},
        {label:'性别',prop:'sex'}
      ]
    };
  },
  components: {
    naTable: () => import("../components/table/index.vue"),
  },
  methods: {},
};
</script>
