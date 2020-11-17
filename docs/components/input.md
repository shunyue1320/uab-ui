---
title: Input 输入框
---
# Input 输入框

<ClientOnly>
<inputs />
</ClientOnly>

<br>

#### 示例代码

```vue
<template>
  <h4>输入值：{{value}}</h4>
  <u-input v-model="value" value="默认内容"></u-input>
  <u-input v-model="value" placeholder="请输入内容"></u-input>
  <u-input disabled value="禁用状态"></u-input>
  <h4>错误提示：</h4>
  <div class="error">
    <u-input v-model="value" :error="errorMessage"></u-input>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:'默认内容'
    }
  },
  computed: {
    errorMessage() {
      if (this.value.length < 8) {
        return '不低于8个字'
      }
      return ''
    }
  }
}
</script>
```

# input
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|value| 设置默认内容 | String | / | /
|error| 错误信息 | String | / | / 
|disabled| 是否禁用状态 | Boolean |true, false|false
|readonly| 是否只读状态 | Boolean |true, false|false
|placeholder| 提示信息 | String | / | /