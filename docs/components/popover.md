---
title: Popover 弹出框
---
# Popover 弹出框

### click 触发预览

<ClientOnly>
<popover-1></popover-1>
</ClientOnly>

#### 示例代码

```vue
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
```

### hover 触发预览

<ClientOnly>
<popover-2></popover-2>
</ClientOnly>

#### 示例代码

```vue
<u-popover position="left" trigger="hover">
  <u-button>左边弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover trigger="hover">
  <u-button>上方弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="bottom" trigger="hover">
  <u-button>下方弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="right" trigger="hover">
  <u-button>右边弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
```

### popover
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|position| 设置弹出框相对触发区域的位置 | String |left、right、top、bottom| top
|trigger| 设置触发模式 | String |click、hover|click