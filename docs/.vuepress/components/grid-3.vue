<template>
  <div style="mt">
    <u-row class="demoRow" gutter="10">
      <u-col span="8">
        <div class="demoCol">8</div>
      </u-col>
      <u-col span="8" offset="8">
        <div class="demoCol">8</div>
      </u-col>
    </u-row>
    <u-row class="demoRow" align="center">
      <u-col span="6">
        <div class="demoCol">6</div>
      </u-col>
    </u-row>
    <u-row class="demoRow" gutter="10">
      <u-col span="4">
        <div class="demoCol">4</div>
      </u-col>
      <u-col span="4" offset="16">
        <div class="demoCol">4</div>
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
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
