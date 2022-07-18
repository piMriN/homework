<template>
  <div class="home">
    <na-button>默认按钮</na-button>
    <na-button type="primary" round size="small" suffix='user'>成功按钮</na-button>
    <na-button type="danger" round border>危险按钮</na-button>
    <na-button type="warning" border size="mini">警告按钮</na-button>
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
