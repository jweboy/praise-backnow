<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import 'assets/less/main.less';
</style>
