<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'UTabsBody',
    inject: ['eventBus'],
    created(){
    }
  }
</script>
