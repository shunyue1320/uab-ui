<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ULayout',
    data () {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'USider') {
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss">
  @import "../scss/variables.scss";
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>