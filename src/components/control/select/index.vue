<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent">
      <el-option
        v-for="item in options"
        :key="item[props.value]"
        :value="item[props.value]"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import { props, mixin } from "../basis";
export default {
  name: "SelectComponent",
  mixins: [mixin],
  props: {
    ...props,
  },
  watch: {},
  data() {
    return {
      val: "",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
