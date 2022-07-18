<template>
  <div class="home">
    <na-button disabled>默认按钮</na-button>
    <na-button type="primary">成功按钮</na-button>
    <na-button type="danger">危险按钮</na-button>
    <na-button type="warning">警告按钮</na-button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    naButton: () => import("../components/button/index.vue"),
  },
};
</script>

<style></style>
