<template>
  <th class="u-title-body">{{ label }}</th>
</template>

<script>
  export default {
    name: "UTableColumn",
    props: {
      prop: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      width: {
        type: String,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>