<template>
  <button class="na-button na-button-primary is-round">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "index",
};
</script>

<style lang="scss" scoped>
.na-button {
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  height: 40px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
}
.na-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}
.na-button-success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
}
.na-button-danger {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}
.na-button-warning {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.na-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
