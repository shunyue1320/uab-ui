<template>
  <button class="u-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
    <u-icon v-if="loading" class="icon loading" name="loading"></u-icon>
    <u-icon v-if="icon && !loading" class="icon" :name="icon"></u-icon>
    <div class="u-button-content">
      <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from '../icon/icon.vue'

  export default {
    name: 'UabButton',
    components: {
      'u-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/variables";
  .u-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $white;
    background: $blue;
    color: $white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    transition: all .3s;
    &:hover { opacity: 0.8; }
    &:active { opacity: 0.5; }
    &:focus { outline: none; }
    > .u-button-content { order: 2; }
    > .icon { order: 1; margin-right: .1em; color: $white; }

    &.icon-right {
      > .u-button-content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .1em;}
    }
    .loading {
      @include spin;
    }
  }
</style>