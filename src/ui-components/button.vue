<template>
  <el-button class="ui-button" v-bind=$attrs v-on="$listeners">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </el-button>
</template>

<script>
export default {
  name: 'ui-button',
};
</script>

<style lang="less" scoped>

</style>
