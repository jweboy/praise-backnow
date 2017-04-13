<template>
  <div class="main">
    <x-header>活动规则 </x-header>
    <Swiper :list="list" auto loop></Swiper>
    <div class="desc">
      <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
    </div>
    <div class="submit">
      <x-button type="primary" class="submit-btn">立即参加</x-button>
    </div>
  </div>
</template>

<script>
  import {
    Swiper,
    XButton,
    XHeader
  } from 'vux'
  export default {
    data () {
      return {
        list: [{
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }, {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }, {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }]
      }
    },
    components: {
      Swiper,
      XButton,
      XHeader
    }
  }
</script>

<style scoped lang="less">
  .desc{
    padding: 10px
  }
  .submit{
    position: fixed;
    bottom: 20%;
    width: 100vw;
    .submit-btn{
      width: 80%
    }
  }
</style>
