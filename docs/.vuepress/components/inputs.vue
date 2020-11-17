<template>
  <div>
    <h4>输入值：{{value}}</h4>
    <u-input v-model="value" value="默认内容"></u-input>
    <u-input v-model="value" placeholder="请输入内容"></u-input>
    <u-input disabled value="禁用状态"></u-input>
    <h4>错误提示：</h4>
    <div class="error">
      <u-input v-model="value" :error="errorMessage"></u-input>
    </div>
  </div>
</template>
<script>
import UInput from '../../../src/input/input'
export default {
  components:{ UInput },
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
