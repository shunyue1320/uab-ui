<template>
  <div class="u-wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
      @focus="$emit('focus',$event.target.value)">
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from '../icon/icon'

export default {
  name: 'UInput',
  components: {Icon},
  props: {
    placeholder:{
      type:String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.u-wrapper {
  font-size: $small-font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {margin-right: .5em;}
  > input {
    height: $input-height;
    border: solid 1px $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {border-color: $box-shadow-color}
    &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none}
    &[disabled], &[readonly] {border-color: #bbb;cursor: not-allowed}
  }
  &.error {
    > input {border-color: $red}
  }
  .icon-error {fill: $red;}
  .errorMessage {color: $red;}
}
</style>