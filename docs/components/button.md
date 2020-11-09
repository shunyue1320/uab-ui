---
title: Button 按钮
---
# Button 按钮

<ClientOnly>
<buttons/>
</ClientOnly>

#### 示例代码：

```vue
<h4>基本用法</h4>
<u-button>默认按钮</u-button>
<u-button class="bg-yellow">默认按钮</u-button>
<u-button class="bg-green">默认按钮</u-button>
<u-button class="bg-cyan">默认按钮</u-button>
<u-button class="bg-red">默认按钮</u-button>

<h4>图标按钮</h4>
<u-button icon="favorite-filling" class="mr">图标按钮</u-button>
<u-button icon="comment-filling" class="bg-yellow mr">图标按钮</u-button>
<u-button icon="check-item-filling" class="bg-green mr">图标按钮</u-button>
<u-button icon="folder-filling" class="bg-cyan mr">图标按钮</u-button>
<u-button icon="warning-filling" class="bg-red">图标按钮</u-button>

<h4>按钮组</h4>
<u-button-group>
  <u-button icon="favorite-filling">按钮组</u-button>
  <u-button icon="comment-filling" class="bg-yellow">按钮组</u-button>
  <u-button icon="check-item-filling" class="bg-green">按钮组</u-button>
  <u-button icon="folder-filling" class="bg-cyan">按钮组</u-button>
  <u-button icon="warning-filling" class="bg-red">按钮组</u-button>
</u-button-group>

<h4>特殊按钮</h4>
<u-button icon="loading" class="bg-cyan mr" loading>旋转按钮</u-button>
<u-button icon="dynamic-filling" class="bg-gray" iconPosition="right" loading>旋转按钮</u-button>
```

### button
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 来源阿里图标 |    String | [阿里矢量图标](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=22664) | /
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
