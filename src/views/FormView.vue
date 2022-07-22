<template>
  <div>
    <na-form :item="formItem" :button="formButton"></na-form>
  </div>
</template>

<script>
export default {
  name: "FormView",
  components: {
    naForm: () => import("../components/form/index.vue"),
  },
  data() {
    return {
      formButton: [
        { label: "提交", key: "submit", type: "primary" },
        { label: "编辑", key: "cancel", type: "danger" },
      ],
      formItem: [
        {
          label: "分类名称:",
          type: "demoInput",
          prop: "name",
          required: true,
        },
        {
          label: "状态:",
          type: "demoSelect",
          prop: "status",
          required: true,
          initRequest: true,
          props: {
            label: "class_name",
            value: "id",
          },
          url: "/classroom/",
          basePath: "/api",
          method: "GET",
        },
      ],
    };
  },
};
</script>
<style></style>
