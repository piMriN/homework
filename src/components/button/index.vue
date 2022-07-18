<template>
  <button
    class="na-button"
    :class="[theme, isRound, isBorder, isSize]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "index",
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
  },
  computed: {
    theme() {
      return this.type ? `na-button-${this.type}` : "";
    },
    isRound() {
      return this.round ? "is-round" : "";
    },
    isBorder() {
      return this.border ? "is-border" : "";
    },
    isSize() {
      return this.size ? `yang-button-${this.size}` : "";
    },
  },
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

  + .na-button {
    margin-left: 14px;
  }
}
.na-button-medium {
  height: 38px;
}
.na-button-small {
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.na-button-mini {
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.na-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.na-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #409eff;
  }
}
.na-button-success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #00d100;
  }
}
.na-button-danger {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.na-button-warning {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #f56c6c;
  }
}

// 圆角
.is-round {
  border-radius: 100px;
}
</style>
