<template>
  <div class="u-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'UabButtonGroup',
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`u-button-group 的子元素应该全是 u-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../scss/variables";
.u-button-group {
  display: inline-flex;

  > .u-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-radius: $border-radius 0 0 $border-radius;
    }

    &:last-child {
      border-radius: 0 $border-radius $border-radius 0
    }

    &:hover {
      position: relative;
      z-index: 1
    }
  }
}
</style>