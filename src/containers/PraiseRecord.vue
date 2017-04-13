<template>
  <div>
    <x-header class="l-header">我的好评记录</x-header>
   <!--  <group >
     <cell v-for="item in list" :title="item.title" :inline-desc="item.subTime + item.status + item.money"  :link="item.url" key="{{item.id}}" is-link></cell>
   </group> -->
    <div class="item">
      <h3 class="title">淘宝订单号:XXXX</h3>
      <p class="desc">
        <span>提交时间: </span>
        <span>2017-03-04 12:22</span>
      </p>
      <p class="desc">
        <span>
          <span>审核状态</span>
          <span>审核通过</span>
        </span>
        <span>
          <span>红包发放状态</span>
          <span>已发放</span>
        </span>
      </p>
    </div>
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

  .item{
    padding: 10px 15px;
    background: #fff;
    .title{
      font-weight: 400
    }
    .desc{
      font-size: 14px;
      color: #666;
      text-indent: 1em;
      &:last-child{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
</style>
