<template>
  <div class="home">
    <na-table :column="column" checkbox index>
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)"
          >编辑</el-button
        >
        <na-button type="danger" @click="handleDelete(slot.data)"
          >删除</na-button
        >
      </template>
    </na-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      column: [
        {
          label: "标题",
          prop: "title",
          type: "function",
          callback: (row) => {
            if (row.id === 1) {
              return `<a href="https://www.baidu.com">${row.title}</a>`;
            }
            return `<span>${row.title}</span>`;
          },
        },
        // { label: "日期", prop: "date", Width: 500 },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "性别", prop: "sex" },
        {
          label: "操作",
          prop: "operation",
          type: "slot",
          slot_name: "operation",
          prop: "operation",
        },
      ],
    };
  },
  components: {
    naTable: () => import("../components/table/index.vue"),
    naButton: () => import("../components/button/index.vue"),
  },
  methods: {},
};
</script>
