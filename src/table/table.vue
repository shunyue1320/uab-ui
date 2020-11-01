<template>
  <div class="u-table">
    <table border="1">
      <colgroup>
        <col v-for="attr in childrenProps" :key="attr.label" span="1" style="">
      </colgroup>
      <tr class="u-table-title">
        <slot></slot>
      </tr> 
      <tr v-for="(row, index) in data" :key="index" class="u-table-body">
        <td v-for="attr in childrenProps" :key="attr.label">{{ row[attr.prop] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "UTable",
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        childrenProps: []
      }
    },
    mounted() {
      const childrenProps = []
      for (let node of this.$children) {
        childrenProps.push(node.$props)
      }
      this.childrenProps = childrenProps
    }
  }
</script>

<style lang="scss" scoped>

</style>