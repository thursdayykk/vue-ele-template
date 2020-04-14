const App = () => import('./app/index.vue' /* webpackChunkName: "user_app" */)
// clock
const Clock = () => import('./views/clock'/* webpackChunkName:"clock" */)
const Fanpai = () => import('./views/fanpai'/* webpackChunkName:"clock" */)

export default {
  component: App,
  redirect: '/notFound',
  children: [{
    path: '/clock',
    name: 'clock',
    component: Clock
  }, {
    path: '/fanpai',
    name: 'fanpai',
    component: Fanpai
  }]
}
