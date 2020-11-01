<template>
  <svg class="u-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  import './svg.js'

  export default {
    name: 'UIcon',
    props: [ 'name', 'color' ]
  }
</script>

<style lang="scss" scoped>
  .u-icon {
    width: 1em;
    height: 1em;
    fill: white;
  }
</style>