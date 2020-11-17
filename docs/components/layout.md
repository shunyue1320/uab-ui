---
title: Layout 布局
---
# Layout 布局

#### 上中下布局

<ClientOnly>
<layout-1 />
</ClientOnly>

#### 示例代码

```vue
<u-layout>
  <u-header class="border" style="height: 2rem;">
    header内容
  </u-header>
  <u-content class="border-x" style="height: 4rem;">
    content内容
  </u-content>
  <u-footer class="border" style="height: 2rem;">
    footer内容
  </u-footer>
</u-layout>
```
#### 上左右下布局

<ClientOnly>
<layout-2 />
</ClientOnly>

#### 示例代码

```vue
<u-layout>
  <u-header class="border" style="height: 2rem;">
    header内容
  </u-header>
  <u-layout style="overflow:hidden;">
    <u-sider class="border-left" style="width: 10rem;">
      sider内容
    </u-sider>
    <u-content class="border-x" style="height: 6rem;">
      content内容
    </u-content>
  </u-layout>
  <u-footer class="border" style="height: 2rem;">
    footer内容
  </u-footer>
</u-layout>
```
#### 左右布局

<ClientOnly>
<layout-3 />
</ClientOnly>

#### 示例代码

```vue
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
```