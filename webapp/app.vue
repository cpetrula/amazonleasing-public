<template>
<!-- <v-app>
	<v-main>
	<router-view></router-view>
	</v-main>
	</v-app> -->
  <div>
    <site-header></site-header>
    <router-view></router-view>
	<site-footer></site-footer>
  </div> 

</template>
<script>
  import siteHeader from '/components/site-header.vue'
  import siteFooter from '/components/site-footer.vue'
  export default {
    components : {siteHeader,siteFooter}
  }
</script>
<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>