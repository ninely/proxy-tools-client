import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/hostsMgr',
      name: 'hosts-mgr',
      component: require('@/pages/hostsMgr').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
