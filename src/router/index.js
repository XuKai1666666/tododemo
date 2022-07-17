
//npm install vue-router@4
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
 
//路由的配置属组
//paht：路由路劲 必须以/开头 必填
//component：对应的路由组件 必填
//name：路由的名字
const routes = [
  {
    path: '/',
    name: 'Home',
    //按需引入
    //如果没有访问/about 就不会加载这个组件 节约性能
    component: () => import( '../views/Home.vue')
  },

]
 
//创建路由对象
const router = createRouter({
    //createWebHashHistory hash模式路径前面会多一个#号
  history: createWebHistory(process.env.BASE_URL),
  routes
})
 
export default router