<template>
  <div>
    <u-button class="mr" icon="ashbin">默认按钮</u-button>
    <u-button class="bg-orange" icon="3column">默认按钮</u-button>
    <u-button icon="3column" loading>默认按钮</u-button>
    <u-button-group>
      <u-button icon="ashbin">默认按钮</u-button>
      <u-button icon="3column">默认按钮</u-button>
    </u-button-group>
  </div>
</template>

<script>
  import UButton from './button/button'
  import UButtonGroup from './button/button-group'

  export default {
    components: { UButton, UButtonGroup }
  }
</script>

<style lang="scss" scoped>

</style>