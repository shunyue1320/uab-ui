---
title: Tabs 标签页
---
# Tabs 标签页

#### 预览

<ClientOnly>
<tabs-1></tabs-1>
</ClientOnly>

#### 示例代码

```vue
<template>
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
</template>
<script>
export default {
  data() {
    return {
      selected: '1'
    }
  },
}
</script>
```

#### 预览

<ClientOnly>
<tabs-2></tabs-2>
</ClientOnly>

```vue
<u-tabs :selected="selected">
  <u-tabs-head>
    <u-tabs-item name="1">标题一</u-tabs-item>
    <u-tabs-item name="2" active>标题二</u-tabs-item>
    <u-tabs-item name="3">标题三</u-tabs-item>
  </u-tabs-head>
  <u-tabs-body>
    <u-tabs-pane name="1">内容1</u-tabs-pane>
    <u-tabs-pane name="2">内容2</u-tabs-pane>
    <u-tabs-pane name="3">内容3</u-tabs-pane>
  </u-tabs-body>
</u-tabs>
```


### Tabs

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 当前选中 | String |name| /

### TabsHead
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|modal| 设置tabs模式 | String | fill、underline | underline 

### TabsItem 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String | / |/ 
|disabled|设置是否禁用|Boolean|true、false|false

### BodyPane
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String | / | / 