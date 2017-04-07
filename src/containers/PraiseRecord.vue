<template>
  <div>
    <x-header class="l-header">我的好评记录</x-header>
    <group >
      <cell v-for="item in list" :title="item.title" :inline-desc="item.subTime + item.status + item.money"  :link="item.url" key="{{item.id}}" is-link></cell>
    </group>
  </div>
</template>

<script>
  import { XHeader, Group, Cell } from 'vux'
  export default {
    data () {
      return {
        list: [{
          id: 1,
          title: '淘宝订单号:XXXX',
          subTime: '提交时间: 2017-03-04 12:22',
          status: '审核状态：审核通过',
          money: '红包发放状态：已发放',
          url: '/'
        }, {
          id: 2,
          title: '淘宝订单号:XXXX',
          subTime: '提交时间: 2017-03-04 12:22',
          status: '审核状态：审核通过',
          money: '红包发放状态：已发放',
          url: {
            path: '/',
            replace: false
          }
        }]
      }
    },
    components: {
      XHeader,
      Group,
      Cell
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
</style>
