---
title: Grid 栅格
---
# Grid 栅格

### 24网格

<ClientOnly>
<grid-1></grid-1>
</ClientOnly>

#### 示例代码：
```vue
<u-row v-for="rowIndex in [4, 3, 2, 1]" class="demoRow">
  <u-col v-for="colIndex in 24/(rowIndex * 2)" :key="colIndex" span="8">
    <div class="demoCol">{{ rowIndex * 2 }}</div>
  </u-col>
</u-row>
```


<ClientOnly>
<grid-2></grid-2>
</ClientOnly>

#### 示例代码：
```vue
<u-row v-for="rowIndex in [4, 3]" class="demoRow" gutter="10">
  <u-col v-for="colIndex in 24/(rowIndex * 2)" :key="colIndex" span="8">
    <div class="demoCol">{{ rowIndex * 2 }}</div>
  </u-col>
</u-row>
```


<ClientOnly>
<grid-3></grid-3>
</ClientOnly>

#### 示例代码：
```vue
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
```

### row 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|align|对齐方式|String|left、center、right|left
|gutter| 间距 | String、Number |/|0

### col
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|span| 栅格占据的列数 | String、Number    | [ 1, 24 ] | /
|offset|栅格左侧的间隔格数| String、Number| [ 1, 24 ] | /