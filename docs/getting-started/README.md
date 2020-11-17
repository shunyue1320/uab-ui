---
title:快速上手
---

# 快速上手

### 开始使用

**1. 组件引入**

```js
import { Button } from 'uab-ui'
import "uab-ui/dist/uab-ui.css"

export default {
  components: {
    'u-button': Button
  }
}
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
