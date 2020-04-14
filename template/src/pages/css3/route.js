const App = () => import('./app/index.vue' /* webpackChunkName: "user_app" */)
// clock
const Index = () => import('./views/index'/* webpackChunkName:"clock" */)

export default {
  component: App,
  redirect: '/notFound',
  children: [{
    path: '/css3Index',
    name: 'css3Index',
    component: Index
  }]
}
