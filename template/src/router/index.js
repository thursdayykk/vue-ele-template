import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * require.context 实现前端工程自动化
 * 接收三个参数
 *    （1）string 文件读取路径
 *    （2）boolean 是否遍历文件子目录，默认false
 *    （3）regExp 匹配文件的规则
 * 执行后，返回一个函数，函数有三个属性
 *    （1）resolve{ Function }
 *            参数request：是文件读取路径下匹配文件的相对路径
 *            返回：这个匹配文件相对整个工程的相对路径
 *    （2）keys {Function }
 *            返回：匹配成功模块的名字组成的数组
 *    （3）id {String}
 *          执行环境的id，
 */
// console.log(require.context('../', true, /\.\/pages\/([^/]+)\/route.js$/).keys());

const files = require.context('../', true, /\.\/pages\/([^/]+)\/route.js$/)

let views = []
files.keys().forEach(key => {
  const routes = files(key).default
  routes.path = routes.path || `/${key.split('/')[2]}`
  views.push(routes)
})

const router = new Router({
  mode: 'history',
  routes: [...views, { path: '*', redirect: { path: '/notFound' } }]
})

window.$router = router

console.log(router.options)
export default router
