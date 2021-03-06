<p align="center">
<a href='https://github.com/shunyue1320/uab-ui'><img src='https://github.com/shunyue1320/uab-ui/blob/main/docs/.vuepress/public/uab.png?raw=true' height='100' alt='uab-ui Logo'></a>
<p>
<div align="center">
  <h3>一款帮助开放者成长的UI库</h3>
  
  An Front-end technology sharing and exchange.

  [![](https://img.shields.io/badge/Juejin-掘金-007FFF)](https://juejin.im/user/3702810894152983)
  [![](https://img.shields.io/badge/CSDN-博客-E33E33)](https://blog.csdn.net/qq_41614928)
  [![](https://img.shields.io/badge/Zhihu-知乎-0084FF)](https://www.zhihu.com/people/shun-yue-45)
  [![](https://img.shields.io/badge/bilili-哔哩哔哩-FF69b4)](https://space.bilibili.com/475498258)
  [![](https://img.shields.io/badge/公众号-爱看编程-7ED957)](#爱看编程)
</div>


## Installation
npm:
```
npm install uab-ui
```
yarn:
```
yarn add uab-ui
```

## Use
**1. 组件引入**

```vue
<template>
  <div>
    <u-button icon="favorite-filling">默认按钮</u-button>
  </div>
</template>

<script>
import { Button } from 'uab-ui'
import 'uab-ui/dist/uab-ui.css'

export default {
  components: {
    'u-button': Button
  }
}
</script>
```

**2. 全局全部引入**

```js
import Vue from "vue";
import app from "./app.vue";
import uab from "uab-ui";
import "uab-ui/dist/uab-ui.css"

Vue.use(uab)

new Vue({
  render: h => h(app)
}).$mount("#app");
```

**3. 全局部分引入**

```js
import Vue from "vue";
import app from "./app.vue";
import { Button } from "uab-ui";
import "uab-ui/dist/uab-ui.css"

Vue.component(Button.name, Button)

new Vue({
  render: h => h(app)
}).$mount("#app");
```


## Documentation
The uab-ui docs are located at **[官方文档](https://shunyue1320.github.io/uab-ui/)**:
- [Introduction](https://shunyue1320.github.io/uab-ui/introduce/)
- [started](https://shunyue1320.github.io/uab-ui/getting-started/)
- [icon](https://shunyue1320.github.io/uab-ui/components/icon.html)
