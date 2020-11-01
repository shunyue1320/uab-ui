<template>
  <div>
    <u-button class="mr ic-light" icon="ashbin">默认按钮</u-button>
    <u-button class="bg-orange ic-light" icon="3column">默认按钮</u-button>
    <u-button icon="3column ic-light" loading>默认按钮</u-button>
    <u-button-group>
      <u-button icon="ashbin">默认按钮</u-button>
      <u-button icon="3column">默认按钮</u-button>
    </u-button-group>
    <u-row class="grid-row" gutter="10">
      <u-col span="8">
        <div class="grid-col">8</div>
      </u-col>
      <u-col span="6">
        <div class="grid-col">6</div>
      </u-col>
      <u-col span="4">
        <div class="grid-col">4</div>
      </u-col>
      <u-col span="4">
        <div class="grid-col">4</div>
      </u-col>
      <u-col span="2">
        <div class="grid-col">2</div>
      </u-col>
    </u-row>
    <u-input placeholder="请输入内容"></u-input>
    <u-input value="默认内容"></u-input>
    <u-input disabled value="禁止输入"></u-input>
    <u-input error="用户名不低于两个字"></u-input>

    <!--可支持数据绑定-->
    <u-input v-model="value"></u-input>
    <p>value: {{value}}</p>

    <u-tabs :selected="selected">
      <u-tabs-head modal="fill">
        <u-tabs-item name="1">标题一</u-tabs-item>
        <u-tabs-item disabled name="2">标题二</u-tabs-item>
        <u-tabs-item name="3" active>标题三</u-tabs-item>
      </u-tabs-head>
      <u-tabs-body>
        <u-tabs-pane name="1">内容1</u-tabs-pane>
        <u-tabs-pane name="2">内容2</u-tabs-pane>
        <u-tabs-pane name="3">内容3</u-tabs-pane>
      </u-tabs-body>
    </u-tabs>

    <u-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <u-header style="height: 50px; background:#9E91F2;">
        header
      </u-header>
      <u-layout>
        <u-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </u-sider>
        <u-content style="height: 100px; background:#7B62D9;">
          content
        </u-content>
      </u-layout>
      <u-footer style="height: 50px; background:#9E91F2;">
        footer
      </u-footer>
    </u-layout>

    <u-popover>
      <u-button>上方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="bottom">
      <u-button>下方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="left">
      <u-button>左边弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="right">
      <u-button>右边弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>

    <u-table
      :data="tableData"
      style="width: 100%">
      <u-table-column
        prop="date"
        label="日期"
        width="180">
      </u-table-column>
      <u-table-column
        prop="name"
        label="姓名"
        width="180">
      </u-table-column>
      <u-table-column
        prop="address"
        label="地址">
      </u-table-column>
    </u-table>
  </div>
</template>

<script>
  import UButton from './button/button'
  import UButtonGroup from './button/button-group'
  import URow from './grid/row'
  import UCol from './grid/col'
  import UInput from './input/input'

  import UTabs from './tabs/tabs'
  import UTabsHead from './tabs/tabs-head'
  import UTabsBody from './tabs/tabs-body'
  import UTabsItem from './tabs/tabs-item'
  import UTabsPane from './tabs/tabs-pane'

  import UContent from './layout/content'
  import UFooter from './layout/footer'
  import UHeader from './layout/header'
  import ULayout from './layout/layout'
  import USider from './layout/sider'

  import UPopover from './popover/popover'


  import UTable from './table/table'
  import UTableColumn from './table/table-column'

  export default {
    components: { UButton, UButtonGroup, URow, UCol, UInput,
    UTabs,
    UTabsHead,
    UTabsBody,
    UTabsItem,
    UTabsPane,

    UContent,
    UFooter,
    UHeader,
    ULayout,
    USider,

    UPopover,

    UTable,
    UTableColumn
    },
    data() {
      return {
        value: '',
        selected: '1',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>

.grid-row {
  margin: 10px 0;
}

.grid-col {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>