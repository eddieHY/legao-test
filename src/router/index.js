import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = () => import('../views/layout')
const NotFound = () => import('../views/404') // 404
const ChannelsInfo = () => import('../views/ChannelsInfo')
const ColumnsInfo = () => import('../views/ColumnsInfo')
const PagesInfo = () => import('../views/PagesInfo')

export const adminRouterMap = [
  { path: '/404',
    component: NotFound,
    hidden: true 
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    hidden: true
  },
  {
    path: '/channelsInfo',
    name: 'channels-info',
    component: ChannelsInfo
  },
  {
    path: '/columnsInfo',
    name: 'columns-info',
    component: ColumnsInfo
  },
  {
    path: '/pagesInfo',
    name: 'pages-info',
    component: PagesInfo
  }
]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: adminRouterMap
})

export default router