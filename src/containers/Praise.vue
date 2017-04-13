<template>
  <div class="p-praise">
    <x-header :left-options="{showBack: false}">好评有礼</x-header>
    <Swiper :list="list" auto loop ></Swiper>
    <div class="banner">
      <router-link to="/activityrule">
      <x-button type="primary" mini class="rule-btn">活动规则</x-button>
      </router-link>
    </div>
    <p class="step">step1</p>
    <group>
      <x-input title="淘宝订单号" type="text" placeholder="请输入淘宝订单号"></x-input>
    </group>
    <p class="step" style="margin-top: 20px">step2</p>
    <grid :rows="3">
      <grid-item v-for="item in list1" :key="item.id" style="text-align:center">
        <img :src="item.img" class="item-img">
        <x-button type="primary" mini>
          <!-- <x-icon type="ios-plus-empty" class="item-icon"></x-icon> -->
          +&nbsp;{{item.text}}
        </x-button>
      </grid-item>
    </grid>
    <div class="submit">
      <x-button type="primary" @click.native="showMsg" class="submit-btn">立即提交,好评有礼</x-button>
      <router-link to="/praiserecord">
        <p style="margin-top: 10px">我的好评记录</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Swiper,
    Grid,
    GridItem,
    AlertPlugin,
    XHeader,
    Group,
    XInput,
    XButton
  } from 'vux'

  Vue.use(AlertPlugin)

  // let router = global.router

  export default {
    data () {
      return {
        list: [{
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }, {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }, {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }],
        list1: [{
          id: 1,
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
          text: '好评截图'
        }, {
          id: 2,
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
          text: '买家秀1'
        }, {
          id: 3,
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
          text: '买家秀2'
        }]
      }
    },
    methods: {
      showMsg () {
        this.$vux.alert.show({
          title: '提示',
          content: '提交成功，审核专员审核通过后，系统会自动发送红包至您的微信。',
          onShow () {
            console.log('弹窗正常显示!')
          },
          onHide () {
            // console.log(global.router)
            global.router.push('/praiserecord')
          }
        })
      }
    },
    components: {
      Swiper,
      XHeader,
      XInput,
      Group,
      Grid,
      GridItem,
      XButton
    }
  }
</script>

<style lang="less">
    .p-praise{
      .step{
        padding:5px;
        background: #fff;
      }
      .item-img{
        width: 100%
      }
      .submit{
        margin:10px;
        text-align:center;
        position: fixed;
        width: 100vw;
        bottom: 0;
      }
      .banner{
        position: absolute;
        top: 185px;
        right:0;
        overflow: hidden;
      }
      .rule-btn{
        float: right;
      }
      .item-icon {
        display: inline-block;
        fill: #fff;
      }
      .submit-btn{
        width: 60%;
        font-size: 16px;
        letter-spacing: 2px
      }
    }
</style>
