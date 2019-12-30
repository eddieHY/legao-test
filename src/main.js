import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css' // 样式初始化
import '@/styles/index.scss' // global css
import '@/assets/iconfont/iconfont.css' // 图标文件

import router from './router' // 动态权限路由
import '@/router/nprogress' // 进度条

import { createStore } from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false
const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
