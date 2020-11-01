<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'UTabsItem',
    inject: ['eventBus'],
    data () {
      return {
        isActive: false
      }
    },
    props: {
      active: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes () {
        return {
          active: this.isActive,
          disabled: this.disabled,
          fill: this.$parent.modal === 'fill' && this.isActive
        }
      }
    },
    created () {
      this.isActive = this.active
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.isActive = name === this.name;
        })
      }
    },
    methods: {
      onClick () {
        if (this.disabled) { return }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    &.active {
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
    &.fill {
      background-color: $blue;
      color: $white;
    }
  }
</style>