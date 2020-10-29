<template>
  <svg class="u-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  import './svg'

  export default {
    name: 'UabIcon',
    props: [ 'name' ]
  }
</script>

<style lang="scss" scoped>
  .u-icon {
    width: 1em;
    height: 1em;
    fill:#fff;
  }
</style>