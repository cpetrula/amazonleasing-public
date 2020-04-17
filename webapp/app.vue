<template>
  <div>
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>
<script>
  import pageHeader from '/components/site-header.vue'
  export default {
    components : {pageHeader}
  }
</script>
<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>