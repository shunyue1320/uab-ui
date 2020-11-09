<template>
  <div style="padding-top: 16px;">
    <u-popover position="left" trigger="hover">
      <u-button icon="favorite-filling" class="bg-yellow">左边弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover trigger="hover">
      <u-button class="bg-green">上方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="bottom" trigger="hover">
      <u-button class="bg-cyan">下方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="right" trigger="hover">
      <u-button class="bg-red">右边弹出</u-button>
      <template slot="content">
        弹出内容
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