<template>
  <div style="margin-top: 10px">
    <u-tabs :selected="selected">
      <u-tabs-head modal="fill">
        <u-tabs-item name="1">标题一</u-tabs-item>
        <u-tabs-item name="2" active>标题二</u-tabs-item>
        <u-tabs-item name="3" disabled>标题三</u-tabs-item>
      </u-tabs-head>
      <u-tabs-body>
        <u-tabs-pane name="1">内容1</u-tabs-pane>
        <u-tabs-pane name="2">内容2</u-tabs-pane>
        <u-tabs-pane name="3">内容3</u-tabs-pane>
      </u-tabs-body>
    </u-tabs>    
  </div>
</template>
<script>
import UTabs from '../../../src/tabs/tabs'
import UTabsHead from '../../../src/tabs/tabs-head'
import UTabsBody from '../../../src/tabs/tabs-body'
import UTabsItem from '../../../src/tabs/tabs-item'
import UTabsPane from '../../../src/tabs/tabs-pane'

export default {
  components: { UTabs, UTabsHead, UTabsBody, UTabsItem, UTabsPane },
  data() {
    return {
      selected: '1'
    }
  }
}
</script>