import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Praise from '@/containers/Praise'
import PraiseRecord from '@/containers/PraiseRecord'
import ActivityRule from '@/containers/ActivityRule'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Praise',
      component: Praise
    },
    {
      path: '/praiserecord',
      name: 'PraiseRecord',
      component: PraiseRecord
    },
    {
      path: '/activityrule',
      name: 'Activityrule',
      component: ActivityRule
    }
  ]
})
global.router = router

export default router
