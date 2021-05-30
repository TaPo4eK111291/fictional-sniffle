<template>
  <div class="page-layout">
    <div class="header">
      <slot name="header">
        <div class="default-header" />
      </slot>
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLayout',
};
</script>

<style lang="less" scoped>
@content-max-width: 1080px;

.page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content, .header {
    max-width: @content-max-width;
    width: 100%;
  }

  .default-header {
    height: 60px;
  }
}
</style>
