<template>
  <div style="mt">
    <u-row v-for="rowIndex in [4, 3]" class="demoRow" gutter="10">
      <u-col v-for="colIndex in 24/(rowIndex * 2)" :key="colIndex" :span="rowIndex*2">
        <div class="demoCol">{{ rowIndex * 2 }}</div>
      </u-col>
    </u-row>
  </div>
</template>

<script>
import URow from '../../../src/grid/row'
import UCol from '../../../src/grid/col'

export default {
  components:{ URow, UCol }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>