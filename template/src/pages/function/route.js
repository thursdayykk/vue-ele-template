const App = () => import('./app/index.vue' /* webpackChunkName: "user_app" */)
// clock
const Index = () => import('./views/index'/* webpackChunkName:"clock" */)
const Scroll = () => import('./views/scroll'/* webpackChunkName:"scroll" */)
const Martix = () => import('./views/martix'/* webpackChunkName:"scroll" */)
const ClipImg = () => import('./views/clipImg'/* webpackChunkName:"scroll" */)
const Calendar = () => import('./views/calendar'/* webpackChunkName:"scroll" */)
export default {
  component: App,
  redirect: '/notFound',
  children: [{
    path: '/wordPic',
    name: 'wordPic',
    component: Index
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: Scroll
  }, {
    path: '/martix',
    name: 'martix',
    component: Martix
  }, {
    path: '/clipImg',
    name: 'clipImg ',
    component: ClipImg
  },
  {
    path: '/calendar',
    name: 'calendar ',
    component: Calendar
  }]
}
