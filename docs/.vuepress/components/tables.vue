<template>
  <div>
    <u-table :data="tableData">
      <u-table-column prop="date" label="日期" width="180"></u-table-column>
      <u-table-column prop="name" label="姓名" width="180"></u-table-column>
      <u-table-column prop="address" label="地址"></u-table-column>
    </u-table>
  </div>
</template>

<script>
  import UTable from '../../../src/table/table'
  import UTableColumn from '../../../src/table/table-column'

  export default {
    components: { UTable, UTableColumn },
    data() {
      return {
        tableData: [
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' }, 
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
      ]
      }
    }
  }
</script>
