<template>
  <div style="padding-top: 16px;">
    <u-layout style="overflow:hidden;">
      <u-sider class="border-left border-y" style="width: 10rem;">
        sider内容
      </u-sider>
      <u-layout>
        <u-header class="border" style="height: 2rem;">
          header内容
        </u-header>
        <u-content class="border-x" style="height: 6rem;">
          content内容
        </u-content>
        <u-footer class="border" style="height: 2rem;">
          footer内容
        </u-footer>
      </u-layout>
    </u-layout>
  </div>
</template>

<script>
import ULayout from '../../../src/layout/layout'
import UHeader from '../../../src/layout/header'
import UFooter from '../../../src/layout/footer'
import UContent from '../../../src/layout/content'
import USider from '../../../src/layout/sider'

export default {
  components: { ULayout, UHeader, UFooter, UContent, USider },
}
</script>
