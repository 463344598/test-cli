import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
// import End from '@/components/End'
import End from '@/components/End'
import Content from '@/components/Content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },{
      path:'/content',
      name:'Con',
      component:Content
    },
    {
        path:'/end',
        name:'End',
        component:End
    }
  ]
})
