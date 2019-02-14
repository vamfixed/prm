import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Items from '@/components/Items'
import Purchase from '@/components/Purchase'
import Sales from '@/components/Sales'
import Sorted from '@/components/Sorted'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    }
    ,
    {
      path: '/sales',
      name: 'Sales',
      component: Sales
    }
    ,
    {
      path: '/sorted',
      name: 'Sorted',
      component: Sorted
    }
  ]
})
