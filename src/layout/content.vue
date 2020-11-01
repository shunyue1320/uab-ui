<template>
  <div class="u-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'UContent'
  }
</script>

<style lang="scss" scoped>
  .u-content {
    flex-grow: 1;
  }
</style>