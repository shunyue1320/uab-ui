<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div v-if="modal === 'underline'" class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UTabsHead',
    inject: ['eventBus'],
    props: {
      modal: {
        type: String,
        default: 'underline'
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (item, vm) => {
        this.updateLinePosition(vm)
      })
    },
    methods: {
      updateLinePosition (selectedVm) {
        if (!this.$refs.line) return

        let {width, left} = selectedVm.$el.getBoundingClientRect()
        let {left: left2} = this.$refs.head.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - left2}px`
      }
    }
  }
</script>
<style scoped lang="scss">
 @import "../scss/variables.scss";
  $tab-height: 40px;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 3px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>