<template>
  <div style="padding-top: 16px;">
    <u-popover>
      <u-button icon="favorite-filling" class="bg-yellow">上方弹出</u-button>
      <template slot="content">
        <a href="https://github.com/shunyue1320/uab-ui">GitHub</a>
      </template>
    </u-popover>
    <u-popover position="bottom">
      <u-button class="bg-green">下方弹出</u-button>
      <template slot="content">
        <a href="https://github.com/shunyue1320/uab-ui">GitHub</a>
      </template>
    </u-popover>
    <u-popover position="left">
      <u-button class="bg-cyan">左边弹出</u-button>
      <template slot="content">
        <a href="https://github.com/shunyue1320/uab-ui">GitHub</a>
      </template>
    </u-popover>
    <u-popover position="right">
      <u-button class="bg-red">右边弹出</u-button>
      <template slot="content">
        <a href="https://github.com/shunyue1320/uab-ui">GitHub</a>
      </template>
    </u-popover>
  </div>
</template>

<script>
import UButton from '../../../src/button/button'
import UPopover from '../../../src/popover/popover'

export default {
  components: { UButton, UPopover },
}
</script>
<style>
.ice-popover{
  z-index: 30;
}
</style>